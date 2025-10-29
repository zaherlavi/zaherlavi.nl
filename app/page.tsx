"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Section
        id="about"
        className=""
        title="About Me"
      >
        <div className="max-w-4xl mx-auto">
          <p
            className={"text-xl leading-relaxed mb-12"}
          >
            Software engineer and startup co-founder with a passion for
            building innovative solutions through code. Skilled in programming,
            algorithms, and system design, with hands-on experience turning
            ideas into real-world applications. Always exploring new
            technologies and striving to grow as a software engineer through
            continuous learning and challenging projects.
          </p>

          <div className="space-y-12">
            <div>
              <h3
                className={"text-3xl font-semibold mb-8 text-purple-400"}
              >
                Work Experience
              </h3>
              <div className="space-y-10">
                <div>
                  <h4
                    className={"text-2xl font-semibold text-white"}
                  >
                    Full-Stack Engineer Intern
                  </h4>
                  <p
                    className={"mb-3 text-lg text-purple-300"}
                  >
                    <b>Capisoft</b> (March 2025, July 2025)
                  </p>
                  <p className={"text-lg text-white"}>
                    Actively involved in developing full-stack web applications using React, Django, and Firebase. Integrating AI into organizational applications used daily by professionals. Committed to writing clean, reusable, and secure code, reinforced by thorough testing to ensure production readiness, in collaboration with our brilliant team.
                  </p>
                </div>
                <div>
                  <h4
                    className={"text-2xl font-semibold text-white"}
                  >
                    IT Digital Support
                  </h4>
                  <p
                    className={"mb-3 text-lg text-purple-300"}
                  >
                    <b>Vrije Universiteit of Amsterdam</b> (Feb 2022, Present)
                  </p>
                  <p className={"text-lg text-white"}>
                    Supporting the exam hall by troubleshooting network and
                    software issues for students during digital exams.
                  </p>
                </div>
                <div>
                  <h4
                    className={"text-2xl font-semibold text-white"}
                  >
                    Commercial Graphic Designer
                  </h4>
                  <p
                    className={"mb-3 text-lg text-purple-300"}
                  >
                    <b>Barg Print</b> (Feb 2019, Aug 2020)
                  </p>
                  <p className={"text-lg text-white"}>
                    Managed client branding and designed websites, logos, and
                    print materials. Maintained printing equipment and ensured
                    high-quality output.
                  </p>
                </div>
                <div>
                  <h4
                    className={"text-2xl font-semibold text-white"}
                  >
                    Co-founder & Software Engineer
                  </h4>
                  <p
                    className={"mb-3 text-lg text-purple-300"}
                  >
                    <b>Vervai</b> (May 2024, March 2025)
                  </p>
                  <p className={"text-lg text-white"}>
                    Co-founded a startup focused on AI and data integration for
                    small businesses. Built full-stack AI dashboards, and
                    currently developing a sensor-based AI system for sports
                    facilities.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3
                className={"text-3xl font-semibold mb-8 text-purple-300"}
              >
                Education
              </h3>
              <div className="space-y-8">
                <div>
                  <h4
                    className={"text-2xl font-semibold text-white"}
                  >
                    Bachelor's in Computer Science
                  </h4>
                  <p
                    className={"text-lg text-purple-200"}
                  >
                    Vrije Universiteit Amsterdam (Sep 2022, July 2025)
                  </p>
                  <p>
                    Thesis : "GNN model to predict EPSS scores"
                  </p>
                  <p>
                    Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        className=""
        title="Projects"
      >
        <Projects />
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        className=""
        title="Contact Me"
      >
        <ContactForm />
      </Section>

      {/* Footer */}
      <footer className="w-full py-8 text-center border-purple-900/30">
        <p
          className={"text-xl font-serif text-white"}
        >
          &copy; {new Date().getFullYear()} Zaher Lavi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
