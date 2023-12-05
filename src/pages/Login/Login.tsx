import styles from './Login.module.css'
import React from "react";

export const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={'/backArrow.png'} alt={"back"}/>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Welcome back!</h1>
                    <div>Let's get you going</div>
                </div>
                <div className={styles.block}>
                    <div className={styles.inputBlock}>
                        Login Or Email
                        <input className={styles.field} type={"text"}/>
                    </div>
                    <div className={styles.inputBlock}>
                        Password
                        <input className={styles.field} type={"password"}/>
                    </div>
                </div>
                {/*<div className={styles.checkBox}>
                    <input type={"checkbox"}/>
                    <div className="checkbox__checkmark"></div>
                    Keep me signed in
                </div>*/}
                <div className={styles.checkBox}>
                    <div className={styles.round}>
                        <input type="checkbox" checked id="checkbox"/>
                        <label htmlFor="checkbox"></label>
                    </div>
                    Keep me signed in
                </div>

                <div className={styles.button}>
                    <input type={"button"} className={styles.submit} value={"Sign In"}/>
                </div>
            </div>
        </div>
    )
}