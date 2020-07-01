import React from "react";
import logo from "./S.001.png";
import {Link} from "react-router-dom";

export const Header = ({children}) => {

    return (
        <header className="header__background">
            <div className="container header">
                <Link to={"/"} className="logo-container">
                    <img alt={"Logo"} src={logo} className={"logo"}/>
                    <p className={"logo-text"}>piral Notes</p>
                </Link>
                {children}
            </div>
        </header>
    )
}