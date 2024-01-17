import React from "react";
import "./education.scss"

const Education = () => {
  return (
    <div>
      <div className="education">
        <h2 className="title">EDUCATION</h2>
        <h3 className="school">
          Jomo Kenyatta University of Agriculture and Technology
        </h3>
        <h4 className="time">
          May-2013 - July 2017
        </h4>
        <span className="course">Bachelors in Business Information Technology <br/> <span className="grade"> Second Class Upper Division</span></span>

        <h3 className="school">
         INSTITUTE OF ADVANCED TECHNOLOGY
        </h3>
        <h4 className="time">
          May-2011 - July 2013
        </h4>
        <span className="course">Software Engineering <br/> <span className="grade">Credit</span></span>
      </div>
    </div>
  );
};

export default Education;
