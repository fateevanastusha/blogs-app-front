import styles from './Registration.module.css'
import React from "react";

export const Registration = () => { 
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={'/backArrow.png'} alt={"back"}/>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Welcome aboard!</h1>
                    <div>Let's get you going</div>
                </div>
                <div className={styles.block}>
                    <div className={styles.inputBlock}>
                        Login
                        <input className={styles.field} type={"text"}/>
                    </div>
                    <div className={styles.inputBlock}>
                        Password
                        <input className={styles.field} type={"password"}/>
                    </div>
                    <div className={styles.inputBlock}>
                        Email address
                        <input className={styles.field} type={"email"}/>
                    </div>
                </div>
                <div className={styles.button}>
                    <input type={"button"} className={styles.submit} value={"Sign Up"}/>
                </div>
            </div>
        </div>

    )
}