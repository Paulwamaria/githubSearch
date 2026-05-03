# GitHub Search

GitHub Search is an Angular app for looking up a GitHub user and scanning their public repositories. Search results show repository names, descriptions, primary languages, stars, forks, last updated dates, and links back to GitHub.

![GitHub Search homepage showing an active octocat search with repository cards](docs/home-active-search.png)

## Features

- Search public GitHub repositories by username.
- View repository cards with key metadata.
- Open matching repositories directly on GitHub.
- Responsive Home, About, and Contact pages.
- In-memory caching for repeat searches.

## Tech Stack

- Angular 21
- TypeScript 5.9
- RxJS 7
- Vitest
- GitHub public API

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open `http://localhost:4200/` in your browser.

## Build

Create a production build:

```bash
npm run build
```

The build output is written to `dist/githubSearch`.

## Tests

Run the unit test suite:

```bash
npm test -- --watch=false
```

## Project Notes

The app currently searches public repositories for GitHub users. Private repositories and organization-wide search are outside the current scope.

## Author

Developed by Paul Wamaria.

>> A simple Moringa School coursework project
