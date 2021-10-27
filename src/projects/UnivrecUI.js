import overview from '../Ressources/xd/univrec/overview.JPG'
import home from '../Ressources/xd/univrec/home.PNG'
import login from '../Ressources/xd/univrec/login.PNG'
import listjob from '../Ressources/xd/univrec/listjob.PNG'
import details from '../Ressources/xd/univrec/details.PNG'
import { ExternalLink } from 'react-external-link'

const UnivrecUI = () => {
    return (

        <div className="modal fade" style={{ zIndex: "9999" }} id="univrecui" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Univrec</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">

                        {/* ======= Breadcrumbs ======= */}
                        {/* ======= Portfolio Details Section ======= */}
                        <section id="portfolio-details" className="portfolio-details">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">


                                        <div className="diapo portfolio-details-slider">
                                            {/*--------------img01-----------------*/}
                                            <div>
                                                <input type="radio" id="homeunivrecui" name="check" className="r_check" defaultChecked="checked" />
                                                <label htmlFor="homeunivrecui" className="on_check">
                                                    <img className="vignette" src={home} alt="home unib" />
                                                </label>
                                                <img className="big_image" src={home} alt="home univ" /></div>
                                            {/*--------------img02-----------------*/}
                                            <div>
                                                <input type="radio" id="overviewui" name="check" className="r_check" />
                                                <label htmlFor="overviewui" className="on_check">
                                                    <img className="vignette" src={overview} alt="overview" />
                                                </label>
                                                <img className="big_image" src={overview} alt="overviewbig" /></div>
                                            {/*--------------img03-----------------*/}
                                            <div>
                                                <input type="radio" id="listjobui" name="check" className="r_check" />
                                                <label htmlFor="listjobui" className="on_check">
                                                    <img className="vignette" src={listjob} alt="filsdqsd" />
                                                </label>
                                                <img className="big_image" src={listjob} alt="filsdqsd" />
                                            </div>
                                            {/*--------------img04-----------------*/}
                                            <div>
                                                <input type="radio" id="detailjobui" name="check" className="r_check" />
                                                <label htmlFor="detailjobui" className="on_check">
                                                    <img className="vignette" src={details} alt="detailsimage" />
                                                </label>
                                                <img className="big_image" src={details} alt="detailsimagebig" />
                                            </div>
                                            {/*--------------img05-----------------*/}
                                            <div>
                                                <input type="radio" id="loginimgui" name="check" className="r_check" />
                                                <label htmlFor="loginimgui" className="on_check">
                                                    <img className="vignette" src={login} alt="login img" />
                                                </label>
                                                <img className="big_image" src={login} alt="login img big" />
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Nom de l'app</strong>: Univrec UI</li>
                                                <li><strong>Category</strong>: Réalisé avec Adobe XD</li>
                                                <li><strong>Entreprise</strong>: Projet scolaire</li>
                                                {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                                                <li><strong>Nbre de participants</strong>: Seul</li>
                                                <li><strong>Project URL</strong>:
                                                    {/* <a href="https://drive.google.com/drive/folders/1xLtMSeAf5sTdQeVMzTmuQ-fhe3GqKgfu" target="_blank">Ouvrir le lien des images de la maquette</a> */}
                                                    <ExternalLink href="https://drive.google.com/drive/folders/1xLtMSeAf5sTdQeVMzTmuQ-fhe3GqKgfu">
                                                        <span> Voir toutes les images depuis google drive</span>
                                                    </ExternalLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-description">
                                            <h2>Détails</h2>
                                            <p>
                                                Univrec UI est la maquette d'un système de recrutement universitaire basé su l'etude des CV des differentes candidatures <br />
                                            </p>
                                            <p><strong>Fontionnalités</strong>:<br />

                                                <i class='bx bx-right-arrow-alt'></i> page de connexion <br />
                                                <i class='bx bx-right-arrow-alt'></i> page d'accueil <br />
                                                <i class='bx bx-right-arrow-alt'></i> page de création des emplois <br />
                                                <i class='bx bx-right-arrow-alt'></i> Liste de tous les emplois <br />
                                                <i class='bx bx-right-arrow-alt'></i> page de details d'emplois emplois <br />
                                                <i class='bx bx-right-arrow-alt'></i> page de chat <br />
                                                <i class='bx bx-right-arrow-alt'></i> page des états des différentes demandes <br />
                                                <i class='bx bx-right-arrow-alt'></i> Editeur de CV inclus <br />
                                                {/* <i class='bx bx-right-arrow-alt'></i> Connexions avec google */}
                                            </p>
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

export default UnivrecUI;