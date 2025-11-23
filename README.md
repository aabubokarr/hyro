# Hyro - Portfolio Application

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

- [Vercel](https://hyro0.vercel.app/)

## About

**Hyro** is a modern, fast, and responsive web application built with Next.js and TypeScript. It is designed to provide a seamless user experience with a clean UI, reusable components, and optimized performance.

## Features

- Navbar
- Home
- About
- Build
- Products
- Contact
- Footer

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/woabu0/hyro.git
   ```
2. Navigate to the project directory:
   ```bash
   cd hyro
   ```
3. Install dependencies:
   ```bash
   npm i
   ```

## Structure

```
hyro/
├── public/
│   ├── fonts/
│   │   └── gumok.otf
│   ├── images/
│   │   ├── about.png
│   │   ├── build.png
│   │   └── hero.png
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── animations/
│   │   │   └── MagicBento.tsx
│   │   ├── icons/
│   │   │   ├── company.tsx
│   │   │   ├── logo.tsx
│   │   │   ├── social.tsx
│   │   │   └── vector.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Build.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Products.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── circle.tsx
│   │       └── input.tsx
│   └── lib/
│       └── utils.ts
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Contributors

<p align="center">
  <a href="https://github.com/woabu0/hyro/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=woabu0/hyro" alt="Contributors" />
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
