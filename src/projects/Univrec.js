// import './blupush.css';
import home from '../Ressources/univrec/home.PNG'
import adminjob from '../Ressources/univrec/adminjobs.PNG'
import proposals from '../Ressources/univrec/proposals.PNG'
import chat from '../Ressources/univrec/home.PNG'
import login from '../Ressources/univrec/login.PNG'
import { ExternalLink } from 'react-external-link'

const Univrec = () => {
    return (

        <div className="modal fade" style={{ zIndex: "9999" }} id="univrec" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                                <input type="radio" id="homeunivrec" name="check" className="r_check" defaultChecked="checked" />
                                                <label htmlFor="homeunivrec" className="on_check">
                                                    <img className="vignette" src={home} alt="home unib" />
                                                </label>
                                                <img className="big_image" src={home} alt="home univ" /></div>
                                            {/*--------------img02-----------------*/}
                                            <div>
                                                <input type="radio" id="adminjob" name="check" className="r_check" />
                                                <label htmlFor="adminjob" className="on_check">
                                                    <img className="vignette" src={adminjob} alt="adminjob" />
                                                </label>
                                                <img className="big_image" src={adminjob} alt="adminjobbig" /></div>
                                            {/*--------------img03-----------------*/}
                                            <div>
                                                <input type="radio" id="filmsectionpo" name="check" className="r_check" />
                                                <label htmlFor="filmsectionpo" className="on_check">
                                                    <img className="vignette" src={proposals} alt="filsdqsd" />
                                                </label>
                                                <img className="big_image" src={proposals} alt="filsdqsd" />
                                            </div>
                                            {/*--------------img04-----------------*/}
                                            <div>
                                                <input type="radio" id="chatimg" name="check" className="r_check" />
                                                <label htmlFor="chatimg" className="on_check">
                                                    <img className="vignette" src={chat} alt="chatimage" />
                                                </label>
                                                <img className="big_image" src={chat} alt="chatimage" />
                                            </div>
                                            {/*--------------img05-----------------*/}
                                            <div>
                                                <input type="radio" id="loginimg" name="check" className="r_check" />
                                                <label htmlFor="loginimg" className="on_check">
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
                                                <li><strong>Nom de l'app</strong>: Univrec</li>
                                                <li><strong>Category</strong>: Developpé avec le framework Laravel, Livewire, jQuery, tailwind css, Alpine js</li>
                                                <li><strong>Entreprise</strong>: Projet scolaire</li>
                                                {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                                                <li><strong>Nbre de participants</strong>: Seul</li>
                                                <li><strong>Project URL</strong> :
                                                    {/* <a href="#">aucun</a> */}
                                                    <ExternalLink href="http://univrec.herokuapp.com/">
                                                        <span> univrec.herokuapp.com</span>
                                                    </ExternalLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-description">
                                            <h2>Détails</h2>
                                            <p>
                                                Univrec est un système de recrutement universitaire basé su l'etude des CV des differentes candidatures <br />
                                                principe: Les recruteurs publient des annonces dans le site, puis les candidats envoient leurs
                                                leurs condidatures et le recruteur programme un entretient physique.
                                            </p>
                                            <p><strong>Fontionnalités</strong>:<br />

                                                <i class='bx bx-right-arrow-alt'></i> front-office: <br />
                                                <i class='bx bx-right-arrow-alt'></i> CRUD de ses annonces <br />
                                                <i class='bx bx-right-arrow-alt'></i> Programmer les entretients <br />
                                                <i class='bx bx-right-arrow-alt'></i> Chat entre recruteurs et candidats <br />
                                                <i class='bx bx-right-arrow-alt'></i> Editeur de CV inclus <br />
                                                <i class='bx bx-right-arrow-alt'></i> Connexions avec google &amp; Github</p>
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

export default Univrec;