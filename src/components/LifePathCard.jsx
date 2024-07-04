import "../styles/cards.css";

import { useState } from "react";
import { LIFE_PATH_NUMBER_DATA } from "../data/destiny-number";
import { getSingleDigitSum } from "../utils/math";

/* eslint-disable no-empty-pattern */
function LifePathCard({}) {
  const [birthdate, setBirthdate] = useState("");
  const [lifePathNumber, setLifePathNumber] = useState(0);

  const handleSubmit = () => {
    setLifePathNumber(
      getSingleDigitSum(
        birthdate
          .split("-")
          .reduce((total, datePart) => total + getSingleDigitSum(datePart), 0) +
          "",
        "final_sum"
      )
    );
  };

  return (
    <div className="main-container">
      <h1>{"Calculate Your Life Path Number"}</h1>
      <h3>{"Life Path reveals your greater purpose"}</h3>
      <div>
        <label htmlFor="birthdate">{"Birthdate"}</label>
        <input
          id="birthdate"
          name="birthdate"
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button type="button" onClick={() => handleSubmit()}>
          {"Go!"}
        </button>
      </div>
      {lifePathNumber > 0 && (
        <div>
          <h3>{`Your life path number is ${lifePathNumber}`}</h3>
          <p>
            {
              LIFE_PATH_NUMBER_DATA.find(
                ({ number }) => number === lifePathNumber
              )?.description
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default LifePathCard;
