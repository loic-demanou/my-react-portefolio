// import './jobads.css';
// import './blupush.css';
import dashboard from '../Ressources/JobAds/Dashboard.PNG';
import home from '../Ressources/JobAds/home.PNG';
import jobs from '../Ressources/JobAds/jobs.PNG';
import details from '../Ressources/JobAds/details.PNG';
import myads from '../Ressources/JobAds/myads.PNG';
import postjob from '../Ressources/JobAds/postjob.PNG';
import dashnotification from '../Ressources/JobAds/dashnotification.PNG';
// import { ExternalLink } from 'react-external-link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";
import { useState } from 'react';

const JobAds = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (

        <div className="modal fade" style={{ zIndex: "99999" }} id="jobAds" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">JobAds</h5>
                        <button type="button" className="bx bx-x" data-bs-dismiss="modal" aria-label="Close" />
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
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={home} alt="homejobs bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={jobs} alt="jobs bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={dashboard} alt="dashboardjob bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={details} alt="detailsads" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={postjob} alt="postjobads" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={myads} alt="myadsads" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={dashnotification} alt="dashnotificationads" /></SwiperSlide>
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
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={home} alt="homejobs" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={jobs} alt="jobs" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={dashboard} alt="dashboardjob" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={details} alt="detailsads" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={postjob} alt="postjobads" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={myads} alt="myadsads" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={dashnotification} alt="dashnotificationads" /></SwiperSlide>
                                            </Swiper>
                                        </>



                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Stack</strong>: Laravel, Ajax, jQuery, Bootstrap 4</li>
                                                <li><strong>Entreprise</strong>: Lyss consulting</li>
                                                <li><strong>Nbre de participants</strong>: Seul</li>
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
                                                - Gestion de ses annonces <br />
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
                    </div>
                </div>
            </div>
        </div>


    );
}

export default JobAds;