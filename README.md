# Hyro - Portfolio Website

![Hyro](hyro.png)

Welcome to the **Hyro** project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Repository](https://github.com/aabubokarr/hyro)
- [Website](https://aabubokarr.github.io/hyro/)

## About

**Hyro** is an immersive virtual reality platform showcasing cutting-edge VR hardware, experiences, and technology. Explore products, discover innovative applications across gaming, education, and beyond, and experience a futuristic digital world built for the next generation of virtual reality.

## Features

- Modern UI/UX
- Interactive Animation
- High Res Images
- Responsive Design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabubokarr/hyro.git
   ```
2. Navigate to the project directory:
   ```bash
   cd hyro
   ```
3. Install dependencies:
   ```bash
   npm i
   ```
4. Start the application:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Structure

```
hyro/
├── .github/                            # GitHub configuration
│   └── workflows/                      # GitHub Actions workflows
│       └── deploy.yml                  # GitHub Pages deployment workflow
├── public/                             # Static/public assets
│   ├── fonts/                          # Custom fonts
│   │   └── gumok.otf                   # Gumok font
│   ├── images/                         # Website images
│   │   ├── about.png                   # About section image
│   │   ├── build.png                   # Build section image
│   │   └── hero.png                    # Hero section image
│   └── robots.txt                      # Search engine crawling rules
├── src/                                # Application source code
│   ├── app/                            # Next.js App Router
│   │   ├── favicon.ico                 # Website favicon
│   │   ├── globals.css                 # Global styles
│   │   ├── layout.tsx                  # Root layout
│   │   └── page.tsx                    # Home page
│   ├── components/                     # Reusable React components
│   │   ├── animations/                 # Animation components
│   │   │   └── MagicBento.tsx          # Magic Bento animation/component
│   │   ├── icons/                      # Custom SVG/icon components
│   │   │   ├── company.tsx             # Company-related icons
│   │   │   ├── logo.tsx                # Logo component
│   │   │   ├── social.tsx              # Social media icons
│   │   │   └── vector.tsx              # General vector icons
│   │   ├── sections/                   # Main website sections
│   │   │   ├── About.tsx               # About section
│   │   │   ├── Build.tsx               # Build section
│   │   │   ├── Contact.tsx             # Contact section
│   │   │   ├── Footer.tsx              # Footer
│   │   │   ├── Hero.tsx                # Hero section
│   │   │   ├── Navbar.tsx              # Navigation bar
│   │   │   └── Products.tsx            # Products section
│   │   └── ui/                         # Reusable UI components
│   │       ├── button.tsx              # Button component
│   │       ├── circle.tsx              # Circle component
│   │       └── input.tsx               # Input component
│   └── lib/                            # Utility/helper functions
│       ├── config.ts                   # Configuration file
│       └── utils.ts                    # Shared utilities
├── eslint.config.mjs                   # ESLint configuration
├── next.config.ts                      # Next.js configuration
├── next-env.d.ts                       # Next.js TypeScript declarations
├── package.json                        # Project dependencies and scripts
├── postcss.config.mjs                  # PostCSS configuration
├── tsconfig.json                       # TypeScript configuration
└── README.md                           # Project documentation
```

## Contributors

<p align="center">
  <a href="https://github.com/aabubokarr/hyro/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=aabubokarr/hyro" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
