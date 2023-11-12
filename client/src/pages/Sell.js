import { useState } from "react";
import useAuth from '../authentication/useAuth';

import "../css/Sell.css";

export default function Sell() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [image, setImage] = useState(null);

    const auth = useAuth();

    async function submit(e){
        e.preventDefault();
        const userID = auth.auth._id;
        try{
            console.log(name, price, size, image, userID);
        } catch (e) {

        }
    }

    return (
        <div className = "sell">
            <h1>
                Put an Item up for Sale
            </h1>
            <form>
                <div className="txt_field">
                    <input 
                        type="text" 
                        onChange={(e)=>{setName(e.target.value)}} 
                        placeholder="Name of Product" 
                        required 
                        className="userinputs"
                    />
                </div>
                <div className="txt_field">
                    <input 
                        type="text" 
                        onChange={(e)=>{setPrice(e.target.value)}} 
                        placeholder="Price of Product" 
                        required 
                        className="userinputs"
                    />
                </div>
                <div className="txt_field">
                    <input 
                        type="text"
                        onChange={(e)=>{setSize(e.target.value)}} 
                        placeholder="Size of Product" 
                        required 
                        className="userinputs"
                    />
                </div>
                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        setImage(event.target.files[0]);
                    }}
                />
                <input type="submit" onClick={submit} />
            </form>
        </div>
        
    )
}