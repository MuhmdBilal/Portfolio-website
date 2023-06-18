import React from "react";

const skillsContent = [
  { skillClass: "p70", skillPercent: "70", skillName: "C++" },
  { skillClass: "p89", skillPercent: "89", skillName: "C#" },
  { skillClass: "p70", skillPercent: "70", skillName: "Python" },
  { skillClass: "p66", skillPercent: "66", skillName: "Photoshop" },
  { skillClass: "p95", skillPercent: "95", skillName: "Unity" },
  { skillClass: "p50", skillPercent: "50", skillName: "SQL Server" },
  { skillClass: "p65", skillPercent: "65", skillName: "Game Designing" },
  { skillClass: "p90", skillPercent: "90", skillName: "Content Writer" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
