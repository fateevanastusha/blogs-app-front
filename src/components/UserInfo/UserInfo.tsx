import React from "react";
import styles from './UserInfo.module.css'

export const UserInfo = () => {
    return (
        <div className={styles.userInfo}>
            <img src={"./nastya.jpg"}/>
            Анастасия Фатеева
        </div>
    )
}