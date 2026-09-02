const fs = require('fs');
const path = require('path');

const pagesToStrip = ['Dashboard.tsx', 'VoyagePlanner.tsx', 'VesselPortIntelligence.tsx', 'ContractStrategy.tsx'];

pagesToStrip.forEach(page => {
  const filePath = path.join('src', 'pages', page);
  let c = fs.readFileSync(filePath, 'utf8');

  // Extract everything inside <main ...> ... </main>
  const mainMatch = c.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    let content = mainMatch[1];
    
    // Replace broken Google usercontent background images with a subtle gradient
    content = content.replace(/style=\{\{backgroundImage:\s*'url\([^)]+\)'\}\}/g, 'style={{background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"}}');
    content = content.replace(/style=\{\{backgroundImage:\s*"url\([^)]+\)"\}\}/g, 'style={{background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"}}');

    // Replace other broken images
    content = content.replace(/<img[^>]*src=["']https:\/\/lh3\.googleusercontent\.com[^>]*>/gi, '');

    const newComponent = `import React from 'react';\n\nexport default function ${page.replace('.tsx', '')}() {\n  return (\n    <>\n      ${content}\n    </>\n  );\n}\n`;
    fs.writeFileSync(filePath, newComponent);
    console.log(`Stripped layout from ${page}`);
  }
});
