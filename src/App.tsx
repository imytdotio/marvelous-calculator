import { useState } from "react";
import "./App.css";
import DateCalculator from "./Calculators/DateCalculator";
import LengthCalculator from "./Calculators/LengthCalculator";
import WeightCalculator from "./Calculators/WeightCalculator";

// Define an interface for calculator components
interface CalculatorComponents {
  [key: string]: JSX.Element;
}

function App() {
  const [calculator, setCalculator] = useState("Date");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCalculator(event.target.value);
  };

  // Define a mapping from names to components
  const calculatorComponents: CalculatorComponents = {
    Date: <DateCalculator />,
    Length: <LengthCalculator />,
    Weight: <WeightCalculator />,
  };

  return (
    <div className="p-8 ">
      <div className="flex flex-col justify-center">
        <select
          className="m-auto text-center w-64 font-bold mb-4 text-lg bg-white border-2 border-gray-300 rounded-md px-4 py-2"
          onChange={handleSelectChange}
        >
          <option value="Date">Date Calculator</option>
          <option value="Length">Length Calculator</option>
          <option value="Weight">Weight Calculator</option>
        </select>
        {calculatorComponents[calculator]}
      </div>
    </div>
  );
}

export default App;
