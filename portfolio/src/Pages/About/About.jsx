import React from "react";
import "./about.css";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";

const About = () => {
  return (
    <div>
      <header>
        <h3 className="custom-font">About</h3>
      </header>

      <section className="about--content">
        <div>
          <span>Born in 2002 in Kumasi,Ghana.</span>
          <span>
            I am a self-taught frontend dev who knows some backend: Node js and
            Express.js. <br />I am continuosly learning to be highly proficient
            in both fields: front and back.
          </span>
          <span>
            Have a strong interest for experimentation: "the best comes from
            trial and error".
          </span>
          <span>
            I have a keen passion for music. If I am not coding , I am listening
            to music and relaxing.
          </span>
        </div>
      </section>
    </div>
  );
};

export default About;
