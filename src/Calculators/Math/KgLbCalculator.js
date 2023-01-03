import React, { useState } from "react";
import { Calculator, H2, Input } from "../../Components/Components";

/**
 * @author
 * @function Kglb
 **/

export const KgLbCalculator = (props) => {
  const [kg, setKG] = useState(0);
  const [lb, setLB] = useState(0);

  const kgInputHandler = (e) => {
    setKG(e.target.value);
    setLB((Number(e.target.value) * 2.20462).toFixed(3));
  };

  const lbInputHandler = (e) => {
    setLB(e.target.value);
    setKG((Number(e.target.value) / 2.20462).toFixed(3));
  };
  return (
    <Calculator>
      <H2>⚖️ KG ↔︎ LB Calculator</H2>
      <form>
        <p>
          kg: <Input placeholder="kg" value={kg} onChange={kgInputHandler} />
        </p>
        <p>
          lb: <Input placeholder="lb" value={lb} onChange={lbInputHandler} />
        </p>
      </form>
    </Calculator>
  );
};
