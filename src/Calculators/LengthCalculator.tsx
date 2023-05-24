import React, { useState } from "react";

// Define your units.
type Unit = "mm" | "cm" | "m" | "km" | "inch" | "feet" | "yard" | "mile";

const units: Unit[] = ["mm", "cm", "m", "km", "inch", "feet", "yard", "mile"];

// Conversion rates relative to 1m
const conversionRates: { [key in Unit]: number } = {
  mm: 1000,
  cm: 100,
  m: 1,
  km: 0.001,
  inch: 39.3701,
  feet: 3.28084,
  yard: 1.09361,
  mile: 0.000621371,
};

function convert(value: number, fromUnit: Unit, toUnit: Unit): number {
  const fromRate = conversionRates[fromUnit];
  const toRate = conversionRates[toUnit];

  const mValue = value * fromRate; // Convert to base unit (m)
  const targetValue = mValue / toRate; // Convert to target unit

  return targetValue;
}

const LengthCalculator: React.FC = () => {
  const [fromUnit, setFromUnit] = useState<Unit>("m");
  const [toUnit, setToUnit] = useState<Unit>("feet");
  const [fromValue, setFromValue] = useState<number | "">("");
  const [toValue, setToValue] = useState<number | "">("");

  const handleFromValueChange = (value: number) => {
    setFromValue(value);
    const convertedValue = convert(value, fromUnit, toUnit);
    setToValue(convertedValue);
  };

  const handleToValueChange = (value: number) => {
    setToValue(value);
    const convertedValue = convert(value, toUnit, fromUnit);
    setFromValue(convertedValue);
  };

  const handleFromUnitChange = (unit: Unit) => {
    setFromUnit(unit);
    if (fromValue !== "") {
      const convertedValue = convert(fromValue, fromUnit, unit);
      setFromValue(convertedValue);
    }
  };

  const handleToUnitChange = (unit: Unit) => {
    setToUnit(unit);
    if (toValue !== "") {
      const convertedValue = convert(toValue, toUnit, unit);
      setToValue(convertedValue);
    }
  };

  return (
    <div className="flex flex-col gap-2 m-auto">
      <div className="flex flex-row gap-2">
        <input
          type="number"
          className="p-2 rounded-md w-40"
          value={fromValue}
          onChange={(e) => handleFromValueChange(Number(e.target.value))}
        />
        <select
          value={fromUnit}
          className="p-2 rounded-md w-16"
          onChange={(e) => handleFromUnitChange(e.target.value as Unit)}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row gap-2">
        <input
          type="number"
          className="p-2 rounded-md w-40"
          value={toValue}
          onChange={(e) => handleToValueChange(Number(e.target.value))}
        />
        <select
          value={toUnit}
          className="p-2 rounded-md w-16"
          onChange={(e) => handleToUnitChange(e.target.value as Unit)}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LengthCalculator;
