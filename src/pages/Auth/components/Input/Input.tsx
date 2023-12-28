import styles from './Input.module.css'
import React from "react";
import {RegisterOptions, useFormContext} from "react-hook-form";

interface IInputProps {
    title : string;
    name : string;
    rules?: RegisterOptions;
    type? : "password" | "text";
}

export const Input = (props : IInputProps) => {
    const {title, name, rules = {}, type = "text"} = props;
    const { register, formState: {errors} } = useFormContext();
    return (
        <div className={styles.inputBlock}>
            {title}
            <input
                className={errors?.[name] ? `${styles.field} ${styles.error}` : styles.field}
                type={type}
                {...register(name, rules)}
            />
        </div>
    )
}