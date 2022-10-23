import React, {useState, useEffect} from "react";
import { useOutletContext, Link } from "react-router-dom";

const postsPage = () => {
    // const [strangerThings, setStrangerThings] = useState([])

    // useEffect(() => {
        

    //     async function fetchStrangerThingsData() {

    //         try {

    //             const response = await fetch(
    //                 'https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/'
    //             );
    //             const data = await response.json();
    //             // console.log(data.data)
    //             // console.log(data.data.posts)
    //             setStrangerThings (data.data.posts)
    //         } catch (error) {
    //             console.error(err);
    //         }
    //     }
    //     fetchStrangerThingsData();
    // }, [])
    const postData = useOutletContext()


    return (
        <div id="postsPage">
            <p id="theGoods"> The Goods Are Here. Buy your stuff.</p>
            
            <div id="posts">
                {
                    postData[0].map((indThing, idx) => {
                        // console.log(indThing)
                        return <div id="indivPost" key={idx}>
                            <p>{indThing.title}</p>
                            <Link to={`/posts/${indThing._id}`}>Check It Out!</Link>
                            {/* <p>Location: {indThing.location}</p>
                            <p>Description: {indThing.description}</p>
                            <p>Price: {indThing.price}</p> */}
                            
                    </div>
                    }) 
                }
            </div>
        </div>
    
    )
};

export default postsPage;