const fs = require('fs');
let c = fs.readFileSync('src/pages/Dashboard.tsx', 'utf8');

c = c.replace(/import React from 'react';/, 'import React from "react";\nimport { useAuth } from "../context/AuthContext";\nimport { useNavigate, Link } from "react-router-dom";');

c = c.replace(/export default function Dashboard\(\) \{/, 'export default function Dashboard() {\n  const { user, logout } = useAuth();\n  const navigate = useNavigate();\n  const handleLogout = () => { logout(); navigate("/"); };');

c = c.replace(/<p className="text-on-primary text-body-sm font-semibold truncate">Manager<\/p>/, '<p className="text-on-primary text-body-sm font-semibold truncate">{user?.name || "Manager"}</p>');

c = c.replace(/<button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">settings<\/span><\/button>/, '<button onClick={handleLogout} className="hover:text-error transition-colors flex items-center gap-1"><span className="material-symbols-outlined">logout</span> <span className="text-sm">Sign Out</span></button>');

// Replace sidebar nav links
const paths = ['dashboard', 'voyage-planner', 'freight-forecast', 'vessel-port', 'contract-strategy', 'risk-center', 'scenario-simulator', 'reports'];
const routes = {
  'dashboard': '/dashboard',
  'voyage-planner': '/planner',
  'vessel-port': '/intelligence',
  'contract-strategy': '/contract',
  'freight-forecast': '#',
  'risk-center': '#',
  'scenario-simulator': '#',
  'reports': '#'
};

paths.forEach(p => {
  const regex = new RegExp(`<a([^>]*)data-path="${p}"([^>]*)>([\\s\\S]*?)</a>`, 'g');
  c = c.replace(regex, (match, before, after, inner) => {
    return `<Link ${before} to="${routes[p]}" ${after}>${inner}</Link>`;
  });
});

fs.writeFileSync('src/pages/Dashboard.tsx', c);
