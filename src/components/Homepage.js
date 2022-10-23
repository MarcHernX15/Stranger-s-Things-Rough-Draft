import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
    const [strangerThings, setStrangerThings] = useState([])

    useEffect(() => {

        async function fetchStrangerThingsData() {

            try {

                const response = await fetch(
                    'https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/'
                );
                const data = await response.json();
                console.log(data.data)
                console.log(data.data.posts)
                setStrangerThings (data.data.posts)
            } catch (error) {
                console.error(err);
            }
        }
        fetchStrangerThingsData();
    }, [])
    
    

    return (
        <div>
            <p id="title">Welcome to Stranger's Things!</p>
            <Navbar />
            <Outlet context={[strangerThings, setStrangerThings]} />
            
            
        </div>
    )
}

export default Homepage;
