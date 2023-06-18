import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "ENGINEERING DEGREE",
    institute: "Lahore Garrison University",
    details: `  One of the best university in lahore, Pakistan`,
  },
  {
    year: "2018",
    degree: "ICs DEGREE",
    institute: "Govt. Degree Collage",
    details: `Most popular College in my area and has best quality education.`,
  },
  {
    year: "2015",
    degree: "Matriculation DEGREE ",
    institute: "Allama Iqbal Cadit School",
    details: `Most popular School in my area and has best quality education.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
