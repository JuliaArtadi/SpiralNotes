import React, {useEffect, useState} from "react";
import {MoonAPIService} from "../../services/MoonAPIService";

export const PhaseInfo = ({date, method}) => {
    const [phase, setPhase] = useState(null);
    const [currDate, setCurrDate] = useState(date);
    const phaseInfo = new MoonAPIService();

    const handleChangeDate = () => {
        setCurrDate(prev => {
            if (phase === null || prev.getMonth() !== date.getMonth()) handleChangePhase();
            return date;
        });
    }

    const handleChangePhase = () => {
        phaseInfo.getMoonInfo(date, data => {
            setPhase(data);
            if (typeof method === "function") {
                method(data);
            }
        }, err => console.log(err))
    }

    useEffect(() => {
        handleChangeDate();
    }, [date])

    if (phase === null) return <h1>loading data...</h1>

    return (
        <>
            <div className="phase__container">
                <div>Faza księżyca:</div>
                <div dangerouslySetInnerHTML={{__html: phase.phase[currDate.getDate()].svg}}> </div>
                <div className={"phase__text"}>{phase.phase[currDate.getDate()].npWidget}</div>
            </div>
        </>
    )


}

