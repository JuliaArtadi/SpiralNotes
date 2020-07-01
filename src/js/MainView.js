import React, {cloneElement, useEffect, useState} from 'react';
import {PickDate} from "./components/PickDate";
import {PickCycle} from "./components/PickCycle";
import {PhaseInfo} from "./components/PhaseInfo";
import {Notes} from "./components/Notes";
import {Menu} from "./components/Menu";
import {Nav} from "./components/Nav";
import {ButtonAdd} from "./components/ButtonAdd";
import {AddNote} from "./components/AddNote";
import {NotesService} from "../services/NotesService";
import {NoteView} from "./components/NoteView";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import {Header} from "./components/Header";
import {Note} from "./components/Note";


export const MainView = ({children}) => {
    const [date, setDate] = useState(new Date());
    const [phase, setPhase] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [notes, setNotes] = useState([]);
    const notesList = new NotesService();

    const handleAddNote = (note) => {
        setNotes(prev => ([
                ...prev,
                note
            ])
        )
    }

    const handleDeleteNote = (id) => {
        for (let i = 0; i < notes.length; i++) {
            let note = notes[i];
            if (note.id === id) {
                notes.splice(i, 1);
            }
        }
    }

    const handleEditNote = (newNote) => {
        for (let i = 0; i < notes.length; i++) {
            let note = notes[i];
            if (newNote.id === note.id) {
                notes[i] = newNote;
            }
        }
    }

    const handleChangePhase = (newPhase) => {
        setPhase(newPhase);
    }

    const handleChangeDate = (newDate) => {
        setDate(newDate);
    }

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        notesList.getNotes(
            data => {
                setNotes(data)
            },
            err => console.log(err))
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    if (screenWidth >= 600) {
        return (
            <>
                <Header>
                    <Menu/>
                </Header>
                <div className="container-grid container-main">
                    <main>
                        <HashRouter>
                            <Switch>
                                <Route exact path='/'
                                       component={() => <Notes date={date} phase={phase} notesList={notes}/>}/>
                                <Route path='/add-note'
                                       component={() => <AddNote date={date} phase={phase} saveNote={handleAddNote}/>}/>
                                <Route path='/notes/:id' component={() => <NoteView editNote={handleEditNote}
                                                                                    deleteNote={handleDeleteNote}/>}/>
                            </Switch>
                        </HashRouter>
                        {/*{children}*/}
                        {/*{cloneElement(children[0], { phase: phase, date, notes, handleaddnote: handleAddNote})}*/}
                        {/*{cloneElement(children[1], { phase, date, notes, handleaddnote: handleAddNote})}*/}
                        {/*{cloneElement(children[2], { phase, date, notes, handleaddnote: handleAddNote})}*/}
                        {/*<AddNote date={date} phase={phase} saveNote={handleAddNote}/>*/}
                        {/*<NoteView editNote={handleEditNote} deleteNote={handleDeleteNote()}/>*/}
                        {/*<Notes date={date} phase={phase} notesList={notes}/>*/}
                    </main>
                    <div className={"placeholder-nav"}></div>
                    <nav className={"side-nav"}>
                        <div className="side__element side__element-date">
                            <PickDate method={handleChangeDate}/>
                            <PhaseInfo date={date} method={handleChangePhase}/>
                        </div>
                    </nav>
                </div>
            </>
        )
    }

    return (
        <>
            <Header/>
            <div className="side__element side-element-app">
                <PickDate method={handleChangeDate}/>
                <PhaseInfo date={date} method={handleChangePhase}/>
            </div>
            <BrowserRouter>
                <Route exact path='/'
                       component={() => <Notes date={date} phase={phase} notesList={notes}/>}/>
                <Route path='/add-note'
                       component={() => <AddNote date={date} phase={phase} saveNote={handleAddNote}/>}/>
                <Route path='/notes/:id' component={() => <NoteView editNote={handleEditNote}
                                                                    deleteNote={handleDeleteNote}/>}/>
            </BrowserRouter>
            {/*<AddNote date={date} phase={phase} saveNote={handleAddNote}>*/}
            {/*    <button className={"button button-back"}>Powrót</button>*/}
            {/*</AddNote>*/}
            {/*<Notes date={date} phase={phase} notesList={notes}>*/}
            {/*    <ButtonAdd/>*/}
            {/*</Notes>*/}
            {/*    <NoteView editNote={handleEditNote} deleteNote={handleDeleteNote()}/>*/}
        </>
    )
}
