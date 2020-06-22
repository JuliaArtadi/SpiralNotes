import React, {useState} from "react";
import DatePicker from "react-datepicker/es";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";


export const PickDate = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handlePrevDay = () => {
        setStartDate(today => {
            let yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            return yesterday;
        });
    }

    const handleNextDay = () => {
        setStartDate(today => {
            let tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow;
        });
    }

    return (
        <>
            <button className={"date-arrow"} onClick={handlePrevDay}>{"<"}</button>
            <DatePicker
                className={"pick-date"}
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={date => setStartDate(date)}
            />
            <button className={"date-arrow"} onClick={handleNextDay}>{">"}</button>
        </>
    );
};