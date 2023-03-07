import React from "react"

export default function Header() {
    return (
        <header className="nav--meme">
            <div className="logo--name">
                <img className="nav--logo" src="./images/troll-face.png" alt="Troll face meme" />
                <h2>Meme Generator</h2>
            </div>
            <p>React Course - Project 3</p>
        </header>
    )
}