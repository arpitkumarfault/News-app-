import React from "react";
import NavBar from "./Components/NavBar";
import NewsComponents from "./Components/NewsComponents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<NewsComponents key="general" pageSize={6} country="in" category="general" />} />
          <Route path="/business" element={<NewsComponents key="business" pageSize={6} country="in" category="business" />} />
          <Route path="/entertainment" element={<NewsComponents key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route path="/generalhealth" element={<NewsComponents key="generalhealth" pageSize={6} country="in" category="generalhealth" />} />
          <Route path="/sports" element={<NewsComponents key="sports" pageSize={6} country="in" category="sports" />} />
          <Route path="/technology" element={<NewsComponents key="technology" pageSize={6} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}
