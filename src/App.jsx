import React from "react";
import "./App.css";

function App() {
  const skills = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MySQL",
    "REST APIs",
    "Machine Learning",
    "Git",
    "Postman",
    "Blockchain",
    "IPFS",
  ];

  const projects = [
    {
      number: "01",
      icon: "🔐",
      title: "Secure Question Paper Leakage Prevention",
      description:
        "A blockchain-powered security system designed to prevent question paper leakage using encryption, OTP authentication, IPFS storage and Ethereum smart contracts.",
      tech: [
        "React.js",
        "Spring Boot",
        "MySQL",
        "Ethereum",
        "IPFS",
        "JWT",
        "AES-256",
      ],
      github:
      "https://github.com/rameshlakshwani/QuestionPaperLeakagePreventionSystemUsingBlockchain",
    },
    {
      number: "02",
      icon: "🤖",
      title: "Human Activity Recognition",
      description:
        "An intelligent machine learning system that recognizes human activities using sensor data and machine learning and deep learning techniques.",
      tech: [
        "Machine Learning",
        "SVM",
        "Random Forest",
        "CNN",
        "RNN",
      ],
    },
  ];

 const experiences = [
  {
    year: "2025 — PRESENT",
    role: "Java Full Stack Trainee",
    company: "DheeCoding Lab",
    description:
      "Developing hands-on expertise in Java Full Stack development, with a focus on Java, Spring Boot, REST APIs, React.js, SQL and database-driven application development.",
  },

  {
    year: "2025",
    role: "Java Full Stack Intern",
    company: "Strydo Technologies Pvt. Ltd.",
    description:
      "Contributed to full-stack application development while gaining practical experience in Java, web technologies, databases and software development workflows.",
  },

  {
    year: "2025",
    role: "Cloud Computing Intern",
    company: "CodTech IT Solutions",
    description:
      "Worked on cloud computing concepts and gained practical exposure to cloud technologies, deployment practices and scalable application environments.",
  },
];

  return (
    <div className="portfolio">

      {/* BACKGROUND EFFECTS */}
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <span>&lt;</span>LR<span>/&gt;</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="hero-content">

          <div className="availability">
            <span></span>
            Available for opportunities
          </div>

          <p className="small-title">
            HELLO, I'M
          </p>

          <h1>
            Lakshwani
            <span>Ramesh.</span>
          </h1>

          <h2>
            AI & ML Engineer
            <b>×</b>
            Java Full Stack Developer
          </h2>

          <p className="hero-description">
            I build intelligent, secure and scalable applications by
            combining Artificial Intelligence, Java backend technologies
            and modern frontend development.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work
              <span>→</span>
            </a>

            <a
              href="public/resume.pdf"
              download
              className="secondary-button"
            >
              ↓ Download Resume
            </a>

          </div>

          <div className="socials">

            <a
              href="https://github.com/rameshlakshwani"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/lakshwani-ramesh-986379355"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              in
            </a>

            <a
              href="mailto:rameshlakshwani@gmail.com"
              title="Email"
            >
              @
            </a>

          </div>

        </div>

        {/* PROFILE IMAGE */}
        <div className="hero-image-section">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-card">

            <div className="profile-image">
              <img src="/lakshwani.jpg" />
              />
            </div>

            <div className="floating-card card-top">

              <span className="floating-icon">
                &lt;/&gt;
              </span>

              <div>
                <strong>Full Stack</strong>
                <small>Developer</small>
              </div>

            </div>

            <div className="floating-card card-bottom">

              <span className="floating-icon">
                AI
              </span>

              <div>
                <strong>AI / ML</strong>
                <small>Engineer</small>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats">

        <div>
          <strong>9.02</strong>
          <span>CGPA</span>
        </div>

        <div>
          <strong>2026</strong>
          <span>Graduate</span>
        </div>

        <div>
          <strong>15+</strong>
          <span>Technologies</span>
        </div>

        <div>
          <strong>2+</strong>
          <span>Major Projects</span>
        </div>

      </section>

      {/* ABOUT */}
      <section className="section about" id="about">

        <div className="section-heading">

          <p>01 — ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>

        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I'm a B.Tech graduate specializing in Artificial
              Intelligence and Machine Learning, with a strong
              interest in Java Full Stack development.
            </p>

            <p>
              My technical journey combines AI/ML concepts with
              backend development, database management, frontend
              technologies and secure application development.
            </p>

            <p>
              I enjoy solving real-world problems and transforming
              ideas into practical applications that are reliable,
              scalable and easy to use.
            </p>

            <div className="about-details">

              <div>
                <span>📍</span>
                Chittoor, Andhra Pradesh
              </div>

              <div>
                <span>🎓</span>
                B.Tech — AIML
              </div>

              <div>
                <span>💻</span>
                Java Full Stack
              </div>

            </div>

          </div>

          <div className="about-card">

            <div className="card-icon">
              🧠
            </div>

            <h3>
              My Developer Mindset
            </h3>

            <p>
              Learn continuously. Build intelligently.
              Solve creatively.
            </p>

            <div className="mindset-tags">
              <span>Problem Solving</span>
              <span>Innovation</span>
              <span>Clean Code</span>
              <span>Continuous Learning</span>
              <span>Teamwork</span>
              <span>Adaptability</span>
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section
        className="section skills-section"
        id="skills"
      >

        <div className="section-heading">

          <p>02 — TECHNICAL ARSENAL</p>

          <h2>
            Technologies I
            <span> work with.</span>
          </h2>

        </div>

        <div className="skill-categories">

          <div className="skill-category">

            <div className="category-icon">
              {"</>"}
            </div>

            <h3>Frontend</h3>

            <p>
              React.js · JavaScript · HTML · CSS · Bootstrap
            </p>

          </div>

          <div className="skill-category">

            <div className="category-icon">
              ⚙
            </div>

            <h3>Backend</h3>

            <p>
              Java · Spring Boot · Spring Security ·
              Hibernate · REST API
            </p>

          </div>

          <div className="skill-category">

            <div className="category-icon">
              🗄
            </div>

            <h3>Database</h3>

            <p>
              MySQL · JDBC · SQL
            </p>

          </div>

          <div className="skill-category">

            <div className="category-icon">
              🧠
            </div>

            <h3>AI / ML</h3>

            <p>
              Machine Learning · SVM · Random Forest ·
              CNN · RNN
            </p>

          </div>

        </div>

        <div className="skills-list">

          {skills.map((skill, index) => (
            <div
              className="skill-pill"
              key={index}
            >
              {skill}
            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section
        className="section projects-section"
        id="projects"
      >

        <div className="section-heading">

          <p>03 — FEATURED WORK</p>

          <h2>
            Projects that
            <span> solve problems.</span>
          </h2>

        </div>

        <div className="projects">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.number}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-icon">
                  {project.icon}
                </div>

              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">

                {project.tech.map((item, index) => (
                  <span key={index}>
                    {item}
                  </span>
                ))}

              </div>

              <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  View Project →
</a>

            </div>

          ))}

        </div>

      </section>

      {/* EXPERIENCE */}
      <section
        className="section experience"
        id="experience"
      >

        <div className="section-heading">

          <p>04 — EXPERIENCE</p>

          <h2>
            My professional
            <span> journey.</span>
          </h2>

        </div>

        <div className="timeline">

          {experiences.map((experience, index) => (

            <div
              className="timeline-item"
              key={index}
            >

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>
                  {experience.year}
                </span>

                <h3>
                  {experience.role}
                </h3>

                <h4>
                  {experience.company}
                </h4>

                <p>
                  {experience.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* EDUCATION */}
      <section className="section education">

        <div className="section-heading">

          <p>05 — EDUCATION</p>

          <h2>
            Academic
            <span> foundation.</span>
          </h2>

        </div>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div>

            <span>
              2022 — 2026
            </span>

            <h3>
              Bachelor of Technology
            </h3>

            <h4>
              Artificial Intelligence & Machine Learning
            </h4>

            <p>
              Sreenivasa Institute of Technology
              and Management Studies
            </p>

          </div>

          <div className="cgpa">

            <strong>
              9.02
            </strong>

            <span>
              CGPA
            </span>

          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="section achievements">

        <div className="section-heading">

          <p>06 — ACHIEVEMENTS</p>

          <h2>
            Milestones I'm
            <span> proud of.</span>
          </h2>

        </div>

        <div className="achievement-grid">

          <div className="achievement-card">

  <div className="achievement-icon">
    💻
  </div>

  <h3>
    LeetCode 100 Days
  </h3>

  <p>
    Successfully completed the LeetCode 100 Days
    Coding Challenge, demonstrating consistency,
    problem-solving skills and dedication to
    continuous coding practice.
  </p>

  <div className="achievement-badge">
    100 DAYS
  </div>

</div>

          <div className="achievement-card">

            <div className="achievement-icon">
              💼
            </div>

            <h3>
              Multiple Internships
            </h3>

            <p>
              Gained experience across AI,
              Java Full Stack and Cloud technologies.
            </p>

          </div>

          <div className="achievement-card">

            <div className="achievement-icon">
              🧠
            </div>

            <h3>
              AI / ML Projects
            </h3>

            <p>
              Developed projects combining machine
              learning and intelligent systems.
            </p>

          </div>

        </div>

      </section>

      {/* RESUME */}
      <section className="resume-section">

        <div>

          <p>
            MY RESUME
          </p>

          <h2>
            Let's build something
            <span> extraordinary.</span>
          </h2>

          <p>
            Want to know more about my skills,
            experience and projects? Download my
            complete resume.
          </p>

          <a
            href="public/resume.pdf"
            download
            className="primary-button"
          >
            ↓ Download Resume
          </a>

        </div>

      </section>

      {/* CONTACT */}
      <section
        className="section contact"
        id="contact"
      >

        <div className="section-heading">

          <p>07 — CONTACT</p>

          <h2>
            Let's create something
            <span> amazing.</span>
          </h2>

        </div>

        <div className="contact-grid">

          <div>

            <h3>
              Have an opportunity?
            </h3>

            <p>
              I'm always interested in discussing
              new opportunities, projects and
              collaborations.
            </p>

            <div className="contact-info">

              <a href="mailto:rameshlakshwani@gmail.com">
                <span>✉</span>
                rameshlakshwani@gmail.com
              </a>

              <div>
                <span>📍</span>
                Chittoor, Andhra Pradesh
              </div>

            </div>

          </div>

          <div className="contact-card">

            <span>
              START A CONVERSATION
            </span>

            <a href="mailto:rameshlakshwani@gmail.com">
              Say Hello →
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="logo">
          <span>&lt;</span>
          LR
          <span>/&gt;</span>
        </div>

        <p>
          Designed & built by Lakshwani Ramesh © 2026
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GH
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;
