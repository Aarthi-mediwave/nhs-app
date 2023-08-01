// components/NHSButtonExample.tsx
import React from "react";
import "../assets/sass/_admin.scss";

const NHSButtonExample: React.FC = () => {
  return (
    <button className="nhsuk-button" data-module="nhsuk-button" type="submit">
      Save and continue
    </button>
  );
};

export default NHSButtonExample;

// // components/NunjucksButton.tsx
// import React from "react";
// import nunjucks from "nunjucks";
// import htmlReactParser from "html-react-parser";

// const NunjucksButton: React.FC<{ text: string }> = ({ text }) => {
//   const nunjucksTemplate = `{% from 'buttonTemplate.njk' import button %}
//   {{ button({
//     "text": "${text}"
//   }) }}`;

//   const renderedHtml = nunjucks.renderString(nunjucksTemplate);

//   return <>{htmlReactParser(renderedHtml)}</>;
// };

// export default NunjucksButton;
