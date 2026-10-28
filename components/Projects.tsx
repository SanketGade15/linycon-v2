"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type ProjectType } from "@/lib/site-data";
import { useSite } from "./SiteProvider";

type Filter = "all" | ProjectType;
const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All projects" },
  { value: "highway", label: "Highways" },
  { value: "industrial", label: "Industrial" },
  { value: "transit", label: "Transit" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const { openProject } = useSite();
  const visible = projects.filter(
    (project) => filter === "all" || project.type === filter,
  );

  return (
    <section className="section wrap" id="projects">
      <div className="section-top">
        <div>
          <div className="eyebrow teal">04 / OUR PROJECT EXPERIENCE</div>
          <h2>
            Selected Infrastructure
            <br />
            &amp; Electrical Projects
          </h2>
        </div>
        <a
          className="text-link"
          href="/assets/linycon-company-profile.pdf"
          download
        >
          Download project profile <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="project-toolbar">
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              type="button"
              key={item.value}
              className={filter === item.value ? "active" : undefined}
              data-filter={item.value}
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
              {item.value === "all" && (
                <>
                  {" "}
                  <span>06</span>
                </>
              )}
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <div className="projects-grid" id="projects-grid">
        {visible.map((project) => (
          <button
            type="button"
            key={project.id}
            className="project"
            data-project={project.id}
            aria-label={`View ${project.title} project details`}
            onClick={() => openProject(project)}
          >
            <div className="project-image">
              <Image
                src={`/assets/${project.image}`}
                alt={project.alt}
                width={600}
                height={400}
                sizes="(max-width: 580px) 100vw, (max-width: 850px) 50vw, 33vw"
              />
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <span className="project-meta">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.location}</p>
          </button>
        ))}
      </div>
      <p className="project-footnote">
        Project photographs and scope drawn from the Linycon company profile.
      </p>
    </section>
  );
}
