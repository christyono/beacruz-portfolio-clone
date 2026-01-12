# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

This is a React portfolio website for fashion designer Beatriz Cruz (BÉACRUZ). Built with Vite, React, and Tailwind CSS.

## Commands

**Always use `bun` instead of `npm` for this project.**

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Package Manager**: Bun

## Project Structure

```
src/
├── components/       # React components
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── PortfolioCard.jsx
│   ├── AboutSection.jsx
│   ├── PressLogos.jsx
│   ├── Footer.jsx
│   └── ContactModal.jsx
├── hooks/            # Custom React hooks
│   └── useParallax.js
├── images/           # Static images
│   ├── press/        # Press logos
│   └── ...
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles + Tailwind
```

## Design System

- **Primary Accent**: Mint green (`#9cb99c`)
- **Dark Background**: `#1a1a1a`
- **Fonts**: Playfair Display (headings), Inter (body)
- **Patterns**: Rounded pill buttons, backdrop blur, smooth transitions (300ms)

## Key Features

- Parallax scrolling on background images
- Auto-scrolling press logo marquee
- Contact modal with mailto: integration
- Responsive design (mobile-first)
