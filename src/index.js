import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import TextInput from "./lib/TextInput"
import DatePicker from "./lib/Datepicker"

// const App = () => (
//     <div style={{width: 640, margin: "15px auto"}}>
//         <DatePicker />
//     </div>
// )

render(<DatePicker/>, document.getElementById("root"));


// ReactDOM.render(
// <div>
//     <h1>Hello world</h1> 
//     <TextInput label="Email Address" placeholder="name@example.com"/>
// </div>, document.getElementById("root"))