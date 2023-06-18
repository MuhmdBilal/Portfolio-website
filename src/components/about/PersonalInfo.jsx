import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Huzaifa" },
  { meta: "last name", metaInfo: "ILYAS" },
  { meta: "Age", metaInfo: "21 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Lahore, Pakistan" },
  { meta: "phone", metaInfo: "+92-305-8858930" },
  { meta: "Email", metaInfo: "info@huzaifailyas.com" },
  { meta: "Skype", metaInfo: " live:rehan8387" },
  { meta: "langages", metaInfo: "Urdu, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
