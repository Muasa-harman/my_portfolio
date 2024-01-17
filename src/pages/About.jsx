import React from "react";
import { Link } from "react-router-dom";
import "./about.scss"

const About = () => {
  return (
    <div className="about">
       <div className="image">
        <h3 className="">upload cv</h3>
        <h3 className="">upload cover letter</h3>
        {/* <img
          className="profileP"
          src="https://media.licdn.com/dms/image/D4D03AQG7BUxHF4I8Tg/profile-displayphoto-shrink_800_800/0/1701194850229?e=1710979200&v=beta&t=_4pcIIxCbUnBBApuuGUFLhqB1ocxGyilNSYQWWXUERU"
          alt=""
        /> */}
      </div>
      <h1 className="profile">FULL STACK DEVELOPER</h1>
      <h2 className="name">HARMAN MALUTI MUASA</h2>
      <h3 className="address">
        <span className="city">NAIROBI</span> 
        <br />
        Kenya
      </h3>
      <span className="phone">+254721456992</span>
      <div className="socials">

      <h2 className="links" blank="">
        <Link to="https://www.linkedin.com/in/harman-muasa-fullstackdev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bw5yXCVfBQ82Nfyn6WXRnhA%3D%3D" blank="">
        <img
          className="social" src="data:image/png;base64,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"
          alt=""
        />
        </Link>
        <Link to="https://github.com/Muasa-harman">
        <img
          className="social" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          alt=""
        />
        </Link>
        <Link to="http://www.youtube.com/@techworldevs">
        <img
          className="social" src="data:image/png;base64,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"
          alt=""
        />
        </Link>
        <Link to="https://podcasters.spotify.com/pod/show/harman-muasa1">
        <img
          className="social" src="https://w7.pngwing.com/pngs/67/313/png-transparent-spotify-podcast-spotify-logo-text-logo-music-download.png"
          alt=""
        />
        </Link>
      </h2>
      </div>
      <p className="summary">
        Experienced Web Web Developer adept in all stages of advanced web
        development.<br/> Knowledgeable in user interface, tesing and debugging
        processes.<br/> Proficient in various platforms, languages and embedded
        systems.<br/> Able to effectively self-manage during independent projects, as
        well as collaborate as part of a productice team.<br/> Proficient in
        assortment of technologies,<br/> including JavaScript in short and small
        projects and Typescript for large/flexible projects.<br/> Frameworks such as
        Reactjs,React Native and Nextjs and <br/> styling with CSS,Sass and Tailwind
        for frontend as  well as graphql <br/>, Nextjs, and Nodejs, express
        server,Nestjs,Microsoft sql server,Graphql and C# among other frameworks
        in nodejs for backend programming.<br/> Various databses and technologies
        include Mysql,Postgres,Mongodb and dockers for containerisation. <br/>Thus an
        experienced software developer adept in bringing forth expertise in
        design,development and testing, installation and maintenace of software
        system lifecycle
      </p>
    </div>
  );
};

export default About;
