import React from "react";
import { Questions } from "../data/questions";

const TestSelection = ({onselectCategory}) => {

  let categories =Object.keys(Questions);

  return (
    <div className="container">
        <h2 className="text-center head-1">Take the test To Ace Interviews </h2>
      <div className="card p-4 shadow">
        <div className=" d-flex justify-content-center">
          {categories.map((sub) => (
            <button
             key={sub}
            onClick={()=>onselectCategory(sub)}
             className="btn btn-success mx-2"
             >{sub}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestSelection;