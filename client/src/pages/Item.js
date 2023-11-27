import "../css/Item.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Item(){

    const [item, setItem] = useState({});
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
                console.log(res[0]);
                setItem(res[0]);
                console.log(item);
            })
        } catch (err){

        }
    }

    return(
        <div className="item_display">
            <div className="item_image">
                <h1>Nike Dunks</h1>
                <h2>Panda Colourway</h2>
                <img src={require("../images/nike-panda-dunks.jpg")}/>
            </div>
            
            <div className="item_description">
                <button>
                    Add to Cart
                </button>
                <button>
                    Check out
                </button>
            </div>
        </div>
    )
}

export default Item;