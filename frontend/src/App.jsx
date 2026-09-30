import React from 'react';
import  { useEffect, useState } from "react";
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("Sending...");

  try {
    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus(data.message || "Something went wrong.");
    }
  } catch (error) {
    setStatus("Unable to connect to server.");
  }
};

const [status, setStatus] = useState("");
const skills = [
  ["HTML", "Learning"],
  ["CSS", "Learning"],
  ["JavaScript", "Learning"],
  ["Python", "Basics"],
  ["React", "Learning"],
  ["Node.js", "Learning"],
  ["Express.js", "Learning"],
  ["MongoDB", "Learning"],
  ["Git & GitHub", "Learning"],
];

const projects = [
  {
    title: "ArtisanConnect",
    description: "A webpage platform concept for handmade-product sellers to showcase and manage their products.",
    tags: ["HTML","CSS","JavaScript"],
    
  },
  {
    title: "Tasty Heaven Restaurant",
    description: "A simple productivity application for ordering foods.",
    tags: ["HTML", "CSS", "JavaScript"],
    
  },
  {
    title: "MusicPlayer",
    description: "A music web page  application that displays favourite music.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    
  },
];

const certificates = [
  ["Hackathon Participant", "College Event", "2026"],
  ["Volunteering", "College Activity", "2026"],
  ["Other Certificates coming soon!"]
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Something went wrong");

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Backend is not connected yet. Start the server and try again.");
    }
  };

  return (
    <div className="site">
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo("home")}>
          My<span>Portfolio</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "projects", "education", "certificates", "contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item)}>
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? "☀" : "☾"}
          </button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            ☰
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-dark">
          <div className="hero-content">
            <p className="eyebrow">Hello, I'm</p>
            <h1>Farah<span> S </span></h1>
            <h2>First-Year BCA Student<br />| Aspiring Full-Stack Developer</h2>
            <p className="hero-text">
              I am a passionate and curious learner exploring web development and technology.
              I enjoy building projects and improving my programming skills every day.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>View My Projects ↗</button>
              <button className="outline-btn" onClick={() => scrollTo("contact")}>Contact Me ✉</button>
            </div>
          </div>

          <div className="hero-visual">
            
            <img 
  src="/profile.jpg.jpeg" 
  alt="Profile" 
  style={{ 
    width: '60%', 
    height: '90%', 
    objectFit: 'cover', 
    borderRadius: '100%' 
  }} 
/>
            <div className="quote">Small steps<br />today,<br />big dreams<br />tomorrow</div>
          </div>
        </section>

        <section id="about" className="section light-section">
          <div className="three-column">
            <div className="about-card">
              <div className="section-icon">●</div>
              <h2>About Me</h2>
              <p>
                I'm a first-year BCA student with a strong interest in programming,
                web development and problem solving. I love learning new technologies
                and building simple projects to turn ideas into reality.
              </p>
              <div className="pill-grid">
                {["Quick Learner", "Problem Solver", "Team Player", "Tech Enthusiast"].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>

            <div id="education" className="education-card">
              <div className="section-icon">◆</div>
              <h2>Education</h2>
              <div className="timeline">
                <div><b>BCA.Data Science (First Year)</b><small>SRM Institue of Science and Technology,Trichy</small><small>2026 – Present</small></div>
                <div><b>Higher Secondary (12th)</b><small>Blossom Public School,Thanjavur</small><small>2025 – 2026</small></div>
                <div><b>Secondary (10th)</b><small></small>Blossom Public School,Thanjavur<small>2023 – 2024</small></div>
              </div>
            </div>

            <div id="skills" className="skills-card">
              <div className="section-icon">✦</div>
              <h2>Skills</h2>
              <div className="skills-grid">
                {skills.map(([name, level]) => (
                  <div className="skill" key={name}>
                    <strong>{name}</strong>
                    <span>{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-dark">
          <div className="section-heading">
            <div>
              <p className="eyebrow">My Work</p>
              <h2>Projects</h2>
              <p>Here are some of the projects I've built or am currently developing.</p>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-image project-${index + 1}`}>
                  <span>{project.title}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                 
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section light-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Learning Journey</p>
              <h2>Certificates & Achievements</h2>
            </div>
          </div>
          <div className="certificate-grid">
            {certificates.map(([title, type, year]) => (
              <div className="certificate" key={title}>
                <div className="certificate-icon">★</div>
                <div>
                  <h3>{title}</h3>
                  <p>{type}</p>
                  <small>Issued: {year}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section section-dark">
          <div className="contact-info">
            <p className="eyebrow">Let's Connect</p>
            <h2>Contact Me</h2>
            <p>Feel free to reach out for opportunities, collaborations or just to say hello.</p>
            <div className="contact-links">
              <a href="mailto:farahshahas.ds@gmail.com">✉ farahshahas.ds@gmail.com</a>
              <a href="https://github.com/farahds-20608">◉ github.com/farahds-20608</a>
              <a href="https://in.linkedin.com/ilinkn/farah-s-198771433">in linkedin.com/in/farah-s-198771433</a>
              <p>Contact No:1325476980</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={submitForm}>
            <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea required placeholder="Your Message" rows="6" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
            <button className="primary-btn" type="submit">Send Message ➤</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Farah S . All rights reserved.</p>
        <div><a href="#">GitHub</a><a href="#">LinkedIn</a><a href="#">Instagram</a></div>
      </footer>
    </div>
  );
}

export default App;