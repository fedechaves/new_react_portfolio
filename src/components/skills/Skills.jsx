import React from 'react';
import "./skills.css";
import Backend from './Backend';
import Frontend from './Frontend';


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">if the job has a wider scope, I am adept at learning new technologies and am always up to welcome new challenges.</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills
