# Shroomly Good Website

![Shroomly Good - Edinburgh's Urban Mushroom Farm](https://placeholder-image.com/shroomlygood-banner.jpg)

## Overview

The official website for Shroomly Good, Edinburgh's pioneering urban mushroom farm. This site showcases our premium, sustainably-grown gourmet mushrooms cultivated using our innovative seaweed-enhanced coffee ground substrate technology.

Shroomly Good is the consumer-facing brand of Edinburgh Mushrooms, delivering exceptional fungi directly to mushroom enthusiasts throughout Edinburgh and beyond.

## Features

- Interactive mushroom catalogue showcasing our premium varieties
- Educational content on our innovative cultivation methods
- Real-time growth statistics powered by our AI monitoring system
- Online ordering system for direct-to-consumer sales
- Blog featuring mushroom recipes and cultivation insights
- Sustainability impact calculator

## Technology Stack

- **Frontend**: Vue.js with Vite build tool
- **Styling**: Tailwind CSS
- **Deployment**: Containerised application with CI/CD pipeline
- **Analytics**: Custom dashboard for site metrics
- **API Integration**: Connection to our mushroom growth monitoring system

## Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/edinburgh-mushrooms/shroomly-good-website.git
   cd shroomly-good-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit the `.env` file with your configuration details.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
shroomly-good-website/
├── .bolt/                # Build optimization files
├── node_modules/         # Dependencies
├── public/               # Static assets
├── src/                  # Source files
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Vue components
│   ├── composables/      # Vue composables
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page components
│   ├── router/           # Vue router configuration
│   ├── stores/           # State management
│   ├── styles/           # Global CSS
│   ├── utils/            # Utility functions
│   ├── App.vue           # Root component
│   └── main.js           # Application entry point
├── .env                  # Environment variables
├── .eslintrc.js          # ESLint configuration
├── .gitignore            # Git ignore rules
├── index.html            # HTML entry point
├── package.json          # Project metadata and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.ts        # Vite configuration
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint code using ESLint
- `npm run test` - Run tests

### Coding Standards

- We use ESLint for code linting
- Follow the Vue.js style guide for component structure
- Use Tailwind CSS for styling
- Write meaningful commit messages following conventional commits

## Deployment

The website is automatically deployed using our CI/CD pipeline when changes are pushed to the main branch.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` directory, which can be deployed to any static hosting service.

## Monitoring & Analytics

The website includes integration with our custom analytics dashboard, providing insights on:

- User engagement metrics
- Product popularity
- Geographic distribution of visitors
- Conversion rates

## About Edinburgh Mushrooms

Edinburgh Mushrooms (EM) is a pioneering urban agriculture initiative dedicated to the cultivation of premium speciality mushrooms using innovative, sustainable methods. Based in Edinburgh, we combine cutting-edge cultivation techniques with circular economy principles to produce exceptional fungi for the city's discerning culinary scene.

### Our Ethos

At Edinburgh Mushrooms, we believe that extraordinary gastronomy need not come at the expense of our environment. Our approach is built upon three core principles:

- **Sustainability**: Transforming urban waste streams into valuable resources
- **Excellence**: Producing mushrooms of unparalleled quality and nutritional value
- **Locality**: Minimising food miles whilst supporting Edinburgh's vibrant food culture

For trade enquiries, please visit our [Edinburgh Mushrooms](https://edinburghmushrooms.com) website.

## Contributing

We welcome contributions from the community! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Website: [www.shroomlygood.com](https://www.shroomlygood.com)
- Email: hello@shroomlygood.com
- Instagram: [@shroomlygood](https://instagram.com/shroomlygood)
- Twitter: [@shroomlygood](https://twitter.com/shroomlygood)

---

*Cultivating a sustainable future, one mushroom at a time.*
