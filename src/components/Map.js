import React from "react"
import { GoogleMap , LoadScript } from "./MyGoogleMaps"

const Map = (props) =>{
    return(
        <>
            <LoadScript id="script-loader" googleMapsApiKey="123">
                <GoogleMap id="example-map" center={props.center}></GoogleMap>
            </LoadScript>
        </>
    )
}

export { Map as default }