import React from "react";
import "./Sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="sidebar">
      <div className="upper-container">
        <div className="logo">LOGO HERE</div>
        <div
          onClick={() => navigate("/overview")}
          className={isActive("/overview")}
        >
          Overview
        </div>
        <div
          onClick={() => navigate("/onboarding")}
          className={isActive("/onboarding")}
        >
          Onboarding
        </div>
        <div onClick={() => navigate("/")} className={isActive("/")}>
          Monitoring
        </div>
        <div
          onClick={() => navigate("/flagging")}
          className={isActive("/flagging")}
        >
          Flagging
        </div>
        <div
          onClick={() => navigate("/source_of_inc")}
          className={isActive("/source_of_inc")}
        >
          Source of Income
        </div>
        <div onClick={() => navigate("/uar")} className={isActive("/uar")}>
          UAR
        </div>
      </div>
      <div className="lower-container">
        <img src="images/profile.png" alt="profile" />
        <div>
          <div>Elon Musk</div>
          <div>elon@twitter.com</div>
        </div>
      </div>
    </div>
  );
}
