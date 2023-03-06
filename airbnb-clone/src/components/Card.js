import React from "react"

export default function Card(probs) {
    let badgetText 
    if (probs.item.openSpots === 0) {
        badgetText = "SOLD OUT"
    } else if (probs.item.location === "Online") {
        badgetText = "ONLINE"
    }
    return (
        <div className="card-flex">
            {badgetText && <div className="card--badge">{badgetText}</div>}
            <img className="card--pic" src={`../images/${probs.item.imgUrl}`} alt='persona' />
            <div className="card--stats">
                <img className="starIcon" src="images/starIcon.png" alt='icon of a star' /> 
                <span>{probs.item.stats.rating}</span>
                <span className="gray">({probs.item.stats.reviewCount}) • </span>
                <span className="gray">{probs.item.location}</span>
            </div>
            <p className="card-title">{probs.item.title}</p>
            <p><b>From ${probs.item.price}</b> / person</p>
        </div>
    )
}