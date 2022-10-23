import { ExternalLink } from 'react-external-link'
import overview from '../Ressources/xd/chatmobile/overview.PNG'
import overvieweb from '../Ressources/xd/chatmobile/overvieweb.PNG'
// import contact from '../Ressources/xd/chatmobile/contact.PNG'
// import calls from '../Ressources/xd/chatmobile/calls.PNG'
// import discussion from '../Ressources/xd/chatmobile/discussion.PNG'
import web1 from '../Ressources/xd/chatmobile/web1.PNG'
import web2 from '../Ressources/xd/chatmobile/web2.PNG'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";
import { useState } from 'react'

// import actuality from '../Ressources/xd/chatmobile/actuality.PNG'

const Chatui = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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

                                        <>
                                            <Swiper
                                                spaceBetween={10}
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
                                                <SwiperSlide><img className="" style={{ height:"90%", width:'90%' }} src={overvieweb} alt="averviewweb big" /></SwiperSlide>
                                                <SwiperSlide><img className="" style={{ height:"90%", width:'90%' }} src={overview} alt="averview big"/></SwiperSlide>
                                                <SwiperSlide><img className="" style={{ height:"90%", width:'90%' }} src={overview} alt="averview bigg"/></SwiperSlide>
                                                <SwiperSlide><img className="" style={{ height:"90%", width:'90%' }} src={web1} alt="web1 big" /></SwiperSlide>
                                                <SwiperSlide><img className="" style={{ height:"90%", width:'90%' }} src={web2} alt="web2_big"/></SwiperSlide>
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
                                                <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={overvieweb} alt="averviewweb" /></SwiperSlide>
                                                <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={overview} alt="averview" /></SwiperSlide>
                                                <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={overview} alt="averview w" /></SwiperSlide>
                                                <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={web1} alt="web1" /></SwiperSlide>
                                                <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={web2} alt="web2" /></SwiperSlide>
                                            </Swiper>
                                        </>

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
                                                <li><strong>Project URL</strong>:
                                                    {/* <a href="https://drive.google.com/drive/folders/1yiyKQUGvEoHVfNrPHtzFqAIhjJYu58ER" target="_blank">Ouvrir le lien google des images des maquettes</a> */}
                                                    <ExternalLink href="https://drive.google.com/drive/folders/1yiyKQUGvEoHVfNrPHtzFqAIhjJYu58ER">
                                                        <span> Voir toutes les images depuis google drive</span>
                                                    </ExternalLink>
                                                </li>
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