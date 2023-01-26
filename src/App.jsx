import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import BuyAirtime from './Pages/BuyAirtime';
import FromUs from './Pages/FromUs';
import Waitlist from './Pages/Waitlist';
import Wallet from './Pages/Wallet';
import Sell from './Pages/Sell';
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return(
    <Router>
      <div className="App">
            <Routes>
              <Route exact path="/" element={<SignIn/>} />
              <Route exact path="/Signup" element={<SignUp/>} />
              <Route exact path="/Home" element={<Home/>} />
              <Route exact path="/BuyAirtime" element={<BuyAirtime/>} />
              <Route exact path="/FromUs" element={<FromUs/>} />
              <Route exact path="/Waitlist" element={<Waitlist/>} />
              <Route exact path="/Wallet" element={<Wallet/>} />
              <Route exact path="/Sell" element={<Sell/>} />
            </Routes>
      </div>
  </Router>

  )
      // <div className="App">
      //   <SignIn/>
      //   {/* <Home/> */}
      //   {/* <BuyAirtime/> */}
      //   {/* <FromUs/> */}
      //   {/* <Waitlist/> */}
      //   {/* <Wallet/> */}
      // </div>
}