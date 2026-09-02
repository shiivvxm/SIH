const fs = require('fs');
let c = fs.readFileSync('src/components/GlobeAnalytics.tsx', 'utf8');

c = c.replace(/markerColor: \[0.08, 0.7, 0.4\]/g, 'markerColor: [0.15, 0.15, 0.2]'); 
c = c.replace(/arcColor: \[0.08, 0.7, 0.4\]/g, 'arcColor: [0.3, 0.3, 0.35]'); 
c = c.replace(/color: "#16B364"/g, 'color: "#9CA3AF"'); 

fs.writeFileSync('src/components/GlobeAnalytics.tsx', c);
