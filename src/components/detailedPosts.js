import React, { useState, useEffect } from "react";
import { useOutletContext, useParams, Link } from "react-router-dom";

const DetailedPostView = () => {
    const [moreDetails, setMoreDetails] = useState({})
    useEffect(() => {
        for (let i = 0; i < postData[0].length; i++) {
        if(postData[0][i]._id == id) {
            setMoreDetails(postData[0][i])
            break
        }
    }
        
    }, [])

    const postData = useOutletContext();

    const { id } = useParams();

    // const moreDetailed = postData[0][id]
    // console.log("This is the params: ", useParams());
    // console.log("This is our parameter ", id)

    // const theSpecificPost = postData[id];
    // console.log("this is the specific: ", theSpecificPost)

    return (
        <div>
            
            {
                moreDetails.title ?
                <p>Title: {moreDetails.title}</p> :
                <p>No Title...Use Your Imagination</p>
            }
            {
                moreDetails.description ? 
                <p>Description: {moreDetails.description}</p> :
                <p>No description to view.</p>                
            }
            {
                moreDetails.price ? 
                <p>Price: {moreDetails.price}</p>:
                <p>No Price, it's free</p>
            }
            {
                moreDetails.location ?
                <p>Location: {moreDetails.location}</p>:
                <p>Location: By Request</p>
            }
            
            <Link to={`/newmessages/${id}`}>Send a Message</Link>
        </div>
        
        
    )
};

export default DetailedPostView;