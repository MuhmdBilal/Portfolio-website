import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: " Sr. Unity Developer",
    compnayName: "Dawoax",
    details: `Now i am working with this and make my clients happy.`,
  },
  {
    year: "2020 - 2021",
    position: "Jr. Unity Developer",
    compnayName: "GameGoom",
    details: `Get 1 year of experiane with tough projects. `,
  },
  {
    year: "2019 - 2020",
    position: "Graphic Designer",
    compnayName: "EZE",
    details: `Get Started my profetional expericance with this company`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
