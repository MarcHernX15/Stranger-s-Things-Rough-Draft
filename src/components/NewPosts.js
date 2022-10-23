import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const createNewPost = () => {
    const [newPost, setNewPost] = useState([])
    const [newPostTitle, setNewPostTitle] = useState([])
    const [newPostPrice, setNewPostPrice] = useState([])
    const [newPostDesc, setNewPostDesc] = useState([])
    const navigate = useNavigate()

    
        async function createNewPosts(event) {
            event.preventDefault()
            try {
                const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        post: {
                            title: newPostTitle,
                            description: newPostDesc,
                            price: newPostPrice,
                            
                        }
                    })
                })
                const data = await response.json()
                console.log(data)
                setNewPost([...newPost, data.data.post])

                navigate("/posts")
                
            } catch (error) {
                console.log(error)
            }
        
        
        }
        
        function updateTitle(event) {
            setNewPostTitle(event.target.value)
        }
        function updatePrice(event) {
            setNewPostPrice(event.target.value)
        }
        function updateDesc(event) {
            setNewPostDesc(event.target.value)
        }
        

        return (
            <form onSubmit={createNewPosts}>
                <label>Create a New Post!</label>
                <p>Title: 
                <input type="text" value={newPostTitle} onChange={updateTitle}></input>
                <br /> </p>
                <p>Description: 
                <input type="text" value={newPostDesc} onChange={updateDesc}></input>
                <br /> </p>
                <p>Price: 
                <input type="text" value={newPostPrice} onChange={updatePrice}></input>
                <br /> </p>
                <button type="Submit">Submit New Post</button>
            </form>
        )
}
    


export default createNewPost;