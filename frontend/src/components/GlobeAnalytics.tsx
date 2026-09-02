import React, { useEffect, useRef, useCallback, useState } from "react"
import createGlobe from "cobe"

interface InteractiveMarker {
  id: string
  location: [number, number]
  name: string
  users: number
}

interface GlobeInteractiveProps {
  markers?: InteractiveMarker[]
  className?: string
  speed?: number
}

const freightIqMarkers: InteractiveMarker[] = [
  { id: "ind", location: [20.5937, 78.9629], name: "India Hub", users: 12500 },
  { id: "aus", location: [-25.2744, 133.7751], name: "Australia", users: 8400 },
  { id: "rus", location: [61.5240, 105.3188], name: "Russia", users: 5100 },
  { id: "usa", location: [37.0902, -95.7129], name: "USA", users: 9200 },
  { id: "moz", location: [-18.6657, 35.5296], name: "Mozambique", users: 3400 },
  { id: "indo", location: [-0.7893, 113.9213], name: "Indonesia", users: 6700 },
]

export default function GlobeAnalytics({
  markers = freightIqMarkers,
  className = "",
  speed = 0.0015,
}: GlobeInteractiveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number = 0
    let phi = 4.5 // Start facing India/Asia

    function init() {
      const width = canvas.offsetWidth
      if (width === 0) return
      if (globe) return // already initialized

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2, 
        height: width * 2,
        phi: 4.5, 
        theta: 0.15, 
        dark: 0, 
        diffuse: 1.2,
        mapSamples: 16000, 
        mapBrightness: 6,
        baseColor: [0.1, 0.15, 0.25], // Dark navy landmasses to contrast with white card
        markerColor: [0.15, 0.15, 0.2], // FreightIQ green
        glowColor: [0.95, 0.95, 0.95],
        markerElevation: 0.01,
        markers: markers.map((m) => ({ location: m.location, size: 0.04, id: m.id })),
        arcs: [
          { from: [-25.2744, 133.7751], to: [20.5937, 78.9629] }, // Aus -> Ind
          { from: [-0.7893, 113.9213], to: [20.5937, 78.9629] },  // Indo -> Ind
          { from: [-18.6657, 35.5296], to: [20.5937, 78.9629] },  // Moz -> Ind
          { from: [37.0902, -95.7129], to: [20.5937, 78.9629] },  // USA -> Ind
          { from: [61.5240, 105.3188], to: [20.5937, 78.9629] },  // Rus -> Ind
        ], 
        arcColor: [0.3, 0.3, 0.35],
        arcWidth: 1.5, 
        arcHeight: 0.15, 
        // @ts-ignore
        opacity: 0.9,
        onRender: (state: any) => {
           // We override the default animate loop in the original code to use Cobe's native onRender,
           // this is much more reliable and ties directly into Cobe's internal WebGL loop.
           if (!isPausedRef.current) phi += speed
           state.phi = phi + phiOffsetRef.current + dragOffset.current.phi
           state.theta = 0.15 + thetaOffsetRef.current + dragOffset.current.theta
           state.width = width * 2
           state.height = width * 2
        }
      } as any)

      setTimeout(() => canvas && (canvas.style.opacity = "1"), 50)
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, speed])

  return (
    <div className={`relative aspect-square select-none flex items-center justify-center ${className}`}>
      <style>{`
        @keyframes fade-slide-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 0.8; transform: translateY(0); }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%", height: "100%", cursor: "grab", opacity: 0,
          transition: "opacity 1.2s ease", borderRadius: "50%", touchAction: "none",
        }}
      />
      {markers.map((m) => (
        <div
          key={m.id}
          onClick={() => setExpanded(expanded === m.id ? null : m.id)}
          style={{
            position: "absolute",
            // @ts-ignore CSS Anchor Positioning
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(top)",
            left: "anchor(center)",
            translate: "-50% 0",
            marginBottom: 6,
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            padding: expanded === m.id ? "0.4rem 0.6rem" : "0.3rem 0.5rem",
            background: "rgba(16, 24, 40, 0.95)",
            color: "#fff",
            borderRadius: 6,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            pointerEvents: "auto",
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
            transition: "opacity 0.4s, filter 0.4s, transform 0.2s, padding 0.2s",
            zoom: expanded === m.id ? 1.05 : 1,
            zIndex: 30
          }}
        >
          <span style={{
            fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", fontWeight: 700,
            letterSpacing: "0.02em", color: "#fff",
          }}>{m.name}</span>
          {expanded === m.id && (
            <span style={{
              fontFamily: "system-ui, sans-serif", fontSize: "0.6rem",
              opacity: 0.9, marginTop: "0.2rem", color: "#9CA3AF", fontWeight: 600,
              animation: "fade-slide-in 0.2s ease-out",
            }}>
              {m.users.toLocaleString()} TEUs
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
