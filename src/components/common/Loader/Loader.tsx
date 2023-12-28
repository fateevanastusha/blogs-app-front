import styles from './Loader.module.css'
import React from "react";

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={"/loader.png"} alt={"loadings"}/>
        </div>
    )
}