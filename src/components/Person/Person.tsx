import React from 'react';
import styles from './Person.module.scss';

const Person = ({name}:{name:string}) => {
  return (
    <div className={styles.Person} data-testid="Person">
      Person Component
       <div>Name is {name}</div>
       <div role="contentinfo">Lorem Ipsum seta amit</div>
       <div role="main">Main Lorem Ipsum seta amit</div>
    </div>
  );
}

export default Person;
