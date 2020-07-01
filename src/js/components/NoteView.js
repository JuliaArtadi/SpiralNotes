import React, {useEffect, useState} from "react";
import {AddNote} from "./AddNote";
import {NotesService} from "../../services/NotesService";

export const NoteView = ({id, editNote, deleteNote}) => {
    const [note, setNote] = useState(null);
    const newNote = new NotesService();

    const handleChangeNote = e => {
        const {name, value} = e.target;
        setNote(prev => ({
                ...prev,
                [name]: value
            })
        )
    }

    const handleGoBack = (e) => {
        e.preventDefault();

    }

    const handleDeleteNote = (e) => {
        e.preventDefault();
        newNote.deleteNote(note.id, err => console.log(err));
        if (typeof deleteNote === "function") deleteNote(note.id);
    }

    const handleEditNote = (e) => {
        e.preventDefault();
        newNote.editNote(note, data => {
            setNote(data);
            if (typeof deleteNote === "function") editNote(data);
        }, err => console.log(err))
    }

    useEffect(() => {
        newNote.getNote(7, data => {
            setNote(data);
        }, err => console.log(err))
    }, [])

    if (note !== null) return (
        <>
            <section>
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
                        <button className={'button button-back'} onClick={handleGoBack}>Powrót
                        </button>
                        <button className={'button button-delete'} onClick={handleDeleteNote}>Usuń
                        </button>
                        <button className={'button'} onClick={handleEditNote}>Zapisz
                        </button>
                    </div>
                </form>
            </section>
        </>
    )

    return null;
}