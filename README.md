# Yellow Duck Coders — Test Task

Single-page React application that reproduces the provided carrier profile design: header, gallery with calendar, drivers list, services, reviews slider, and footer. Built with Vite for fast development and Swiper for the reviews carousel.

## Preview

<img src="./public/preview.png" alt="Yellow Duck Coders preview" width="600" />

> The screenshot above is optional—replace it with a fresh capture or remove this section if not needed.

## Features

- Pixel-perfect layout based on the given Figma template
- Responsive grid/flex layout with mobile-friendly breakpoints
- Reviews carousel with pagination, looping, and keyboard support (Swiper 12)
- Custom review cards with accessible star-rating rendering
- Reusable section components (drivers, services, footer, etc.)
- Global styles reset + component-scoped CSS

## Tech Stack

- **React 19** with functional components and hooks
- **Vite 7** tooling (ESM build, fast dev server)
- **Swiper 12** for the reviews slider
- **React Day Picker 9** (calendar widget)
- **ESLint 9** base config

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── App.jsx                    # Page composition
├── components/
│   ├── header/                # Header & navigation
│   ├── carrierProfileHeader/  # Hero area
│   ├── carrierProfileAbout/   # About section
│   ├── galleryCalendarSection/# Gallery + trip calendar
│   ├── driversSection/        # Drivers list
│   ├── serviceSection/        # Services grid
│   ├── reviewsSection/        # Swiper slider + ReviewCard
│   └── footer/                # Footer links & contacts
├── assets/                    # Images, icons, backgrounds
└── styles/                    # reset.css, common.css
```

## Customization

- Replace mock content inside `src/components/...` with real data or API calls.
- Add more reviews by editing `REVIEWS_DATA` in `ReviewsSection.jsx`.
- Update images and icons located in `src/assets`.
- Extend ESLint rules in `eslint.config.js` (if added) for team standards.

## Deployment

Any static host works (Vercel, Netlify, GitHub Pages). Build the project and deploy the `dist/` folder.

```bash
npm run build
# Upload dist/ to your hosting provider
```

## License

This test project is provided as-is for evaluation purposes.
