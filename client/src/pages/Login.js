import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try{
            await fetch("http://localhost/3001/api/users/login", {
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
                    
                }
            })
        } catch {

        }
    }

    return (
        <div className="login">
            <h1>Login</h1>

            <form>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />

                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup</Link>
        </div>
    );
};

export default Login;