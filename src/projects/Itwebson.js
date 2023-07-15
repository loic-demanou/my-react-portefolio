import caisse from '../Ressources/itwebson/caisse.jpg';
import detailsBr from '../Ressources/itwebson/detailsBrr.jpg';
import habilitations from '../Ressources/itwebson/habilitations.jpg';
import newproforma from '../Ressources/itwebson/newproforma.jpg';
import proforma from '../Ressources/itwebson/proforma.jpg';
import rapportVente from '../Ressources/itwebson/rapportVente.jpg';
import showrooms from '../Ressources/itwebson/showrooms.jpg';
import stock from '../Ressources/itwebson/stock.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";
import { useState } from 'react';

const Itwebson = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="modal fade" style={{ zIndex: "9999" }} id="itwebson1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Plateforme de gestion entreprise</h5>
                        <button type="button" className="bx bx-x" data-bs-dismiss="modal" aria-label="Close" />
                        {/* <i className='bx bx-x'></i> */}
                    </div>
                    <div className="modal-body">

                        {/* ======= Breadcrumbs ======= */}
                        {/* ======= Portfolio Details Section ======= */}
                        <section id="portfolio-details" className="portfolio-details">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">

                                        <>
                                            <Swiper
                                                spaceBetween={30}
                                                centeredSlides={true}
                                                autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                                }}
                                                pagination={{
                                                clickable: true,
                                                }}
                                                keyboard={{
                                                enabled: true,
                                                }}
                                                navigation={true}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                modules={[Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={proforma} alt="first imazbigd"  /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={newproforma} alt="no mage big" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={rapportVente} alt="no mage yet3 big" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={detailsBr} alt="no mage yet5 bg"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={showrooms} alt="no mage yet5 bg"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={stock} alt="no mage yet5 bg"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={habilitations} alt="no mage yet5 bg"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={caisse} alt="no mage yet5 bg"/></SwiperSlide>
                                            </Swiper>

                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                spaceBetween={10}
                                                slidesPerView={4}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={proforma} alt="first imazd"  /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={newproforma} alt="no mage yet" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={rapportVente} alt="no mage yet3" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={detailsBr} alt="no mage yet5"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={showrooms} alt="no mage yet5"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={stock} alt="no mage yet5"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={habilitations} alt="no mage yet5"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={caisse} alt="no mage yet5"/></SwiperSlide>
                                            </Swiper>
                                        </>

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Nom de l'app</strong>: -</li>
                                                <li><strong>Stack</strong>: React.js, Node.js, Bootstrap</li>
                                                <li><strong>Entreprise</strong>: Itwebson</li>
                                                <li><strong>Nbre de participants</strong>: -</li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-description">
                                            <h2>Détails</h2>
                                            <p>
                                                Une ERP utilisée par une entreprise pour gérer ses différentes sucursales dans tout le pays. elle inclu entre autre,
                                                <ul>
                                                    <li>Gestion de stock et facturation (système multi-boutique), de la commande des produits chez les fournisseurs à la livraison chez le client après la vente en passant par les approvisionnements et les 
                                                        retours de stock.
                                                    </li>
                                                    <li>Gestion des caisses et comptes.</li>
                                                    <li>Gestion des Employés, Rôles et permissions.</li>
                                                    <li>Gestion des dépenses.</li>
                                                    <li>Gestion des différentes validation dans le système</li>
                                                </ul>
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Itwebson;