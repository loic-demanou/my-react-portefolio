import { BrowserRouter as Router, Link} from 'react-router-dom';
import { useEffect } from 'react';
import AboutSection from './AboutSection';
import Portefolio from './Portefolio';
import Resume from './Resume';
import Sidebar from './Sidebar';
import SkillSection from './SkillSection';
import $ from 'jquery'
import Testimonial from './Testimonial';
import Contact from './Contact';
import cv from "./Ressources/CV_Loïc_DEMANOU.pdf"

function App() {

  useEffect(() => {
    // jquercode();
    $('.mobile-nav-toggle').click(function (e) {
      $('body').toggleClass('mobile-nav-active');
      $(this).toggleClass('bi-list')
      $(this).toggleClass('bi-x')
    });
  }, [])

  return (
    <Router>
      {/* <Switch> */}

      <body className="App">

        {/* ======= Mobile nav toggle button ======= */}
        <i className="bi bi-list mobile-nav-toggle d-xl-none" />
        {/* ======= Header ======= */}
        <Sidebar />
        {/* ======= Hero Section ======= */}

        {/* <Switch> */}
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <div className="hero-container mx-2" data-aos="fade-in">
            <h1>Hey, je suis Demanou Loïc</h1>
            <p>Développeur web full-stack React | Laravel | NodeJs</p>
              <span className="btn btn-primary btn-lg text-white">
                <a className="text-white" href={cv} download>Télécharger mon CV </a><i class='bx bx-cloud-download'></i>
              </span>
              
            {/* </ExternalLink> */}
          </div>
        </section>{/* End Hero */}
        <main id="main">

          {/* ======= About Section ======= */}

          <AboutSection />

          <section id="skills" className="skills section-bg">
            <SkillSection />
          </section>

          <section id="resume" className="resume">
            <Resume />
          </section>

          <section id="portfolio" className="portfolio section-bg">
            <Portefolio />
          </section>

          <section id="testimonials" className="testimonials section-bg">
            <Testimonial />
          </section>

          <section id="contact" className="contact">
            <Contact />
          </section>
        </main>

        <footer id="footer">
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>Loic Demanou</span></strong>
            </div>
            <div className="credits">
            </div>
          </div>
        </footer>{/* End  Footer */}
        <Link to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></Link>


      </body>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
