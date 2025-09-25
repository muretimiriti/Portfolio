# Victor Mureti - Portfolio Website

A modern, responsive portfolio website showcasing Victor Mureti's skills in Full-Stack Development, DevOps, and System Support. Built with React, TypeScript, and Framer Motion for smooth animations.

## 🚀 Live Demo

Visit the live portfolio: [https://victor-mureti-portfolio.herokuapp.com](https://victor-mureti-portfolio.herokuapp.com)

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Interactive Sections**:
  - Hero section with call-to-action buttons
  - About section with core values
  - Skills showcase with progress bars
  - Project portfolio with GitHub/demo links
  - Professional experience timeline
  - Education and certifications
  - Contact form with social links
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter Card support
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Custom CSS with CSS Variables
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Heroku
- **Version Control**: Git

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.tsx       # Navigation bar with theme toggle
│   ├── Hero.tsx         # Hero section with introduction
│   ├── About.tsx        # About section with bio and values
│   ├── Skills.tsx       # Skills showcase by category
│   ├── Projects.tsx     # Project portfolio
│   ├── Experience.tsx   # Professional experience timeline
│   ├── Education.tsx    # Education and certifications
│   ├── Contact.tsx      # Contact form and social links
│   └── Footer.tsx       # Footer with links and info
├── App.tsx              # Main app component
├── App.css              # Component-specific styles
├── index.css            # Global styles and CSS variables
└── main.tsx             # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/victor-mureti/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm start` - Start production server (for Heroku)

## 🎨 Customization

### Adding New Projects

1. Open `src/components/Projects.tsx`
2. Add a new project object to the `projects` array:

```typescript
{
  title: 'Your Project Title',
  description: 'Project description...',
  image: '/api/placeholder/400/250',
  technologies: ['React', 'Node.js', 'MongoDB'],
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  github: 'https://github.com/yourusername/project',
  demo: 'https://your-project-demo.com',
  status: 'Completed'
}
```

### Adding New Skills

1. Open `src/components/Skills.tsx`
2. Add skills to the appropriate category in the `skillCategories` array:

```typescript
{
  name: 'New Skill',
  icon: <FaIcon />,
  level: 85
}
```

### Updating Personal Information

1. **Contact Information**: Update `src/components/Contact.tsx` and `src/components/Footer.tsx`
2. **Social Links**: Update social media URLs in Hero, Contact, and Footer components
3. **About Section**: Modify `src/components/About.tsx` for bio and values
4. **Experience**: Update `src/components/Experience.tsx` with new roles
5. **Education**: Modify `src/components/Education.tsx` for academic background

### Styling Customization

The website uses CSS variables for easy theming. Key variables in `src/index.css`:

```css
:root {
  --primary-blue: #2563eb;
  --secondary-gray: #64748b;
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
  /* ... more variables */
}
```

## 🚀 Deployment

### Deploy to Heroku

1. **Install Heroku CLI**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   
   # Windows
   # Download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

4. **Set Buildpack**
   ```bash
   heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git
   ```

5. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

6. **Open App**
   ```bash
   heroku open
   ```

### Alternative Deployment Options

- **Netlify**: Connect GitHub repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3 + CloudFront**: Static hosting with CDN

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Victor Mureti**
- Email: victor.mureti@email.com
- LinkedIn: [linkedin.com/in/victor-mureti](https://linkedin.com/in/victor-mureti)
- GitHub: [github.com/victor-mureti](https://github.com/victor-mureti)
- Twitter: [@victor_mureti](https://twitter.com/victor_mureti)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool
- [Heroku](https://www.heroku.com/) - Deployment platform

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!