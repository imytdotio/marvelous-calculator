import React from "react";

/**
 * @author
 * @function H1
 **/

export const H1 = (props) => {
  return <h1 className="font-bold text-4xl mb-8 clash">{props.children}</h1>;
};

export const H2 = (props) => {
  return (
    <h2 className="font-bold text-2xl mb-4 font-clash">{props.children}</h2>
  );
};

export const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="border-b-2 border-black my-2 px-2"
    >
      {props.children}
    </input>
  );
};
