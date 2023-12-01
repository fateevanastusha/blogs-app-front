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
                    <div className={"blogs_block"}>
                        <div className={"blog"}>
                            <h4 className={"blog_title"}>ABOUT MY WAY</h4>
                            <div className={"blog_text"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}