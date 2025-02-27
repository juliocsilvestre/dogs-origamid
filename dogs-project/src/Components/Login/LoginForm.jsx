import React from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            console.log("Response:", response);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Data:", data);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <section>
            <div>
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={({ target }) => setUsername(target.value)}
                        value={username}
                    />
                    <input
                        type="password"
                        onChange={({ target }) => setPassword(target.value)}
                        value={password}
                    />
                    <button>Entrar</button>
                </form>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link to="create">Cadastro</Link>
            </div>
        </section>
    );
};

export default LoginForm;
