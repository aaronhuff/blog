# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static website project using vanilla HTML, CSS, and JavaScript. The project serves as a boilerplate for basic web development.

## Architecture

- **Frontend**: Pure HTML/CSS/JavaScript (no frameworks)
- **Server**: Uses Python's built-in HTTP server for local development
- **Structure**: Single-page application with modular CSS and JavaScript

## Development Commands

- `npm start` or `npm run dev` - Start local development server on port 9000
- `python3 -m http.server 9000` - Alternative way to start the server directly

## Code Structure

- `index.html` - Main HTML file, entry point for the application
- `main.js` - JavaScript functionality including DOM manipulation and event handling
- `styles.css` - CSS styles with mobile-responsive design
- `package.json` - Project configuration and scripts

## Key Components

- **Interactive header**: Clicking the h1 toggles color (main.js:6-8)
- **Dynamic footer**: Automatically updates copyright year (main.js:15-18)
- **Responsive design**: Mobile breakpoint at 768px (styles.css:56-68)

## Development Notes

- No build process required - files are served directly
- All JavaScript uses vanilla DOM APIs
- CSS uses modern system fonts and flexbox/grid where appropriate
- Mobile-first responsive design approach