import React from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
    return (
        <section>
            <div>
                <h2>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link to="create">Cadastro</Link>
            </div>
        </section>
    );
};

export default LoginForm;
