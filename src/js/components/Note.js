import React, {useEffect, useState} from "react";

export const Note = ({content}) => {
    const [note, setNote] = useState(null);

    useEffect(() => {
        setNote(content);
    }, [])

    if (note === null) return null;

    return (
        <li className={"note__card"}>
            <h3 className={"note__title"}>{note.title}</h3>
            <p className={"note__content"}>{note.content.slice(0, 100)}</p>
            <p className={"note__date"}>{new Date(note.date).toLocaleDateString()}</p>
            <p className={"note__category"}>{note.category}</p>
        </li>
    )
}