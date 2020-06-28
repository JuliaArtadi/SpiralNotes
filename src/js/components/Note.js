import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Link
} from 'react-router-dom';

export const Note = ({content}) => {
    const [note, setNote] = useState(null);
let id;
    const handleOpenNote = () => {

    }
if (note !== null) {
    id = note.id;
}

    useEffect(() => {
        setNote(content);
    }, [content])

    if (note === null) return null;

    return (
        <BrowserRouter>
        <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none', color: "black" }}>
            <li className={"note__card"} onClick={handleOpenNote}>
                <div className={"note__smalltxt"}>
                    <p className={"note__date"}>{new Date(note.date).toLocaleDateString()}</p>
                    <p className={"note__category"}>{note.category}</p>
                </div>
                <h3 className={"note__title"}>{note.title}</h3>
                <p className={"note__content"}>{note.content.slice(0, 100)}</p>

            </li>
        </Link>
        </BrowserRouter>
    )
}