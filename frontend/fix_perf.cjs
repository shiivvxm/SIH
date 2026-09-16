const fs = require('fs');
const file = 'src/pages/management/Performance.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace("import { Activity, Anchor, Ship, Clock } from 'lucide-react';", "import { Activity, Anchor, Ship, Clock, TrendingUp } from 'lucide-react';");
fs.writeFileSync(file, content);
console.log('Fixed missing import');
