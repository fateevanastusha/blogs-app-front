import React from "react";
import styles from './Posts.module.css'
import {Post} from "../Post/Post";

export const Posts = () => {
    return (
        <div className={styles.posts}>
            <h1 className={styles.title}>Posts</h1>
            <Post/>
        </div>
    )
}