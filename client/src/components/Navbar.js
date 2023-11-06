import { useNavigate, Link } from "react-router-dom";

function Navbar() {
    let navigate = useNavigate();

    function handleClick(){
        navigate("/");
    }

    return(
        <nav>
            <h1 onClick={handleClick}>Project Nicholas</h1>
            <div className="links">
                <Link to="/contactus">Contact Us</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
            

        </nav>
    );
}

export default Navbar;