import React, {useCallback, useState} from "react";
import styles from './CreatePost.module.css'
import { useDropzone } from "react-dropzone";

export const CreatePost = () => {
    const [images, setImages] = useState([]);
    const onDrop = useCallback((acceptedFiles : any) => {
        const filteredFiles = acceptedFiles.filter((file : any) =>
            file.type === "image/png" || file.type === "image/jpeg"
        );
        setImages(filteredFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={'/backArrow.png'} alt={"back"}/>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Create new post</h1>
                </div>
                <div className={styles.inputBlocks}>
                    <div className={styles.block}>
                        <div className={styles.inputBlock}>
                            <div className={styles.blockTitle}>Post title</div>
                            <input className={styles.field} type={"text"}/>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.inputBlock}>
                            <div className={styles.blockTitle}>Short description</div>
                            <textarea className={`${styles.field} ${styles.shortDescription}`}/>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.inputBlock}>
                            <div className={styles.blockTitle}>Type text here...</div>
                            <textarea className={`${styles.field} ${styles.typeText}`}/>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.inputBlock}>
                            <div className={styles.blockTitle}>Add images</div>
                            <div className={styles.blockDescription}>Drag & drop some files here, or click to select files</div>
                            <div {...getRootProps()} className={`${styles.dropzone} ${isDragActive ? styles.active : ""}`}>
                                <input {...getInputProps()} />
                                {images.length > 0 ? (
                                    <div className={styles.uploadedImages}>
                                        {images.map((image, index) => (
                                            <img key={index} src={URL.createObjectURL(image)}
                                                 alt={`uploaded-image-${index}`} className={styles.image}/>
                                        ))}
                                    </div>
                                ) : (<img src={"/image.png"} alt={"image"} className={styles.imageIcon}/>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                    <input value={"Submit"} type={"button"} />
                </div>
            </div>
        </div>

    )
}