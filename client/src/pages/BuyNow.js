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

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState();
    const [cardMonth, setCardMonth] = useState();
    const [cardYear, setCardYear] = useState();
    const [cardCVV, setCardCVV] = useState();

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
            console.log(cardName, cardNumber, cardCVV, cardMonth, cardYear)
            console.log(auth.auth);
            await fetch(`${process.env.REACT_APP_PUBLIC_BACKEND}/api/items/${id}`, {
                method: "POST",
                body: {

                },
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => res.json())
            .then((res) => {

            })
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
                    <h1>Card Details</h1>
                    <div>
                        <input 
                            type="text" 
                            required 
                            placeholder="Name on Card"
                            onChange={(e)=>{setCardName(e.target.value)}}/>
                        <input 
                            type="text" 
                            required 
                            placeholder="Card Number"
                            onChange={(e)=>{setCardNumber(e.target.value)}}/>
                        <div className="CVVExpiry">
                            <input 
                                type="text" 
                                required 
                                placeholder="CVV"
                                onChange={(e)=>{setCardCVV(e.target.value)}}/>
                            <input 
                                type="text" 
                                required 
                                placeholder="MM"
                                onChange={(e)=>{setCardMonth(e.target.value)}}/>
                            <input 
                                type="text" 
                                required 
                                placeholder="YY"
                                onChange={(e)=>{setCardYear(e.target.value)}}/>
                        </div>
                        
                    </div>
                    <input type="submit" onClick={submit} />
                </form>
            </div>
            <div className="itemdisplay">
                <h1>In Your Bag</h1>
                <div className="pricesdisplay">
                    <div className="itemdisplay_price">
                        <h3>Subtotal</h3>
                        <h3>CA${(Math.round(item.price * 100) / 100).toFixed(2)}</h3>
                    </div>
                    <div className="itemdisplay_price">
                        <h3>Estimated Shipping</h3>
                        <h3>CA$5.00</h3>
                    </div>
                    <div className="itemdisplay_price">
                        <h3>Estimated Tax</h3>
                        <h3>CA${(Math.round(item.price * 0.13 * 100) / 100).toFixed(2)}</h3>
                    </div>
                    <div className="itemdisplay_totalprice">
                        <h2>TOTAL</h2>
                        <h2>CA${(Math.round((item.price * 1.13 + 5) * 100) / 100).toFixed(2)}</h2>
                    </div>
                </div>
                <div className="itemdisplay_item">
                    <img src={item.file}/>
                    <div className="itemdisplay_iteminfo">
                        <h3>{item.name}</h3>
                        <h4>Size: {item.size}</h4>
                        <h4>Qty: 1 @CA${(Math.round(item.price * 100) / 100).toFixed(2)}</h4>
                    </div>
                </div>
                
                

            </div>
        </div>
    )
}

export default BuyNow;