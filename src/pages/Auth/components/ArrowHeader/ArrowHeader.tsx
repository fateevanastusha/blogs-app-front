import styles from './ArrowHeader.module.css'
import React from "react";
import {useNavigate} from "react-router-dom";

export const ArrowHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <img src={'/backArrow.png'} alt={"back"} onClick={() => navigate(-1)}/>
        </div>
    )
}