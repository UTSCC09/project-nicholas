import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/Navbar.css";

function LoggedInNavbar() {
    let navigate = useNavigate();

    function handleClick(){
        navigate("/");
    }

    const logout = async () => {
        await fetch(`${process.env.REACT_APP_PUBLIC_BACKEND}/api/users/logout`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(res => {
            toast.success(res.msg);
        })
    }

    return(
        <nav>
            <h1 onClick={handleClick}>Project Nicholas</h1>
            <ul className="links">
                <li><Link to="/sell" className="linkitems">Sell Items</Link></li>
                <li><Link to="/profile" className="linkitems">Profile</Link></li>
            </ul>
            <button onClick={logout}>Sign Out</button>
        </nav>
    );
}

export default LoggedInNavbar;