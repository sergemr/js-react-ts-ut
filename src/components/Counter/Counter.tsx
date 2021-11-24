import React from 'react';
import styles from './Counter.module.scss';

const Counter: React.FC = () => {

  const [count, setCount] = React.useState(0);
  return (
    <div className={styles.Counter} data-testid="Counter">
      <button onClick={()=>setCount(count+1)}>Add One</button>
      <button onClick={()=>setCount(count-1)}>Minus One</button>
      <div role="contentinfo">Count is: {count}</div>
    </div>
  );
  
}
export default Counter;
