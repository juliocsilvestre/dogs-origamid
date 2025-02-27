import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
    const location = useLocation();
    console.log("Rota atual:", location.pathname);
    return (
        <div>
            <Routes>
                <Route index element={<LoginForm />} />
                <Route path="create" element={<LoginCreate />} />
                <Route path="lost-password" element={<LoginPasswordLost />} />
                <Route path="reset-password" element={<LoginPasswordReset />} />
            </Routes>
        </div>
    );
};

export default Login;
