import React, {useEffect, useState} from "react";
import {NoteModel} from "../../models/NoteModel";
import {PhaseIndex} from "./PhaseIndex";
import {NotesService} from "../../services/NotesService";
import {MainView} from "../MainView";


export const AddNote = ({date, phase, saveNote}) => {
    const [note, setNote] = useState(new NoteModel);
    const [noteDate, setNoteDate] = useState(null);
    const [phaseInfo, setPhaseInfo] = useState(null);
    const newNote = new NotesService();

    // useEffect(() => {
    //     if (phase !== null && phase.phase !== phaseInfo) {
    //         setPhaseInfo(phase.phase)
    //     }
    //     if (date !== null && noteDate !== date) {
    //         setNoteDate(date)
    //     }
    //     if (date !== null && phaseInfo !== null) {
    //         setNote(prev => ({
    //             ...prev,
    //             date: noteDate,
    //             phaseIndex: PhaseIndex(phaseInfo, noteDate)
    //         }))
    //     }
    // }, [phase, phaseInfo, noteDate, date])
    console.log(date);
    console.log(noteDate);
    // const handleChangeNoteDetails = e => {
    //     const {name, value} = e.target;
    //     setNote(prev => ({
    //             ...prev,
    //             [name]: value
    //         })
    //     )
    // }
    //
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     newNote.addNote(note, data => {
    //         if (typeof saveNote === "function") {
    //             saveNote(data);
    //             console.log(data);
    //         }
    //     }, err => console.log(err))
    //
    // }

console.log(note);
    return (
        <>

            <section>
                <h2>Dodaj notatkę</h2>
                {/*<form>*/}
                {/*    <label> Tytuł*/}
                {/*        <input name={"title"} value={note.title} onChange={handleChangeNoteDetails}/>*/}
                {/*    </label>*/}
                {/*    <label> Kategoria*/}
                {/*        <select name={"category"} value={note.category} onChange={handleChangeNoteDetails}>*/}
                {/*            <option value={"Zdrowie"}>Zdrowie</option>*/}
                {/*            <option value={"Sny"}>Sny</option>*/}
                {/*            <option value={"Emocje"}>Emocje</option>*/}
                {/*            <option value={"Inne"}>Inne</option>*/}
                {/*        </select>*/}
                {/*    </label>*/}
                {/*    <label> Notatka*/}
                {/*        <textarea name={"content"} value={note.content} onChange={handleChangeNoteDetails}/>*/}
                {/*    </label>*/}
                {/*    <button className={'button'} disabled={note.title === "" && note.content === ""}*/}
                {/*            onClick={handleSubmit}>Zapisz*/}
                {/*    </button>*/}
                {/*</form>*/}
            </section>

        </>
    )
}