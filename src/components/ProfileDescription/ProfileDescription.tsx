import React from "react";
import styles from './ProfileDescription.module.css'

export const ProfileDescription = () => {
    return (
        <div className={styles.aboutMe}>
            <h1 className={styles.title}>
                About me
            </h1>
            <div className={styles.text}>
                Hi! I'm Fullstack developer
            </div>
        </div>
    )
}