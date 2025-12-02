# foreveralone - Forever Alone (Solana Memecoin DApp)

## Project Overview

This project is a React, TypeScript, and Vite-based decentralized application (DApp) for a Solana memecoin named "Forever Alone." It serves as a landing page and informational hub for the memecoin, deeply rooted in the classic "Forever Alone" meme.

The application emphasizes its "no utility, pure meme" nature, a fair launch approach, and its integration with the Solana blockchain. Key features and technologies include:

*   **Frontend:** React with TypeScript, bundled and served using Vite.
*   **Solana Integration:** Utilizes `@solana/wallet-adapter-react` and `@solana/wallet-adapter-react-ui` for seamless wallet connectivity (e.g., Phantom, Solflare), connecting to the Solana Mainnet.
*   **Thematic Content:** Displays token information, an origin story, social links, and integrations with Solana DEXs like Jupiter and Raydium.
*   **Components:** Leverages various custom components such as `Countdown`, `TokenPrice`, `CommunityPulse`, `SocialWall`, and `DexIcons` to present dynamic and static content.
*   **Styling:** Uses `App.css` and `mobile.css`, indicating a responsive design.
*   **Icons:** Employs `react-icons` for various social media and decentralized exchange icons.

## Getting Started

The project uses `npm` (or `pnpm`) for package management and script execution.

### Installation

To get started, first install the project dependencies:

```bash
npm install
# or pnpm install
```

### Running Locally

To run the application in development mode with hot module replacement:

```bash
npm run dev
# or pnpm run dev
```

### Building for Production

To compile the application for production deployment:

```bash
npm run build
# or pnpm run build
```

### Linting

To run ESLint and check for code quality and style issues:

```bash
npm run lint
# or pnpm run lint
```

### Testing

To execute unit tests using Vitest:

```bash
npm run test
# or pnpm run test
```

To execute unit tests using Vitest with a UI for interactive testing:

```bash
npm run test:ui
# or pnpm run test:ui
```

## Development Details

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
