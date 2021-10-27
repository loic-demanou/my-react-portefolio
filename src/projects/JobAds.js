// import './jobads.css';
// import './blupush.css';
import dashboard from '../Ressources/JobAds/Dashboard.PNG';
import home from '../Ressources/JobAds/home.PNG';
import jobs from '../Ressources/JobAds/jobs.PNG';
import myads from '../Ressources/JobAds/myads.PNG';
import details from '../Ressources/JobAds/details.PNG';
import { ExternalLink } from 'react-external-link';

const JobAds = () => {
    return (

        <div className="modal fade" style={{ zIndex: "99999" }} id="findJob" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">FindJob</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">

                        {/* ======= Breadcrumbs ======= */}
                        {/* ======= Portfolio Details Section ======= */}
                        <section id="portfolio-details" className="portfolio-details">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">


                                        <div className="diapo portfolio-details-slider swiper">
                                            {/*--------------img01-----------------*/}
                                            <div>
                                                <input type="radio" id="homeads" name="check" className="r_check" defaultChecked="checked" />
                                                <label htmlFor="homeads" className="on_check">
                                                    <img className="vignette" src={home} alt="homejobs" />
                                                </label>
                                                <img className="big_image" src={home} alt="homejobsbig" /></div>
                                            {/*--------------img02-----------------*/}
                                            <div>
                                                <input type="radio" id="jobsads" name="check" className="r_check" />
                                                <label htmlFor="jobsads" className="on_check">
                                                    <img className="vignette" src={jobs} alt="jobs" />
                                                </label>
                                                <img className="big_image" src={jobs} alt="jobsbig" /></div>
                                            {/*--------------img03-----------------*/}
                                            <div>
                                                <input type="radio" id="myads" name="check" className="r_check" />
                                                <label htmlFor="myads" className="on_check">
                                                    <img className="vignette" src={myads} alt="myads" />
                                                </label>
                                                <img className="big_image" src={myads} alt="myadsbig" />
                                            </div>
                                            {/*--------------img04-----------------*/}
                                            <div>
                                                <input type="radio" id="dashboardads" name="check" className="r_check" />
                                                <label htmlFor="dashboardads" className="on_check">
                                                    <img className="vignette" src={dashboard} alt="dashboardjob" />
                                                </label>
                                                <img className="big_image" src={dashboard} alt="dashboardjobbig" />
                                            </div>
                                            {/*--------------img05-----------------*/}
                                            <div>
                                                <input type="radio" id="detailsadss" name="check" className="r_check" />
                                                <label htmlFor="detailsadss" className="on_check">
                                                    <img className="vignette" src={details} alt="detailsads" />
                                                </label>
                                                <img className="big_image" src={details} alt="detailsadsbig" />
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Category</strong>: Developpé avec le framework Laravel, Ajax, jQuery, Bootstrap 4</li>
                                                <li><strong>Entreprise</strong>: Lyss consulting</li>
                                                {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                                                <li><strong>Nbre de participants</strong>: Seul</li>
                                                <li><strong>Project URL</strong>:
                                                 {/* <a href="https://drive.google.com/drive/folders/1wNOxwavIo8sqdA14ksjV2H--lnzj1Kld" target="_blank">Ouvrir le lien google des images du projet</a> */}
                                                 <ExternalLink href="https://drive.google.com/drive/folders/1wNOxwavIo8sqdA14ksjV2H--lnzj1Kld">
                                                        <span> Voir toutes les images depuis google drive</span>
                                                    </ExternalLink>
                                                 </li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-description">
                                            <h2>Détails</h2>
                                            <p>
                                                FindJob est une application web de recherche d'emploi en ligne
                                            </p>
                                            <p><strong>Fontionnalités</strong>:<br />
                                                <i class='bx bx-right-arrow-alt'></i> Back-office complet géré avec l'ACL(Access Control List) Spatie
                                                pour la gestion des Utilisateurs, Rôles et des permissions mais également toutes les statistiques de la
                                                plate-forme<br />
                                                <i class='bx bx-right-arrow-alt'></i> front-office: <br />
                                                - CRUD de ses annonces <br />
                                                - Booster ses annonces <br />
                                                - Gestion des alerts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
                        {/* <button type="button" className="btn btn-primary">Understood</button> */}
                    </div>
                </div>
            </div>
        </div>


    );
}

export default JobAds;