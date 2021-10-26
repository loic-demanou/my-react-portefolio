import logo from "../logo.svg";
import overview from '../Ressources/xd/chatmobile/overview.PNG'
import overvieweb from '../Ressources/xd/chatmobile/overvieweb.PNG'
import contact from '../Ressources/xd/chatmobile/contact.PNG'
import calls from '../Ressources/xd/chatmobile/calls.PNG'
import discussion from '../Ressources/xd/chatmobile/discussion.PNG'
import web1 from '../Ressources/xd/chatmobile/web1.PNG'
import web2 from '../Ressources/xd/chatmobile/web2.PNG'
import actuality from '../Ressources/xd/chatmobile/actuality.PNG'

const Chatui = () => {
    return (

        <div className="modal fade" style={{ zIndex: "9999" }} id="chatui" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">UI design</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">

                        {/* ======= Breadcrumbs ======= */}
                        {/* ======= Portfolio Details Section ======= */}
                        <section id="portfolio-details" className="portfolio-details">
                            <div className="container">
                                <div className="row gy-4">
                                    <div className="col-lg-8">


                                        <div className="diapo portfolio-details-slider swiper">
                                            {/*--------------img01-----------------*/}
                                            <div className="align-items-center">
                                                <input type="radio" id="overvieweb" name="check" className="r_check" defaultChecked="checked" />
                                                <label htmlFor="overvieweb" className="on_check">
                                                    <img className="vignette" src={overvieweb} alt="averviewweb" />
                                                </label>
                                                <img className="big_image" src={overvieweb} alt="averviewweb-qsd" /></div>
                                            {/*--------------img02-----------------*/}
                                            <div>
                                                <input type="radio" id="overview" name="check" className="r_check" />
                                                <label htmlFor="overview" className="on_check">
                                                    <img className="vignette" src={overview} alt="averview" />
                                                </label>
                                                <img className="big_image" src={overview} alt="averviewbig" /></div>
                                            {/*--------------img03-----------------*/}
                                            {/* <div>
                                                <input type="radio" id="contact" name="check" className="r_check" />
                                                <label htmlFor="contact" className="on_check">
                                                    <img className="vignette" src={contact} alt="contact" />
                                                </label>
                                                <img className="big_image" src={contact} alt="contact-big" />
                                            </div> */}
                                            {/*--------------img04-----------------*/}
                                            {/* <div>
                                                <input type="radio" id="calls" name="check" className="r_check" />
                                                <label htmlFor="calls" className="on_check">
                                                    <img className="vignette" src={calls} alt="calls" />
                                                </label>
                                                <img className="big_image" src={calls} alt="calls_big" />
                                            </div> */}
                                            {/*--------------img05-----------------*/}
                                            {/* <div>
                                                <input type="radio" id="actuality" name="check" className="r_check" />
                                                <label htmlFor="actuality" className="on_check">
                                                    <img className="vignette" src={actuality} alt="actuality" />
                                                </label>
                                                <img className="big_image" src={actuality} alt="actuality_big" />
                                            </div> */}
                                            <div>
                                                <input type="radio" id="web1" name="check" className="r_check" />
                                                <label htmlFor="web1" className="on_check">
                                                    <img className="vignette" src={web1} alt="web1" />
                                                </label>
                                                <img className="big_image" src={web1} alt="web1_big" />
                                            </div>
                                            {/*--------------img05-----------------*/}
                                            <div>
                                                <input type="radio" id="web2" name="check" className="r_check" />
                                                <label htmlFor="web2" className="on_check">
                                                    <img className="vignette" src={web2} alt="web2" />
                                                </label>
                                                <img className="big_image" src={web2} alt="web2_big" />
                                            </div>
                                        </div> 


                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Category</strong>: Maquette d'application en version web et mobile </li>
                                                <li><strong>Entreprise</strong>: Projet personnel</li>
                                                {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                                                <li><strong>Nbre de participants</strong>: Seul</li>
                                                <li><strong>Project URL</strong>: <a href="https://drive.google.com/drive/folders/1yiyKQUGvEoHVfNrPHtzFqAIhjJYu58ER" target="_blank">Ouvrir le lien google des images des maquettes</a></li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-description">
                                            <h2>Détails</h2>
                                            <p>
                                                Maquette d'une application de chat en version mobile et web effectué avec Adobe XD
                                            </p>
                                            {/* <p><strong>Mes tâches </strong>:<br />
                                                <i class='bx bx-right-arrow-alt'></i> Module ACL(Access Control List) avec le package Spatie
                                                pour la gestion des Utilisateurs, Rôles et des permissions de ces utilisateurs <br />
                                                <i class='bx bx-right-arrow-alt'></i> L'envoi des SMS manuels grâce a l'API nexah </p> */}
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

export default Chatui;