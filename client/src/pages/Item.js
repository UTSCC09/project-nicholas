import "../css/Item.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Item(){

    const [item, setItem] = useState({});
    const [ownerName, setOwnerName] = useState("");

    const { id } = useParams();
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
                getSellerName(res[0].ownerId);
            })
        } catch (err){

        }
    }

    const getSellerName = async (ownerid) => {
        try{
            await fetch(`${process.env.REACT_APP_PUBLIC_BACKEND}/api/users/${ownerid}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => res.json())
            .then((res) => {
                setOwnerName(res[0].email);
            })
        } catch (err){

        }
    }

    return(
        <div className="item_display">
            <div className="item_image">
                <h1>{item.name}</h1>
                <h2>Size US{item.size}</h2>
                <img src={item.file}/>
            </div>
            
            <div className="item_description">
                <h3>Sold by Seller: {ownerName}</h3>
                <h3>Price: CA${item.price}</h3>
                <button>
                    Add to Cart
                </button>
                <button>
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default Item;