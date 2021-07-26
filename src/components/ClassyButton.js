import React from "react"
import "../css/classy-button.css"

const ClassyButton = (props) => {
    return(
        <>
            <div className="button-styler" style={{ width:`${props.width}`}}>
                { props.text }
                <div className="button-flash"></div>
            </div>
        </>
    )
}

export { ClassyButton as default }