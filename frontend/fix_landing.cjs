const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');

c = c.replace(/import React from 'react';/, 'import React from "react";\nimport { Link } from "react-router-dom";');

// Fix "Login" in header
c = c.replace(/<a([^>]*)data-path="login"([^>]*)>([\s\S]*?)<\/a>/g, '<Link $1 to="/login" $2>Sign In</Link>');

// Fix "Schedule a Consultation" button to Get Started Link safely (without replacing closing tags of other things)
c = c.replace(/<button([^>]*)>\s*Schedule a Consultation\s*<\/button>/g, '<Link $1 to="/login">Get Started</Link>');
c = c.replace(/class=/g, 'className=');

fs.writeFileSync('src/pages/Landing.tsx', c);
