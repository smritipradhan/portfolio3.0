import { Typography } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import Typewriter from "typewriter-effect";
import quotes from "../../assets/images/Quotes.svg";
import arrowImage from "../../assets/images/arrow.svg";
import Bulb from "../../assets/images/bulb.webp";
import profile from "../../assets/images/profile.png";
import Rajesh from "../../assets/images/rajesh.png";
import classes from "./Home.module.scss";
// import { techIcons } from "../../constants/Constants";
import { techIcons } from "../../constants/Constants.tsx";
import { recommendtion } from "../../constants/Constants.tsx";
import Project from "../Projects/Project";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  return (
    <>
      <main className={classes.main} id="main">
        <div className={classes.developerHeader}>
          <div>
            <img src={arrowImage} alt="Arrow" className={classes.arrow} />
          </div>
          <span className={classes.name}>
            Hello! I Am <span className={classes.purple}>Smriti</span>
          </span>
        </div>
        <div className={classes.developerAbout}>
          <img
            src={profile}
            alt="Background Image of Developer"
            className={classes.developerImage}
          />
          <div className={classes.developerText}>
            <div className={classes.developerWho}>A Developer who</div>
            <div className={classes.transform}>
              Transform Ideas into Visually Stunning
              <span className={classes.purple}>
                <Typewriter
                  options={{
                    strings: ["Websites...", "..."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className={classes.softwareEngineer}>
          I'm a Software Engineer ....
        </div>
        <div className={classes.uiDev}>
          Result-driven graduate with 2.5+ years of work experience in Front-end
          Development and highly skilled and eﬀicient coder with a foundation in
          Data Structures and Algorithms (DSA).
        </div>

        <section className={classes.techStack} id="techStackId">
          <div className={classes.heading}>
            <div className={classes.bulb}>
              <img src={Bulb} style={{ height: "80px" }} />
            </div>
            <div>Tech Stack</div>
          </div>
          <div className={classes.techStackContent}>
            {techIcons.map((element, index) => {
              return (
                <>
                  <div className={classes.reactElement} key={index}>
                    <img
                      src={element?.icon}
                      className={
                        index === 0 ? classes.IconRotate : classes.Icon
                      }
                    />
                    <Typography className={classes.techStackText}>
                      {element?.text}
                    </Typography>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <section>
          <Project />
        </section>

        <section id="contactMe" className={classes.contactMe}>
          <div className={classes.recomendationContainaer}>
            {recommendtion.map((eachRecommendation) => {
              return (
                <div className={classes.recomendation}>
                  <img src={quotes} style={{ height: "30px" }} />
                  <div className={classes.text}>{eachRecommendation.text}</div>
                  <div>
                    <div className={classes.profile}>
                      <div className={classes.avatar}>
                        <img
                          src={eachRecommendation.avatar}
                          style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div>
                        <div>{eachRecommendation.name}</div>
                        <div className={classes.about}>
                          {eachRecommendation.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
};

export default Home;
