import React from "react"
import Navbar from "./components/Navbar"
import TopPart from "./components/TopPart"
import Card from "./components/Card"

export default function App() {
    return (
        <div>
            <Navbar />
            <TopPart />
            <Card
                img="persona.png" 
                rating={5.0}
                reviewCount={6}
                location="USA"
                title="Life lessons with Kotie"
                price={136}
            />
        </div>
    )
}