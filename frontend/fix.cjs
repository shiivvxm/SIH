const fs = require('fs');
let c = fs.readFileSync('src/components/dashboards/ManagementDashboard.tsx', 'utf8');
c = c.replace(/\\`\\\${col.spend}%\\`/g, '`${col.spend}%`');
c = c.replace(/\\`\\\${col.save}%\\`/g, '`${col.save}%`');
fs.writeFileSync('src/components/dashboards/ManagementDashboard.tsx', c);
