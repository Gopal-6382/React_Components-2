import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/all.scss";

import { Advice } from "./components/AdviceApp/Advice";
import WeatherApp from "./components/WeatherApp/weatherApp";
import { Currency } from "./components/currency/Currency";
import Qr_code from "./components/Qr_code/Qr_code";
import Qrcode from "./components/QR_Code_Tutore/Qr_Code";
import { UseState } from "./components/UseState/UseState";
import { FormData } from "./components/Form/FormData";
import { Student } from "./components/Props/student";
import List from "./components/List/list";
import { Card, User } from "./components/Card/Card";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#e9ecef", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Link to="/" className="btn btn-outline-primary">Advice</Link>
        <Link to="/weather" className="btn btn-outline-primary">Weather</Link>
        <Link to="/currency" className="btn btn-outline-primary">Currency</Link>
        <Link to="/qr-code" className="btn btn-outline-primary">QR Code</Link>
        <Link to="/alt-qr" className="btn btn-outline-primary">Alt QR</Link>
        <Link to="/usestate" className="btn btn-outline-primary">useState</Link>
        <Link to="/student" className="btn btn-outline-primary">student</Link>
        <Link to="/list" className="btn btn-outline-primary">list</Link>
        <Link to="/card" className="btn btn-outline-primary">Card</Link>
        {/* <Link to="/user" className="btn btn-outline-primary">user</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Advice />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/qr-code" element={<Qr_code />} />
        <Route path="/alt-qr" element={<Qrcode />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/form" element={<FormData />} />
        <Route path="/student" element={<Student />} />
        <Route path="/list" element={<List />} />
        <Route path="/card" element={<Card />} />
        {/* <Route path="/user" element={<User />} /> */}
      </Routes>
    </Router>
  );
}
