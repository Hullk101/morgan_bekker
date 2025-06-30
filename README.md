# Static Portfolio Website

A modern, responsive portfolio website built with React and designed for GitHub Pages deployment.

## Features

- **Modern Design**: Clean, minimal aesthetic inspired by professional portfolios
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero section with social links
  - About section with downloadable resume
  - Skills showcase organized by category
  - Work experience timeline
  - Interactive Python chatbot (demo version)
- **Smooth Animations**: Powered by Framer Motion
- **GitHub Pages Ready**: Configured for easy deployment

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Wouter** for lightweight routing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed

### Installation

1. Clone this repository or extract the zip file
2. Navigate to the project directory:
   ```bash
   cd static-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Edit the data in `src/data/portfolio-data.ts`:

- Update `portfolioSettings` with your personal information
- Modify `experiences` array with your work history
- Customize `skills` array with your technical skills

### Content Sections

Each section has its own component in `src/components/`:

- `HeroSection.tsx` - Main landing area
- `AboutSection.tsx` - Personal information and resume download
- `SkillsSection.tsx` - Technical skills display
- `ExperienceSection.tsx` - Work experience timeline
- `ChatbotSection.tsx` - Interactive demo chatbot

### Styling

- Colors and themes are defined in `src/index.css`
- Component styling uses Tailwind CSS classes
- Modify `tailwind.config.ts` for custom theme changes

## Deployment to GitHub Pages

### Quick Fix for Blank Page Issue

If you're seeing a blank page, follow these steps:

1. **Update your repository** with the corrected files from this updated zip
2. **Enable GitHub Actions** (this is the recommended method):
   - Go to your repository Settings > Pages
   - Under "Source", select "GitHub Actions"
   - Push your code - the workflow will automatically build and deploy

### Alternative: Manual Build and Deploy

1. **On your local machine:**
   ```bash
   npm install
   npm run build
   ```

2. **Create gh-pages branch:**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r dist/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **In GitHub Settings > Pages:**
   - Source: "Deploy from a branch" 
   - Branch: `gh-pages`
   - Folder: `/ (root)`

### Repository Setup

1. Repository name can be:
   - `your-username.github.io` (for user site)
   - `any-name` (for project site)
2. Make sure repository is **public**
3. Enable GitHub Pages in Settings > Pages

## Project Structure

```
static-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── Portfolio.tsx   # Main portfolio page
│   │   ├── Navigation.tsx  # Navigation component
│   │   └── ...             # Section components
│   ├── data/
│   │   └── portfolio-data.ts # Static data and configuration
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   ├── App.tsx             # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Customization Tips

1. **Replace placeholder data** in `src/data/portfolio-data.ts` with your actual information
2. **Update social media links** to point to your profiles
3. **Modify the color scheme** in `src/index.css` CSS variables
4. **Add your own projects** by extending the data structure
5. **Include real resume content** in the download functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Questions?

This static version maintains all the visual appeal and core functionality of the original full-stack portfolio, optimized for GitHub Pages deployment.