import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src={require("../../assets/software-engineer.png")}
          />
        </ScrollAnimation>
          <div className="AboutBio">
          <ScrollAnimation animateIn="fadeInLeft">
            Hello! I’m <strong>Laxmana Manesh Jonaboina</strong>, a Full Stack Software Engineer with over 5 years of experience building scalable, secure, and user-friendly applications. 
            My expertise spans Python, C#, Java, and modern full-stack frameworks like React, Node.js, and .NET, supported by a strong background in cloud technologies, CI/CD, and database management. 
            Earning my Master’s in Computer Science from the University of Central Missouri further honed my technical depth, collaboration skills, and adaptability.
          </ScrollAnimation>

          <br /><br />

          <ScrollAnimation animateIn="fadeInLeft">
            My journey into software engineering began with a passion for solving complex problems and creating real impact through technology. 
            From developing enterprise-grade solutions at companies like Accenture, Mindtree, and Perficient to leading academic projects such as a <strong>Mindmapping App</strong> and <strong>BookMyTickets</strong>, I’ve consistently delivered high-quality applications recognized by peers, instructors, and clients. 
            Whether optimizing code for performance, designing robust APIs, or implementing secure cloud-based workflows, I enjoy building systems that truly work for people.
          </ScrollAnimation>


            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and AI,ML models development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
