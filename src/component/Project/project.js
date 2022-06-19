import React from "react";
//project image
import "./project.css";
import project_1 from "../../image/project-1.jpg";
import project_2 from "../../image/project-2.jpg";
import project_3 from "../../image/project-3.jpg";
import project_4 from "../../image/project-4.jpg";

function project() {
  const projects = [
    { image: project_1, url: "https://github.com/Hetvee17/Pet_Finder.git" },
    {
      image: project_2,
      url: "https://github.com/ruchita-oza/Online_pizza_ordering_system.git",
    },
    {
      image: project_3,
      url: "https://github.com/ruchita-oza/Gender-And-Age-Detaction.git",
    },
    { image: project_4, url: "https://github.com/miyatrayash/connectus.git" },
  ];
  return (
    <section className="portfolio section" id="projects">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Prjects</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Project :</h2>
          </div>
        </div>
        {/* <!-- project item --> */}
        <div className="row">
          {projects &&
            projects.map((project, index) => (
              <div className="portfolio-item padd-15" key={index}>
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <a href={project.url}>
                      <img src={project.image} alt="img" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default project;
