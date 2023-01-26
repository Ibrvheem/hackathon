import './App.css';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import BuyAirtime from './Pages/BuyAirtime';
import FromUs from './Pages/FromUs';
import Waitlist from './Pages/Waitlist';
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return(
      <div className="App">
        {/* <SignIn/> */}
        {/* <BuyAirtime/> */}
        {/* <FromUs/> */}
        <Waitlist/>
      </div>

  )
}