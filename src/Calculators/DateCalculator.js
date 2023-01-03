import React from "react";
import { Calculator, H1, H2 } from "../Components/Components";
import { AddOrSubtractDates } from "./Date/AddOrSubtractDates";
import { CountDaysCalculator } from "./Date/CountDaysCalculator";

/**
 * @author
 * @function DateCalculator
 **/

export const DateCalculator = (props) => {
  return (
    <div className="m-8">
      <H1>📆 Date Calculator</H1>
      <CountDaysCalculator />
      <AddOrSubtractDates />
    </div>
  );
};
