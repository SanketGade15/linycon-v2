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
    <section className="projects-section section" id="projects">
      <div className="wrap">
        <div className="section-top">
          <div>
            <div className="eyebrow teal">04 / OUR PROJECT EXPERIENCE</div>
            <h2>
              Selected Infrastructure
              <br />
              <em>&amp; Electrical Projects</em>
            </h2>
          </div>
          <a
            className="button dark"
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
                    <span>{String(projects.length).padStart(2, "0")}</span>
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
            <article
              key={project.id}
              className="project-card"
              data-project={project.id}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} project details`}
              onClick={() => openProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openProject(project);
                }
              }}
            >
              <div className="project-image">
                <Image
                  src={`/assets/${project.image}`}
                  alt={project.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 580px) 100vw, (max-width: 850px) 50vw, 33vw"
                  className={`project-img project-img-${project.id}`}
                />
                <div className="project-image-gradient" aria-hidden="true" />
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">
                  <svg
                    className="location-icon"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{project.location}</span>
                </p>
                <div className="project-cta">
                  <span>View project details</span>
                  <span className="cta-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
