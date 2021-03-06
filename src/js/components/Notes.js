import React, {useEffect, useState} from "react";
import {Note} from "./Note";
import {PhaseIndex} from "./PhaseIndex";

export const Notes = ({phase, date: currDate, notesList, children}) => {
    const [notes, setNotes] = useState([]);
    const [phaseInfo, setPhaseInfo] = useState(null);
    const [date, setDate] = useState(null);
    const [todayIndex, setTodayIndex] = useState(null);

    useEffect(() => {
        if (phase !== null && phase.phase !== phaseInfo) {
            setPhaseInfo(phase.phase)
        }
        if (currDate !== null && currDate !== date) {
            setDate(currDate)
        }
        if (notesList !== null && notesList !== notes) {
            setNotes(notesList);
        }
        if (date !== null && phaseInfo !== null) {
            setTodayIndex(PhaseIndex(phaseInfo, date));
        }
    }, [phase, phaseInfo, date, notes, currDate, notesList])

    return (
        <>
            {(notes === false || todayIndex === false) && <div className={"no-notes__info"}>Ładuję notatki...</div>}
            {notes.filter(note => note.phaseIndex === todayIndex).length === 0 && <div className={"no-notes__info"}>
                Brak notatek na dzień {new Date(date).toLocaleDateString()}. Dodaj notatkę lub wybierz inną datę.
            </div>}
            <div className={"notes__list"}>
                {notes.filter(note => note.phaseIndex === todayIndex).map(note => <Note key={note.id} content={note}/>)}
            </div>
            {children}
        </>
    )
}