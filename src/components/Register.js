import React, { useState } from "react";


const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmitHandler (event) {
        event.preventDefault();
        try {
            const response = await fetch(
                "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
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
        <div>

            <form id="loginPage" onSubmit={formSubmitHandler}>
                <label id="username">Enter New Username Here</label>
                <input type="text" value={username} onChange={updateUsernameState}></input>
                
                <br/>

                <label id="password">Enter New Password Here</label>
                <input type="text" value={password} onChange={updatePasswordState}></input>

                <br/>

                <button type="submit">Register For New Account</button>
            </form>
        </div>
    )
}

export default RegisterForm;