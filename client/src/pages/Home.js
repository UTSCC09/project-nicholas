import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../authentication/useAuth"
import "../css/Home.css";

function Home () {

    const location = useLocation();
    const auth = useAuth();
    let navigate = useNavigate();

    const imageClick = () => {
        navigate("/item");
    }

    return (
        <div className = "homepage">
            <div className = "welcome_message">
                <h1>Welcome to Project Nicholas!</h1>
                { Object.keys(auth.auth).length === 0 ? (
                    <h1>You are currently not logged in.</h1>
                ) : (
                    <h1>You are logged in using the email {auth.auth.email}.</h1>
                )}
            </div>

            <div className = "items">
                <div className = "item">
                    <img src={require("../images/nike-panda-dunks.jpg")} onClick={imageClick}/>
                    <div className = "item_information">
                        <h4>Nike Dunks Panda</h4>
                        <h3>CA$150</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;