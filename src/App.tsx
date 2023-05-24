import { useState } from "react";
import "./App.css";
import DateCalculator from "./Calculators/DateCalculator";

function App() {
  return (
    <div className="p-8">
      <h1 className="m-auto w-fit font-bold mb-4 text-lg">Date Calculator</h1>
      <DateCalculator />
    </div>
  );
}

export default App;
