import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from '../authentication/useAuth';

import "../css/Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { setAuth } = useAuth();

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
                console.log(res);
                if(res._id == null){
                    setEmail("");
                    setPassword("");
                    toast.error("Login Failed");
                } else {
                    setEmail("");
                    setPassword("");
                    const _id = res._id;
                    const email = res.email;
                    const role = [1];
                    const token = res.token;
                    setAuth({ _id: _id, email: email, role: role, token: token });
                    toast.success("Successfully Logged In!");
                    navigate('/', {state: {id: res.email}});
                }
            })
        } catch (res){
            console.log(res.message);
            toast.error("An unexpected error has occured. Try again");
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