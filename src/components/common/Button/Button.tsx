import styles from './Button.module.css';
import React from "react";

interface IButtonProps {
    text : string;
    filled : boolean;
    type?: 'button' | 'submit';
    action?: () => void
}

export const Button = (props : IButtonProps) => {
    const {text, filled, type = 'button', action} = props
    return (
        <div className={styles.button}>
            <input
                onClick={action}
                className={filled ? styles.filled : styles.not_filled}
                type={type}
                value={text}
            />
        </div>
    )
}