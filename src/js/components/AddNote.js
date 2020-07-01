import React, {useEffect, useState} from "react";
import {NoteModel} from "../../models/NoteModel";
import {PhaseIndex} from "./PhaseIndex";
import {NotesService} from "../../services/NotesService";
import {Link} from "react-router-dom";

export const AddNote = ({date, phase, saveNote}) => {
    const [note, setNote] = useState(new NoteModel);
    const [noteDate, setNoteDate] = useState(null);
    const [phaseInfo, setPhaseInfo] = useState(null);
    const newNote = new NotesService();

    useEffect(() => {
        if (phase !== null && phase.phase !== phaseInfo) {
            setPhaseInfo(phase.phase)
        }
        if (date !== null && noteDate !== date) {
            setNoteDate(date)
        }
        if (date !== null && phaseInfo !== null) {
            setNote(prev => ({
                ...prev,
                date: noteDate,
                phaseIndex: PhaseIndex(phaseInfo, noteDate)
            }))
        }
    }, [phase, phaseInfo, noteDate, date])

    const handleChangeNoteDetails = e => {
        const {name, value} = e.target;
        setNote(prev => ({
                ...prev,
                [name]: value
            })
        )
    }

    const handleSubmit = () => {
        newNote.addNote(note, data => {
            if (typeof saveNote === "function") {
                saveNote(data);
            }
        }, err => console.log(err))
    }

    return (
        <>
            <h2 className={"add-note__header"}>Dodaj notatkę na
                dzień {new Date(noteDate).toLocaleDateString()}:</h2>
            <form className={"add-note__form"}>
                <label> Tytuł
                    <input name={"title"} value={note.title} onChange={handleChangeNoteDetails}/>
                </label>
                <label> Kategoria
                    <select name={"category"} value={note.category} onChange={handleChangeNoteDetails}>
                        <option value={"Zdrowie"}>Zdrowie</option>
                        <option value={"Sny"}>Sny</option>
                        <option value={"Emocje"}>Emocje</option>
                        <option value={"Inne"}>Inne</option>
                    </select>
                </label>
                <label> Notatka
                    <textarea name={"content"} value={note.content} onChange={handleChangeNoteDetails}/>
                </label>
                <div className="buttons">
                    <Link to={"/"} className={"button button-back"}>Powrót</Link>
                    <Link to={"/"} className={`button ${note.title === "" && note.content === "" ? "disabled" : ""}`}
                          onClick={handleSubmit}>Zapisz</Link>
                </div>
            </form>
        </>
    )
}