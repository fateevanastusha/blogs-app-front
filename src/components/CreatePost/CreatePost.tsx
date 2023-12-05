import React from "react";
import styles from './CreatePost.module.css'

export const CreatePost = () => {
    return (
        <div className={styles.post_input}>
            <h4 className={styles.post_input_title}>Create new post</h4>
            <input className={styles.post_input_field}
                   placeholder={"Type text here"}
                   maxLength={600}
                   type={"text"}/>
            <div className={styles.post_input_lable}>max symbols is 600...</div>
        </div>
    )
}