import React from "react"
import HigherOrder from "./HigherOrder";

const ButtonComp = (props) => {
    return (
        <>
            <button type="button" onClick={ props.counter }> Clicked { props.count} times  </button>
        </>
    )
}

export default HigherOrder(ButtonComp);