import './Main.css'
import React from "react";

export const Main = () => {
    return (
        <div className={"wrapper"}>
            <div className={"header"}>
                <div className={"header_list"}>
                    <ul>My page</ul>
                    <ul>Settings</ul>
                    <ul>Messages</ul>
                </div>
                <div className={"switch"}>
                    <div className={"current_theme"}/>
                    <div className={"switch_theme"}/>
                </div>
            </div>
            <div className={"content"}>
                <div className={"user_info"}>
                    <img src={"./nastya.jpg"}/>
                    Анастасия Фатеева
                </div>
                <div className={"blog_content"}>
                    <div className={"about_me"}>
                        <h1 className={"about_me_title"}>
                            About me
                        </h1>
                        <div className={"about_me_text"}>
                            Hi! I'm Fullstack developer
                        </div>
                    </div>
                    <div className={"post_input"}>
                        <h4 className={"post_input_title"}>Create new post</h4>
                        <input className={"post_input_field"}
                                placeholder={"Type text here"}
                                maxLength={600}
                                type={"text"}/>
                        <div className={"post_input_lable"}>max symbols is 600...</div>
                    </div>
                    <div className={"posts"}>
                        <div className={"post"}>
                            <h4 className={"post_title"}>ABOUT MY WAY</h4>
                            <div className={"post_text"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</div>
                            <div className={"post_images"}>
                                <img src={"/img_1_test.png"} alt={"post_image"}/>
                                <img src={"/img_2_test.png"} alt={"post_image"}/>
                                <img src={"/img_3_test.png"} alt={"post_image"}/>
                                <img src={"/img_4_test.png"} alt={"post_image"}/>
                            </div>
                            <div className={"comments_block"}>
                                <div className={"comments_title"}>comments</div>
                                <div className={"comment"}>
                                    <div className={"commentator_info"}>
                                        <img src={"/face_avatar.png"} alt={"avatar"}/>
                                        <div className={"comment_title"}>John Smith</div>
                                        <div className={"comment_time"}>19:38</div>
                                    </div>
                                    <div className={"comment_text"}>Wow! Its so beautiful!</div>
                                </div>
                            </div>
                        </div>
                        <div className={"post"}>
                            <h4 className={"post_title"}>WHAT I LOVE</h4>
                            <div className={"post_text"}>Freshwater shark Moorish idol kokopu clingfish pumpkinseed stonecat smelt-whiting featherfin knifefish. Antarctic icefish Pacific viperfish--silver carp sabertooth fish loach goby white shark, giant danio central mudminnow; spadefish clown triggerfish ladyfish? Pirate perch medusafish horsefish ridgehead sailbearer goblin shark. Ghost knifefish clown loach four-eyed fish loach catfish prickly shark anemonefish Alaska blackfish yellowhead jawfish.</div>
                            <div className={"post_images"}>
                                <img src={"/img_1_test.png"} alt={"post_image"}/>
                                <img src={"/img_2_test.png"} alt={"post_image"}/>
                                <img src={"/img_3_test.png"} alt={"post_image"}/>
                                <img src={"/img_4_test.png"} alt={"post_image"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}