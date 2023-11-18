import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import "./CloseAcc.css";

export default function CloseAcc({ click }) {
  const [formValues, setFormValues] = useState({
    email: "",
    uar: "",
    reason: "",
    note: "",
    chargeClosure: false,
  });

  const [inputsFilled, setInputsFilled] = useState(false);

  useEffect(() => {
    const { email, uar, reason, note } = formValues;
    if (email && uar && reason && note) {
      setInputsFilled(true);
    } else {
      setInputsFilled(false);
    }
  }, [formValues]);

  const handleInputChange = (e) => {
    // Update form values on input change
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

  return (
    <div className="close-acc">
      <div className="content">
        <div>
          <span>Close Account</span>
          <IoMdClose onClick={click} />
        </div>
        <label>Email</label>
        <br />
        <input type="text" name="email" onChange={handleInputChange} />
        <br />
        <span>Want to file UAR</span>
        <input
          type="radio"
          className="radio"
          name="uar"
          value="Yes"
          onChange={handleInputChange}
        />
        <span>Yes</span>
        <input
          type="radio"
          className="radio"
          name="uar"
          value="No"
          onChange={handleInputChange}
        />
        <span>No</span>
        <br />
        <label>Reason</label>
        <br />
        <input type="text" name="reason" onChange={handleInputChange} />
        <br />
        <label>Note</label>
        <br />
        <textarea
          type="text"
          rows={3}
          name="note"
          onChange={handleInputChange}
        />
        <br />
        <div>
          <div>
            <input
              type="radio"
              className="radio"
              name="chargeClosure"
              onChange={handleInputChange}
            />
            <label>Charge closure fee</label>
          </div>
          <span className={inputsFilled ? "active" : ""}>Close Account</span>
        </div>
      </div>
    </div>
  );
}
