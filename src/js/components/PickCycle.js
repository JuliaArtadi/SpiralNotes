import React, {useState} from "react";

export const PickCycle = () => {
    const [cycle, setCycle] = useState("Faza księżyca");
    return (
        <select className={"pick-cycle side-style"} value={cycle} onChange={e => setCycle(e.target.value)}>
            <option>Faza księżyca</option>
            <option>Dzień tygodnia</option>
            <option>Dzień miesiąca</option>
        </select>
    )
}