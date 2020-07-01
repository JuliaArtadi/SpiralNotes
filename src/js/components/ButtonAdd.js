import React from "react";
import {Link} from "react-router-dom";

export const ButtonAdd = () => {

    return (
        <>
            <Link to={"/add-note"} className={"button button-add"}><span>+</span> Dodaj notatkę</Link>
        </>
    )
}