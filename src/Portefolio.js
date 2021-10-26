import { Link } from "react-router-dom";
import Bluepush from "./projects/Bluepush";
import JobAds from "./projects/JobAds";
import Univrec from "./projects/Univrec";
import './projects/blupush.css';
import MoviesTrailer from "./projects/MoviesTrailer";
import Ecommerce from "./projects/Ecommerce";
import Chatui from "./projects/Chatui";
import bluepush from './Ressources/Bluepush/Dashboard.PNG'
import jobad from './Ressources/JobAds/home.PNG'
import univrec from './Ressources/univrec/home.PNG'
import movie from './Ressources/movie/trending.PNG'
import chat from './Ressources/xd/chatmobile/overvieweb.PNG'
import univrecuioverview from './Ressources/xd/univrec/overview.JPG'
import UnivrecUI from "./projects/UnivrecUI";


const Portefolio = () => {
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <span className="d-flex"><h4 className="text-danger text-decoration-underline">NB </h4> &nbsp;: Certains projets n'ont pas de lien
                    URL pour des raisons diverses uniquement les images sont disponibles sur le cloud</span>
                    <p>Dans cette section je presentes quelques travaux éffectués durant mon parcours académique, professionnel et réalisations personnelles</p>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src={bluepush} className="img-fluid" alt="image1" />
                            <div className="portfolio-links">
                                {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a> */}
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#bluepush" title="More Details">Détails <i class='bx bx-align-left'></i></Link>
                                {/* <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="bx bx-link" /></button> */}
                            </div>
                        </div>
                        <span className="mb-2">
                                <center><strong>BluePush</strong></center>
                                <center className="fst-italic">Application de relance et de fidélisation de clients par SMS</center>
                        </span>
                    </div>
                                
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src={jobad} className="img-fluid" alt="image2" />
                            <div className="portfolio-links">
                                {/* <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a> */}
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#findJob" title="More Details">Détails <i class='bx bx-align-left'></i></Link>
                            </div>
                        </div>
                        <span className="mb-2">
                                <center><strong>FindJob</strong></center>
                                <center className="fst-italic">Site d'annonce d'emplois</center>
                        </span>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src={univrec} className="img-fluid" alt="image3" />
                            <div className="portfolio-links">
                                {/* <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a> */}
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#univrec" title="More Details">Détails <i class='bx bx-align-left'></i></Link>
                            </div>
                        </div>
                        <span className="mb-2">
                                <center><strong>Univrec</strong></center>
                                <center className="fst-italic">Application web de recrutement universitaire</center>
                        </span>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src={movie} className="img-fluid" alt="image4" />
                            <div className="portfolio-links">
                                {/* <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a> */}
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#movies" title="More Details">Détails <i class='bx bx-align-left'></i></Link>
                            </div>
                        </div>
                        <span className="mb-2">
                                <center><strong>Movies Trailer</strong></center>
                                <center className="fst-italic">Site de bandes annonces de films &amp; séries</center>
                        </span>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="image5" />
                            <div className="portfolio-links">
                                {/* <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a> */}
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#reactecommerce" title="More Details">Détails <i class='bx bx-align-left'></i></Link>
                            </div>
                        </div>
                        <span className="mb-2">
                                <center><strong>KAKO</strong></center>
                                <center className="fst-italic">Application react js|Laravel de ecommerce</center>
                        </span>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src={chat} className="img-fluid" alt="image6" />
                            <div className="portfolio-links">
                                {/* <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a> */}
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#chatui" title="More Details">Détails <i class='bx bx-align-left'></i></Link>
                            </div>
                        </div>
                        <span className="mb-2">
                                <center><strong>Hobloic</strong></center>
                                <center className="fst-italic">UI design d'une appli de Chat en version mobile et web</center>
                        </span>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src={univrecuioverview} className="img-fluid" alt="image7" />
                            <div className="portfolio-links">
                                {/* <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a> */}
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#univrecui" title="More Details">Détails <i class='bx bx-align-left'></i></Link>
                            </div>
                        </div>
                        <span className="mb-2">
                                <center><strong>Univrec UI design</strong></center>
                                <center className="fst-italic">UI design de Univrec l'appli de recrutement universitaire</center>
                        </span>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="image8" />
                            <div className="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="image9" />
                            <div className="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <JobAds />
                <Bluepush />
                <Univrec />
                <MoviesTrailer />
                <Ecommerce />
                <Chatui />
                <UnivrecUI />
            </div>


        </>
    );
}

export default Portefolio;