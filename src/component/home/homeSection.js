import React from "react";
import { motion } from "framer-motion";
// images

import profile from "../../image/profile.jpg";
import "./homeSection.css";
function homeSection() {
  // const fadeLeft = {
  //   hidden: { opacity: 0, x: -100 },
  //   visible: { opacity: 1, x: 0 },
  // };

  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Home</h2>
          </div>
        </div>

        <div className="row">
          <div className="home-info">
            <h3 className="hello">
              Hello , my name is <span className="name">Ruchita Oza</span>
            </h3>
            <h3 className="my-profession">
              I' m a <span className="typing"> web developer</span>
            </h3>
            <p>
              {" "}
              I'm a Web Developer, a competitive programmer , a Graphic designer
              and a student!!{" "}
            </p>
            <motion.div className="button">
              <a href="#contact" className="btn hire-me">
                Hire me
              </a>
              <a
                href="https://drive.google.com/file/d/1bqhFjtnnoLymDaCj4jv_jR9hhRUN52kh/view?usp=sharing"
                download="Ruchita_Oza.pdf"
                className="btn hire-me"
              >
                Get Resume
              </a>
            </motion.div>
          </div>
          <div className="home-img padd-15">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default homeSection;
