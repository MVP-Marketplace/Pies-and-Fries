import React from "react";

function ProgressBar({ percentage }) {
  return (
    <div className="progress-bar">
      <Filler percentage={percentage} />
    </div>
  );
}

function Filler({ percentage }) {
  return <div className="filler" style={{ width: `${percentage}%` }} />;
}

export default ProgressBar;