"use client";
import { useEffect, useState } from 'react';
export default function Header() {
 const [open, setOpen] = useState(false);
 useEffect(() => {
  const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
  document.addEventListener('keydown', close);
  return () => document.removeEventListener('keydown', close);
 }, []);
 return (<header className="site-header wrap">
<a className="wordmark" href="#home" aria-label="John Drae Santos home">jd<span>.</span>santos</a>
<button className="menu-toggle" aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>Menu <span>+</span></button>
<nav className={open ? 'is-open' : ''} onClick={() => setOpen(false)} id="navigation" aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About</a><a href="#experience">Experience</a><a className="nav-contact" href="#contact">Let’s talk <span>↗</span></a></nav>
</header>);
}
