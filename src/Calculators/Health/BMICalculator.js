import React, { useEffect, useState } from "react";
import { Calculator, H2, Input } from "../../Components/Components";

/**
 * @author
 * @function BMICalculator
 **/

export const BMICalculator = (props) => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState("");

  useEffect(() => {
    setBMI((weight / Math.pow(height / 100, 2)).toPrecision(4));
  }, [weight, height]);

  return (
    <Calculator>
      <H2>BMI</H2>
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
    </Calculator>
  );
};
