import { BrowserRouter as Router, Link} from 'react-router-dom';
import { useEffect } from 'react';
import AboutSection from './AboutSection';
import Portefolio from './Portefolio';
import Resume from './Resume';
import Sidebar from './Sidebar';
import SkillSection from './SkillSection';
// import logo from './logo.svg';
// import './App.css';
import $ from 'jquery'
import Services from './Services';
import Testimonial from './Testimonial';
import Contact from './Contact';
import { ExternalLink } from 'react-external-link';

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
          <div className="hero-container" data-aos="fade-in">
            <h1>Demanou Loïc</h1>
            <p>Je suis Développeur web full stack junior laravel|React Js</p>
            {/* <button className="btn btn-primary btn-lg">Télécharger mon CV <i class='bx bx-cloud-download'></i></button> */}
            <ExternalLink href="https://drive.google.com/file/d/1Gp_ygtOMcFKzD9Uv5L1IMztHtNN4xCUP/view?usp=sharing">
              <span className="btn btn-primary btn-lg"> Télécharger mon CV <i class='bx bx-cloud-download'></i></span>
            </ExternalLink>
          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* <Route exact path='/bluepush' component={Bluepush} /> */}

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

          <section id="services" className="services">
            <Services />
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
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ */}
              {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
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
