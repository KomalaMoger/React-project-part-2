import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./ProgressBar.css";
export default function ProgressBarTest() {
  const [activestep, setActivestep] = useState(0);
  const steps = ["1", "2", "3", "4", "5"];
  return (
    <div className="step-progress-bar-container">
      <h2>Step-Progress-Bar</h2>
      <ProgressBar
        setActivestep={setActivestep}
        steps={steps}
        activestep={activestep}
      />
    </div>
  );
}
