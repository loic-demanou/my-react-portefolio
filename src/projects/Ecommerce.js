import boutique from '../Ressources/kako/boutique.JPG';
import detail1 from '../Ressources/kako/details1.JPG';
import panier from '../Ressources/kako/panier.JPG';
import paiement from '../Ressources/kako/paiement page.JPG';
import razorpay from '../Ressources/kako/razorpay page.JPG';
// import { ExternalLink } from 'react-external-link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";


const Ecommerce = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={boutique} alt="first imazbigd"  /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={detail1} alt="no mage big" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={panier} alt="no mage yet3 big" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={paiement} alt="no mage yet5 bg"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={razorpay} alt="no mage yet7 bg" /></SwiperSlide>
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
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={boutique} alt="first imazd"  /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={detail1} alt="no mage yet" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={panier} alt="no mage yet3" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={paiement} alt="no mage yet5"/></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={razorpay} alt="no mage yet7" /></SwiperSlide>
                                            </Swiper>
                                        </>

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Nom de l'app</strong>: KAKO</li>
                                                <li><strong>Stack</strong>: React js, Laravel, Bootstrap, Razorpay API, Paypal API</li>
                                                <li><strong>Entreprise</strong>: Projet personnel</li>
                                                <li><strong>Nbre de participants</strong>: Seul</li>
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
                                            ... </p>
                                                <i class='bx bx-right-arrow-alt'></i>Systemes de paiement électronique inclus (Paypal, Razorpay)  <br />
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

export default Ecommerce;