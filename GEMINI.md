# Project: Forever Alone (Community Blog)

## Project Overview

This project is a React, TypeScript, and Vite-based web application for a community-driven blog, inspired by early 2010s Reddit-style social platforms. It aims to provide a nostalgic user experience, focusing on user-generated content, discussions, and a simple, functional interface.

The application emphasizes community interaction, blog post creation, and engagement, moving away from its previous DApp focus.

Key features and technologies include:

*   **Frontend:** React with TypeScript, bundled and served using Vite.
*   **Thematic Content:** Displays blog posts, user comments, and community discussions.
*   **Components:** Leverages various custom components for post display, user profiles, and interactive elements.
*   **Styling:** Uses `App.css` and `mobile.css`, designed to evoke the aesthetic of early 2010s social platforms, indicating a responsive design.
*   **Icons:** Employs `react-icons` for various interface elements.

## Building and Running

The project uses `npm` (or `pnpm`) for package management and script execution.

*   **Install Dependencies:**
    ```bash
    npm install
    # or pnpm install
    ```

*   **Development Server:** Runs the application in development mode with hot module replacement.
    ```bash
    npm run dev
    # or pnpm run dev
    ```

*   **Build for Production:** Compiles the application for production deployment.
    ```bash
    npm run build
    # or pnpm run build
    ```

*   **Lint Code:** Runs ESLint to check for code quality and style issues.
    ```bash
    npm run lint
    # or pnpm run lint
    ```

*   **Preview Production Build:** Serves the production build locally for testing.
    ```bash
    npm run preview
    # or pnpm run preview
    ```

*   **Run Tests:** Executes unit tests using Vitest.
    ```bash
    npm run test
    # or pnpm run test
    ```

*   **Run Tests with UI:** Executes unit tests using Vitest with a UI for interactive testing.
    ```bash
    npm run test:ui
    # or pnpm run test:ui
    ```

## Development Conventions

*   **Linting:** ESLint is configured for code quality and style adherence, as indicated by `eslint.config.js` and the `lint` script in `package.json`. The `README.md` also provides guidance on extending the ESLint configuration.
*   **Testing:** Vitest is used for unit testing, configured in `vite.config.ts` with `globals: true` and `environment: 'jsdom'`. Test files are typically located within the `src/components` directory (e.g., `Countdown.test.tsx`).
*   **Build Optimization:** `vite.config.ts` includes custom Rollup options for `manualChunks` to optimize bundle sizes, separating vendor code and icon libraries into distinct chunks.
*   **Theming:** The application supports dark/light theme switching, with the theme preference stored in local storage (`THEME_STORAGE_KEY`).