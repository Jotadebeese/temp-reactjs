import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die--box" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die--number">{props.value}</h2>
        </div>
    )
}