import React, { useEffect } from 'react';
import styles from './ApiComponent.module.scss';

const ApiComponent : React.FC = () => {
  const [data, setData] = React.useState<{
    name:string
  }>();
  
  useEffect(() => {
    let isMounted=true
   // fetch('https://api.github.com/users/sergio-morales')
   fetch('/api')
    .then(res => res.json()).then(data => {
      if(isMounted){
        setData(data)
      }
    })
    return () => {
      isMounted=false;
    }
  }, [])
  return (
    <div className={styles.ApiComponent} data-testid="ApiComponent">
      ApiComponent Component
      {data && <div role="contentinfo">Name is {data.name}</div>}
    </div>
  );
}

export default ApiComponent;
