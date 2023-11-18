import React, { useState } from "react";
import { CiSearch, CiShare1 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import data from "../data.json";
import { GoDotFill } from "react-icons/go";
import "./Monitoring.css";

export default function Pending() {
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.username.toLowerCase().includes(search.toLowerCase());
  });

  const onClick = () => {
    setClick(!click);
  };

  return (
    <div className="pending">
      <div className="actions">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
          <CiSearch className="icon" />
        </div>
        <span onClick={onClick}>
          Trigger reason&nbsp;
          <IoIosArrowDown />
        </span>
        <span>
          Risk level&nbsp;
          <IoIosArrowDown />
        </span>
      </div>
      {click && (
        <div className="container">
          <div>Hard flag</div>
          <div>Temp flag</div>
          <div>Restricted unflag</div>
          <div>Un flag</div>
          <div>Reviewed</div>
        </div>
      )}
      <div>
        <table>
          <tr className="heading">
            <td>User</td>
            <td>Risk level</td>
            <td>Trigger reason</td>
            <td>In queue for</td>
            <td>Date added on</td>
            <td>Previously reviewed</td>
          </tr>
          {filteredData.map((item, index) => {
            return (
              <tr>
                <td>
                  <div>
                    <div>{item.username}</div>
                    <div
                      style={{
                        color: "#777676",
                        fontSize: "0.8rem",
                      }}
                    >
                      {item.email}
                    </div>
                  </div>
                  <CiShare1 className="icon" />
                </td>
                <td
                  style={{
                    color:
                      item.risk_level === "Low"
                        ? "#006540"
                        : item.risk_level === "Medium"
                        ? "#88670f"
                        : "#7d2424",
                  }}
                >
                  <GoDotFill style={{ transform: "translateY(10%)" }} />
                  {item.risk_level}
                </td>
                <td>{item.reason}</td>
                <td>{item.waiting} days</td>
                <td
                  style={{
                    color: "#777676",
                  }}
                >
                  {item.date_added}
                </td>
                <td>
                  <div>{item.prev_reviewed}</div>
                  <div
                    style={{
                      color: "#777676",
                      fontSize: "0.8rem",
                    }}
                  >
                    {item.prev_reviewed_date}
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
        {filteredData.length === 0 && (
          <center style={{ padding: "1rem", color: "#adadad" }}>
            User does not exists
          </center>
        )}
      </div>
    </div>
  );
}
