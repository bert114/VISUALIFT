import React from "react";

const Toast = ({ message, type = "success", onClose }) => {
  if (!message) return null;

  return (
    <div className={`toast toast--${type}`}>
      <span className="toast__message">{message}</span>
      <button className="toast__close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Toast;
