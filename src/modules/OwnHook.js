import useDemoState from "./UseDemoState";

const OwnHook = () => {
    const [val , setVal ] = useDemoState(10)
    const counter = () =>{
        setVal(val+1)
    }
    return(
        <div>
            <button type="button" onClick={counter}>Button - {val}</button>
        </div>
    )
}

export default OwnHook