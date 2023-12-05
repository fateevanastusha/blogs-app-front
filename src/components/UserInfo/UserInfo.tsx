import React from "react";
import styles from './UserInfo.module.css'

export const UserInfo = () => {
    return (
        <div className={styles.userInfo}>
            <img src={"./nastya.jpg"}/>
            <div className={styles.nickName}>@fateevanastusha</div>
            <div className={styles.city}>Nizhny Novgorod, Russia</div>
        </div>
    )
}