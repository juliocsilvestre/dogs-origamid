import { useState } from "react";
const TokenPost = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handlesubmit = (event) => {
        event.preventDefault();
        const user = { username, password };
        fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                setToken(json.token);
            });
    };

    return (
        <>
            <form onSubmit={handlesubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button>Enviar</button>
                <p style={{ wordBreak: "break-all" }}>{token}</p>
            </form>
        </>
    );
};

export default TokenPost;
