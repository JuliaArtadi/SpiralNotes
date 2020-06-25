import React, {useEffect, useState} from "react";

export const Note = ({content}) => {
    const [note, setNote] = useState(null);

    useEffect(() => {
        setNote(content);
    }, [])

    if (note === null) return null;

    return (
        <li>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p>{new Date(note.date).toLocaleDateString()}</p>
            <p>{note.category}</p>
        </li>
    )
}