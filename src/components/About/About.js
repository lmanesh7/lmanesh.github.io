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
            Hello! I’m <strong>Laxmana Manesh Jonaboina</strong>, a Software Engineer specializing in Machine Learning with over 5 years of experience architecting scalable, data-driven systems. 
            My expertise bridges the gap between model development and production engineering—combining deep proficiency in <strong>Python, PyTorch, and RAG architectures</strong> with a robust background in full-stack systems (React, Node.js) and cloud infrastructure (Kubernetes, Azure). 
            Earning my Master’s in Computer Science from the University of Central Missouri, where I excelled in Machine Learning, further honed my ability to translate complex algorithms into high-performance, real-world solutions.
          </ScrollAnimation>

          <br /><br />

          <ScrollAnimation animateIn="fadeInLeft">
            My journey into AI began with a passion for turning raw data into actionable intelligence. 
            From engineering enterprise-scale predictive analytics pipelines at the <strong>Kansas Department of Transportation</strong> to building GenAI-powered tools like my <strong>AI Medical Research Assistant</strong>, I focus on delivering impact through technology. 
            Whether I'm fine-tuning Transformer models, optimizing vector search retrieval, or designing secure CI/CD workflows for ML deployment, I enjoy solving the "last mile" challenges of bringing AI to production.
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
