const fs = require('fs');
let c = fs.readFileSync('src/pages/VoyagePlanner.tsx', 'utf8');

c = c.replace(/import React from 'react';/, 'import React, { useState } from "react";\nimport { useNavigate } from "react-router-dom";\nimport { Loader2 } from "lucide-react";');

c = c.replace(/export default function VoyagePlanner\(\) \{/, 'export default function VoyagePlanner() {\n  const [loading, setLoading] = useState(false);\n  const navigate = useNavigate();\n  const handleGenerate = () => { setLoading(true); setTimeout(() => navigate("/forecast"), 2000); };');

c = c.replace(/<button className="relative[^>]*id="generateBtn"[^>]*>([\s\S]*?)<\/button>/, '<button onClick={handleGenerate} disabled={loading} className="relative overflow-hidden group bg-primary text-on-primary font-label-caps py-4 px-8 rounded-lg tracking-widest flex items-center gap-3 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-80" type="button"><span className="relative z-10 flex items-center gap-2">{loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span className="material-symbols-outlined text-[20px]">auto_awesome</span>}{loading ? "ANALYZING..." : "GENERATE AI RECOMMENDATION"}</span><div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div></button>');

fs.writeFileSync('src/pages/VoyagePlanner.tsx', c);
