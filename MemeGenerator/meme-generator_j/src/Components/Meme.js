import React from "react"

export default function Meme() {

    const [imageURL, setImageURL] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setImage(namesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input"
                    placeholder="Top Text"
                />
                <input 
                    type="text" 
                    className="form--input"
                    placeholder="Bottom Text"
                />
                <button
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image 🌅
                </button>
                <img src={imageURL} />
            </div>
        </main>
        
    )
}