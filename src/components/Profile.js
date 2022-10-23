import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";

const profilePage = () => {
    const [otherPosts, setOtherPosts] = useState([])
    const [myMessages, setMyMessages] = useState([])
    const [yourPosts, setYourPosts] = useState([])
    const navigate = useNavigate()
    const [filteredArr, setFilteredArr] = useState([])
    

    useEffect(() => {

        if (yourPosts.length) {
            const newArr = yourPosts.filter((post) => post.active) 
            setFilteredArr(newArr)
        }

    },[yourPosts])
    

    useEffect(() => {

        async function fetchProfileData() {
            
            try {

                const response = await fetch(
                    'https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me', 
                    {
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Bearer ${localStorage.getItem("token")}`
                        },
                    }
                );
                const data = await response.json();
                console.log("this is the profile data: ", data.data)
                setMyMessages(data.data.messages)
                setYourPosts(data.data.posts)
            } catch (error) {
                console.log(error);
            }
        }
        fetchProfileData();
    }, [])

        async function deletePost(id) {
            console.log(id)
            try {
                const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                })
                const data = await response.json()
                console.log(data)
                setOtherPosts(otherPosts.filter((post) => {
                    return post._id != id
                }))
                setYourPosts(yourPosts.filter((post) => {
                    return post._id != id
                }))
                navigate("/profile")

            } catch (error) {
                console.log(error)
        }
    }

    // async function createEdit (event) {
    //     event.preventDefault();
    //     try {
    //         const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${props.indivPost._id}`,{
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`
    //             },
    //             body: JSON.stringify({
    //                 post: {
    //                     title
    //                 }
    //             })
    //         })

    //         const editPosts = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/`);
    //         const translatedEditPosts = await editPosts.json();

    //         props.setProfileData([...translatedEditPosts.data.posts])
    //         props.handleToggleEditForm();

    //         navigate("/profile")
    //     }   catch (error) {
    //         console.log(error);
    //     }
    // }
    
console.log(yourPosts)
console.log(filteredArr)    
    return (
        <div>
            <p>Your Profile </p>
            <div>
            {
            myMessages.length ? myMessages.map((message, idx) => {
                return <div key={idx}>
                    <p>{message.content}</p>
                </div>;
            }) : <p>No Messages Today!</p>
            }
            {
            filteredArr.length ? filteredArr.map((post, idx) => {
                return <div key={idx}>
                    <p>{post.title}</p>
                    <button onClick={(event) => {
                        event.preventDefault();
                        deletePost(post._id);
                    }}>Remove Post</button>
                    <Link to={`/editPosts/${post._id}`}>Edit Post</Link>
                </div>;
            }) : <p>You have not posted anything!</p>
            }
            {/* {
                <div>
                <p>Edit Post</p>
                <form onSubmit={createEdit}>
                    <label>Edit Title</label>
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                    <button type="Submit">Submit New Post</button>
                </form>
            </div>
            } */}

        </div>
        <Link to="/newPosts">Create New Post</Link> 
        </div>
        )
}



export default profilePage;