import React from "react";

import "./MainCommette.css";

import CommetteMember from "./CommetteMemberNew";

export default function MainCommette() {
  return (
    <div className="MainCommette">
      <div id="particle-container">
        <CommetteMember />
      </div>
    </div>
  );
}
