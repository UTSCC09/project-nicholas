import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../authentication/useAuth";
import { toast } from "react-toastify"; 

function BuyNow() {

    const [item, setItem] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [postal, setPostal] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");

    let navigate = useNavigate();
    const { id } = useParams();
    const auth = useAuth();

    useEffect(() => {
        getItem(id);
    }, []);

    const getItem = async (id) => {
        try{
            await fetch(`${process.env.REACT_APP_PUBLIC_BACKEND}/api/items/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => res.json())
            .then((res) => {
                setItem(res[0]);
            })
        } catch (err){

        }
    }

    async function submit(e) {
        e.preventDefault();
        try{
            console.log(item);
            console.log(firstName, lastName, address, postal, country, city, email);
            console.log(auth.auth);
            toast.success("Checkout Successful!");
            navigate("/");
        } catch (err){

        }
    }

    return (
        <div className="buynow">
            <div className="buynowform">
                <form>
                    <h1>Contact Information</h1>
                    <input 
                        type="email" 
                        required 
                        placeholder="Email"
                        onChange={(e)=>{setEmail(e.target.value)}}/>
                    <h1>Shipping Address</h1>
                    <div className="name">
                        <input 
                            type="text" 
                            required 
                            placeholder="First Name"
                            onChange={(e)=>{setFirstName(e.target.value)}}/>
                        <input 
                            type="text" 
                            required 
                            placeholder="Last Name"
                            onChange={(e)=>{setLastName(e.target.value)}}/>
                    </div>
                    <input 
                        type="text" 
                        required 
                        placeholder="Address"
                        onChange={(e)=>{setAddress(e.target.value)}}/>
                    <input 
                        type="text" 
                        required 
                        placeholder="City"
                        onChange={(e)=>{setCity(e.target.value)}}/>
                    <input 
                        type="text" 
                        required 
                        placeholder="Postal Code"
                        onChange={(e)=>{setPostal(e.target.value)}}/>
                    <input 
                        type="text" 
                        required 
                        placeholder="Country"
                        onChange={(e)=>{setCountry(e.target.value)}}/>
                    <input type="submit" onClick={submit} />
                </form>
            </div>
            <div className="itemdisplay">

            </div>
        </div>
    )
}

export default BuyNow;