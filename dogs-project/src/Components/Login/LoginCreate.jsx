import React from "react";
import { Link } from "react-router-dom";
const LoginCreate = () => {
    return (
        <section>
            <div>
                <h2>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link to="/login">Cadastro</Link>
            </div>
        </section>
    );
};

export default LoginCreate;
