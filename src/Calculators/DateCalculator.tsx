import React, { useReducer } from "react";

type State = {
  firstDate: { year: number; month: number; day: number };
  secondDate: { year: number; month: number; day: number };
  daysBetween: number | null;
  monthsAndDaysBetween: { months: number; days: number } | null;
  error: string | null;
};

type Action =
  | { type: "SET_FIRST_DATE"; payload: { field: string; value: number } }
  | { type: "SET_SECOND_DATE"; payload: { field: string; value: number } }
  | { type: "CALCULATE_DAYS" }
  | { type: "SWITCH_DATES" };

const initialState: State = {
  firstDate: { year: 0, month: 0, day: 0 },
  secondDate: { year: 0, month: 0, day: 0 },
  daysBetween: null,
  monthsAndDaysBetween: null,
  error: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FIRST_DATE": {
      const { field, value } = action.payload;
      const updatedValue = field === "month" ? Math.min(value, 12) : value;

      return {
        ...state,
        firstDate: { ...state.firstDate, [field]: updatedValue },
        error: null,
      };
    }
    case "SET_SECOND_DATE":
      {
        const { field, value } = action.payload;
        const updatedValue = field === "month" ? Math.min(value, 12) : value;

        return {
          ...state,
          secondDate: { ...state.secondDate, [field]: updatedValue },
          error: null,
        };
      }

      break;

    case "CALCULATE_DAYS":
      const date1 = new Date(
        state.firstDate.year,
        state.firstDate.month - 1,
        state.firstDate.day
      );
      const date2 = new Date(
        state.secondDate.year,
        state.secondDate.month - 1,
        state.secondDate.day
      );

      if (date1 > date2) {
        return {
          ...state,
          error: "The starting date cannot be larger than the second date.",
        };
      }

      const differenceInTime = date2.getTime() - date1.getTime();
      const differenceInDays = Math.round(
        differenceInTime / (1000 * 3600 * 24)
      );

      let years, months, days;

      years = date2.getFullYear() - date1.getFullYear();
      months = date2.getMonth() - date1.getMonth();
      days = date2.getDate() - date1.getDate();

      if (days < 0) {
        months--;
        days += new Date(
          state.secondDate.year,
          state.secondDate.month - 1,
          0
        ).getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      months += years * 12;

      return {
        ...state,
        daysBetween: differenceInDays,
        monthsAndDaysBetween: { months, days },
        error: null,
      };
    case "SWITCH_DATES":
      return {
        ...state,
        firstDate: state.secondDate,
        secondDate: state.firstDate,
        error: null,
      };
    default:
      return state;
  }
};

const DateCalculator: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="m-auto w-fit">
      <div className="flex flex-row gap-2 mb-2">
        <h2 className="my-auto flex-1">Starting date:</h2>
        <input
          type="number"
          value={state.firstDate.year}
          className="p-2 rounded-md w-32"
          onChange={(e) =>
            dispatch({
              type: "SET_FIRST_DATE",
              payload: { field: "year", value: parseInt(e.target.value) },
            })
          }
          placeholder="Year"
        />
        <input
          type="number"
          value={state.firstDate.month}
          className="p-2 rounded-md w-32"
          onChange={(e) =>
            dispatch({
              type: "SET_FIRST_DATE",
              payload: { field: "month", value: parseInt(e.target.value) },
            })
          }
          placeholder="Month"
        />
        <input
          type="number"
          value={state.firstDate.day}
          className="p-2 rounded-md w-32"
          onChange={(e) =>
            dispatch({
              type: "SET_FIRST_DATE",
              payload: { field: "day", value: parseInt(e.target.value) },
            })
          }
          placeholder="Day"
        />
      </div>
      <div className="flex flex-row gap-2 mb-2">
        <h2 className="my-auto flex-1">Ending Date: </h2>
        <input
          type="number"
          value={state.secondDate.year}
          className="p-2 rounded-md w-32"
          onChange={(e) =>
            dispatch({
              type: "SET_SECOND_DATE",
              payload: { field: "year", value: parseInt(e.target.value) },
            })
          }
          placeholder="Year"
        />
        <input
          type="number"
          value={state.secondDate.month}
          className="p-2 rounded-md w-32"
          onChange={(e) =>
            dispatch({
              type: "SET_SECOND_DATE",
              payload: { field: "month", value: parseInt(e.target.value) },
            })
          }
          placeholder="Month"
        />
        <input
          type="number"
          value={state.secondDate.day}
          className="p-2 rounded-md w-32"
          onChange={(e) =>
            dispatch({
              type: "SET_SECOND_DATE",
              payload: { field: "day", value: parseInt(e.target.value) },
            })
          }
          placeholder="Day"
        />
      </div>

      <button
        className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400/50 rounded duration-200 shadow"
        onClick={() => dispatch({ type: "CALCULATE_DAYS" })}
      >
        Calculate Days Between
      </button>

      {state.error && (
        <div>
          <p className="text-red-500">{state.error}</p>
          <button
            className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400/50 rounded duration-200 shadow mt-2"
            onClick={() => dispatch({ type: "SWITCH_DATES" })}
          >
            Switch Dates
          </button>
        </div>
      )}

      {state.daysBetween !== null && (
        <h3 className="m-auto w-fit">Days between: {state.daysBetween}</h3>
      )}

      {state.monthsAndDaysBetween &&
        state.daysBetween !== null &&
        state.daysBetween >= 30 && (
          <p className="m-auto w-fit">
            {state.monthsAndDaysBetween.months} months
            {state.monthsAndDaysBetween.days > 0 &&
              ` and ${state.monthsAndDaysBetween.days} days`}
          </p>
        )}
    </div>
  );
};

export default DateCalculator;
