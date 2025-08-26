### Understanding Props in React

- In React, **props are passed as a single object** to a component.  
- You can pass various data types as props, such as **strings, numbers, arrays, or objects**.  
- To access individual values easily, you can use **destructuring** inside the component:

```jsx
function MyComponent({ title, items }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

// Usage:
<MyComponent title="Hello" items={['Apple', 'Banana']} />


### Handling Batched State Updates in React

React's `useState` batches multiple state updates for performance. This means that directly relying on the current state value during successive updates can lead to incorrect calculations.  

To avoid this, always use the **functional update form** of `setState`, which provides the latest state value as a callback parameter:

```jsx
setCount(prevCount => prevCount + 1);
