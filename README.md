# Express TypeScript Setup

![Express](https://img.shields.io/badge/Express-4.21.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Node](https://img.shields.io/badge/Node-%3E%3D20.0.0-green)
![Jest](https://img.shields.io/badge/Jest-29.7.0-green)
![ESLint](https://img.shields.io/badge/ESLint-9.27.0-purple)
![Prettier](https://img.shields.io/badge/Prettier-3.5.3-purple)
![Swagger](https://img.shields.io/badge/Swagger-6.2.8-orange)
![dotenv](https://img.shields.io/badge/dotenv-16.5.0-yellowgreen)
![Pino](https://img.shields.io/badge/Pino-9.7.0-yellowgreen)

## Overview

This project provides a ready-to-use Express.js setup with TypeScript, designed to help developers quickly dive into backend development without spending time on initial configuration. With essential tools and best practices already in place, you can focus on building your application features right away.

## Features

- **Express.js** for fast, unopinionated web server development
- **TypeScript** for type safety and modern JavaScript features
- **Pre-configured scripts** for development, building, linting, formatting, and testing
- **Swagger** for API documentation
- **Jest** for unit testing
- **ESLint** and **Prettier** for code quality and formatting
- **Docker** and **Docker Compose** for easy containerization and deployment
- **GitHub Actions** for CI (linting, type-checking, and unit tests)
- **Pino** for logging
- **Nodemon** and **ts-node** for smooth development experience

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samialateya/express-ts-setup.git
   cd express-ts-setup
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### API Documentation

This project uses **Swagger** for interactive API documentation.  
Once the server is running, visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to view and test the API endpoints.

### Rapid Development with Docker Compose

To quickly launch the development environment using Docker Compose, run:

```bash
docker-compose up
```

This will start all necessary services and make the API available locally.

## Scripts

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
- [Swagger](https://swagger.io/)
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

## Acknowledgments

This project is inspired by the need for a quick-start template for Express.js applications using TypeScript. It incorporates best practices and modern tools to streamline development.

---

Happy coding! 🚀
