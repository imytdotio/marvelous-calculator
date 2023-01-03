import React, { useState } from "react";
import { Calculator, H2, Input } from "../../Components/Components";

/**
 * @author
 * @function TemperatureCalculator
 **/

export const TemperatureCalculator = (props) => {
  const [c, setC] = useState(0);
  const [f, setF] = useState(0);
  const [k, setK] = useState(0);

  const cInputHandler = (e) => {
    setC(e.target.value);
    setF(((Number(e.target.value) * 9) / 5 + 32).toFixed(2));
    setK((Number(e.target.value) + 273.15).toFixed(2));
  };

  const fInputHandler = (e) => {
    setF(e.target.value);
    setC((((Number(e.target.value) - 32) * 5) / 9).toFixed(2));
    setK((((Number(e.target.value) - 32) * 5) / 9 + 273.15).toFixed(2));
  };

  const kInputHandler = (e) => {
    setK(e.target.value);
    setC((Number(e.target.value) - 273.15).toFixed(2));
    setF((((Number(e.target.value) - 273.15) * 9) / 5 + 32).toFixed(2));
  };

  return (
    <Calculator>
      <H2>🌡 Temperature Calculator</H2>
      <form>
        <p>
          °C <Input value={c} onChange={cInputHandler} />
        </p>
        <p>
          °F <Input value={f} onChange={fInputHandler} />
        </p>
        <p>
          °K <Input value={k} onChange={kInputHandler} />
        </p>
      </form>
    </Calculator>
  );
};
