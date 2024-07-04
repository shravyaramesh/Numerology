import "../styles/cards.css";

import { useState } from "react";
import { getSingleDigitSum } from "../utils/math";
import { LIFE_PATH_NUMBER_DATA } from "../data/destiny-number";

/* eslint-disable no-empty-pattern */
function DestinyCard({}) {
  const [names, setNames] = useState(["", "", "", ""]);
  const [destinyNumber, setDestinyNumber] = useState(0);

  const handleEnterName = (e, index) => {
    e.preventDefault();
    setNames((prevNames) =>
      prevNames.map((prevName, i) => (i === index ? e.target.value : prevName))
    );
  };

  const convertNameToNumber = (name) =>
    name
      .split("")
      .reduce(
        (total, letter) =>
          total +
          getSingleDigitSum(letter.toLowerCase().charCodeAt(0) - 96 + ""),
        0
      );

  const handleSubmit = () => {
    setDestinyNumber(
      +getSingleDigitSum(
        names.reduce(
          (total, name) =>
            total + getSingleDigitSum(convertNameToNumber(name) + ""),
          0
        ) + "",
        "final_sum"
      )
    );
  };

  return (
    <div className="main-container">
      <h1>{"Calculate Your Destiny Number"}</h1>
      <h3>
        {
          "Destiny Number offers insight as to how you will express your greater goals"
        }
      </h3>
      <div>
        <label htmlFor="name">{"Name"}</label>
        <p>{"Enter your full name"}</p>
        {names.map((name, index) => (
          <input
            id={index + ""}
            key={index + ""}
            type="text"
            className="text"
            value={name}
            onChange={(e) => handleEnterName(e, index)}
          />
        ))}
        <button type="button" onClick={() => handleSubmit()}>
          {"Go!"}
        </button>
      </div>
      {destinyNumber > 0 && (
        <div>
          <h3>{`Your life path number is ${destinyNumber}`}</h3>
          <p>
            {
              LIFE_PATH_NUMBER_DATA.find(
                ({ number }) => number === destinyNumber
              )?.description
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default DestinyCard;
