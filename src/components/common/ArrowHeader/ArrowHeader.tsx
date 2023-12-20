import styles from './ArrowHeader.module.css'
import React from "react";

export const ArrowHeader = () => {
    return (
        <div className={styles.header}>
            <img src={'/backArrow.png'} alt={"back"}/>
        </div>
    )
}