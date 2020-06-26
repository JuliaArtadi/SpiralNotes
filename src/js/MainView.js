import React, {useEffect, useState} from 'react';
import {PickDate} from "./components/PickDate";
import {PickCycle} from "./components/PickCycle";
import {PhaseInfo} from "./components/PhaseInfo";
import {Notes} from "./components/Notes";
import {Menu} from "./components/Menu";
import {Nav} from "./components/Nav";

export const MainView = () => {
    const [date, setDate] = useState(new Date());
    const [phase, setPhase] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


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
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    if (screenWidth >= 500) {
        return (
            <>
                <Menu/>
               <div className="container">
                   <Nav>
                       <PickDate method={handleChangeDate}/>
                       <PickCycle/>
                       <PhaseInfo date={date} method={handleChangePhase}/>
                   </Nav>
                   <Notes date={date} phase={phase}/>
               </div>
            </>
        )
    }

    return (
        <>

            <PickDate method={handleChangeDate}/>
            <PickCycle/>
            <PhaseInfo date={date} method={handleChangePhase}/>
            <Notes date={date} phase={phase}/>
        </>
    )

}
