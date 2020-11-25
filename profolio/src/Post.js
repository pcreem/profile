import React, { useState } from "react";
import "./Post.css";
import { button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Content from "./Content";

function Post() {
  const Profolio = {
    Amazon: {
      site: "https://clone-2d2ea.web.app/",
      youtube: "DCe-kPxdIBE",
      github: "https://github.com/pcreem/amazon-clone",
      tech: ["Firebase", "React", "Stripe"],
      intro: "Amazon-like web app",
      feature:
        "Email authentication, Stripe payment, search function, create / delete product",
      updateDate: "Nov 20, 2020",
    },
    Facebook: {
      site: "https://facebook-clone-79c45.web.app/",
      youtube: "_Mi9PtFm5xY",
      github: "https://github.com/pcreem/facebook",
      tech: ["Firebase", "React"],
      intro: "Facebook mimic homepage",
      feature: "Google authentication, realtime post update",
      updateDate: "Nov 20, 2020",
    },
    Covid19: {
      site: "https://covid19-tracker-b4fc3.web.app/",
      youtube: "UWrV9AQdIfI",
      github: "https://github.com/pcreem/covid19-tracker",
      tech: ["Firebase", "React", "OpenStreetMap"],
      intro: "Covid19 info tracker",
      feature: "latest Covid19 data update",
      updateDate: "Nov 20, 2020",
    },
  };

  const [project, setProject] = useState("Amazon");

  return (
    <div className="post">
      <div className="post__nav">
        <div className="post__navButtons">
          <button
            active={project === "Amazon"}
            onClick={(e) => setProject("Amazon")}
            className={`postButton ${
              project === "Amazon" && "postButton--selected"
            }`}
          >
            Amazon
          </button>
          <button
            active={project === "Facebook"}
            onClick={(e) => setProject("Facebook")}
            className={`postButton ${
              project === "Facebook" && "postButton--selected"
            }`}
          >
            Facebook
          </button>
          <button
            active={project === "Covid19"}
            onClick={(e) => setProject("Covid19")}
            className={`postButton ${
              project === "Covid19" && "postButton--selected"
            }`}
          >
            Covid19-Tracker
          </button>
        </div>
        <a
          href={
            (project === "Amazon" && Profolio.Amazon.github) ||
            (project === "Facebook" && Profolio.Facebook.github) ||
            (project === "Covid19" && Profolio.Covid19.github)
          }
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
      <div className="post__content">
        <Content
          site={Profolio[project].site}
          youtube={Profolio[project].youtube}
          tech={Profolio[project].tech}
          intro={Profolio[project].intro}
          feature={Profolio[project].feature}
          updateDate={Profolio[project].updateDate}
        />
      </div>
    </div>
  );
}

export default Post;
