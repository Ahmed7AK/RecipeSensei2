import "./Navbar.css"
import icon from "../images/ninja.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="home-link" to={"/"}>
                <div className="navbar-icon-title">
                    <img className="navbar-icon" src={icon} alt={"Ninja icon"}></img>
                    <p className="navbar-title">Recipe Sensei</p>
                </div>
            </Link>
            <div className="navbar-options">
                <Link className="link" to={"/random"}>Random Recipe</Link>
                <Link className="link" to={"/recipes"}>Recipes</Link>
            </div>
        </div>
    );
}
export default Navbar;