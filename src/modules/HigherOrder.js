import React, { useState } from "react"

const HigherOrder = OriginalComponent => {
    const NewComponent = (props) => {
        const [ val , setVal ] = useState(0)

        const incr = () =>{
            setVal(val+1)
        }

        return  <OriginalComponent  count={val} counter = {incr}  />
    }
    return NewComponent
}

export default HigherOrder