import styles from './Login.module.css'
import React from "react";
import {ArrowHeader} from "../../../components/common/ArrowHeader/ArrowHeader";

export const Login = () => {
    return (
        <div className={styles.wrapper}>
            <ArrowHeader/>
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
                <div className={styles.checkBox}>
                    <label className={styles.containerCheck}> Keep me signed in
                        <input type="checkbox"/>
                        <span className={styles.checkmark}></span>
                    </label>
                    <div className={styles.forgetPassword}>Forgot password?</div>
                </div>


                <div className={styles.button}>
                    <input type={"button"} className={styles.submit} value={"Sign In"}/>
                </div>
            </div>
        </div>
    )
}