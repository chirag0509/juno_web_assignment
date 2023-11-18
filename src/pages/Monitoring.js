import React, { useState } from "react";
import "./Monitoring.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Pending from "./Pending";
import Completed from "./Completed";
import CloseAcc from "./CloseAcc";

export default function Monitoring() {
  const [activeTab, setActiveTab] = useState("pending");
  const [dialog, setDialog] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDialog = () => {
    setDialog(!dialog);
  };

  return (
    <div className="monitoring">
      <div className="label">Monitoring</div>
      <div className="status">
        <div>
          <span
            className={`tab ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => handleTabClick("pending")}
          >
            Pending
          </span>
          <span
            className={`tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => handleTabClick("completed")}
          >
            Completed
          </span>
        </div>
        <span onClick={handleDialog}>
          <IoIosCloseCircleOutline />
          &nbsp;Close account
        </span>
      </div>
      {activeTab === "pending" ? <Pending /> : <Completed />}
      {dialog && <CloseAcc click={handleDialog} />}
    </div>
  );
}
