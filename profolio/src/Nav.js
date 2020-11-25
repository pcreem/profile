import React from "react";
import "./Nav.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Nav() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav">
      <div className="nav__logo" onClick={scrollToTop}>
        <h3>CP</h3>
      </div>
      <div className="nav__social">
        <a href="https://github.com/pcreem" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/song-lin-a032831b7/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Nav;
