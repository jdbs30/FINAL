"use client";
import { useState } from 'react';
export default function Contact() {
 const [status, setStatus] = useState('');
 async function copyEmail() {
  try { await navigator.clipboard.writeText('sjohndrae@gmail.com'); setStatus('Email address copied.'); }
  catch { setStatus('Copy this address: sjohndrae@gmail.com'); }
 }
 return (<section className="contact-section" id="contact"><div className="wrap"><p className="eyebrow"><span className="status-dot"></span> 04 / WHAT’S NEXT?</p><div className="contact-heading"><h2>Have something<br />in <span className="serif">mind?</span></h2><a className="contact-arrow" href="mailto:sjohndrae@gmail.com" aria-label="Email John Drae Santos">↗</a></div><div className="contact-bottom"><div><p>Let’s turn a good idea into something useful.</p><a className="email-link" href="mailto:sjohndrae@gmail.com">sjohndrae@gmail.com</a><button className="copy-email" onClick={copyEmail} aria-label="Copy email address">Copy email <span>⧉</span></button><span className="copy-status" role="status">{status}</span></div><div className="contact-links"><a href="https://www.linkedin.com/in/john-drae-santos-00424b212/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="tel:+639760293273">0976 029 3273 ↗</a><a href="/resume/JohnDraeSantos_Resume_Updated.docx" download>Resume ↓</a></div></div></div></section>);
}
