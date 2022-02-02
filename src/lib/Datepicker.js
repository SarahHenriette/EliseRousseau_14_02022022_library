import React,  { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import "./../style.css";

function DatePicker() {
    const [date, setDate] = useState(new Date());
    const [display, setDisplay] = useState(false)


    return(
        <div className="datepicker-form">
            <input type="text" className="datepicker-form-input" value={date.toLocaleDateString()} onClick={(e)=> setDisplay(true)}  onChange={(e) => e.target.value = date.toLocaleDateString()} />
            {display == true ? <Calendar className="test" onChange={(e)=> {
                setDate(e)
                setDisplay(false)
            }} />: ""  } 
        </div>
    )
}

// const datePicker = ({ type = "date", label, value, onChange }) => (
//   <div className="datepicker-form">
//       <Calendar />
//     {/* {label && <label className="simple-text-label">{label}</label>}
//     <input
//       type={type}
//       className="datepicker-input"
//       value={value}
//       onChange={e => onChange && onChange(e.target.value)}
//     /> */}
//   </div>
// );

export default DatePicker;