import React from "react"

import ClassyButton from "./components/ClassyButton";
import UserRender from "./components/UserRender"
import Contact from "./components/Contact";
import ClassyInput from "./components/ClassyInput";
import Card from "./components/Card";

import "./css/app.css"

function App() {
  return (
    <>
    <h1>Learn React</h1>
    <ClassyButton text={"Classy Button"} width={"210px"} />
    <UserRender id="1"></UserRender>
    <UserRender id="3"></UserRender>
    <Contact 
        name="Joni Baez"
        email="test@example.com"
        site="http://test.com" 
        center={{lat:0,long:0}} 
    />

    <ClassyInput value={"hello"} type={"text"} name={"button"} placeholder={"Enter"} />
    <Card onSelect={ (para)=>{return para} } />
    </>
  );
}

export default App;
