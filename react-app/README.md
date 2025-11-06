# DrDent Landing Page - React Application

Modern, mobile-first React application for DrDent dental clinic built with TypeScript, Tailwind CSS, and Vite.

## 🚀 Features

- **Mobile-First Design** - Optimized for 9:16 portrait format with progressive enhancement
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS with custom dental clinic color scheme
- **React Router** - Client-side routing for seamless navigation
- **React Query** - Efficient server state management
- **Framer Motion** - Smooth animations and transitions
- **Responsive** - Works perfectly on all devices from mobile to desktop

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## 🛠️ Installation

1. **Navigate to the project directory:**
   ```bash
   cd react-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or with yarn:
   ```bash
   yarn install
   ```

## 🏃 Running the Development Server

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
react-app/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (Header, Footer, MobileNav)
│   │   ├── ui/           # Reusable UI components (Button, Card, etc.)
│   │   ├── sections/     # Page sections
│   │   └── forms/        # Form components
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   └── Contact.tsx
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   │   └── cn.ts         # Class name utility
│   ├── types/            # TypeScript type definitions
│   ├── styles/           # Global styles
│   │   └── index.css     # Tailwind imports and global styles
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite type definitions
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

## 🎨 Color Scheme

The application uses a custom dental clinic color scheme:

- **Primary Blue**: `#0066cc` - Main brand color
- **Dark Blue**: `#004999` - Darker variant
- **Light Blue**: `#0080ff` - Accent color
- **Gradients**: Blue-based gradients for hero sections and CTAs

## 🧩 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 📱 Mobile-First Approach

This application is built with a mobile-first approach:

1. **Base styles** target mobile devices (320px+)
2. **Responsive breakpoints**:
   - `sm`: 480px (Large phones)
   - `md`: 768px (Tablets)
   - `lg`: 1024px (Small desktops)
   - `xl`: 1280px (Large desktops)
   - `2xl`: 1536px (Extra large desktops)

3. **Mobile Navigation**: Bottom navigation bar for easy thumb access
4. **Touch-Optimized**: All interactive elements are at least 44x44px
5. **Safe Areas**: Respects device safe areas (notches, home indicators)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_key_here
VITE_ANALYTICS_ID=your_analytics_id
```

### Tailwind Configuration

The Tailwind configuration is in [`tailwind.config.js`](tailwind.config.js:1). Customize colors, fonts, and other design tokens there.

### TypeScript Configuration

TypeScript settings are in [`tsconfig.json`](tsconfig.json:1). Path aliases are configured for cleaner imports:

```typescript
import { cn } from '@/utils/cn'
import Button from '@/components/ui/Button'
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite and configure build settings
4. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` directory to Netlify
3. Configure redirects for client-side routing

### Manual Deployment

1. Build: `npm run build`
2. Upload `dist/` contents to your web server
3. Configure server for SPA routing (redirect all routes to index.html)

## 📝 Development Guidelines

### Component Structure

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={cn('base-styles', variant === 'primary' && 'primary-styles')}>
      {children}
    </button>
  )
}

export default Button
```

### Styling with Tailwind

Use the `cn()` utility for conditional classes:

```typescript
import { cn } from '@/utils/cn'

<div className={cn(
  'base-class',
  isActive && 'active-class',
  isPrimary ? 'primary-class' : 'secondary-class'
)} />
```

## 🐛 Troubleshooting

### TypeScript Errors

The TypeScript errors you see are expected before running `npm install`. They will be resolved once dependencies are installed.

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

### Build Errors

Clear the cache and rebuild:
```bash
rm -rf node_modules dist
npm install
npm run build
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Copyright © 2025 DrDent. All rights reserved.

## 📞 Support

For questions or issues, contact:
- **Email**: contact@drdent.ro
- **Phone**: +40 21 344 9317

---

**Built with ❤️ for DrDent Dental Clinic**