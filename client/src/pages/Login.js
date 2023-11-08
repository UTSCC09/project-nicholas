import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "../css/Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try{
            await fetch(`${process.env.REACT_APP_PUBLIC_BACKEND}/api/users/login`, {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(res => res.json())
            .then((res) => {
                if(res._id == null){
                    //Alert error
                } else {
                    setEmail("");
                    setPassword("");
                }
            })
        } catch {

        }
    }

    return (
        <div className="login">
            <h1>Login</h1>

            <form>
                <div className="txt_field">
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" required className="userinputs"/>
                </div>
                <div className="txt_field">
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" required className="userinputs"/>
                </div>
                
                <input type="submit" onClick={submit} />
            </form>

            <div className="signup_link">
                Not a member? <Link to="/signup" className="link">Signup</Link>
            </div>
        </div>
    );
};

export default Login;