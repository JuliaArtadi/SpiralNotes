import React from "react";
import {NavLink} from "react-router-dom";

export const Menu = () => {

    return (
        <>
            <nav>
                <div className={"menu"}>
                    <NavLink className={"menu__elem"} exact={true} activeClassName='is-active' to={"/"}>
                        Moje notatki
                    </NavLink>
                    <NavLink className={"menu__elem"} activeClassName='is-active' to={"/add-note"}>
                        Dodaj notatkę
                    </NavLink>
                </div>
            </nav>
        </>
    )
}