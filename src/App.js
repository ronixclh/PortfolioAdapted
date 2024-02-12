import './css/main.css'
import './css/reset.css'
import './css/media.css'
import navOpen from './img/icons/nav-open.svg'
import navClose from './img/icons/nav-close.svg'
import hero from './img/header/hero.svg'
import imgP01 from './img/portfolio/01.svg'
import imgP02 from './img/portfolio/02.svg'
import imgP03 from './img/portfolio/03.svg'
import imgS01 from './img/services/01.svg'
import imgS02 from './img/services/02.svg'
import imgS03 from './img/services/03.svg'
import behance from './img/socials/Behance.svg'
import dribble from './img/socials/Dribble.svg'
import instagram from './img/socials/Instargam.svg'
import linkedin from './img/socials/LinkedIn.svg'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-nav">
            <a href="#!" className="logo">
              Kelvin
            </a>
            <nav id="nav" className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a
                    href=""
                    className={`nav-link ${isNavOpen ? 'active' : ''}`}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Works
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>

              <button
                id="nav-btn"
                className="nav-button"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <img
                  id="nav-btn-img"
                  src={isNavOpen ? navOpen : navClose}
                  alt="nav-open"
                />
              </button>
            </nav>
          </div>

          <div className="header-row">
            <div className="header-content" data-aos="fade-up">
              <h1 className="header-heading">
                Kelvin Kramer <br />
                <span>Designer & Developer</span>
              </h1>

              <p>
                I’m a portrait, fashion and lifestyle photographer living In New
                York City. During my thirteen year tenure here.
              </p>
            </div>
            <div className="header-img" data-aos="fade-left">
              <img src={hero} alt="hero-img" />
            </div>
          </div>
        </div>
      </header>

      <section className="service">
        <div className="container">
          <div className="service-row">
            <div className="service-card" data-aos="fade-down">
              <img
                className="service-card-img"
                src={imgS01}
                alt="UI/UX Design"
              />
              <h3 className="service-card-title">UI/UX Design</h3>
              <p>
                Our design is translated into comprehensive digital environments
                built on latest development standards.
              </p>
            </div>

            <div className="service-card" data-aos="fade-down">
              <img
                className="service-card-img"
                src={imgS02}
                alt="Development"
              />
              <h3 className="service-card-title">Development</h3>
              <p>
                Our design is translated into comprehensive digital environments
                built on latest development standards.
              </p>
            </div>

            <div className="service-card" data-aos="fade-down">
              <img
                className="service-card-img"
                src={imgS03}
                alt="software testing"
              />
              <h3 className="service-card-title">software testing</h3>
              <p>
                Our design is translated into comprehensive digital environments
                built on latest development standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <div className="portfolio-title">
            <h2 className="title-1">Portfolio</h2>
          </div>

          <div className="project" data-aos="flip-up">
            <img
              src={imgP01}
              alt="Online fashion store"
              className="project-img"
            />
            <h3 className="project-title">
              <a href="#!">Online fashion store - Homepage</a>
            </h3>
          </div>

          <div className="project" data-aos="flip-up">
            <img src={imgP02} alt="Reebok Store" className="project-img" />
            <h3 className="project-title">
              <a href="#!">Reebok Store - Concept</a>
            </h3>
          </div>

          <div className="project" data-aos="flip-up">
            <img
              src={imgP03}
              alt="Braun Landing Page"
              className="project-img"
            />
            <h3 className="project-title">
              <a href="#!">Braun Landing Page - Concept</a>
            </h3>
          </div>
        </div>
      </section>

      <footer className="contacts">
        <div className="container">
          <div className="contacts-title">
            <h2 className="title-1"></h2>
          </div>

          <div className="contacts-content" data-aos="fade-down">
            <p>
              Want to know more or just chat? <br />
              You are welcome!
            </p>
          </div>

          <div className="contacts-button" data-aos="fade-down">
            <a href="#!" className="btn">
              Send message
            </a>
          </div>

          <div className="contacts-social" data-aos="zoom-in">
            <a href="#!">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#!">
              <img src={instagram} alt="Instargam" />
            </a>
            <a href="#!">
              <img src={behance} alt="Behance" />
            </a>
            <a href="#!">
              <img src={dribble} alt="Dribble" />
            </a>
          </div>

          <div className="contacts-footer" data-aos="flip-up">
            <p>
              Like me on <br />
              LinkedIn, Instagram, Behance, Dribble
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
