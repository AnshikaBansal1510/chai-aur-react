### Key React and Browser Concepts

- **`useCallback` Hook**:  
  Used to **memoize a function definition** so that it is not recreated on every re-render, improving performance.

- **`useEffect` Hook**:  
  Runs:
  1. **When the component is first mounted** (similar to page load).
  2. **Whenever any of its dependencies change** (based on the dependency array).

- **`useRef` Hook**:  
  Provides a way to **persist values (like DOM references)** across renders without causing re-renders.

- **Browser vs Server Environment**:  
  The **browser has a `window` object**, but on the **server (e.g., Next.js)** there is **no `window` object**. Always check for its existence before using it in server-side code.
