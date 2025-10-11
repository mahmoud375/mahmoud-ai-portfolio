# Portfolio Project Plan - Minimalist High-Speed Architecture

## Design Philosophy
Inspired by **andrewng.org**, this portfolio prioritizes:
- **Content First**: Maximum readability with minimal distractions
- **Performance**: Sub-second page loads, optimized fonts, and efficient rendering
- **Simplicity**: Clean typography, generous whitespace, and focused design
- **Accessibility**: Semantic HTML, proper contrast, keyboard navigation

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: System font stack for instant rendering
- **Deployment**: Vercel (recommended)

---

## Phase 1: Setup & Configuration

### 1.1 Tailwind Configuration (`tailwind.config.ts`)
**Purpose**: Define the minimal design system
- **Colors**: 
  - `primary`: Deep blue for links and accents (#2563eb)
  - `muted`: Gray scale for secondary text
- **Typography**: System font stack (Inter fallback)
- **Spacing**: Custom max-width (800px) for optimal reading
- **Extend**: Focus states, subtle hover effects

### 1.2 Directory Structure
```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Tailwind imports
├── components/
│   ├── Header.tsx          # Site header with name/nav
│   ├── Footer.tsx          # Simple footer
│   ├── SectionLayout.tsx   # Reusable section wrapper
│   └── [feature components]
├── lib/
│   └── data.ts             # All content + TypeScript types
└── public/
    └── [assets]
```

---

## Phase 2: Data Structure & Content

### 2.1 TypeScript Interfaces (`lib/data.ts`)
Define strongly-typed data models:
- **`Profile`**: Name, title, bio, social links
- **`Experience`**: Job history with dates, company, role, description
- **`Education`**: Degrees with institution, year, details
- **`Publication`**: Research papers/articles with links
- **`Project`**: Portfolio projects with tech stack
- **`Skill`**: Technology categories

### 2.2 Content Strategy
- **Concise Descriptions**: 1-2 sentences maximum
- **Action-Oriented**: Focus on impact and outcomes
- **Scannable**: Use bullet points and clear headings
- **Links**: Direct, underlined links (no button clutter)

---

## Phase 3: Core Components

### 3.1 Layout Components

#### **`SectionLayout.tsx`**
**Purpose**: Consistent spacing and structure for content sections
- Props: `title` (optional), `children`, `className`
- Max-width container (800px)
- Vertical spacing (mb-16)
- Optional section heading with bottom border

#### **`Header.tsx`**
**Purpose**: Site navigation and branding
- Fixed/sticky header with site name
- Simple text-based navigation (no icons)
- Responsive: Mobile hamburger menu if needed
- Clean divider line at bottom

#### **`Footer.tsx`**
**Purpose**: Minimal footer with copyright
- Center-aligned text
- Copyright year (dynamic)
- Optional social links
- Subtle top border

### 3.2 Content Components (Phase 4 - Not in this delivery)
- `ExperienceItem.tsx`: Job card with timeline
- `ProjectCard.tsx`: Project showcase
- `EducationItem.tsx`: Degree information
- `PublicationItem.tsx`: Paper/article link
- `SkillsList.tsx`: Technology tags

---

## Phase 4: Pages & SEO (Phase 4 - Not in this delivery)

### 4.1 Homepage (`app/page.tsx`)
Structure:
1. **Hero**: Name, title, 2-line bio
2. **Experience**: Recent positions (3-5)
3. **Projects**: Featured work (3-4)
4. **Education**: Academic background
5. **Publications**: Recent papers/articles
6. **Skills**: Technology overview

### 4.2 SEO & Metadata (`app/layout.tsx`)
- **Meta Tags**: Title, description, OG tags
- **JSON-LD**: Structured data for Google
- **Viewport**: Responsive meta tag
- **Font Optimization**: Next.js font system
- **Favicon**: Simple, professional icon

---

## Phase 5: Performance Optimization (Future)

### 5.1 Core Web Vitals Targets
- **LCP**: < 1.5s (Largest Contentful Paint)
- **FID**: < 50ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### 5.2 Optimization Strategies
- Static generation for all pages
- Image optimization with Next.js Image
- Font subsetting (only needed characters)
- Minimal JavaScript (no heavy libraries)
- CSS purging (Tailwind built-in)

---

## Design System

### Color Palette
```css
primary: #2563eb      /* Links, CTAs */
text: #1f2937         /* Body text */
muted: #6b7280        /* Secondary text */
border: #e5e7eb       /* Dividers */
background: #ffffff   /* Page background */
```

### Typography Scale
- **Heading 1**: 2.5rem / 40px (Page title)
- **Heading 2**: 1.875rem / 30px (Section titles)
- **Heading 3**: 1.5rem / 24px (Subsections)
- **Body**: 1.125rem / 18px (Readable base)
- **Small**: 0.875rem / 14px (Meta info)

### Spacing System
- Section gap: 4rem (64px)
- Component gap: 1.5rem (24px)
- Max content width: 800px
- Page padding: 2rem (32px)

---

## Implementation Checklist

### Phase 1: Setup ✓ (This Delivery)
- [x] `tailwind.config.ts` with custom theme
- [x] Project structure planning

### Phase 2: Data ✓ (This Delivery)
- [x] `lib/data.ts` with TypeScript interfaces
- [x] Placeholder content for all sections

### Phase 3: Layout ✓ (This Delivery)
- [x] `components/SectionLayout.tsx`
- [x] `components/Header.tsx`
- [x] `components/Footer.tsx`
- [x] `app/layout.tsx` with metadata

### Phase 4: Content Components (Future)
- [ ] Experience, Project, Education components
- [ ] Homepage assembly
- [ ] Navigation setup

### Phase 5: Polish (Future)
- [ ] Responsive design testing
- [ ] Performance audit
- [ ] Accessibility testing (WCAG 2.1)
- [ ] SEO validation

---

## Key Decisions & Rationale

### Why No Component Library?
**Decision**: Raw Tailwind instead of shadcn/ui or Material UI
**Rationale**: andrewng.org uses minimal UI. Component libraries add unnecessary weight. Custom components give precise control.

### Why System Fonts?
**Decision**: `font-sans` (system stack) instead of Google Fonts
**Rationale**: Zero network request, instant rendering, native OS feel. Performance > custom branding.

### Why Static Data?
**Decision**: Hardcoded content in `lib/data.ts` instead of CMS
**Rationale**: Portfolio content changes infrequently. Static data ensures maximum speed and simplicity. Easy to edit for developers.

### Why No Animations?
**Decision**: Minimal hover states, no complex animations
**Rationale**: andrewng.org aesthetic is content-focused. Animations can hurt performance and distract from information.

---

## Future Enhancements (Post-MVP)

1. **Dark Mode**: System preference detection
2. **Blog**: MDX integration for articles
3. **Analytics**: Privacy-focused (Plausible/Fathom)
4. **RSS Feed**: For blog posts
5. **Print Styles**: Resume-friendly CSS
6. **Multi-language**: i18n support (if needed)

---

## Success Metrics

- **Lighthouse Score**: 100 across all categories
- **Page Weight**: < 100KB (uncompressed)
- **Load Time**: < 1s on 4G
- **Accessibility**: WCAG 2.1 AA compliant
- **Simplicity**: < 10 components total
