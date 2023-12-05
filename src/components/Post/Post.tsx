import React from "react";
import styles from './Post.module.css'

export const Post = () => {
    return ( 
        <div>
            <div className={styles.post}>
                <h4 className={styles.title}>ABOUT MY WAY</h4>
                <div className={styles.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</div>
                <div className={styles.post_images}>
                    <img src={"/img_1_test.png"} alt={"post_image"}/>
                    <img src={"/img_2_test.png"} alt={"post_image"}/>
                    <img src={"/img_3_test.png"} alt={"post_image"}/>
                    <img src={"/img_4_test.png"} alt={"post_image"}/>
                </div>
                <div className={styles.comments_block}>
                    <div className={styles.comments_title}>comments</div>
                    <div className={styles.comment}>
                        <div className={styles.commentator_info}>
                            <img src={"/face_avatar.png"} alt={"avatar"}/>
                            <div className={styles.comment_title}>John Smith</div>
                            <div className={styles.comment_time}>19:38</div>
                        </div>
                        <div className={styles.comment_text}>Wow! Its so beautiful!</div>
                    </div>
                </div>
            </div>
            <div className={styles.post}>
                <h4 className={styles.title}>WHAT I LOVE</h4>
                <div className={styles.text}>Freshwater shark Moorish idol kokopu clingfish pumpkinseed stonecat smelt-whiting featherfin knifefish. Antarctic icefish Pacific viperfish--silver carp sabertooth fish loach goby white shark, giant danio central mudminnow; spadefish clown triggerfish ladyfish? Pirate perch medusafish horsefish ridgehead sailbearer goblin shark. Ghost knifefish clown loach four-eyed fish loach catfish prickly shark anemonefish Alaska blackfish yellowhead jawfish.</div>
                <div className={styles.post_images}>
                    <img src={"/img_1_test.png"} alt={"post_image"}/>
                    <img src={"/img_2_test.png"} alt={"post_image"}/>
                    <img src={"/img_3_test.png"} alt={"post_image"}/>
                    <img src={"/img_4_test.png"} alt={"post_image"}/>
                </div>
            </div>
        </div>
    )
}