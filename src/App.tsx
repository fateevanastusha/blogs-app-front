import React from 'react';
import './App.css'
import {Main} from "./pages/Main/Main";
import {Registration} from "./pages/Auth/Registration/Registration";
import {Login} from "./pages/Auth/Login/Login";
import {ForgetPassword} from "./pages/Auth/ForgetPassword/ForgetPassword";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {CreatePost} from "./components/CreatePost/CreatePost";
import {Welcome} from "./pages/Welcome/Welcome";
import {ConfirmCode} from "./pages/Auth/ConfirmCode/ConfirmCode";

function App() {
    return (<Router>
            <div className={"container"}>
                <Routes>
                    <Route path={"/"}>
                        <Route path={"/"} element={<Navigate to={"/welcome"} replace/>}/>
                        <Route path={"/welcome"} element={<Welcome/>}/>
                        <Route path={"/my-blog"} element={<Main/>}/>
                        <Route path={"/create-post"} element={<CreatePost/>}/>
                        <Route path={"/registration"} element={<Registration/>}/>
                        <Route path={"/confirm_code"} element={<ConfirmCode/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/forget-password"} element={<ForgetPassword/>}/>
                    </Route>
                </Routes>
            </div>
        </Router>);
}

export default App;
