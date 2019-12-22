import "./seasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    icon: "sun"
  },
  winter: {
    text: "Burr, it's chilly!",
    icon: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
export const SeasonDisplay = props => {
  const date = new Date();
  const season = getSeason(props.lat, date.getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};
