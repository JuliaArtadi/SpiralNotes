import React, {useEffect, useState} from "react";
import {NotesService} from "../../services/NotesService";
import {Note} from "./Note";
import {PhaseIndex} from "./PhaseIndex";

export const Notes = ({phase, date: currDate}) => {
    const [notes, setNotes] = useState(null);
    const [phaseInfo, setPhaseInfo] = useState(null);
    const [date, setDate] = useState(null);
    const [todayIndex, setTodayIndex] = useState(null);
    const notesList = new NotesService();


    useEffect(() => {
        if (phase !== null && phase.phase !== phaseInfo) {
            setPhaseInfo(phase.phase)
        }
        if (currDate !== null && currDate !== date) {
            setDate(currDate)
        }
        if (date !== null && phaseInfo !== null) {
            setTodayIndex(PhaseIndex(phaseInfo, date))
        }
    })

    useEffect(() => {
        notesList.getNotes(data => setNotes(data), err => console.log(err))
    }, [])

    if (notes === null || todayIndex === null) return <div>Ładuję notatki...</div>
    if (notes.filter(note => note.phaseIndex === todayIndex).length === 0) return <div>Brak notatek</div>

    return (
        <>
            <ul className={"notes__list"}>
                {notes.filter(note => note.phaseIndex === todayIndex).map(note => <Note key={note.id} content={note}/>)}
            </ul>

        </>
    )
}