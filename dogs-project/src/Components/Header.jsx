import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";

const Header = () => {
    return (
        <header className={styles.Header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dogs />
                </Link>
                <Link to="login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
