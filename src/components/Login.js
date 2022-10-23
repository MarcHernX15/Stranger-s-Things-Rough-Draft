import React, {useState} from "react";
import { Link } from "react-router-dom";



const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function loginSubmit (event) {
        event.preventDefault();
        try {
            const response = await fetch(
                "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user: {
                            username: username,
                            password: password
                        }
                    })
                }
            )
            const data = await response.json();
            console.log("This is our translated data: ", data)

                localStorage.setItem("token", data.data.token)

        } catch (error) {
            console.log(error);
        }
    }
    function updateUsernameState(event) {
        console.log("This is the value of the event target: ", event.target.value)
        setUsername(event.target.value)
    }

    function updatePasswordState(event) {
        console.log("This is the value of the event target: ", event.target.value)
        setPassword(event.target.value)
    }

    return (
        <div id="loginPage">

            <form id="login" onSubmit={loginSubmit}>
                <label id="username">Username: </label>
                <input type="text" value={username} onChange={updateUsernameState}></input>
                
                <br/>

                <label id="password">Password: </label>
                <input type="text" value={password} onChange={updatePasswordState}></input>

                <br/>

                <button id="button" type="submit">Log In</button>
            </form>
            <div>
        <p> Don't have a login?</p>
        <Link to="/register">Register here!</Link>
        </div>
        </div>
        
    )
}

export default LoginForm;