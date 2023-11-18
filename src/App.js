import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Monitoring from "./pages/Monitoring";
import Overview from "./pages/Overview";
import Onboarding from "./pages/Onboarding";
import Flagging from "./pages/Flagging";
import SI from "./pages/SI";
import UAR from "./pages/UAR";
import MobileDialog from "./MobileDialog";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowDialog(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {showDialog ? (
        <MobileDialog />
      ) : (
        <BrowserRouter>
          <Sidebar />
          <div className="routes">
            <Routes>
              <Route path="/" element={<Monitoring />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/flagging" element={<Flagging />} />
              <Route path="/source_of_inc" element={<SI />} />
              <Route path="/uar" element={<UAR />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
