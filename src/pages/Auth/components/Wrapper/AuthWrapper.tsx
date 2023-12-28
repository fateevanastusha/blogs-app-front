import React, {ReactNode} from "react";
import styles from './AuthWrapper.module.css'
import {ArrowHeader} from "../ArrowHeader/ArrowHeader";

interface IAuthWrapperProps {
    children: ReactNode;
    title: string;
    text : string
}

export const AuthWrapper = (props : IAuthWrapperProps) => {
    const {children, title, text} = props
    return (
        <div className={styles.wrapper}>
            <ArrowHeader/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                    <div>{text}</div>
                </div>
                <div className={styles.block}>
                    {children}
                </div>
            </div>
        </div>
    )
}