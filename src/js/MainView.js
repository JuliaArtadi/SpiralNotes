import React from 'react';
import {PickDate} from "./components/PickDate";
import {PickCycle} from "./components/PickCycle";

export const MainView = () => {
    return (
        <>
            <PickDate/>
            <PickCycle/>
        </>
    )
}