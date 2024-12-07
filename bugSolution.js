```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let cleanupRan = false;
    const intervalId = setInterval(() => {
      console.log('Interval running:', count);
    }, 1000);

    return () => {
      cleanupRan = true; // Flag to indicate cleanup ran
      clearInterval(intervalId);
      console.log('Cleanup function ran:', cleanupRan);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default MyComponent;
```