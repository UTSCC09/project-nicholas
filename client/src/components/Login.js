import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

    }

    return (
        <div className="login">
            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />

                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>
        </div>
    );
};

export default Login;