import styles from './ForgetPassword.module.css'
import React from "react";

export const ForgetPassword = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={'/backArrow.png'} alt={"back"}/>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Forget password?</h1>
                    <div>We've got you! please enter your email</div>
                </div>
                <div className={styles.block}>
                    <div className={styles.inputBlock}>
                        Email address
                        <input className={styles.field} type={"email"}/>
                    </div>
                </div>
                <div className={styles.button}>
                    <input type={"button"} className={styles.submit} value={"Get code"}/>
                </div>
            </div>
        </div>
    )
}