import Image from 'next/image';
import Header from '../components/header';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Reveal from '../components/reveal';

export default function Home() {
  return (
    <>
      <Reveal />
<a className="skip-link" href="#main">Skip to content</a>
<Header />
<main id="main">
<section className="hero wrap" id="home">
<div className="hero-copy"><p className="eyebrow"><span className="status-dot"></span> SOFTWARE DEVELOPER · PHILIPPINES</p><h1>Thoughtful code.<br />Useful <span className="serif">experiences.</span></h1><p className="hero-description">I’m John Drae Santos, a full stack developer turning complex workflows into clear, responsive web applications.</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work <span>↘</span></a><a className="text-link" href="/resume/JohnDraeSantos_Resume_Updated.docx" download>Download resume <span>↓</span></a></div><div className="hero-note"><span>BASED IN CABUYAO, LAGUNA</span><span>FULL STACK · WEB DEVELOPMENT</span></div></div>
<div className="portrait-composition"><div className="portrait-top"><span>A LITTLE LOGIC.</span><span>A LOT OF CURIOSITY.</span></div><div className="portrait-frame"><Image src="/img/self.png" alt="John Drae Santos" fill priority sizes="(max-width: 760px) 90vw, 420px" /><span className="portrait-index">01 / THE DEVELOPER</span></div><div className="portrait-caption"><span>John Drae B. Santos</span><span className="mini-symbol">✳</span><span>Code. Connect. Create.</span></div><div className="floating-label"><span className="status-dot"></span> Building with purpose</div></div>
</section>
<div className="stack-strip"><div className="wrap"><span className="strip-label">MY EVERYDAY TOOLKIT</span><span>React</span><span>Next.js</span><span>TypeScript</span><span>Strapi</span><span>REST APIs</span><span className="strip-end">& a curious mind ↗</span></div></div>
<Projects />
<section className="about-section" id="about"><div className="wrap about-grid"><div><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2>A builder’s mindset.<br />A <span className="serif">curious</span> approach.</h2><p className="about-lead">I enjoy the space where software meets everyday problems.</p><p>I’m a BS Computer Engineering graduate with hands-on experience building responsive interfaces, integrating REST APIs, and troubleshooting application issues. My work spans document workflows, inventory operations, technical file registries, and computer vision.</p><div className="education"><span>↗</span><div><h3>BS Computer Engineering</h3><p>Pamantasan ng Cabuyao · 2020–2024</p></div></div></div><div className="skills-panel"><div className="skill-group"><h3><span>01</span> Frontend development</h3><div className="tags"><span>React</span><span>Next.js App Router</span><span>TypeScript</span><span>JavaScript</span><span>HTML / CSS</span><span>Chakra UI</span><span>Tailwind CSS</span><span>Bootstrap</span></div></div><div className="skill-group"><h3><span>02</span> Backend & data</h3><div className="tags"><span>Strapi</span><span>PHP</span><span>REST APIs</span><span>JWT authentication</span><span>MySQL</span><span>MariaDB</span></div></div><div className="skill-group"><h3><span>03</span> Tools & applied technology</h3><div className="tags"><span>Git / GitHub</span><span>Zustand</span><span>Axios</span><span>Python</span><span>Java</span><span>YOLOv8</span><span>MediaPipe</span><span>TensorFlow.js</span><span>Raspberry Pi</span><span>Jetson Nano</span></div></div></div></div></section>
<section className="section wrap experience-section" id="experience"><div className="section-heading"><div><p className="eyebrow">03 / THE JOURNEY</p><h2>Learning by <span className="serif">building.</span></h2></div><p>Practical experience.<br />From interfaces to infrastructure.</p></div><div className="experience-list"><details open><summary><span className="experience-date">DEC 2024 — OCT 2026</span><span><strong>Software Developer <span>(Full stack)</span></strong><small>Core Enabler Business Process Solutions Inc. · Muntinlupa</small></span><span className="expand-icon">+</span></summary><div className="experience-description"><p>Created web interfaces using HTML, CSS, and JavaScript, and integrated APIs and SQL databases to support dynamic content.</p><p>Troubleshot computer hardware and software issues and installed network cabling for newly deployed devices.</p></div></details><details><summary><span className="experience-date">JUN 2023 — AUG 2023</span><span><strong>Web Developer & IT Support Intern</strong><small>NBC (Philippines) Car Technology Philippines · Batangas</small></span><span className="expand-icon">+</span></summary><div className="experience-description"><p>Created web interfaces using HTML, CSS, and JavaScript, and integrated APIs and SQL databases.</p><p>Supported hardware and software troubleshooting and network cabling for newly deployed devices.</p></div></details></div></section>
<Contact />
</main>
<footer className="wrap"><a className="wordmark" href="#home">jd<span>.</span>santos</a><span>© <span>{new Date().getFullYear()}</span> John Drae Santos</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
}
