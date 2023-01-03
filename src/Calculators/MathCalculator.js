import React from "react";
import { H1 } from "../Components/Components";
import { KgLbCalculator } from "./Math/KgLbCalculator";
import { TemperatureCalculator } from "./Math/TemperatureCalculator";

/**
 * @author
 * @function MathCalculator
 **/

export const MathCalculator = (props) => {
  return (
    <div className="m-8">
      <H1>🔢 Math Calculator</H1>
      <KgLbCalculator />
      <TemperatureCalculator />
    </div>
  );
};
