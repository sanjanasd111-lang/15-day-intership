import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  const year = new Date().getFullYear();

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <nav className="navbar">
          <div className="logo">Sanjana SD</div>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero-section" id="hero">
          <h1 className="hero-title">Hi, I'm Sanjana SD</h1>

          <p className="tagline">
            I build beautiful, fast, accessible websites
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <h2>About Me</h2>

          <div className="about-content">
            <figure className="profile-figure">
              <img
                src="/profileWPS.jpeg"
                alt="Sanjana SD"
                className="profile-image"
              />

              <figcaption>Sanjana - Web Developer</figcaption>
            </figure>

            <div className="about-text">
              <p>
                I'm a passionate web developer. I enjoy creating user-friendly
                and responsive websites using modern web technologies.
              </p>

              <p>
                I'm always eager to learn new skills and improve my knowledge
                in web development.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section" id="projects">
          <h2>My Projects</h2>

          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://th.bing.com/th/id/OIP.rpNO9UC_ZjR-d-ELe-yU1QHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                alt="Weather app"
              />

              <h3>Weather App</h3>

              <p>Real-time weather dashboard</p>

              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">API</span>
              </div>

              <div className="project-buttons">
                <a href="#" className="button">
                  Live Demo
                </a>

                <a
                  href="https://github.com/sanjanasd111-lang"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="project-card">
              <img
                src="https://th.bing.com/th/id/OIP.1P976sXD-HBTnewbQ5HGWwHaHa?w=182&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                alt="Calculator app"
              />

              <h3>Calculator App</h3>

              <p>Interactive calculator application</p>

              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
              </div>

              <div className="project-buttons">
                <a href="#" className="button">
                  Live Demo
                </a>

                <a
                  href="https://github.com/sanjanasd111-lang"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <h2>Get In Touch</h2>

          <form
            id="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you for contacting me!");
              event.target.reset();
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                name="message"
                id="message"
                required
                rows="5"
              ></textarea>
            </div>

            <button id="submit" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>&copy; {year} Sanjana SD. Built with React + Vite.</p>

        <nav id="footer">
          <a
            href="https://github.com/sanjanasd111-lang"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sanjana-s-d-038078386/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </footer>
    </>
  );
}

export default App;