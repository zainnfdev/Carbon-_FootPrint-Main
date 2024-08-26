import React from 'react';
import './assets/css/about.css';
import { Icon } from '@iconify/react';

const About = () => {
 

  return (
    <section className="team-main">
      <h1>
        Take your first Carbon <span>Footsteps</span> with us
      </h1>
      <div className="about-info">
        <div className="about-p">
          <div className="about-h3">
          About Our Carbon-Footprint MERN Project
          </div>
          <p>

          Welcome to our Carbon-Footprint MERN Project, where we are dedicated to making a positive impact on the environment and raising awareness about carbon emissions. Our project is built on the MongoDB, Express, React, and Node.js (MERN) stack, showcasing our commitment to sustainable technology.
          </p>
          <div className="about-h3">
            Mission and Purpose:
          </div>
          <p>
          At the heart of our project is a mission to empower individuals and organizations to measure, reduce, and offset their carbon footprint. We believe that understanding one's environmental impact is the first step towards making meaningful changes. Our platform provides the tools and information necessary to take action against climate change.
          </p>
        </div>
      </div>
      {/* <div className="team-info">
        {team.map((teammate) => (
          <div className="team-container" key={teammate.name}>
            <h2>{teammate.name}</h2>
            <img
              src={teammate.src}
              alt={teammate.name}
              style={{ width: 200 }}
            ></img>
            <div className="links-row">
              <div className="links-col">
                <a href="mailto:{teammate.email}">
                  <h3>
                    <Icon icon="clarity:email-line" color="#243B4A" />
                  </h3>
                </a>
              </div>
              <div className="links-col">
                <a
                  href={teammate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>
                    <Icon icon="akar-icons:github-fill" color="#243B4A" />
                  </h4>
                </a>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default About;
