import React from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = React.useState ()

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[randomNumber].url
        }))
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
                <img src={meme.randomImage} />
            </div>
        </main>
        
    )
}