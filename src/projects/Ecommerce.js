import logo from "../logo.svg";

const Ecommerce = () => {
    return (
        <div className="modal fade" style={{ zIndex: "9999" }} id="reactecommerce" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">KAKO</h5>
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
                                                <input type="radio" id="check_6" name="check" className="r_check" defaultChecked="checked" />
                                                <label htmlFor="check_6" className="on_check">
                                                    <img className="vignette" src={logo} alt />
                                                </label>
                                                <img className="big_image" src={logo} alt /></div>
                                            {/*--------------img02-----------------*/}
                                            <div>
                                                <input type="radio" id="check_7" name="check" className="r_check" />
                                                <label htmlFor="check_7" className="on_check">
                                                    <img className="vignette" src="http://nosmoking.developpez.com/tutoriels/css/galerie-css3-sans-javascript/fichiers/images/image_002.jpg" alt />
                                                </label>
                                                <img className="big_image" src="http://nosmoking.developpez.com/tutoriels/css/galerie-css3-sans-javascript/fichiers/images/image_002.jpg" alt /></div>
                                            {/*--------------img03-----------------*/}
                                            <div>
                                                <input type="radio" id="check_8" name="check" className="r_check" />
                                                <label htmlFor="check_8" className="on_check">
                                                    <img className="vignette" src="http://nosmoking.developpez.com/tutoriels/css/galerie-css3-sans-javascript/fichiers/images/image_003.jpg" alt />
                                                </label>
                                                <img className="big_image" src="http://nosmoking.developpez.com/tutoriels/css/galerie-css3-sans-javascript/fichiers/images/image_003.jpg" alt />
                                            </div>
                                            {/*--------------img04-----------------*/}
                                            <div>
                                                <input type="radio" id="check_9" name="check" className="r_check" />
                                                <label htmlFor="check_9" className="on_check">
                                                    <img className="vignette" src="http://nosmoking.developpez.com/tutoriels/css/galerie-css3-sans-javascript/fichiers/images/image_004.jpg" alt />
                                                </label>
                                                <img className="big_image" src="http://nosmoking.developpez.com/tutoriels/css/galerie-css3-sans-javascript/fichiers/images/image_004.jpg" alt />
                                            </div>
                                            {/*--------------img05-----------------*/}
                                            <div>
                                                <input type="radio" id="check_10" name="check" className="r_check" />
                                                <label htmlFor="check_10" className="on_check">
                                                    <img className="vignette" src="http://nosmoking.developpez.com/tutoriels/css/galerie-css3-sans-javascript/fichiers/images/image_005.jpg" alt />
                                                </label>
                                                <img className="big_image" src="http://nosmoking.developpez.com/tutoriels/css/galerie-css3-sans-javascript/fichiers/images/image_005.jpg" alt />
                                            </div>
                                        </div>




                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Nom de l'app</strong>: KAKO</li>
                                                <li><strong>Category</strong>: React js, Laravel, Bootstrap</li>
                                                <li><strong>Entreprise</strong>: Projet personnel</li>
                                                {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                                                <li><strong>Nbre de participants</strong>: Seul</li>
                                                <li><strong>Project URL</strong>: <a href="#">aucun</a></li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-description">
                                            <h2>Détails</h2>
                                            <p>
                                                KAKO est une appli fullstack de ecommerce
                                            </p>
                                            <p><strong>Mes tâches </strong>:<br />
                                                <i class='bx bx-right-arrow-alt'></i> Un back-office qui permet la gestion des produits <br />
                                                <i class='bx bx-right-arrow-alt'></i>Un front-office qui liste les produits et les tâches qu'on peut éffectuer dessus
                                                 bref... </p>
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

export default Ecommerce;