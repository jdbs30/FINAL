"use client";

import { useEffect, useRef, useState } from 'react';
import { projects, type ProjectId } from '../lib/projects';
import ProjectVisual from './project-visual';

const projectIds = Object.keys(projects) as ProjectId[];
const filters = [
  { id: 'all', label: 'All projects' },
  { id: 'web', label: 'Web applications' },
  { id: 'vision', label: 'Computer vision' },
] as const;

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [selected, setSelected] = useState<ProjectId | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const project = selected ? projects[selected] : null;

  useEffect(() => {
    if (!selected || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [selected]);

  function openProject(id: ProjectId, button: HTMLButtonElement) {
    trigger.current = button;
    setSelected(id);
  }

  return (
    <section className="section work-section" id="work"><div className="wrap">
      <div className="section-heading">
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2>Built for the <span className="serif">real world.</span></h2></div>
        <p>From document approvals to computer vision.<br />A selection of problems I’ve helped solve.</p>
      </div>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map(item => (
          <button key={item.id} className={filter === item.id ? 'active' : ''} aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>
            {item.label}{item.id === 'all' && <span>{String(projectIds.length).padStart(2, '0')}</span>}
          </button>
        ))}
      </div>
      <div className="projects">
        {projectIds.map((id, index) => {
          const item = projects[id];
          const category = item.filter;
          return (
            <article className="project" key={id} hidden={filter !== 'all' && filter !== category}>
              <ProjectVisual id={id} openProject={openProject} />
              <div className="project-meta">
                <p className="eyebrow">0{index + 1} / {category === 'vision' ? 'COMPUTER VISION' : 'WEB APPLICATION'}</p>
                <h3><button onClick={event => openProject(id, event.currentTarget)}>{item.title}</button></h3>
                <p>{item.intro}</p>
              </div>
              <div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          );
        })}
      </div>
      <p className="project-disclaimer">Project visuals are illustrative interface studies. Select a project to read about the implementation.</p>
      <dialog ref={dialog} id="project-dialog" aria-labelledby="dialog-title" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setSelected(null);
      }}>
        <button className="dialog-close" aria-label="Close project details" onClick={() => setSelected(null)}>✕</button>
        {project && <>
          <p className="eyebrow">{project.category}</p>
          <h2 id="dialog-title">{project.title}</h2>
          <p>{project.intro}</p>
          <ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          {project.sourceUrl ? (
            <a className="project-source" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View project on GitHub <span>↗</span></a>
          ) : <p className="dialog-note">Implementation overview · No public demo provided</p>}
        </>}
      </dialog>
    </div></section>
  );
}
