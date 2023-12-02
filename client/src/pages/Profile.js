import { useState, useEffect } from 'react';
import useAuth from "../authentication/useAuth";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    const [boughtItems, setBoughtItems] = useState({});
    const [sellItems, setSellItems] = useState({});
    const [user, setUser] = useState({});

    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        getUser();
        getBoughtItems();
        getItems();
    }, []);

    const getUser = async () => {
        try{
            await fetch(`${process.env.REACT_APP_PUBLIC_BACKEND}/api/users/${auth.auth._id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => res.json())
            .then((res) => {
                console.log(res);
                setUser(res[0]);
                console.log(user);
            })
        } catch (err) {

        }
    }

    const getBoughtItems = async () => {
        try{
            await fetch(`${process.env.REACT_APP_PUBLIC_BACKEND}/api/boughtitems/user/${auth.auth._id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => res.json())
            .then((res) => {
                console.log(res);
                setBoughtItems(res);
                console.log(boughtItems);
            })
        } catch (err) {

        }
    };

    const getItems = async () => {
        try{
            await fetch(`${process.env.REACT_APP_PUBLIC_BACKEND}/api/items/user/${auth.auth._id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => res.json())
            .then((res) => {
                console.log(res);
                setSellItems(res);
                console.log(sellItems);
            })
        } catch (err) {

        }
    }

    const purchasedImageClick = async (id) => {
        navigate("/receipt/"+id);
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <h1>Currently Listed Items</h1>
            <div className="currentlylisted">

            </div>
            <h1>Past Purchases</h1>
            <div className="pastpurchases">

            </div>
        </div>
        
    )
}