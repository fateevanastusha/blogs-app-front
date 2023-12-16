import styles from './Registration.module.css'
import React, {useState} from "react";
import {useRegistrationMutation} from "../../../api/AuthApi";
import {log} from "util";

export const Registration = () => {
    const [registration] = useRegistrationMutation(undefined);
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
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
                        <input
                            className={styles.field}
                            type={"text"}
                            value={login}
                            onChange={(e) => {setLogin(e.target.value)}}
                        />
                    </div>
                    <div className={styles.inputBlock}>
                        Password
                        <input
                            className={styles.field}
                            type={"password"}
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                    <div className={styles.inputBlock}>
                        Email address
                        <input
                            className={styles.field}
                            type={"email"}
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                </div>
                <div className={styles.button}>
                    <input
                        type={"button"}
                        className={styles.submit}
                        value={"Sign Up"}
                        onClick={() => {
                            registration(
                                {
                                    "login": login,
                                    "password": password,
                                    "email": email
                                }
                            )
                        }}
                    />
                </div>
            </div>
        </div>

    )
}