# React UI Updates and Hooks

## How UI Updates Work in React
- In React, **UI updates are controlled and managed by React itself**.
- Instead of directly manipulating the DOM (like in vanilla JavaScript), React uses a **Virtual DOM**.
- Whenever data or state changes, React:
  1. Creates a new Virtual DOM representation.
  2. Compares it with the previous Virtual DOM (using the diffing algorithm).
  3. Updates only the necessary parts of the actual DOM (efficient & fast).

---

## Hooks and UI Updates
- **Hooks** in React allow functional components to manage state and lifecycle without using class components.
- When a state managed by a hook changes, React automatically **re-renders** the component and updates the UI accordingly.
  
In summary:
React hooks are the mechanism that propagate changes in the UI automatically by controlling state and triggering re-renders efficiently.
