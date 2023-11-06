import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    async function submit(e) {
        e.preventDefault();
        try{
            await axios.post("http://localhost/3001/api/users/register", {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            })
            .then(res => res.json())
            .then((res) => {
                if(res._id == null){
                    //Alert error
                } else {
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPassword("");
                }
            })
        } catch {

        }
    }

    return (
        <div className="signup">
            <h1>Signup</h1>

            <form>
                <input type="firstname" onChange={(e)=>{setFirstName(e.target.value)}} placeholder="First Name" name="" id="" />
                <input type="lastname" onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last Name" name="" id="" />
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />

                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/login">Login</Link>
        </div>
    );
};

export default Signup;