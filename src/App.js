import classes from "./App.module.scss";
import Home from "./pages/Home/Home";
import GithubIcon from "./assets/images/githubDarkLink.svg";
import LinkedInIcon from "./assets/images/linkedinDark.svg";
import LeetcodeIcon from "./assets/images/leetcode.png";
import { BrowserRouter, Link } from "react-router-dom";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <BrowserRouter>
      <div className={classes.appContainer}>
        <header className={classes.header}>
          <nav>
            <ul className={classes.navigation}>
              <li onClick={() => scrollToSection("main")}>
                <span className={classes.navItem}>Home</span>
              </li>
              <li onClick={() => scrollToSection("techStackId")}>
                <span className={classes.navItem}>Techstack</span>
              </li>
              <li onClick={() => scrollToSection("projectSection")}>
                <span className={classes.navItem}>Projects</span>
              </li>
              <li onClick={() => scrollToSection("contactMe")}>
                <span className={classes.navItem}>Contact me</span>
              </li>
              <li style={{ display: "flex", gap: "20px" }}>
                <Link to="https://github.com/smritipradhan" target="_blank">
                  <img src={GithubIcon} />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/smriti-pradhan10/"
                  target="_blank"
                >
                  <img src={LinkedInIcon} />
                </Link>
                <Link
                  to="https://leetcode.com/smritipradhan545/"
                  target="_blank"
                >
                  <img
                    src={LeetcodeIcon}
                    style={{ height: "30px", width: "30px" }}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <div
          style={{
            position: "sticky",
            position: "-webkit-sticky",
            bottom: "0",
            backgroundColor: "white",
          }}
        >
          <KeyboardDoubleArrowUpIcon />
          dew
        </div> */}
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
