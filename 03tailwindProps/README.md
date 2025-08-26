### Handling Batched State Updates in React

React's `useState` batches multiple state updates for performance. This means that directly relying on the current state value during successive updates can lead to incorrect calculations.  

To avoid this, always use the **functional update form** of `setState`, which provides the latest state value as a callback parameter:

```jsx
setCount(prevCount => prevCount + 1);
