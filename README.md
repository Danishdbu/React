# ReactJS Notes: Beginner to Advanced

## 1. What is React?
React is a JavaScript library developed by Facebook for building user interfaces, especially for single-page applications where the UI needs to update dynamically without reloading the page. It allows developers to create reusable components, making code modular and easier to maintain. React uses a virtual DOM to efficiently update only the parts of the UI that change, improving performance.

**Why Use React?**
- Fast: Updates the UI efficiently using the virtual DOM.
- Reusable: Components can be reused across the app.
- Declarative: You describe what the UI should look like, and React handles the rest.

**Example**:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, React!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```
**Explanation**: This code creates a simple React component called `App` that displays "Hello, React!" on the webpage. `ReactDOM.render` mounts the component to a DOM element with the ID `root`.

---

## 2. Create React App (CRA) / Vite Setup
Create React App (CRA) and Vite are tools that simplify setting up a React project by providing pre-configured environments with tools like Webpack or ESBuild, Babel, and a development server.

- **CRA**: Ideal for beginners, it sets up a complete React environment with no configuration needed. It includes a development server, hot reloading, and build scripts.
- **Vite**: A modern, faster alternative to CRA. It uses ESBuild for quick builds and supports modern JavaScript features out of the box.

**CRA Setup**:
```bash
npx create-react-app my-app
cd my-app
npm start
```
**Vite Setup**:
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```
**Explanation**: 
- For CRA, `npx create-react-app my-app` creates a new project with all necessary dependencies and scripts. `npm start` runs the development server.
- For Vite, the setup command creates a lightweight project, and `npm run dev` starts a fast development server. Vite is preferred for larger projects due to its speed.

---

## 3. JSX (JavaScript XML)
JSX is a syntax that combines HTML-like code with JavaScript, making it easier to write UI elements in React. It’s not HTML but gets compiled into JavaScript function calls by tools like Babel. JSX allows you to embed JavaScript expressions inside curly braces `{}`.

**Key Points**:
- JSX must return a single parent element.
- You can use JavaScript logic (like variables or loops) inside JSX.
- It’s more intuitive than writing raw JavaScript to create UI elements.

**Example**:
```jsx
function Welcome() {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
}
```
**Explanation**: The `Welcome` component uses JSX to render a heading with the variable `name` inside curly braces. JSX makes the code look like HTML but is actually JavaScript under the hood.

---

## 4. React Components
Components are the building blocks of a React application. They are reusable pieces of UI that can be composed together to create complex interfaces. Components can be functional (written as functions) or class-based (less common today).

**Key Points**:
- Components accept inputs (props) and return JSX to describe the UI.
- They can manage their own state or rely on parent components.
- Functional components are simpler and preferred in modern React.

**Example**:
```jsx
function Button() {
  return <button>Click Me</button>;
}
```
**Explanation**: The `Button` component is a simple functional component that renders a `<button>` element. You can reuse this component anywhere in your app.

---

## 5. Functional Components
Functional components are JavaScript functions that return JSX. Since the introduction of React Hooks, they are the standard way to write components, replacing class-based components in most cases.

**Why Functional Components?**
- Simpler syntax compared to class components.
- Support hooks for state and side effects.
- Easier to read and test.

**Example**:
```jsx
function Greeting() {
  return <p>Welcome to React!</p>;
}
```
**Explanation**: The `Greeting` component is a function that returns a paragraph element. It’s a standalone piece of UI that can be reused or nested in other components.

---

## 6. Props
Props (short for properties) are read-only inputs passed to components to customize their behavior or display. They allow components to be dynamic and reusable.

**Key Points**:
- Props are passed as attributes to a component.
- They are immutable within the component.
- You can pass any data type (strings, numbers, objects, functions) as props.

**Example**:
```jsx
function User(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<User name="Alice" />;
```
**Explanation**: The `User` component receives a `name` prop and displays it in a heading. The parent component passes `"Alice"` as the `name` prop.

---

## 7. Children Props
The `children` prop represents the content passed between a component’s opening and closing tags. It’s useful for creating flexible, reusable components like wrappers or layouts.

**Key POINTS**:
- `children` can be any JSX, text, or components.
- It allows components to act as containers for other content.

**Example**:
```jsx
function Card({ children }) {
  return <div style={{ border: '1px solid black', padding: '10px' }}>{children}</div>;
}

<Card><p>This is inside the card!</p></Card>
```
**Explanation**: The `Card` component wraps its `children` (a paragraph) in a styled `<div>`. The `children` prop makes the `Card` reusable for any content.

---

## 8. useState Hook (State Management)
The `useState` hook adds state to functional components, allowing them to store and update data. It returns a state variable and a function to update it.

**Key Points**:
- State is local to the component.
- Updates to state trigger a re-render.
- You can have multiple `useState` calls in one component.

**Example**:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
**Explanation**: `useState(0)` initializes `count` to 0. The `setCount` function updates `count` when the button is clicked, causing the component to re-render with the new value.

---

## 9. Event Handling (onClick, onChange, etc.)
React handles events like clicks, input changes, or form submissions using camelCase event handlers (e.g., `onClick`, `onChange`). Event handlers are functions that run when an event occurs.

**Key Points**:
- Event handlers are passed as props to elements.
- Events in React are synthetic but mimic native DOM events.
- Use `e.preventDefault()` to prevent default browser behavior (e.g., form submission).

**Example**:
```jsx
function Button() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```
**Explanation**: The `onClick` event is attached to the button and triggers the `handleClick` function, showing an alert when clicked.

---

## 10. Conditional Rendering
Conditional rendering allows you to show or hide UI elements based on conditions, using JavaScript operators like `if`, ternaries, or logical `&&`.

**Key Points**:
- Use ternary operators (`?:`) or `&&` for concise inline conditions.
- Conditional rendering is declarative, fitting React’s style.
- Avoid complex logic in JSX for readability.

**Example**:
```jsx
function LoginStatus({ isLoggedIn }) {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
}
```
**Explanation**: The component checks the `isLoggedIn` prop and renders a different message based on its value using a ternary operator.

---

## 11. Lists and Keys
React can render lists of elements using JavaScript’s `map` function. Each list item must have a unique `key` prop to help React efficiently update the DOM.

**Key Points**:
- Keys should be unique and stable (e.g., use item IDs, not indices if the list can change).
- Keys help React identify which items have changed, added, or removed.
- Avoid using random keys, as they cause performance issues.

**Example**:
```jsx
function ItemList() {
  const items = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```
**Explanation**: The `map` function creates a `<li>` for each item in the `items` array. The `key={index}` prop ensures React tracks each list item.

---

## 12. Basic Forms in React
Forms in React handle user input using state for controlled forms or refs for uncontrolled forms. Controlled forms are more common for predictable behavior.

**Key Points**:
- Use state to manage input values in controlled forms.
- Handle form submissions with `onSubmit` and prevent default behavior.
- Validate or process form data in the submission handler.

**Example**:
```jsx
import { useState } from 'react';

function Form() {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted: ${input}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```
**Explanation**: The input’s value is tied to the `input` state, updated via `onChange`. The `handleSubmit` function processes the form data when submitted.

---

## 13. useEffect Hook (Side Effects)
The `useEffect` hook manages side effects like fetching data, setting up subscriptions, or updating the DOM. It runs after every render by default or when specific dependencies change.

**Key Points**:
- `useEffect` takes a callback function and an optional dependency array.
- The dependency array controls when the effect runs.
- Return a cleanup function to prevent memory leaks (e.g., clearing timers).

**Example**:
```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return <p>Seconds: {seconds}</p>;
}
```
**Explanation**: `useEffect` sets up a timer that increments `seconds` every second. The empty dependency array `[]` ensures it runs only once on mount, and the cleanup function stops the timer on unmount.

---

## 14. Component Lifecycle (in useEffect)
In functional components, `useEffect` replicates the lifecycle methods of class components (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

**Key Points**:
- Empty dependency array (`[]`): Runs on mount and cleanup on unmount (like `componentDidMount` and `componentWillUnmount`).
- Dependencies in array: Runs when dependencies change (like `componentDidUpdate`).
- Cleanup functions prevent issues like memory leaks or duplicate subscriptions.

**Example**:
```jsx
import { useEffect } from 'react';

function LifecycleDemo() {
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);

  return <p>Lifecycle Example</p>;
}
```
**Explanation**: The `useEffect` logs a message when the component mounts and another when it unmounts, mimicking lifecycle methods.

---

## 15. Controlled vs Uncontrolled Components
- **Controlled Components**: Inputs are fully managed by React state, ensuring predictable behavior.
- **Uncontrolled Components**: Inputs are managed by the DOM, accessed via refs, useful for simple or third-party integrations.

**Key Points**:
- Controlled components use state for input values and `onChange` handlers.
- Uncontrolled components use refs to access DOM values directly.
- Controlled is preferred for form validation and dynamic updates.

**Example (Controlled)**:
```jsx
function ControlledInput() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
```

**Example (Uncontrolled)**:
```jsx
import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);
  function handleClick() {
    alert(inputRef.current.value);
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}
```
**Explanation**: The controlled input syncs its value with state, while the uncontrolled input uses a ref to access the DOM value when the button is clicked.

---

## 16. useNavigate, useParams
These hooks from React Router manage navigation and URL parameters in a React app.

- **useNavigate**: Programmatically navigates to different routes.
- **useParams**: Extracts parameters from the URL.

**Key Points**:
- Requires React Router setup (e.g., `BrowserRouter`).
- `useNavigate` returns a function to navigate to new routes.
- `useParams` returns an object with URL parameters.

**Example**:
```jsx
import { useNavigate, useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // Get URL parameter
  const navigate = useNavigate();

  return (
    <div>
      <p>User ID: {id}</p>
      <button onClick={() => navigate('/home')}>Go Home</button>
    </div>
  );
}
```
**Explanation**: If the URL is `/user/123`, `useParams` extracts `id` as `"123"`. Clicking the button navigates to `/home` using `useNavigate`.

---

## 17. useRef Hook (Persist Values, Access DOM)
The `useRef` hook creates a mutable reference that persists across renders. It’s commonly used to access DOM elements or store values that don’t trigger re-renders.

**Key Points**:
- `useRef` returns an object with a `.current` property.
- Unlike state, changing `.current` doesn’t cause a re-render.
- Ideal for accessing DOM nodes or storing temporary values.

**Example**:
```jsx
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```
**Explanation**: `useRef` creates a reference to the `<input>` element. Clicking the button calls `focus()` on the input via `inputRef.current`.

---

## 18. useContext Hook (Global State Without Props Drilling)
The `useContext` hook accesses a context object to share data (like themes or user info) across components without passing props manually.

**Key Points**:
- Context is created with `createContext`.
- `useContext` retrieves the current context value.
- Eliminates “prop drilling” for global data.

**Example**:
```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemeComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeComponent />
    </ThemeContext.Provider>
  );
}
```
**Explanation**: `ThemeContext` provides a theme value (`"dark"`) to all descendants. `ThemeComponent` uses `useContext` to access it without props.

---

## 19. Lifting State Up
Lifting state up involves moving state to a parent component to share it with multiple child components, enabling synchronized data.

**Key Points**:
- State is managed in the closest common ancestor.
- Pass state and update functions as props to children.
- Useful for coordinating behavior between components.

**Example**:
```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count} setCount={setCount} />
    </div>
  );
}

function Child({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```
**Explanation**: The `count` state lives in `Parent` and is passed to `Child` along with `setCount`. Clicking the button updates the shared state.

---

## 20. React Fragments & React.StrictMode
- **React Fragments**: Allow grouping multiple elements without adding extra DOM nodes, keeping the markup clean.
- **React.StrictMode**: A development tool that highlights potential issues, like deprecated APIs or unsafe lifecycle methods.

**Key Points**:
- Use `<React.Fragment>` or shorthand `<></>` for fragments.
- `React.StrictMode` doesn’t affect production builds but helps catch errors early.
- Fragments are ideal for returning multiple elements from a component.

**Example**:
```jsx
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <React.Fragment>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </React.Fragment>
    </React.StrictMode>
  );
}
```
**Explanation**: The fragment groups two paragraphs without a wrapper `<div>`. `React.StrictMode` wraps the app to enable stricter checks during development.

---

## 21. Custom Hooks
Custom hooks are reusable functions that encapsulate logic using React hooks. They allow you to share stateful logic across components.

**Key Points**:
- Custom hooks start with `use` (e.g., `useCustomHook`).
- They can call other hooks like `useState` or `useEffect`.
- Ideal for extracting repetitive logic, like window resizing or data fetching.

**Example**:
```jsx
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

function Component() {
  const width = useWindowSize();
  return <p>Window width: {width}px</p>;
}
```
**Explanation**: `useWindowSize` is a custom hook that tracks the window’s width using `useState` and `useEffect`. The `Component` uses it to display the width.

---

## 22. Performance Optimization
React provides tools to optimize performance by reducing unnecessary renders or computations. Key techniques include `React.memo`, `useMemo`, and `useCallback`.

**Key Points**:
- Optimize only when needed, as premature optimization can add complexity.
- Use profiling tools (e.g., React DevTools) to identify bottlenecks.
- Focus on components with frequent renders or heavy computations.

---

## 23. React.memo
`React.memo` is a higher-order component that prevents a functional component from re-rendering if its props haven’t changed.

**Key Points**:
- Useful for pure components that render the same output for the same props.
- Only works for props, not state or context changes.
- Improves performance in large component trees.

**Example**:
```jsx
import React from 'react';

const MemoizedComponent = React.memo(({ value }) => {
  console.log('Rendering');
  return <p>Value: {value}</p>;
});
```
**Explanation**: `React.memo` ensures `MemoizedComponent` only re-renders when `value` changes, reducing unnecessary renders.

---

## 24. useMemo
The `useMemo` hook memoizes a value to avoid recalculating it on every render, useful for expensive computations.

**Key Points**:
- Takes a function and a dependency array.
- Only recomputes when dependencies change.
- Saves CPU time for complex calculations.

**Example**:
```jsx
import { useMemo, useState } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    return count * 100; // Simulate expensive calculation
  }, [count]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
**Explanation**: `useMemo` caches `expensiveValue` until `count` changes, preventing the calculation from running on every render.

---

## 25. useCallback
The `useCallback` hook memoizes a function to prevent it from being recreated on every render, useful when passing callbacks to child components.

**Key Points**:
- Takes a function and a dependency array.
- Returns the same function instance unless dependencies change.
- Often used with `React.memo` to optimize child components.

**Example**:
```jsx
import { useState, useCallback } from 'react';

function Button({ onClick }) {
  console.log('Button rendered');
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <Button onClick={handleClick} />;
}
```
**Explanation**: `useCallback` ensures `handleClick` is the same function unless `count` changes, preventing unnecessary re-renders of `Button`.

---

## 26. Error Boundaries
Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI instead of crashing the app.

**Key Points**:
- Only class components can be error boundaries (using `getDerivedStateFromError` or `componentDidCatch`).
- They don’t catch errors in event handlers or async code.
- Useful for graceful error handling in production.

**Example**:
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
```
**Explanation**: If `BuggyComponent` throws an error, `ErrorBoundary` catches it and displays “Something went wrong” instead of crashing.

---

## 27. Code Splitting & Lazy Loading
Code splitting and lazy loading split your app’s JavaScript bundle into smaller chunks, loading them only when needed to improve performance.

**Key Points**:
- Use `React.lazy` to dynamically import components.
- Wrap lazy-loaded components in `Suspense` with a fallback UI.
- Reduces initial load time, especially for large apps.

**Example**:
```jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```
**Explanation**: `LazyComponent` is loaded only when rendered, and `Suspense` shows “Loading...” while it’s being fetched.
