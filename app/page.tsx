import Image from "next/image";
import Header from "@/components/Header";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import EnquiryForm from "@/components/EnquiryForm";
import { SiteProvider } from "@/components/SiteProvider";

export default function HomePage() {
  return (
    <SiteProvider>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="line"></span> ENGINEERED TO CONNECT. BUILT TO
              LAST.
            </div>
            <h1>
              Electrical,
              <br />
              Illumination &<br />
              <em>
                Infrastructure
                <br />
                Solutions.
              </em>
            </h1>
            <p>
              From site surveys and electrical system design to project
              execution, testing and commissioning, Linycon Private Limited
              delivers integrated solutions for electrical, illumination and
              infrastructure projects.
            </p>
            <div className="hero-actions">
              <a className="button lime" href="#contact">
                Discuss Your Project <span aria-hidden="true">↗</span>
              </a>
              <a className="button outline" href="#solutions">
                Explore Our Services <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="plus" aria-hidden="true">
                +
              </span>
              <span>
                From the first site survey
                <br />
                <b>to final commissioning.</b>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              className="hero-photo"
              src="/assets/hero_highway.jpg"
              alt="Illuminated highway and connected road infrastructure at night"
              preload
              width={1200}
              height={900}
              sizes="(max-width: 580px) 100vw, 50vw"
            />
            <div className="photo-grid" aria-hidden="true"></div>
            <span className="visual-label">LIGHTING THE WAY FORWARD</span>
            <div className="visual-bottom">
              <span>
                ELECTRICAL & ILLUMINATION
                <br />
                <b>Infrastructure in focus.</b>
              </span>
              <a href="#projects" aria-label="Explore our projects">
                ↗
              </a>
            </div>
            <span className="visual-index">01 / INFRASTRUCTURE</span>
          </div>
        </section>
        <section className="hero-banner" id="hero-banner">
          <Image
            className="hero-banner-bg"
            src="/assets/hero_highway.jpg"
            alt="Illuminated highway and connected road infrastructure at night"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-banner-overlay" aria-hidden="true" />
          <div className="wrap hero-banner-content">
            <h2 className="hero-banner-title">
              Electrical, Illumination &amp;
              <br />
              <em>Infrastructure Solutions</em>
            </h2>
            <p className="hero-banner-lead">
              From site surveys and electrical system design to project
              execution, testing and commissioning, Linycon Private Limited
              delivers integrated solutions for electrical, illumination and
              infrastructure projects.
            </p>
            <div className="hero-banner-actions">
              <a className="banner-btn banner-btn-lime" href="#contact">
                Discuss Your Project <span aria-hidden="true">&rarr;</span>
              </a>
              <a className="banner-btn banner-btn-glass" href="#solutions">
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
        <div className="capability-strip">
          <div className="wrap">
            <span>One integrated partner</span>
            <i aria-hidden="true">+</i>
            <span>Survey & design</span>
            <i aria-hidden="true">+</i>
            <span>Engineering & execution</span>
            <i aria-hidden="true">+</i>
            <span>Testing & commissioning</span>
          </div>
        </div>
        <section className="section wrap about" id="about">
          <div className="about-left">
            <div className="eyebrow teal">01 / ABOUT US</div>
            <h2>
              Engineering Excellence
              <br />
              <em>
                from Concept
                <br />
                to Commissioning
              </em>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Linycon Private Limited is backed by an experienced team of
              professionals with expertise across the electrical, electronics
              and instrumentation industries.
            </p>
            <p>
              Our capabilities span project management, design and engineering,
              construction, field operations, site surveys, testing and
              commissioning.
            </p>
            <p>
              We strive to provide customers with advanced technologies and
              practical engineering solutions. Through our focus on quality,
              intelligent planning and skilled execution, we aim to deliver
              solutions tailored to customer requirements.
            </p>
            <p>
              Our integrated approach covers the project lifecycle, from initial
              site assessment and electrical system design to execution and
              commissioning.
            </p>
            <a
              className="button dark"
              href="/assets/linycon-company-profile.pdf"
              download
            >
              Download company profile <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <Solutions />
        <section className="approach section" id="capabilities">
          <div className="wrap" id="approach">
            <div className="section-top">
              <div>
                <div className="eyebrow">03 / OUR CAPABILITIES</div>
                <h2>
                  Integrated Engineering
                  <br />
                  <em>Capabilities</em>
                </h2>
              </div>
              <p>
                From initial assessment to execution,
                <br />
                expertise at every project stage.
              </p>
            </div>
            <div className="process-grid">
              <article>
                <span>01</span>
                <h3>Site Survey</h3>
                <p>
                  Our experienced professionals carry out detailed site surveys
                  in coordination with customer requirements.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Illumination Design</h3>
                <p>
                  We prepare illumination designs in accordance with relevant
                  Indian Standards (IS), using illumination design software.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Electrical System Design</h3>
                <p>
                  Our team develops electrical system designs with the objective
                  of optimizing capital and operating costs. Our capabilities
                  include layout drawings and cable routing.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Project Execution</h3>
                <p>
                  Our engineers, technicians and supporting workforce execute
                  projects with a focus on quality and effective delivery.
                </p>
              </article>
            </div>
            <div className="approach-bottom">
              <span className="plus" aria-hidden="true">
                +
              </span>
              <p>
                Integrated project support.
                <br />
                <b>From concept to commissioning.</b>
              </p>
              <a href="#contact" className="button outline">
                Work with our team <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
        <Projects />

        <section className="company-logos" aria-label="Company logos">
          <div className="wrap logo-grid">
            <div>
              <Image
                src="/assets/ramky-logo.png"
                alt="Ramky Infrastructure Limited"
                loading="lazy"
                width={200}
                height={80}
              />
            </div>
            <div>
              <Image
                src="/assets/ncc-logo.png"
                alt="NCC Ltd."
                loading="lazy"
                width={200}
                height={80}
              />
            </div>
            <div>
              <Image
                src="/assets/bajaj-logo.png"
                alt="Bajaj Electricals Ltd."
                loading="lazy"
                width={200}
                height={80}
              />
            </div>
            <div className="company-name" aria-label="Shoba Projects">
              Shoba Projects
            </div>
            <div>
              <Image
                src="/assets/transrail-logo.webp"
                alt="Transrail Lighting Ltd."
                loading="lazy"
                width={200}
                height={80}
              />
            </div>
          </div>
        </section>
        <section className="why-section section" id="why-us">
          <div className="wrap why-layout">
            <div className="why-copy">
              <div className="eyebrow teal">
                05 / WHY LINYCON PRIVATE LIMITED?
              </div>
              <h2>
                A Complete Approach
                <br />
                to Electrical &amp;
                <br />
                <em>Illumination Projects</em>
              </h2>
              <a className="button dark" href="#contact">
                Discuss your requirements <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ol className="why-list">
              <li>
                <span>01</span>
                <p>
                  Experienced professionals across electrical, electronics and
                  instrumentation disciplines.
                </p>
              </li>
              <li>
                <span>02</span>
                <p>
                  Capabilities covering surveys, design, engineering,
                  construction and commissioning.
                </p>
              </li>
              <li>
                <span>03</span>
                <p>Illumination design based on relevant Indian Standards.</p>
              </li>
              <li>
                <span>04</span>
                <p>
                  Electrical system design focused on capital and operating cost
                  considerations.
                </p>
              </li>
              <li>
                <span>05</span>
                <p>Integrated project support from concept to commissioning.</p>
              </li>
              <li>
                <span>06</span>
                <p>
                  Commitment to quality, advanced technologies and skilled
                  execution.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="contact section wrap" id="contact">
          <div className="contact-copy">
            <div className="eyebrow teal">06 / CONTACT US</div>
            <h2>
              Let's Discuss
              <br />
              <em>Your Next Project</em>
            </h2>
            <p>
              Looking for electrical, illumination or infrastructure project
              support? Connect with Linycon Private Limited to discuss your
              project requirements.
            </p>
            <a className="contact-email" href="mailto:linycon.info@gmail.com">
              linycon.info@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-company">Linycon Private Limited</div>
            <div className="contact-details">
              <div>
                <span>CALL OUR TEAM</span>
                <a href="tel:+917977252121">+91 79772 52121</a>
              </div>
              <div>
                <span>VISIT US</span>
                <address>
                  601, Bhimashri Heights, Azad Chouk,
                  <br />
                  Kharegaon, Kalwa, Thane (West),
                  <br />
                  Maharashtra 400605
                </address>
              </div>
            </div>
            <a
              className="contact-website text-link"
              href="https://www.linycon.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linycon.in <span aria-hidden="true">↗</span>
            </a>
          </div>
          <EnquiryForm />
        </section>
      </main>
      <footer>
        <div className="wrap footer-top">
          <a className="brand" href="#home" aria-label="Back to Linycon home">
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
          <p>
            Linycon Private Limited
            <br />
            Electrical, Illumination & Infrastructure Solutions
          </p>
          <a
            className="text-link"
            href="/assets/linycon-company-profile.pdf"
            download
          >
            Company profile <span aria-hidden="true">↓</span>
          </a>
          <a className="back-top" href="#home" aria-label="Back to top">
            ↑
          </a>
        </div>
        <div className="wrap footer-links">
          <div className="footer-contacts">
            <a href="tel:+917977252121">+91 7977252121</a>
            <a href="mailto:linycon.info@gmail.com">linycon.info@gmail.com</a>
            <a
              href="https://www.linycon.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linycon.in ↗
            </a>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#solutions">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 Linycon Private Limited. All rights reserved.</span>
          <span>Thane, Maharashtra · India</span>
        </div>
      </footer>
    </SiteProvider>
  );
}
