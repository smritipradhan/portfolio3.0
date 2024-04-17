import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./Project.css";
import appleBackgroundImage from "./../../assets/images/appleBackground.png";
import spotifyBackgroundImage from "./../../assets/images/spotifyBackground.png";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const Project = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component} id="projectSection">
      <div ref={slider} className="container">
        <div className="panel hori">
          <div className="projectDetails">
            <img src={appleBackgroundImage} className="projectImage" />
            <div className="description">
              <div className="title">Apple Shopping Event UI</div>
              <div className="textDe">
                Crafted with meticulous attention to detail, the Apple UI
                showcases my proficiency in CSS and frontend development. Every
                pixel and element is thoughtfully designed and precisely
                implemented, reflecting a dedication to seamless user
                experiences. With clean code and elegant styling, this project
                exemplifies my commitment to excellence in frontend development.
                <br />
                <br />
                "Utilizing SwiperJS, I've enhanced the Apple UI with a seamless
                carousel experience.
                <br />
                <br />
                <span style={{ color: "#ab70e5" }}>Technologies Used :</span>
                React, SASS, SCSS, SwiperJS, Material UI, HTML, CSS.
              </div>
              <button className="button" type="button">
                Link -&gt;
              </button>
            </div>
          </div>
        </div>
        <div className="panel hori">
          <div className="projectDetails">
            <img src={spotifyBackgroundImage} className="projectImage" />
            <div className="description">
              <div className="title">Music-o</div>
              <div className="textDe">
                This dynamic application allowing users to explore, discover,
                and enjoy their favorite tunes in a seamless and visually
                appealing environment. Demonstrated the ability to generate JSON
                Web Tokens (JWT) for secure authentication. Integration of
                Front-end and Back-end services using axios and handling CRUD
                operations.
                <br />
                <span style={{ color: "#ab70e5" }}>Technologies Used :</span>
                React JS, Node JS, Express, Mongo, Redux Toolkit, JavaScript,
                Tailwind CSS, Git, RESTFul API's.
              </div>
              <button className="button" type="button">
                <Link
                  to={
                    "https://spotify-clone-smriti-pradhans-projects.vercel.app/"
                  }
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Link -&gt;
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
