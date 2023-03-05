import React from "react"

export default function Card(probs) {

    return (
        <div className="card-flex">
            <img className="card--pic" src={`../images/${probs.img}`} alt='persona' />
            <div className="card--stats">
                <img className="starIcon" src="images/starIcon.png" alt='icon of a star' /> 
                <span>{probs.rating}</span>
                <span className="gray">({probs.reviewCount}) • </span>
                <span className="gray">{probs.country}</span>
            </div>
            <p>{probs.title}</p>
            <p><b>From ${probs.price}</b> / person</p>
        </div>
    )
}