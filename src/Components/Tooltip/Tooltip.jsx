import React, { useState } from "react";
export default function Tooltip({ children, content, delay }) {
  let timeout;
  const [isVisible, setIsVisible] = useState(false);
  const handleShowTooltip = () => {
    // 500=0.5 sec
    timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay || 500);
  };
  const handleHideTooltip = () => {
    clearTimeout(timeout);
    setIsVisible(false);
  };
  return (
    <div
      className="tooltip-container"
      // the onmouseenter event occurs when the mouse pointer enters an element.
      onMouseEnter={handleShowTooltip}
      //   The onmouseleave event occurs when the mouse pointer leaves an element.
      onMouseLeave={handleHideTooltip}
    >
      {children}
      {isVisible ? <div className="tooltip">{content}</div> : null}
    </div>
  );
}
