import styles from './Registration.module.css'
import React, {useState} from "react";
import {useRegistrationMutation} from "../../../api/AuthApi";
import { useForm, SubmitHandler } from "react-hook-form"
import {ArrowHeader} from "../../../components/common/ArrowHeader/ArrowHeader";

type Inputs = {
    login : string,
    email : string,
    password : string
}

export const Registration = () => {
    const [registration, {isSuccess}] = useRegistrationMutation(undefined);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        registration(data);
        if (isSuccess) {
            window.location.replace("/confirm_code")
        }
    }
    return (
        <div className={styles.wrapper}>
            <ArrowHeader/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Welcome aboard!</h1>
                    <div>Let's get you going</div>
                </div>
                <div className={styles.block}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputBlock}>
                            Login
                            <input
                                className={errors.login ? `${styles.field} ${styles.error}` : styles.field}
                                type={"text"}
                                {...register("login", {required : true, maxLength: 10, minLength  : 3})}
                            />
                        </div>
                        <div className={styles.inputBlock}>
                            Password
                            <input
                                className={errors.password ? `${styles.field} ${styles.error}` : styles.field}
                                type={"password"}
                                {...register("password", {required : true, maxLength: 20, minLength  : 6})}
                            />
                        </div>
                        <div className={styles.inputBlock}>
                            Email address
                            <input
                                className={errors.email ? `${styles.field} ${styles.error}` : styles.field}
                                type={"text"}
                                {...register("email", {
                                    required : true,
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format",
                                    }
                                })}
                            />
                        </div>
                        <div className={styles.button}>
                            <input
                                type={"submit"}
                                className={styles.submit}
                                value={"Sign Up"}
                            />
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )
}