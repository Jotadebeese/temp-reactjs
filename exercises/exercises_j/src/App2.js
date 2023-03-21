import React from "react"
import WindowTracker from "./WindowTracker"

export default function App2() {  

    const [show, setShow] = React.useState(true)

    return (
        <div className="window--container">
            <button className="window--button" onClick={() => setShow(prevShow => !prevShow) }>
                Toggle WindowTracker
            </button>

            {show && <WindowTracker />}
        </div>
    )
}