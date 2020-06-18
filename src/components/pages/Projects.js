import React from "react";

const Projects = () => (
  <div>
    <div id="projCont" className="container">
      <div className="card mb-4">
        <div className="card-header">
          <h3>Would You Rather</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Planthood</h3>
        </div>
        <div className="card-body">
          <img
            src="../landinglogo2.png"
            class="img-fluid"
            alt="Responsive image"
          />
          <p className="card-text">Card content</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Food Radar</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
