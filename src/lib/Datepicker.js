import React,  { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import "./../style.css";

function DatePicker() {
    const [date, setDate] = useState(new Date()); 
    const [displayCalendar, setDisplay] = useState(false)

    return(
        <div className="datepicker-form">
            {/* input ou es affiché la date, au clic j'affiche le calendrier */}
            <input type="text" className="datepicker-form-input" value={date.toLocaleDateString()} onClick={(e)=> setDisplay(true)}  onChange={(e) => e.target.value = date.toLocaleDateString()} /> 
            
            {/* j'affiche le calendrier si le state est a true */}
            {displayCalendar == true ? <Calendar onChange={(e)=> {setDate(e)}} />: ""  } 
            
            {/* j'affiche le bouton annuler si le state est a true */}
            {displayCalendar == true ? <button onClick={() => setDisplay(false)}>Annuler</button> : ""}
            
            {/* j'affiche le bouton réinitialiser si le state est a true */}
            {displayCalendar == true ? <button onClick={() => setDate(new Date())}>Réinitialiser</button> : ""}
        </div>
    )
}

export default DatePicker;