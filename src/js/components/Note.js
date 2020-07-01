import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

export const Note = ({content}) => {
    const [note, setNote] = useState(null);

    useEffect(() => {
        setNote(content);
    }, [content])

    if (note === null) return null;

    return (
        <Link to={`/notes/${note.id}`} className={"note__card"}>
            <div className={"note__smalltxt"}>
                <p className={"note__date"}>{new Date(note.date).toLocaleDateString()}</p>
                <p className={"note__category"}>{note.category}</p>
            </div>
            <h3 className={"note__title"}>{note.title}</h3>
            <p className={"note__content"}>{note.content.slice(0, 100)}</p>
        </Link>
    )
}