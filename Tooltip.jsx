import React, { useState } from "react";
import "./Tooltip.css"; // Import your custom CSS file for styling

const Tooltip = () => {
  const [position, setPosition] = useState("top");
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const getTooltipPositionStyle = () => {
    switch (position) {
      case "top":
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)" };
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)" };
      case "right":
        return { top: "50%", left: "100%", transform: "translateY(-50%)" };
      case "left":
        return { top: "50%", right: "100%", transform: "translateY(-50%)" };
      default:
        return {};
    }
  };

  return (
    <div className="tooltipBody">
      <div className="tooltip-controls">
        <label htmlFor="position" className="label">
          Position:
        </label>
        <select
          id="position"
          value={position}
          onChange={handlePositionChange}
          className="select"
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="right">Right</option>
          <option value="left">Left</option>
        </select>
      </div>
      <div
        className="tooltip-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <br />
        <div className="tooltip-trigger">Hi! Hover me</div>
        {isTooltipVisible && (
          <div
            className={`tooltip ${position}`}
            style={getTooltipPositionStyle()}
          >
            I am a Tooltip!
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
