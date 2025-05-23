# Express TypeScript Setup

## Overview

This project provides a ready-to-use Express.js setup with TypeScript, designed to help developers quickly dive into backend development without spending time on initial configuration. With essential tools and best practices already in place, you can focus on building your application features right away.

## Features

- **Express.js** for fast, unopinionated web server development
- **TypeScript** for type safety and modern JavaScript features
- **Pre-configured scripts** for development, building, linting, formatting, and testing
- **Jest** for unit testing
- **ESLint** and **Prettier** for code quality and formatting
- **Docker** and **Docker Compose** for easy containerization and deployment
- **GitHub Actions** for CI (linting, type-checking, and unit tests)
- **Pino** for logging
- **express-async-errors** for async error handling
- **Nodemon** and **ts-node** for smooth development experience


## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Run in development mode**
   ```sh
   npm run dev
   ```

3. **Build for production**
   ```sh
   npm run build
   ```

4. **Run tests**
   ```sh
   npm run test
   ```

5. **Lint and format code**
   ```sh
   npm run lint
   npm run format
   ```

## Why use this setup?

- **Save time:** Skip boilerplate and configuration steps.
- **Best practices:** Includes recommended tools and patterns for modern Node.js development.
- **Easy to extend:** Add your routes, middleware, and business logic right away.

## Contribution Guidelines

I welcome contributions! Please follow these steps:

1. **Fork the repository** and create your branch from `main`.
2. **Write clear, concise commit messages.**
3. **Ensure your code passes linting and formatting:**
   ```sh
   npm run lint
   npm run format:check
   ```
4. **Add or update tests as appropriate.**
5. **Check that all tests pass:**
   ```sh
   npm run test
   ```
6. **Check type safety:**
   ```sh
   npm run ts-check
   ```
7. **Open a pull request** with a clear description of your changes.

## Technologies Used

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Pino](https://getpino.io/)
- [express-async-errors](https://github.com/davidbanham/express-async-errors)
- [Nodemon](https://nodemon.io/)
- [ts-node](https://typestrong.org/ts-node/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GitHub Actions](https://github.com/features/actions)


### GitHub Actions

This repository uses [GitHub Actions](https://github.com/features/actions) for continuous integration. The following workflows are already set up:

- **Linting:** Ensures code style and formatting (`.github/workflows/lint.yml`)
- **Type Checking:** Ensures TypeScript code is type-safe (`.github/workflows/ts-check.yml`)
- **Unit Tests:** Runs all Jest tests and reports coverage (`.github/workflows/unit-tests.yml`)

All pull requests will automatically trigger these checks. Please make sure your code passes all workflows before requesting a review.

## License

ISC

---
Happy coding!