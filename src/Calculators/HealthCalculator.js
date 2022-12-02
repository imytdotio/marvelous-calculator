import React from "react";
import { H1 } from "../Components/Components";
import { BMICalculator } from "./Health/BMICalculator";

/**
 * @author
 * @function HealthCalculator
 **/

export const HealthCalculator = (props) => {
  return (
    <div className="m-8">
      <H1>🏋️‍♂️ Health Calculator</H1>
      <BMICalculator />
    </div>
  );
};
