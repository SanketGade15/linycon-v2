"use client";

import Image from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { defaultService, type Project, type Solution } from "@/lib/site-data";

type Detail =
  { kind: "solution"; item: Solution } | { kind: "project"; item: Project };
type SiteContextValue = {
  service: string;
  setService: (value: string) => void;
  openSolution: (solution: Solution) => void;
  openProject: (project: Project) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used within SiteProvider");
  return context;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [service, setService] = useState(defaultService);
  const [detail, setDetail] = useState<Detail | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const movingToContact = useRef(false);

  function open(next: Detail) {
    triggerRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    movingToContact.current = false;
    setDetail(next);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!detail || !dialog) return;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      if (!movingToContact.current && triggerRef.current?.isConnected)
        triggerRef.current.focus({ preventScroll: true });
    };
  }, [detail]);

  function enquire() {
    if (!detail) return;
    const selectedService =
      detail.kind === "solution"
        ? detail.item.title
        : detail.item.type === "industrial"
          ? "Indoor Electrification Works"
          : detail.item.type === "transit"
            ? "CCTV & LV Systems"
            : "Highway & Street Lighting";
    setService(selectedService);
    movingToContact.current = true;
    setDetail(null);
    requestAnimationFrame(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
      document.getElementById("enquiry-name")?.focus({ preventScroll: true });
    });
  }

  return (
    <SiteContext.Provider
      value={{
        service,
        setService,
        openSolution: (solution) => open({ kind: "solution", item: solution }),
        openProject: (project) => open({ kind: "project", item: project }),
      }}
    >
      {children}
      <dialog
        id="detail-dialog"
        ref={dialogRef}
        aria-labelledby="dialog-title"
        onClose={() => setDetail(null)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            setDetail(null);
        }}
      >
        <button
          className="dialog-close"
          type="button"
          aria-label="Close details"
          onClick={() => setDetail(null)}
        >
          ×
        </button>
        <div id="dialog-content">
          {detail?.kind === "project" && (
            <>
              <Image
                className="dialog-img"
                src={`/assets/${detail.item.image}`}
                alt={detail.item.alt}
                width={800}
                height={450}
                sizes="(max-width: 650px) 100vw, 650px"
              />
              <div className="dialog-copy">
                <div className="eyebrow teal">{detail.item.tag}</div>
                <h2 id="dialog-title">{detail.item.fullTitle}</h2>
                <p>
                  <b>{detail.item.location}</b>
                </p>
                <p>{detail.item.scope}</p>
                <a
                  className="button dark dialog-enquire"
                  href="#contact"
                  onClick={enquire}
                >
                  Discuss a similar requirement{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </>
          )}
          {detail?.kind === "solution" && (
            <div className="dialog-copy">
              <div className="eyebrow teal">{detail.item.label}</div>
              <h2 id="dialog-title">{detail.item.title}</h2>
              <p>{detail.item.text}</p>
              {detail.item.items.length > 0 && (
                <ul>
                  {detail.item.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <a
                className="button dark dialog-enquire"
                href="#contact"
                onClick={enquire}
              >
                Discuss a similar requirement <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
      </dialog>
    </SiteContext.Provider>
  );
}
