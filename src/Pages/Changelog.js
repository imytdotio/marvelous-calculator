import React from "react";
import { H1 } from "../Components/Components";

/**
 * @author
 * @function Changelog
 **/

const changes = [
  {
    title: "InitCommit",
    date: "2022-12-02",
    description:
      "✅ Basic Styling <br/> ✅ Nav <br/> ✅ BMI Calculator <br/> ➡️ BMI: show info about BMI <br/> ➡️ BMI: show comment <br/> ➡️ BMI: Allow entering cm/in <br/> ➡️ BMI: Slider input",
  },
];

export const Changelog = (props) => {
  const Log = (props) => {
    return (
      <div className="rounded-xl border-4 border-black w-3/4 xl:w-1/2 m-auto my-2 text-left p-6 font-lato ">
        <div className="flex">
          <img>{props.logo}</img>
          <p>{props.type}</p>
        </div>
        <h1 className="font-bold font-clash text-2xl">{props.title}</h1>
        <p className="text-gray-600 font-sm mb-4">{props.date}</p>
        <p dangerouslySetInnerHTML={{ __html: props.children }} />
      </div>
    );
  };
  return (
    <div className="m-8">
      <H1>🧬 Changelog</H1>
      {changes.map((change) => {
        return (
          <Log title={change.title} date={change.date} key={change.date}>
            {change.description}
          </Log>
        );
      })}
    </div>
  );
};
