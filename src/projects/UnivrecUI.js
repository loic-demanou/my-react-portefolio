import overview from '../Ressources/xd/univrec/overview.JPG'
import home from '../Ressources/xd/univrec/home.PNG'
import login from '../Ressources/xd/univrec/login.PNG'
import listjob from '../Ressources/xd/univrec/listjob.PNG'
import details from '../Ressources/xd/univrec/details.PNG'
// import { ExternalLink } from 'react-external-link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";
import { useState } from 'react';

const UnivrecUI = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (

        <div className="modal fade" style={{ zIndex: "9999" }} id="univrecui" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">UnivrecUI</h5>
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
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={home} alt="home unib bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={overview} alt="overview bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={listjob} alt="list bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={details} alt="detailsimage bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={login} alt="login img bg" /></SwiperSlide>
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
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={home} alt="home unib" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={overview} alt="overview" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={listjob} alt="listjob" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={details} alt="detailsimage" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={login} alt="login img" /></SwiperSlide>
                                            </Swiper>
                                        </>

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Nom de l'app</strong>: Univrec UI</li>
                                                <li><strong>Category</strong>: Réalisé avec Adobe XD</li>
                                                <li><strong>Entreprise</strong>: Projet scolaire</li>
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

export default UnivrecUI;