const fs = require('fs');
let c = fs.readFileSync('src/pages/Landing.tsx', 'utf8');

if (!c.includes('import heroBg')) {
  c = c.replace(
    "import GlobeAnalytics from '../components/GlobeAnalytics';",
    "import GlobeAnalytics from '../components/GlobeAnalytics';\nimport heroBg from '../assets/hero-bg.jpg';"
  );
}

const oldHero = `<main className="relative w-full pt-16 pb-20 lg:pb-32 bg-gradient-to-b from-gray-50/50 to-white">`;
const newHero = `<main 
        className="relative w-full pt-16 pb-20 lg:pb-32 bg-white"
        style={{
          backgroundImage: \`url(\${heroBg})\`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]"></div>`;

c = c.replace(oldHero, newHero);

fs.writeFileSync('src/pages/Landing.tsx', c);
