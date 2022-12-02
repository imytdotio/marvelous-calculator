import React, { useEffect, useState } from "react";
import { H2, Input } from "../../Components/Components";

/**
 * @author
 * @function BMICalculator
 **/

export const BMICalculator = (props) => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState("");

  useEffect(() => {
    setBMI(weight / (height ^ 2));
  }, [weight, height]);

  

  return (
    <div className="border-4 border-black rounded-xl p-4 w-96 m-auto my-4 font-lato">
      <H2>BMI Calendar</H2>
      <form onSubmit={() => {}}>
        <Input
          placeholder="weight (kg)"
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
        <Input
          placeholder="height (cm)"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />

        <p className="mb-4">
          BMI:{" "}
          {bmi ? (
            bmi
          ) : (
            <span className="inline italic text-gray-400">
              Enter weight & height
            </span>
          )}
        </p>
      </form>
    </div>
  );
};
