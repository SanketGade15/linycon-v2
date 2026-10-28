"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navigation = [
  ["About Us", "#about"],
  ["Services", "#solutions"],
  ["Capabilities", "#capabilities"],
  ["Projects", "#projects"],
  ["Why Linycon", "#why-us"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  return (
    <>
      <div className="utility">
        <div className="wrap">
          <span>Electrical · Illumination · Infrastructure</span>
          <a href="mailto:linycon.info@gmail.com">
            linycon.info@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <header className="header">
        <div className="wrap nav-row">
          <a
            className="brand"
            href="#home"
            aria-label="Linycon Private Limited home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/assets/linycon_emblem.png"
              alt=""
              width={30}
              height={48}
            />
            <span>
              <b>LINYCON</b>
              <small>PRIVATE LIMITED</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            ref={toggleRef}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
          <nav
            id="navigation"
            className={open ? "open" : undefined}
            aria-label="Main navigation"
          >
            {navigation.map(([title, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {title}
              </a>
            ))}
            <a
              className="button dark nav-cta"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Discuss a project <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
