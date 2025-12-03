# Project: Forever Alone (The Creator's Blog)

## Project Overview

This project is a React, TypeScript, and Vite-based web application for a personal blog, inspired by early 2010s Reddit-style social platforms. It serves as the official platform for the creator of the "Forever Alone" meme to share their personal journey, the meme's unexpected creation, its explosion in popularity, and reflections from their unique perspective.

The application emphasizes the creator's narrative, personal anecdotes, and direct communication, offering a nostalgic user experience through its simple, functional interface. It has transitioned from a DApp focus to become a personal chronicle of a viral phenomenon.

Key features and technologies include:

*   **Frontend:** React with TypeScript, bundled and served using Vite.
*   **Thematic Content:** Displays blog posts and reflections directly from the "Forever Alone" meme's creator, focusing on their experiences and insights.
*   **Components:** Leverages various custom components for blog post display, a personal "about" section, and interactive elements designed for a creator's platform.
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