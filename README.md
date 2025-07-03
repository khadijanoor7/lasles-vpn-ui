# LaslesVPN Landing Page

A modern, responsive landing page for **LaslesVPN**—a fictional VPN service—built with Next.js, React, and Tailwind CSS.

## ✨ Features

- Clean, modern, and responsive design
- Animated sections using Framer Motion
- Hero, Features, Stats, Pricing, Global Network, Testimonials, Newsletter, and Footer sections
- Built with Next.js App Router and TypeScript
- Styled with Tailwind CSS and PostCSS
- Easily customizable and extendable

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Lucide React](https://lucide.dev/) (icons)
- [PostCSS](https://postcss.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm, npm, or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd laslesvpn-landing
pnpm install # or npm install or yarn install
```

### Development

Start the development server:

```bash
pnpm dev # or npm run dev or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build # or npm run build or yarn build
pnpm start # or npm run start or yarn start
```

## 📁 Folder Structure

```
laslesvpn-landing/
├── app/                # Next.js app directory (pages, layout, etc.)
├── components/         # React components for each section
├── public/             # Static assets (images, SVGs, etc.)
├── styles/             # Additional global styles
├── tailwind.config.ts  # Tailwind CSS configuration
├── postcss.config.mjs  # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
└── ...
```

## ⚙️ Customization

- **Tailwind CSS**: Utility-first styling, with custom colors and animations in `tailwind.config.ts`.
- **PostCSS**: Used for processing Tailwind and autoprefixing.
- **TypeScript**: Strictly typed for reliability and maintainability.
- **Images**: All images and SVGs are in the `public/` directory. Replace them to customize branding.
- **Components**: Modular and reusable. Edit or add new components in the `components/` folder.

## 🧭 Smooth Scrolling & Animations

- **Smooth Scrolling:**

  - In-page navigation uses smooth scrolling via the `scrollToSection` function in the Header. Clicking navigation links smoothly scrolls to the target section using `scrollIntoView({ behavior: "smooth" })`.
  - Global CSS also sets `html { scroll-behavior: smooth; }` for native smooth scrolling support.

- **Animations:**
  - All major sections and many UI elements use [Framer Motion](https://www.framer.com/motion/) for modern, fluid animations.
  - Effects include fade-in, slide-up, staggered entrances, and interactive button/card animations.
  - Animations are triggered on scroll using `whileInView` and `viewport` props for a dynamic, engaging user experience.

---
