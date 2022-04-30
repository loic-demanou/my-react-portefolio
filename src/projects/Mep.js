import boutique from '../Ressources/MEP/besoins.PNG';
import detail1 from '../Ressources/MEP/bon.PNG';
import panier from '../Ressources/MEP/dashboard.PNG';
import paiement from '../Ressources/MEP/materiels.PNG';

const Mep = () => {
    return (
        <div className="modal fade" style={{ zIndex: "9999" }} id="mepStock" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Ges-Stock</h5>
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
                                                <input type="radio" id="boutique" name="check" className="r_check" defaultChecked="checked" />
                                                <label htmlFor="boutique" className="on_check">
                                                    <img className="vignette" src={boutique} alt="first imazd" />
                                                </label>
                                                <img className="big_image" src={boutique} alt="first imazd big" /></div>
                                            {/*--------------img02-----------------*/}
                                            <div>
                                                <input type="radio" id="detail1" name="check" className="r_check" />
                                                <label htmlFor="detail1" className="on_check">
                                                    <img className="vignette" src={detail1} alt="no mage yet" />
                                                </label>
                                                <img className="big_image" src={detail1} alt="no mage yet2" /></div>
                                            {/*--------------img03-----------------*/}
                                            <div>
                                                <input type="radio" id="paniersd" name="check" className="r_check" />
                                                <label htmlFor="paniersd" className="on_check">
                                                    <img className="vignette" src={panier} alt="no mage yet3" />
                                                </label>
                                                <img className="big_image" src={panier} alt="no mage yet4" />
                                            </div>
                                            {/*--------------img04-----------------*/}
                                            <div>
                                                <input type="radio" id="paiementdsk" name="check" className="r_check" />
                                                <label htmlFor="paiementdsk" className="on_check">
                                                    <img className="vignette" src={paiement} alt="no mage yet5" />
                                                </label>
                                                <img className="big_image" src={paiement} alt="no mage yet6" />
                                            </div>
                                            
                                        </div>




                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Nom de l'app</strong>: -</li>
                                                <li><strong>Stack</strong>: Laravel, Livewire, AlpineJs, Bootstrap, jQuery</li>
                                                <li><strong>Entreprise</strong>: Projet personnel</li>
                                                {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                                                <li><strong>Nbre de participants</strong>: Seul</li>
                                                <li><strong>Project URL</strong>:
                                                    -
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-description">
                                            <h2>Détails</h2>
                                            <p>
                                                Ges-Stock est une application de gestion de stock de matériel
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

export default Mep;