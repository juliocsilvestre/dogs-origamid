import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path="login" element={<LoginForm />} />
                <Route path="/login/create" element={<LoginCreate />} />
                <Route path="/login/lost-password" element={<LoginPasswordLost />} />
                <Route path="/login/reset-password" element={<LoginPasswordReset />} />
            </Routes>
        </div>
    );
};

export default Login;
