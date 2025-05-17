import { useState } from "react";
import "./styles.css";

export default function App() {
  const [colour, setColour] = useState(false);
  const colorChangeHandler = () => {
    setColour((prevColour) => !prevColour);
  };
  return (
    <div className="App">
      {/* <button className="outerBtn">
        <button className="innerBtn"></button>
      </button> */}
      {/* <div className="outerDiv">
        <div className="innerDiv"></div>
      </div> */}
      <div
        className={colour === false ? "outerDiv btnStart" : "outerDiv btnEnd"}
      >
        <button
          className={
            colour === false
              ? "innerBtn btnColourBlue"
              : "innerBtn btnColourRed"
          }
          onClick={colorChangeHandler}
        ></button>
      </div>
    </div>
  );
}
