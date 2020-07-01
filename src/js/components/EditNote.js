import React, {useEffect, useState} from "react";
import {NotesService} from "../../services/NotesService";
import {Link, useParams} from "react-router-dom";

export const EditNote = ({editNote, deleteNote}) => {
    const [note, setNote] = useState(null);
    const newNote = new NotesService();
    let id = useParams();

    const handleChangeNote = e => {
        const {name, value} = e.target;
        setNote(prev => ({
                ...prev,
                [name]: value
            })
        )
    }

    const handleDeleteNote = () => {
        newNote.deleteNote(note.id, err => console.log(err));
        if (typeof deleteNote === "function") deleteNote(note.id);
    }

    const handleEditNote = () => {
        newNote.editNote(note, data => {
            setNote(data);
        }, err => console.log(err));
        if (typeof deleteNote === "function") editNote(note);
    }

    useEffect(() => {
        newNote.getNote(id.id, data => {
            setNote(data);
        }, err => console.log(err))
    }, [])

    if (note === null) return null;

    return (
        <>
            <form className={"add-note__form"}>
                <label> Tytuł
                    <input name={"title"} value={note.title} onChange={handleChangeNote}/>
                </label>
                <label> Kategoria
                    <select name={"category"} value={note.category} onChange={handleChangeNote}>
                        <option value={"Zdrowie"}>Zdrowie</option>
                        <option value={"Sny"}>Sny</option>
                        <option value={"Emocje"}>Emocje</option>
                        <option value={"Inne"}>Inne</option>
                    </select>
                </label>
                <label> Notatka
                    <textarea name={"content"} value={note.content} onChange={handleChangeNote}/>
                </label>
                <div className="buttons">
                    <Link to={"/"} className={'button button-back'}>Powrót</Link>
                    <Link to={"/"} className={'button button-delete'} onClick={handleDeleteNote}>Usuń</Link>
                    <Link to={"/"} className={'button'} onClick={handleEditNote}>Zapisz</Link>
                </div>
            </form>
        </>
    )
}