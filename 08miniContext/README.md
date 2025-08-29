# 🌍 React Context API

When passing props through multiple nested components (known as **Prop Drilling**), we often end up handling data in components that don’t even use it.  

For example:  
`App → Dashboard → RightSide → TopComp → Card`  

Here, the `title` prop is only needed in `Card`, but it still has to be passed through `RightSide` and `TopComp`. This creates unnecessary complexity.  

👉 To solve this, we use the **Context API** which provides global state management and eliminates prop drilling.

---

## ⚡ Steps to Use Context API

1. **Create a Context**  
   - Use `createContext()` in a separate file.  
   - Context can store both **variables** and **methods**.  
   ```jsx
   // UserContext.js
   import { createContext } from "react";

   export const UserContext = createContext();
   ```

2. **Create a Context Provider**

Wrap your application (or specific components) inside a **Provider**.  

- The **Provider** accepts a `value` prop which is accessible to all child components.  

### Example:

```jsx
// UserProvider.jsx
import { useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider({ children }) {
  const [title, setTitle] = useState("Dashboard Title");

  return (
    <UserContext.Provider value={{ title, setTitle }}>
      {children}
    </UserContext.Provider>
  );
}
```

3. **Export a Custom Hook (Optional but Recommended)**

Create a **custom hook** to simplify consuming the context.  
This makes the code cleaner and avoids importing `useContext` and the context separately in every component.

### Example:

```jsx
// useUser.js
import { useContext } from "react";
import { UserContext } from "./UserContext";

export function useUser() {
  return useContext(UserContext);
}
```

4. **Wrap App with Provider**

Ensure your entire component tree is wrapped inside the **Provider** so all components can access the context values.

### Example:
```jsx
import { UserProvider } from "./UserProvider";

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}
```

5. **Consume Context Data**

Use **`useContext()`** (or the custom hook) to access values directly where needed.

### Example:
```jsx
import { useUser } from "./useUser";

function Card() {
  const { title } = useUser();
  return <h2>{title}</h2>;
}
```

## 📌 Key Points

- **Prop Drilling** → Passing props unnecessarily through multiple layers.  
- **Context API** → Solves prop drilling by providing global access.  
- **createContext()** → Creates a context object.  
- **Context.Provider** → Makes values available to children.  
- **useContext()** → Fetches values from a given context.  
- **Custom Hook** → Improves code reusability and readability.  


