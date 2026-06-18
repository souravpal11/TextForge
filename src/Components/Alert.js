import React from "react";
import "./../styles/Alert.css";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle
} from "react-icons/fa";

export default function Alert({ alert }) {

  if (!alert) return null;

  const getIcon = () => {
    switch (alert.type) {
      case "success":
        return <FaCheckCircle />;
      case "error":
        return <FaTimesCircle />;
      default:
        return <FaInfoCircle />;
    }
  };

  return (
    <div className={`toast-alert ${alert.type}`}>
      <div className="toast-icon">
        {getIcon()}
      </div>

      <div>
        <strong>{alert.type.toUpperCase()}</strong>
        <p>{alert.msg}</p>
      </div>
    </div>
  );
}