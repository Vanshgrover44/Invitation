import React from "react";
import Invite from "./Invite.jsx";
import Dashboard from "./Dashboard.jsx";
import Invitation from "./Invitaion-Ui.jsx";  
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/invitation" element={<Invitation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
