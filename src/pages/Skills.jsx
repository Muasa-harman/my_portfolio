import React from "react";
import "./skills.scss"

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="titles">Skills</h2>
      <h3 className="language">PROGRAMMING LANGUAGES & TOOLS</h3>
      <div className="cards">
        <div className="tools">
        <div className="logo">
          <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="" />
        </div>
        <div className="logo">
          <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
        </div>
        <div className="logo">
          <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="" />
        </div>
        <div className="logo">
          <img className="image" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png" alt="" />
        </div>
        <div className="logo">
          <img className="image" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
        </div>
        <div className="logo">
          <img className="image" src="https://res.cloudinary.com/practicaldev/image/fetch/s--RpUfSAFP--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8otweo5ef6kwc26rmxe5.png" alt="" />
        </div>
        <div className="logo">
          <img className="image" src="https://miro.medium.com/v2/resize:fit:1358/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg" alt="" />
        </div>
        <div className="logo">
          <img className="image" src="https://iconape.com/wp-content/png_logo_vector/nodejs.png" alt="" />
        </div>
        </div>
        <div className="workflow">
          <ul>
            <span className="title">Requirement Gathering:</span>
            <li>
              Collaborate with stakeholders to understand the project's
              requirements, features, and functionality.
            </li>
            <li>
              Define user stories and use cases to guide the development
              process.
            </li>
            <span className="title">Design:</span>
            <li>
              Create wireframes and mockups to visualize the user interface (UI)
              and user experience (UX).
            </li>
            <li>
              Plan the database schema and define relationships between
              different data entities.
            </li>
            <span className="title">Front End Development:</span>
            <li>
              Write HTML, CSS,Sass,Tailwind and JavaScript/Typescript code to
              implement the user interface.
            </li>
            <li>
              Use front-end frameworks/libraries React, and Nextjs to enhance
              interactivity and maintainability.
            </li>
            <li>
              Implement responsive design for various devices and screen sizes.
            </li>
          </ul>

          <ul>
            <span className="title">Back End Development:</span>
            <li>
              Develop server-side logic, handle requests, interact with
              databases, and manage authentication and authorization.
            </li>
            <li>
              Create RESTful APIs or use GraphQL for communication between the
              front end and back end.
            </li>
          </ul>

          <ul>
            <span className="title">Back End Development:</span>
            <li>
              Design and implement the database structure based on the defined
              schema.
            </li>
            <li>
              Use relational databases (e.g., MySQL, PostgreSQL) or NoSQL
              databases (e.g., MongoDB) depending on the project's needs.
            </li>
            <li>Optimize queries for efficient data retrieval.</li>
          </ul>
          <ul>
            <span className="title">Testing:</span>
            <li>
              Write unit tests to ensure individual components (front end and
              back end) work as expected.
            </li>
            <li>
              Perform integration testing to check the interaction between
              different parts of the application.
            </li>
            <li>
              Conduct user acceptance testing (UAT) to validate that the
              application meets stakeholder expectations.
            </li>
          </ul>
          <ul>
            <span className="title">Deployment:</span>
            <li>
              Set up deployment environments (development, staging, production).
            </li>
            <li>
              Use containerization tools (e.g., Docker) for consistency across
              different environments.
            </li>
            <li>
              Deploy the application on hosting platforms render,AWS, Heroku.
            </li>
          </ul>

          <ul>
            <span className="title">Monitoring and Debugging:</span>
            <li>
              Implement logging and monitoring solutions to track application
              performance.
            </li>
            <li>
              Use debugging tools to identify and fix issues in both the front
              end and back end.
            </li>
          </ul>
          <ul>
          <span className="title">Continuous Integration/Continuous Deployment (CI/CD):</span>
            <li>Implement CI/CD pipelines to automate testing and deployment processes.</li>
            <li>Ensure code changes are tested and deployed seamlessly with minimal manual intervention.</li>
          </ul>

          <ul>
          <span className="title">Maintenance and Updates:</span>
            <li>Monitor and update dependencies regularly to address security vulnerabilities.</li>
            <li>Implement new features, enhancements, and bug fixes based on user feedback and evolving requirements.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
