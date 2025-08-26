### Passing Functions with Parameters to `onClick` in React

- The `onClick` prop **expects a function reference**, not the result of a function call.  
- If you directly call the function like `onClick={myFunction(param)}`, it will execute immediately during render instead of on click.  
- To pass parameters correctly, wrap the function call inside an **arrow function**:

```jsx
<button onClick={() => handleClick(id)}>Click Me</button>
