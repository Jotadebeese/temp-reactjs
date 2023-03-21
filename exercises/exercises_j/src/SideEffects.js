import React from "react"

export default function SideEffects() {

    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    // Side effects
    React.useEffect(function() {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    return (
        <div>
            <h3>Character {count}</h3>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Next Character</button>
            <button onClick={() => setCount(prevCount => 1)}>Reset</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>   
    )
}