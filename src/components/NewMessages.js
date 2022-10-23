import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const newMessages = () => {
    const [makeMessage, setMakeMessage] = useState("")
    const { id } = useParams ()
    const navigate = useNavigate()
    
    

    async function createNewMessage(event) {
        event.preventDefault();
        // console.log(id)
    
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}/messages`, {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                message: {
                    content: makeMessage
                    }
                })
            })
            const data = await response.json()
            console.log("this is my message ", data)

            navigate("/posts")
        
        } catch (error) {
        console.log(error)
        }
    }
    

    function updateNewMessage(event) {
        setMakeMessage(event.target.value)
        console.log(updateNewMessage)
    }
    


    return (
    <form onSubmit={createNewMessage}>
        <label>Create a New Message: </label>
        <input type="text" value={makeMessage} onChange={updateNewMessage}></input>
        <br />
        <button type="Submit">Post Message</button>
    </form>
    )
}


export default newMessages;