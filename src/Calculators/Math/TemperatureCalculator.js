import React, { useReducer, useState } from "react";
import { Calculator, H2, Input } from "../../Components/Components";

/**
 * @author
 * @function TemperatureCalculator
 **/

export const TemperatureCalculator = (props) => {
  const tempReducer = (state, action) => {
    switch (action.type) {
      case "C_USER_INPUT":
        return {
          c: action.payload,
          f: ((Number(action.payload) * 9) / 5 + 32).toFixed(2),
          k: (Number(action.payload) + 273.15).toFixed(2),
        };
      case "F_USER_INPUT":
        return {
          c: (((Number(action.payload) - 32) * 5) / 9).toFixed(2),
          f: action.payload,
          k: (((Number(action.payload) - 32) * 5) / 9 + 273.15).toFixed(2),
        };
      case "K_USER_INPUT":
        return {
          c: (Number(action.payload) - 273.15).toFixed(2),
          f: (((Number(action.payload) - 273.15) * 9) / 5 + 32).toFixed(2),
          k: action.payload,
        };
    }
    return {
      c: 0,
      f: 0,
      k: 0,
    };
  };

  const cInputHandler = (e) => {
    dispatchTemp({ type: "C_USER_INPUT", payload: e.target.value });
  };
  const fInputHandler = (e) => {
    dispatchTemp({ type: "F_USER_INPUT", payload: e.target.value });
  };
  const kInputHandler = (e) => {
    dispatchTemp({ type: "K_USER_INPUT", payload: e.target.value });
  };

  const [tempState, dispatchTemp] = useReducer(tempReducer, {
    c: 0,
    f: 0,
    k: 0,
  });
  return (
    <Calculator>
      <H2>🌡 Temperature</H2>
      <form>
        <p>
          °C <Input value={tempState.c} onChange={cInputHandler} />
        </p>
        <p>
          °F <Input value={tempState.f} onChange={fInputHandler} />
        </p>
        <p>
          °K <Input value={tempState.k} onChange={kInputHandler} />
        </p>
      </form>
    </Calculator>
  );
};
