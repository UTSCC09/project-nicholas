import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try{
            await axios.post("")
        } catch {

        }
    }

    return (
        <div className="signup">
            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />

                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/login">Login Page</Link>
        </div>
    );
};

export default Login;