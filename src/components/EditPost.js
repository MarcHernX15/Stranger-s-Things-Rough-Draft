import React, { useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

const EditPost = () => {
    // console.log["EditPost props", props]
    const [title, setTitle] = useState("");
    const [strangerThings, setStrangerThings] = useOutletContext()
    const [profileData, setProfileData] = useState([])
    const { id } = useParams()
    const [desc, setEditDesc] = useState("")
    const [price, setEditPrice] = useState("")

    const navigate = useNavigate();

    async function createEdit (event) {
        event.preventDefault();
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: desc,
                        price: price

                    }
                })
            })

            
            const editPosts = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/`);
            const translatedEditPosts = await editPosts.json();


            setProfileData(translatedEditPosts.data.posts)
            setStrangerThings(translatedEditPosts.data.posts)
            

            navigate("/profile")
        }   catch (error) {
            console.log(error);
        }
    }

    function editTitle(event) {
        setTitle(event.target.value)
    }
    function editDesc(event) {
        setEditDesc(event.target.value)
    }
    function editPrice(event) {
        setEditPrice(event.target.value)
    }

    return (
        <div id="editPage">
            <p id="title">Edit Page</p>
            <form onSubmit={createEdit}>
                <label id="username">Edit Title</label>
                <input type="text" value={title} onChange={editTitle}></input>
                <br />
                <label id="username">Edit Description</label>
                <input type="text" value={desc} onChange={editDesc}></input>
                <br />
                <label id="username">Edit Price</label>
                <input type="text" value={price} onChange={editPrice}></input>
                <br />
                <button type="Submit">Submit New Post</button>
            </form>
        </div>
    ) 
        
    
}

export default EditPost;