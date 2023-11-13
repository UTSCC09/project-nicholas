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
            <div className="marketplace_header">
                <h1>Marketplace</h1>
            </div>
            <div className = "items">
                <div className = "item">
                    <img src={require("../images/nike-panda-dunks.jpg")} onClick={imageClick}/>
                    <div className = "item_information">
                        <h4>Nike Dunks Panda</h4>
                        <h3>CA$150</h3>
                    </div>
                </div>
                <div className = "item">
                    <img src={require("../images/luka-2.jpg")} onClick={imageClick}/>
                    <div className = "item_information">
                        <h4>Luka 2 Basketball Shoes</h4>
                        <h3>CA$180</h3>
                    </div>
                </div>
                <div className = "item">
                    <img src={require("../images/ja-morant-1.jpg")} onClick={imageClick}/>
                    <div className = "item_information">
                        <h4>Ja Morant 1 Basketball Shoes</h4>
                        <h3>CA$160</h3>
                    </div>
                </div>
                <div className = "item">
                    <img src={require("../images/air-force-one-supreme.jpg")} onClick={imageClick}/>
                    <div className = "item_information">
                        <h4>Air Force One Supreme</h4>
                        <h3>CA$200</h3>
                    </div>
                </div>
                <div className = "item">
                    <img src={require("../images/sabrina-1.jpg")} onClick={imageClick}/>
                    <div className = "item_information">
                        <h4>Sabrina 1 Basketball Shoes</h4>
                        <h3>CA$220</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;