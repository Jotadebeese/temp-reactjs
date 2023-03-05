import React from "react"
import logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="nav--icon" src={logo} alt="Logo" />
        </nav>
    )
}