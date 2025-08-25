# React Setup and Implementations

## React Implementations
React provides two primary implementations based on the platform:
- **react-dom** → Used for building web applications.
- **react-native** → Used for building mobile applications (iOS & Android).

---

## Creating a React App (Using Create React App)
1. Run the following command to create a new React project:
   ```bash
   npx create-react-app <project-name>
   cd <project-name>
   npm install
   npm run start

## Scripts Overview:
- **start** → Runs the project in the development environment.
- **build** → Prepares and optimizes the project for production deployment.

## Creating a React App (Using Vite)
1. Run the following command to create a new React project:
   ```bash
   npm create vite@latest
   cd <project-name>
   npm install
   npm run dev

## Notes
- Scripts play an essential role in running and building your project.
- Development mode (start/dev) is optimized for local development.
- Production build (build) generates an optimized version for deployment.

 # React Rendering and Core Conventions

## How React Creates and Renders the Virtual DOM

A common React entry point looks like this:

```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
````

---

## Explanation:
- document.getElementById('root') selects the root DOM element in index.html where the React app will be mounted.

- createRoot(...) creates a React root that manages a Virtual DOM tree.

- .render(<StrictMode><App /></StrictMode>):

- React first creates a virtual DOM representation of the <App /> component and all its child components.

- It then compares the virtual DOM with the previous version and updates only the parts that have changed in the actual DOM.
- This process makes React efficient and fast.

- <StrictMode> is a wrapper that helps highlight potential problems in development mode.

## Why Use React for Rendering?
While we can render HTML elements directly using plain JavaScript, React provides programming capabilities in HTML-like syntax (JSX) with better structure and reusability.
Virtual DOM makes updates faster and more efficient compared to direct DOM manipulation.

##React Scripts
react-scripts (used by Create React App) automatically:
Attaches and manages required JavaScript scripts in index.html.
Provides development and build configurations without manual setup.
The scripts are injected and executed using React and ReactDOM libraries.

## Export and Return Rules
A React component can return only one parent element.
If you need to return multiple elements, wrap them using React Fragments.

## Conventions in React
- Component Naming: Component names should start with an uppercase letter (e.g., App, Header, UserCard).
- File Naming: Files containing components are capitalized (e.g., App.jsx, Header.jsx).
- File Extensions: If a file returns JSX (HTML-like syntax), its extension should be .jsx.
   
