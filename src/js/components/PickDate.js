import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker/es";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

export const PickDate = ({method: changeGlobalDate}) => {
    const [startDate, setStartDate] = useState(new Date());

    const handlePrevDay = () => {
        setStartDate(today => {
            let yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            return yesterday;
        });
    }

    useEffect(() => {
        if (typeof changeGlobalDate === "function") {
            changeGlobalDate(startDate);

        }
    })

    const handleNextDay = () => {
        setStartDate(today => {
            let tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow;
        });
    }

    return (
        <>
            <div className={"date-element"}>
                <p>Wybierz datę</p>
                <div className="date__container">
                    <button className={"date-arrow side-style"} onClick={handlePrevDay}>{"<"}</button>
                    <DatePicker
                        className={"pick-date side-style"}
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                    />
                    <button className={"date-arrow side-style"} onClick={handleNextDay}>{">"}</button>
                </div>
            </div>
        </>
    );
};