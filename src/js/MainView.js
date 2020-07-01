import React, {useEffect, useState} from 'react';
import {PickDate} from "./components/PickDate";
import {PhaseInfo} from "./components/PhaseInfo";
import {Notes} from "./components/Notes";
import {Menu} from "./components/Menu";
import {ButtonAdd} from "./components/ButtonAdd";
import {AddNote} from "./components/AddNote";
import {NotesService} from "../services/NotesService";
import {EditNote} from "./components/EditNote";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Header} from "./components/Header";

export const MainView = () => {
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
                <HashRouter>
                    <Header>
                        <Menu/>
                    </Header>
                    <div className="container container-main">
                        <main>
                            <Switch>
                                <Route exact path='/'
                                       component={() => <Notes date={date} phase={phase} notesList={notes}/>}/>
                                <Route path='/add-note'
                                       component={() => <AddNote date={date} phase={phase} saveNote={handleAddNote}/>}/>
                                <Route path='/notes/:id' component={() => <EditNote editNote={handleEditNote}
                                                                                    deleteNote={handleDeleteNote}/>}/>
                            </Switch>
                        </main>
                        <aside className={"placeholder-nav"}> </aside>
                        <nav className={"side-nav"}>
                            <div className="side__element">
                                <PickDate method={handleChangeDate} date={date}/>
                                <PhaseInfo date={date} method={handleChangePhase}/>
                            </div>
                        </nav>
                    </div>
                </HashRouter>
            </>
        )
    }

    return (
        <>
            <HashRouter>
                <Header/>
                <section className="side__element">
                    <PickDate method={handleChangeDate} date={date}/>
                    <PhaseInfo date={date} method={handleChangePhase}/>
                </section>
                <main>
                    <Route exact path='/'
                           component={() => <Notes date={date} phase={phase} notesList={notes}
                                                   children={<ButtonAdd/>}/>}/>
                    <Route path='/add-note'
                           component={() => <AddNote date={date} phase={phase} saveNote={handleAddNote}/>}/>
                    <Route path='/notes/:id' component={() => <EditNote editNote={handleEditNote}
                                                                        deleteNote={handleDeleteNote}/>}/>
                </main>
            </HashRouter>
        </>
    )
}
