import React from "react";
import logo from "./S.001.png";
import {BrowserRouter, NavLink} from "react-router-dom";

export const Menu = () => {

    return (
        <>
            <header className="header__background">
                <div className="container-main header">
                    <div className="logo-container">
                        <img alt={"Logo"} src={logo} className={"logo"}/>
                        <p className={"logo-text"}>piral Notes</p>
                    </div>
                    <nav>
                        <ul className={"menu"}>
                            <BrowserRouter>
                                <NavLink className={"menu__elem"} exact={true} activeClassName='is-active' to={"/"}>
                                    <li >Moje notatki
                                    </li>
                                </NavLink>
                                <NavLink className={"menu__elem"} activeClassName='is-active'to={"/add-note"}>
                                    <li>Dodaj notatkę
                                    </li>
                                </NavLink>
                            </BrowserRouter>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}