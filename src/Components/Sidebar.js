import React, { useState } from "react";
import "../styles/Sidebar.css";

import {
  FaBars,
  FaKeyboard,
  FaFont,
  FaBroom,
  FaEnvelope,
  FaClipboard,
  FaChartBar,
  FaHome
} from "react-icons/fa";

export default function Sidebar(props) {

  const [collapsed, setCollapsed] = useState(false);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (

    <div className={`sidebar ${props.mode} ${collapsed ? "collapsed" : ""}`}>

      <button
        className="toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        <FaBars />
      </button>

      {!collapsed && <h3>TextForge</h3>}

      <button onClick={() => scroll("hero")}>
        <FaHome />
        {!collapsed && <span>Home</span>}
      </button>

      <button onClick={() => scroll("editor")}>
        <FaKeyboard />
        {!collapsed && <span>Editor</span>}
      </button>

      <button onClick={() => scroll("case")}>
        <FaFont />
        {!collapsed && <span>Case</span>}
      </button>

      <button onClick={() => scroll("clean")}>
        <FaBroom />
        {!collapsed && <span>Cleaning</span>}
      </button>

      <button onClick={() => scroll("extract")}>
        <FaEnvelope />
        {!collapsed && <span>Extraction</span>}
      </button>

      <button onClick={() => scroll("clipboard")}>
        <FaClipboard />
        {!collapsed && <span>Clipboard</span>}
      </button>

      <button onClick={() => scroll("stats")}>
        <FaChartBar />
        {!collapsed && <span>Statistics</span>}
      </button>

    </div>

  );

}