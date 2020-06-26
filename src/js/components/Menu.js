import React from "react";
import logo from "./Logo.png";

export const Menu = () => {

return (
    <>
<header className="header">
        <div className="logo-container">
                <img alt={"Logo"} src={logo} className={"logo"}/>
                <p className={"logo-text"}>Spiral Notes</p>
        </div>
        <nav>
                <ul className={"menu"}>
                        <li className={"menu__elem"}><a className={"menu__elem-link"}>Moje notatki</a></li>
                        <li className={"menu__elem"}><a className={"menu__elem-link"}>Dodaj notatkę</a></li>
                </ul>
        </nav>
</header>
        </>
)
}