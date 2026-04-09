# ParkerJoe V2 - Dark Editorial Luxury

A luxury high-end boutique boys clothing brand website with a moody, editorial aesthetic.

## Design Philosophy

- **Color Palette**: Forest Green, Antique Gold, Dark Charcoal
- **Typography**: Playfair Display (serif) + Montserrat (sans-serif)
- **Aesthetic**: Dark, moody, editorial with sophisticated animations

## Features

- Editorial grid layout with image reveals
- GSAP scroll animations
- Responsive design for all devices
- Hover effects with gold accents
- Newsletter subscription
- Product showcases
- Loyalty program tiers
- Gift guide section

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- GSAP + ScrollTrigger (animations)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Vercel
1. Connect your GitHub repo to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Update `vite.config.ts` base: `/repo-name/`
2. Build: `npm run build`
3. Deploy `dist` folder

## Project Structure

```
src/
├── sections/        # Page sections (Hero, Collections, etc.)
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## License

MIT
