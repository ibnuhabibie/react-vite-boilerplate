# React Boilerplate

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Preparing for Deployment](#preparing-for-deployment)
- [DevTools](#devtools)

## Overview

Built with type safety, scalability, and developer experience in mind. A batteries included Vite + React template.

- [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript designed with large scale applications in mind
- [ESLint](https://eslint.org) - Static code analysis to help find problems within a codebase
- [Prettier](https://prettier.io) - An opinionated code formatter
- [Vite](https://vitejs.dev) - Feature rich and highly optimized frontend tooling with TypeScript support out of the box
- [React](https://react.dev) - A modern front-end JavaScript library for building user interfaces based on components
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes to build any web design imaginable
- [Storybook](https://storybook.js.org) - A frontend workshop for building UI components and pages in isolation
- [TanStack Router](https://tanstack.com/router/v1) - Fully typesafe, modern and scalable routing for React applications
- [TanStack Query](https://tanstack.com/query/latest) - Declarative, always-up-to-date auto-managed queries and mutations
- [react-i18next](https://react.i18next.com/) - A powerful internationalization framework for React/React Native based on i18next
- [Husky](https://github.com/typicode/husky#readme) + [Commitizen](https://github.com/commitizen/cz-cli#readme) + [Commitlint](https://github.com/conventional-changelog/commitlint#readme) - Git hooks and commit linting to ensure use of descriptive and practical commit messages
- [Docker](https://www.docker.com) - Containerization tool for deploying your vite-react-boilerplate app

## Requirements

- [NodeJS 18+](https://nodejs.org/en)
- [Commitizen](https://github.com/commitizen/cz-cli#readme) `npm install -g commitizen`

If you'd like to use the included Dockerfile then [Docker](https://www.docker.com) is required as well:

## Getting Started

Getting started is a simple as cloning the repository

```
git clone git@github.com:ibnuhabibie/react-vite-boilerplate.git
```

Changing into the new directory

```
cd react-vite-boilerplate
```

Removing the .git folder (and any additional files, folders or dependencies you may not need)

```
rm -rf .git
```

Installing dependencies

```
npm install
```

Congrats! You're ready to starting working on that new project!

**Note**: This project comes with two git hooks added by [husky](https://typicode.github.io/husky/).

- A prepare-commit-msg hook to run the [Commitizen](https://github.com/commitizen/cz-cli#readme) cli for those nice commit messages
- A commit-msg hook to run [Commitlint](https://commitlint.js.org/#/) on the message itself. Commitlint will ensure the commit message follows the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) (it will if you used commitizen).

## Preparing for Deployment

Instructions are provided for deploying both with and without Docker. Both options still require a platform to host the application.

### Without Docker

Deploying is as easy as running

```
npm run build
```

and pointing your web server to the generated `index.html` file found at `dist/index.html`

### With Docker

A Dockerfile with an [NGINX](https://www.nginx.com) base image is also provided for quick and easy deployments. Simply execute the following commands:

1. `npm run build`
2. `docker build . -t <container_name>`
   - Example: `docker build . -t custom-webapp`
3. `docker run  -p <port_number>:80 <container_name>`
   - Example: `docker run -p 8080:80 custom-webapp`

## Devtools

This project includes a set of Devtools. Some are additional package dependencies whereas others come built-in to the packages themselves.

### Devtool dependencies:

- [@tanstack/react-query-devtools](https://tanstack.com/query/v4/docs/react/devtools) - Dedicated dev tools to help visualize the inner workings of React Query
- [@tanstack/router-devtools](https://tanstack.com/router/v1/docs/devtools) - Dedicated dev tools to help visualize the inner workings of TanStack Router
