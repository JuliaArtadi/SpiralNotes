import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker/dist/react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

export const PickDate = ({method: changeGlobalDate, date}) => {
    const [startDate, setStartDate] = useState(date);

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
                        selected={date}
                        onChange={date => setStartDate(date)}
                        showPopperArrow={false}
                        todayButton="Wróć do dzisiaj"
                        popperPlacement=""
                        popperModifiers={{
                            offset: {
                                enabled: true,
                                offset: "5px, 10px"
                            },
                            preventOverflow: {
                                enabled: true,
                                escapeWithReference: false,
                                boundariesElement: "viewport"
                            }
                        }}
                    />
                    <button className={"date-arrow side-style"} onClick={handleNextDay}>{">"}</button>
                </div>
            </div>
        </>
    );
};