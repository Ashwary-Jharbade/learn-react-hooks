import React , { useState , useEffect } from "react"

const LoadScript = (props) => {
    if( props.id !== "script-loader" || props.googleMapsApiKey !== "123" ) {
        return "Key or Script Id does not match...."
    }
    return(
        <>
            <div style={{ backgroundColor:"#a1f1a1",padding:"20px" }}>
                <legend>Map</legend>
                {props.children}
            </div>
        </>
    )
}


const GoogleMap = (props) => {
    const [ coor , setCoor ] = useState(null)

    const checkId = (id,center) =>{
        if(id === "example-map"){
            setCoor(center)
        }
    } 

    useEffect(()=>{
        checkId(props.id,props.center)
    },[props])

    if(!coor){
        return "Map Id does not match..."
    }

    return(
        <>
            <p>lat:long - {coor.lat}:{coor.long} </p>
        </>
    )
}

export { LoadScript , GoogleMap}


