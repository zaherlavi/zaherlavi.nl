"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { useTheme } from "@/components/ThemeProvider";
import Projects from "@/components/Projects";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Section
        id="about"
        className="bg-gradient-to-b from-black to-purple-900"
        title="About Me"
      >
        <div className="max-w-4xl mx-auto">
          <p
            className={`text-lg leading-relaxed mb-12 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Computer science student and startup co-founder with a passion for
            building innovative solutions through code. Skilled in programming,
            algorithms, and system design, with hands-on experience turning
            ideas into real-world applications. Always exploring new
            technologies and striving to grow as a software engineer through
            continuous learning and challenging projects.
          </p>

          <div className="space-y-12">
            <div>
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  theme === "dark" ? "text-purple-400" : "text-purple-700"
                }`}
              >
                Work Experience
              </h3>
              <div className="space-y-8">
                <div>
                  <h4
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    IT Digital Support
                  </h4>
                  <p
                    className={`mb-2 ${
                      theme === "dark" ? "text-purple-300" : "text-purple-700"
                    }`}
                  >
                    Vrije Universiteit of Amsterdam (Feb 2022, Present)
                  </p>
                  <p className={theme === "dark" ? "text-white" : "text-black"}>
                    Supporting the exam hall by troubleshooting network and
                    software issues for students during digital exams.
                  </p>
                </div>
                <div>
                  <h4
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Commercial Graphic Designer
                  </h4>
                  <p
                    className={`mb-2 ${
                      theme === "dark" ? "text-purple-300" : "text-purple-700"
                    }`}
                  >
                    Barg Print (Feb 2019, Aug 2020)
                  </p>
                  <p className={theme === "dark" ? "text-white" : "text-black"}>
                    Managed client branding and designed websites, logos, and
                    print materials. Maintained printing equipment and ensured
                    high-quality output.
                  </p>
                </div>
                <div>
                  <h4
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Co-founder & Software Engineer
                  </h4>
                  <p
                    className={`mb-2 ${
                      theme === "dark" ? "text-purple-300" : "text-purple-700"
                    }`}
                  >
                    Vervai (May 2024, March 2025)
                  </p>
                  <p className={theme === "dark" ? "text-white" : "text-black"}>
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
                className={`text-2xl font-semibold mb-6 ${
                  theme === "dark" ? "text-purple-300" : "text-purple-700"
                }`}
              >
                Education
              </h3>
              <div className="space-y-8">
                <div>
                  <h4
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Bachelor's in Computer Science
                  </h4>
                  <p
                    className={
                      theme === "dark" ? "text-purple-200" : "text-purple-700"
                    }
                  >
                    Vrije Universiteit Amsterdam (Sep 2022, Present)
                  </p>
                </div>
                <div>
                  <h4
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    B.Sc. in Information Technology
                  </h4>
                  <p
                    className={
                      theme === "dark" ? "text-purple-200" : "text-purple-700"
                    }
                  >
                    Payame Noor University, Mahabad (Sep 2015, Jul 2019)
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
        className="bg-gradient-to-b from-purple-900 to-black"
        title="Projects"
      >
        <Projects />
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        className="bg-gradient-to-b from-black to-purple-900"
        title="Contact Me"
      >
        <ContactForm />
      </Section>

      {/* Footer */}
      <footer className="w-full py-6 text-center border-purple-900/30">
        <p
          className={`text-lg font-serif ${
            theme === "dark" ? "text-white" : "text-purple-100"
          }`}
        >
          &copy; {new Date().getFullYear()} Zaher Lavi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
