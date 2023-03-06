import React from "react"

export default function Card(probs) {
    let badgetText 
    if (probs.openSpots === 0) {
        badgetText = "SOLD OUT"
    } else if (probs.location === "Online") {
        badgetText = "ONLINE"
    }
    return (
        <div className="card-flex">
            {badgetText && <div className="card--badge">{badgetText}</div>}
            <img className="card--pic" src={`../images/${probs.imgUrl}`} alt='persona' />
            <div className="card--stats">
                <img className="starIcon" src="images/starIcon.png" alt='icon of a star' /> 
                <span>{probs.stats.rating}</span>
                <span className="gray">({probs.stats.reviewCount}) • </span>
                <span className="gray">{probs.location}</span>
            </div>
            <p className="card-title">{probs.title}</p>
            <p><b>From ${probs.price}</b> / person</p>
        </div>
    )
}