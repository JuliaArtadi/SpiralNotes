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
import {BrowserRouter, Route, Switch} from "react-router-dom";


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
console.log(children);
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


    if (screenWidth >= 500) {
        return (
            <>

                   <Menu/>
                   <div className="container-grid container-main">

                       <main>
                           {/*<BrowserRouter>*/}


                           {/*            <Route exact path='/' render={props => <Notes />}/>*/}
                           {/*            <Route exact path='/add-note' component={AddNote}/>*/}
                           {/*            <Route path='/notes/:id' component={NoteView}/>*/}

                           {/*   */}
                           {/*</BrowserRouter>*/}
                           {/*{children}*/}
                           {/*{cloneElement(children[0], { phase: phase, date, notes, handleaddnote: handleAddNote})}*/}
                           {/*{cloneElement(children[1], { phase, date, notes, handleaddnote: handleAddNote})}*/}
                           {/*{cloneElement(children[2], { phase, date, notes, handleaddnote: handleAddNote})}*/}
                           {/*<AddNote date={date} phase={phase} saveNote={handleAddNote}/>*/}
                           <Notes date={date} phase={phase} notesList={notes}/>
                           {/*<NoteView/>*/}
                       </main>
                       <nav className={"side-nav"}>
                           <div className="side__element side__element-date">
                               <PickDate method={handleChangeDate}/>
                               {/*</div>*/}
                               {/*<div className="side__element side__element-phase">*/}
                               <PhaseInfo date={date} method={handleChangePhase}/>
                           </div>
                       </nav>
                   </div>

            </>
        )
    }

    return (
        <>

            <PickDate method={handleChangeDate}/>
            <PickCycle/>
            <PhaseInfo date={date} method={handleChangePhase}/>
            <ButtonAdd/>
            {children}
        </>
    )

}
