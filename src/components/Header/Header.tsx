import React from "react";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.list}>
                <ul>My page</ul>
                <ul>Settings</ul>
                <ul>Messages</ul>
            </div>
            <div className={styles.switch}>
                <div className={styles.current_theme}/>
                <div className={styles.switch_theme}/>
            </div>
        </div>
    )
}