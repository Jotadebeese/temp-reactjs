import React from "react"
import Navbar from "./components/Navbar"
import TopPart from "./components/TopPart"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <TopPart />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )

}