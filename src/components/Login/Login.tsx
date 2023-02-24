import React, {ChangeEvent, useState} from 'react';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <div className={"login-container"}>
            <div className={"login-header"}>
                <img id={"header-logo"} src={"https://auth.myefrei.fr/static/media/logo-efrei.65d4f0ab.png"}
                     alt={"Efrei"}/>
                <div id={"header-title"}>
                    <h1>Authentication</h1>
                </div>
            </div>
            <form className={"login-form"}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Login;