import React, {useState} from "react"
import "../css/classy-input.css"

const ClassyInput = (props) => {
    const [ val , setVal ] = useState(props.value)
    return(
        <>
            <div className="classy-container">
                <input data-testid="classy_input" type={props.type} name={props.name} value={val} placeholder={props.placeholder} onChange={ (e) => {setVal(e.target.value)}} />
            </div>
        </>
    )
}


export { ClassyInput as default }