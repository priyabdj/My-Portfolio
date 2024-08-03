import React from "react";
import "./About.css";
// import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="about-section">
        <div className="about-right">
          <div className="about-para">
            <p>
              Passionate Frontend Developer | Crafting Engaging User Experiences
              with HTML | CSS | JavaScript | React js
            </p>
            <br/>
            <p>Front-End Development is a dynamic and evolving field, requiring continuous learning and adaptation. It's a blend of creativity and technical expertise, making it an exciting career for those passionate about web technologies and user experiences.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p> React Js </p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p> JavaScript </p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap ,Tailwind CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
          <div className="about-achievement">
            <div className="about-achive">
                <h1>15+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achive">
                <h1>30+</h1>
                <p>Code Commits</p>
            </div>
            <hr />
            <div className="about-achive">
                <h1>6</h1>
                <p>Technologies Masters</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
