import React from 'react';

import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {

    const headerStyle = {
        position: 'relative',
        width: "100%",
        justifyContent: 'left',
        backgroundImage: `url("https://i.pinimg.com/originals/f1/dd/40/f1dd40d36b17542578727c3d6e863903.jpg")`,
        top: 0,
        color: "red"

    }

    const imageStyle = {
        height: '5%',
        width: '5%',
        marginLeft: '5%',
        marginRight: '1%',
        borderRadius: 80 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light" style={headerStyle}>
                <img src="./logo.png" style={imageStyle} alt="Deutsche Bank Icon"></img>
                    <div>
                        
                       <h1 style={{ marginLeft: "1%" }}><a href="/" className="navbar-brand" style={{ "color": "white" }}>URBAN REPAIR : Holding Hands to create Smart City</a></h1></div>
                    <NavLink style={{ marginLeft: "30%", color: "white", marginTop:"15px"  }} className="nav-link" to="/home">
                        <h6>Register</h6>
                    </NavLink>
                    <NavLink style={{ marginLeft: "1%", color: "white", marginTop:"15px" }} className="nav-link" to="/home">
                        <h6>Log In</h6>
                    </NavLink>
                    <NavLink style={{ marginLeft: "1%", color: "white", marginTop:"15px" }} className="nav-link" to="/game-vendor">
                        <h6>About Us</h6>
                    </NavLink>
                    <NavLink style={{ marginLeft: "1%", color: "white", marginTop:"15px" }} className="nav-link" to="/platform">
                        <h6>FAQ</h6>
                    </NavLink>
                    
                </nav>
            </header>
        </div>
    )

}

export default Header;