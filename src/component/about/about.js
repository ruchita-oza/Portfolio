import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function about() {
  const aboutMe = [
    { title: "Birthday", span: "17 oct 2001" },
    { title: "Age", span: "20" },
    { title: "Email", span: "ruchitaoza9@gmail.com" },
    { title: "Degree", span: "CS('23)" },
    { title: "City", span: "Amreli , Gujarat" },
    { title: "FreeLance", span: "Available" },
  ];
  const skillItems = [
    { skill: "Problem-solving", accuracy: "76%" },
    { skill: "MERN", accuracy: "82%" },
    { skill: "SQL", accuracy: "70%" },
    { skill: "Python - Django", accuracy: "62%" },
    { skill: "DSA", accuracy: "80%" },
    { skill: "ASP.NET", accuracy: "89%" },
  ];
  const Educations = [
    {
      date: "2019-Present",
      title: "B.E. in computer science",
      description: "Dharamsinh desai university - Nadiad, India with CPI 8.33",
    },
    {
      date: "2017-2019",
      title: "12th Board",
      description:
        "Oxford school , Amreli india with 89% in GSEB , JEE score - 98.39 pr",
    },
    {
      date: "2015-2017",
      title: "10th Board",
      description: "Sankul , Amreli india with 92% in GSEB",
    },
  ];
  const Experiences = [
    {
      date: "2022 - Present",
      title: "Summer Intern AT ATLIQ vadodara , India.",
      description:
        "AtliQ was established in 2017 as an IT services company with the aim to help businesses integrate their processes with automated tools. As a first industry experience , I personally found This team sorry this family better.",
    },
    {
      date: "2020 - Present",
      title: "Graphic Designer At Samvaad DDU Club",
      description:
        "Samvaad is a basically communication club in our collage. I'm Head of graphic designers in this club. This club helped me a lot to work on my communication in a team which really helped me to improve my teamwork skill. ",
    },
  ];
  return (
    <div>
      {" "}
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text">
                  <h3>
                    I'm Ruchita oza and <span>Web developer</span>
                  </h3>
                  <p>
                    Software engineer with excellent problem-solving skills and
                    ability to perform well in a team. Passionate about coding
                    and enjoy to learning new skills
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    {aboutMe &&
                      aboutMe.map((about, index) => (
                        <div className="info-item padd-15" key={index}>
                          <p>
                            {about.title} : <span>{about.span}</span>
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="row">
                    <div className="buttons">
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
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    {skillItems &&
                      skillItems.map((skillItem, index) => (
                        <div className="skill-item padd-15" key={index}>
                          <h5>{skillItem.skill}</h5>
                          <div className="progress">
                            <div
                              className="progress-in"
                              style={{ width: skillItem.accuracy }}
                            ></div>
                            <div className="skill-percent">
                              {skillItem.accuracy}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- timeline item --> */}
                        {Educations &&
                          Educations.map((education, index) => (
                            <div className="timeline-item" key={index}>
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <FontAwesomeIcon
                                  className="fa"
                                  icon={faCalendar}
                                ></FontAwesomeIcon>
                                {education.date}
                              </h3>
                              <h4 className="timeline-title">
                                {education.title}
                              </h4>
                              <p className="timeline-text">
                                {education.description}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* <!-- timeline item --> */}
                        {Experiences &&
                          Experiences.map((experience, index) => (
                            <div className="timeline-item" key={index}>
                              <div className="circle-dot"></div>
                              <h3 className="timeline-date">
                                <FontAwesomeIcon
                                  className="fa"
                                  icon={faCalendar}
                                ></FontAwesomeIcon>{" "}
                                {experience.date}
                              </h3>
                              <h4 className="timeline-title">
                                {experience.title}
                              </h4>
                              <p className="timeline-text">
                                {experience.description}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
