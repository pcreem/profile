import React from "react";
import "./Contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <div className="contact">
      <ul className="contact__infobox">
        <li>
          <h5>LOCATION</h5>
          <p>Taipei, Taiwan</p>
        </li>
        <li>
          <h5>EMAIL</h5>
          <p>creempepper@gmail.com</p>
        </li>
        <li>
          <h5>BLOG</h5>
          <a href="https://dev.to/pcreem" target="_blank" rel="noreferrer">
            DEV
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
