import React from 'react';

import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {

    const headerStyle = {
        position: 'relative',
        width: "100%",
        justifyContent: 'left',
        backgroundImage: `url("https://i.pinimg.com/474x/8d/9c/26/8d9c2677718c1a9934e134e3f0bf2237.jpg")`,
        top: 0,
        color: "red",
        marginTop: "1000px;"

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
        <div style={{marginTop: "790px", background:"black"}}>
            <footer>
                <h1>Urban Repair</h1>
            </footer>
        </div>
    )

}

export default Footer;