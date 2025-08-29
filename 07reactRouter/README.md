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

  ## 🧩 Dynamic Components with `Outlet`

React Router provides an **`Outlet`** component to render nested routes dynamically.  

- The parent layout remains constant  
- Only the `Outlet` content changes  

### Example:

```jsx
function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Child components will render here */}
    </div>
  );
}
```

## 📌 URL Parameters with `useParams`

React Router allows extracting parameters from the URL using the **`useParams`** hook.

### Example:
```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  return <h2>User ID: {userId}</h2>;
}
```

## 📡 Data Loading with `loader` and `useLoaderData`

React Router supports **loaders** for fetching data (from APIs or databases) before rendering a component.  

The **`useLoaderData`** hook allows accessing the fetched data inside the component.

### Example:
```jsx
import { useLoaderData } from "react-router-dom";

export async function userLoader() {
  const res = await fetch("/api/user");
  return res.json();
}


function User() {
  const data = useLoaderData();
  return <h2>{data.name}</h2>;
}

const router = createBrowserRouter([
  { path: "/user", element: <User />, loader: userLoader },
]);
```

## ⚡ Hooks in React Router

Hooks are functions that bring functionality into React applications.

### Common React Router hooks:
- `useParams()` → Access route parameters  
- `useLoaderData()` → Access data from a loader  
- `useNavigate()` → Navigate programmatically  



