import React from "react";
import styles from './Posts.module.css'
import {Post} from "../Post/Post";
import {Link, Navigate} from "react-router-dom";

export const Posts = () => {
    return (
        <div className={styles.posts}>
            <h1 className={styles.title}>Posts</h1>
            <Link to={"/create-post"} className={styles.button}>
                <div className={styles.createPost}>Create new post</div>
                <img src={'/arrow.png'} alt={"arrow"}/>
            </Link>

            <Post/>
        </div>
    )
}