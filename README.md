# Minimalist Portfolio

A high-performance personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by the clean, content-first design philosophy of andrewng.org.

## Features

- ⚡ **Lightning Fast**: Optimized for sub-second page loads
- 🎨 **Minimalist Design**: Content-first approach with generous whitespace
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- 🎯 **Type Safe**: Full TypeScript coverage

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage (to be created)
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Site header with navigation
│   ├── Footer.tsx          # Site footer
│   └── SectionLayout.tsx   # Reusable section wrapper
├── lib/
│   └── data.ts             # Content and TypeScript interfaces
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── PLAN.md                 # Detailed project plan
```

## Customization

### Update Your Content

Edit `lib/data.ts` to customize:
- Profile information (name, title, bio)
- Work experience
- Education
- Publications
- Projects
- Skills
- Social links

### Modify Design System

Edit `tailwind.config.ts` to adjust:
- Color palette
- Typography scale
- Spacing system
- Max content width

### Add New Sections

1. Create a new component in `components/`
2. Import and use `SectionLayout` for consistency
3. Add data types to `lib/data.ts`
4. Include in homepage

## Performance

Target metrics (Lighthouse):
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

```bash
npm run build
# Deploy the .next folder and package.json
```

## License

MIT License - feel free to use this template for your own portfolio.

## Acknowledgments

Design inspired by [andrewng.org](https://www.andrewng.org/) - a masterclass in minimalist web design.
