const fs = require('fs');
const path = require('path');
const folders = ['freightiq_maritime_intelligence_landing_page', 'maritime_freight_intelligence', 'voyage_scenario_planner', 'vessel_port_intelligence', 'contract_strategy_optimizer'];
const pages = ['Landing', 'Dashboard', 'VoyagePlanner', 'VesselPortIntelligence', 'ContractStrategy'];

folders.forEach((folder, idx) => {
  const htmlPath = path.join('..', 'stitch_freightiq_maritime_intelligence_platform', folder, 'code.html');
  if (!fs.existsSync(htmlPath)) return;
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return;
  let bodyContent = bodyMatch[1];
  
  // Remove scripts
  bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Convert class to className
  bodyContent = bodyContent.replace(/\bclass=/g, 'className=');
  // Convert for to htmlFor
  bodyContent = bodyContent.replace(/\bfor=/g, 'htmlFor=');
  // Convert inline styles slightly (rudimentary)
  bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, p1) => {
    return 'style={{' + p1.split(';').filter(Boolean).map(s => {
      const parts = s.split(':');
      if (parts.length < 2) return '';
      const k = parts[0].trim();
      const v = parts.slice(1).join(':').trim();
      const key = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `${key}: '${v.replace(/'/g, "\\'")}'`;
    }).join(', ') + '}}';
  });
  // Fix self-closing tags
  ['img', 'input', 'br', 'hr', 'meta', 'link'].forEach(tag => {
    const regex = new RegExp('<' + tag + '([^>]*?)(?<!/)>', 'g');
    bodyContent = bodyContent.replace(regex, '<' + tag + '$1 />');
  });
  // Fix SVG fill rules and attributes
  bodyContent = bodyContent.replace(/fill-rule/g, 'fillRule');
  bodyContent = bodyContent.replace(/clip-rule/g, 'clipRule');
  bodyContent = bodyContent.replace(/stroke-width/g, 'strokeWidth');
  bodyContent = bodyContent.replace(/stroke-linecap/g, 'strokeLinecap');
  bodyContent = bodyContent.replace(/stroke-linejoin/g, 'strokeLinejoin');
  bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, ''); // remove comments
  
  const pageName = pages[idx];
  const component = `import React from 'react';\n\nexport default function ${pageName}() {\n  return (\n    <>\n      ${bodyContent}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join('src', 'pages', pageName + '.tsx'), component);
});
