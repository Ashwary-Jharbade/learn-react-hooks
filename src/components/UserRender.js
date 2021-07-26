import React,{ useEffect , useState } from "react"
import DummyData from "../data/DummyData"

const UserRender = (props) =>{
    const [ user , setUser ] = useState(null)

    const fetchUserData = async(id) =>{
        // documentation approach
        // const response = await fetch("/"+ props.id) 
        // setUser(await response.json())

        // looping over dummy data rather than calling api
        const response = DummyData.users.filter(user => user.id === parseInt(id)).map(user=>{ return user })
        console.log(response[0]);
        setUser(response[0])
    }

    useEffect(()=>{
        fetchUserData(props.id)
    },[props.id])

    if(!user){
        return "loading...."
    }

    return(
        <>
            <details>
                <summary>{user.name}</summary>
                <strong>{user.age}</strong> years old
                <br />
                Profession is {user.profession}
            </details>
        </>
    )
}

export { UserRender as default }