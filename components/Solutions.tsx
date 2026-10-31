"use client";

import { solutions } from "@/lib/site-data";
import { useSite } from "./SiteProvider";

export default function Solutions() {
  const { openSolution } = useSite();
  return (
    <section className="solutions section" id="solutions">
      <div className="wrap">
        <div className="section-top">
          <div>
            <div className="eyebrow teal">02 / OUR SERVICES</div>
            <h2>
              Our Areas <em>of Operation</em>
            </h2>
          </div>
          <p>
            Electrical, illumination and infrastructure services,
            <br />
            coordinated around your project requirements.
          </p>
        </div>
        <div className="solution-grid">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              className="solution-card"
              type="button"
              data-solution={solution.id}
              onClick={() => openSolution(solution)}
            >
              <span className="solution-no">
                {String(index + 1).padStart(2, "0")} / {solution.label}
              </span>
              <svg viewBox="0 0 56 56" aria-hidden="true">
                <path d={solution.iconPath} />
              </svg>
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              <span className="card-link">
                Explore service <span aria-hidden="true">↗</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
