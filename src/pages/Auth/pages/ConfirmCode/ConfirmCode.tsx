import styles from './ConfirmCode.module.css'
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useConfirmationMutation} from "../../../../api/AuthApi";
import {ArrowHeader} from "../../components/ArrowHeader/ArrowHeader";

type Inputs = {
    code : string
}

export const ConfirmCode = () => {
    const [confirmation, {isSuccess}] = useConfirmationMutation(undefined);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        confirmation(data);
        if (isSuccess) {
            window.location.replace("/login")
        }
    }
    return (
        <div className={styles.wrapper}>
            <ArrowHeader/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Just to be sure...</h1>
                    <div>We’ve sent a code to your email.</div>
                </div>
                <div className={styles.block}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputBlock}>
                            Code
                            <input
                                className={errors.code ? `${styles.field} ${styles.error}` : styles.field}
                                type={"text"}
                                {...register("code", {required : true, minLength : 13, maxLength : 13})}
                            />
                            <div className={styles.button}>
                                <input
                                    type={"submit"}
                                    className={styles.submit}
                                    value={"Sign Up"}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}