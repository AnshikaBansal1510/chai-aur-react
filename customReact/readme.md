# React JSX and React Element Explained

## How JSX Works Behind the Scenes

- **React uses a bundler** (like Webpack, Vite, or Parcel) to handle **syntax transformations** and **code bundling**.
- **JSX (JavaScript XML)** is **not understood by browsers directly**. It needs to be compiled into plain JavaScript before execution.
- The bundler (along with Babel) **converts JSX syntax into a tree-like object structure** that React can understand and render.

---

## JSX is Just Syntactic Sugar

- At the end of the day, a **JSX component is simply a function** that returns a React element.
- JSX expressions like:

  ```jsx
  const element = <h1 className="title">Hello React!</h1>;
  
---

are transformed by Babel into:

```javascript
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello React!'
);
```
