# React Router Notes

A concise guide on how React Router works and the key concepts you need to know.

---

## 🔗 Navigation with `Link` and `NavLink`

- Instead of using the `<a>` tag (which refreshes the page), React Router provides the **`Link`** component.
  - Use the `to` attribute instead of `href`.
  - Example:  
    ```jsx
    <Link to="/about">Go to About</Link>
    ```

- **`NavLink`** works like `Link` but also gives access to an `isActive` property.  
  - This allows applying **dynamic CSS styling** based on the current URL.
  - Example:  
    ```jsx
    <NavLink 
      to="/home" 
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      Home
    </NavLink>
    ```

---

## 🛣️ Router Configuration with `RouterProvider`

- The `RouterProvider` component takes a `router` prop.
- The router is defined as an array of objects, where each object represents a route with a `path` and `element`.
- Example:  
  ```jsx
  import { createBrowserRouter, RouterProvider } from "react-router-dom";

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);

  function App() {
    return <RouterProvider router={router} />;
  }

