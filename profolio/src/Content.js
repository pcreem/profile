import React from "react";
import "./Content.css";

function Content({ site, youtube, tech, intro, feature, updateDate }) {
  return (
    <div className="content">
      <i className="content__date">{updateDate}</i>

      <h1>{intro}</h1>
      <i>{feature}</i>
      <iframe src={`https://www.youtube.com/embed/${youtube}`}></iframe>
      <a href={site} target="_blank" rel="noreferrer">
        Visit Site
      </a>
    </div>
  );
}

export default Content;
