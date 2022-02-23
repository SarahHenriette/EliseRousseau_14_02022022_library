import React,  { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import "./style.css";

/**
 * @return datepicker
 * @param {string} idInput - matches id of the input
 * @param {date or nothing} dateInput - value of the input
 * @param {function} updateDate - update value of the input
 * @const displayCalendar - allow display the calendar
 */ 
function DatePicker({idInput, dateInput, updateDate }) {
    const [displayCalendar, setDisplayCalendar] = useState(false)
  
    return(
        <div className="datepicker-form" tabIndex="0">
            {/* input ou es affiché la date, au clic j'affiche le calendrier */}
            <input type="text" id={idInput} className="datepicker-input" value={dateInput !== "" ? dateInput.toLocaleDateString(): ""} onChange={() => dateInput.toLocaleDateString()}
                onFocus={(e)=> {
                    setDisplayCalendar(true)
                }}
            /> 
            {/* si displayCalendar es à true alors j'affiche les boutons et le calendrier */}
            {displayCalendar == true ? 
                <div className="datepicker-calendar-buttons">
                        <button className="datepicker-calendar-buttons_close" onClick={() => setDisplayCalendar(false)}>X</button>
                </div>
            :  null}
            {displayCalendar == true ? 
                <Calendar onChange={(e)=> { 
                    updateDate(e) 
                    setDisplayCalendar(false)
                } 
                }/>
            :  null}
        </div>
    )
}

export default DatePicker;
