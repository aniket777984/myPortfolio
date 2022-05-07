import { Typography } from "@material-ui/core";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is a sample quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="/user.png.jpg" alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black",fontWeight:"600" }}
          >
            Aniket Kumar Gupta
          </Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center",fontWeight:"600",fontSize:"30px" }}>
            My Portfolio Site
          </Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center",fontWeight:"600",fontSize:"20px" }}>
            Full Stack Developer
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              fontWeight:"600",color:" hsl(250, 100%, 75%)" ,fontSize:"20px"
            }}
          >
            Seven billion people are on this Earth, and everybody is different from the rest of others. There is nothing without purpose in this world. Everything has some purpose. Humans are the
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
