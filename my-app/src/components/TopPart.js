import React from "react"
import photoGrid from "../images/photo-grid.png"

export default function TopPart() {
    return (
        <section className="hero">
           <img className="photo-grid" src={photoGrid} alt="grid of photos" />
           <h1>Online Experiences</h1>
           <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}