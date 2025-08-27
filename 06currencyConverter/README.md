### Important React Best Practices & Key Notes

- **API & `onChange` Values**:  
  Most APIs return values as **strings**, and `onChange` events also provide values as **strings**.  
  Keep this in mind when performing calculations or type comparisons.
 
- **Using Keys in JSX Loops**:  
  Always provide a **unique `key` prop** when rendering lists in JSX to help React identify elements and optimize performance.

- **`useId` Hook**:  
  Used for **generating unique IDs** that remain stable across renders (e.g., for accessibility attributes like `id` and `htmlFor`).  
  **Note:** Do **not** use `useId` to generate keys in a list.  
  Keys should come from your **data itself** (like an `id` field from the API).
