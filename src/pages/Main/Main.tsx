import './Main.css'
import React from "react";
import {Header} from "../../components/Header/Header";
import {UserInfo} from "../../components/UserInfo/UserInfo";
import {ProfileDescription} from "../../components/ProfileDescription/ProfileDescription";
import {Posts} from "../../components/Posts/Posts";
import {CreatePost} from "../../components/CreatePost/CreatePost";

export const Main = () => {
    return (
        <div className={"wrapper"}>
            <Header/>
            <div className={"content"}>
                <UserInfo/>
                <div className={"blog_content"}>
                    <ProfileDescription/>
                    <Posts/>
                </div>
            </div>
        </div>
    )
}