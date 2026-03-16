# Sheba's Home Care

Professional home healthcare services website built with Next.js 15, React 19, and TypeScript.

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Compile SCSS to CSS (if needed):
```bash
npm run sass
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run sass` - Watch and compile SCSS files

## 📁 Project Structure

```
shebas-home-care/
├── public/
│   └── assets/          # Images, CSS, SCSS, icons, vendor libraries
├── src/
│   ├── app/             # Next.js App Router pages and routes
│   ├── component/       # Reusable React components
│   ├── constant/        # Data constants and theme configuration
│   └── layout/          # Header and Footer components
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Styling

This project uses SCSS for styling. The main stylesheet is located at:
- `public/assets/scss/main.scss`

To compile SCSS during development:
```bash
npm run sass
```

## 🔧 Configuration

- **Next.js Config**: `next.config.ts`
- **TypeScript Config**: `tsconfig.json`
- **Image Optimization**: Currently disabled (`unoptimized: true`). Consider enabling for production.

## 📝 Notes

- This is a standalone deployment-ready version extracted from the medical template.
- All dependencies are self-contained within this folder.
- The app is configured for deployment to platforms like Vercel, Netlify, or any Node.js hosting service.

## 🚢 Deployment

### Vercel (Recommended)

1. Push this folder to a Git repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

1. Run `npm run build` to create the production build
2. Deploy the `.next` folder and `package.json` to your hosting service
3. Run `npm start` on your server

## 📄 License

Private - All rights reserved
