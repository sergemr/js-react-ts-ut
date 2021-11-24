import React, { Children } from 'react';
import styles from './ButtonWrapper.module.scss';


const ButtonWrapper : React.FC<
    React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    >
    > = ({...props}) => {
    return (
        <button data-testid="ButtonWrapper" className={styles.ButtonWrapper}  {...props}>
         
        </button>
    );
}

export default ButtonWrapper;