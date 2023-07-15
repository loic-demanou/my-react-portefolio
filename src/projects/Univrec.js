// import './blupush.css';
import home from '../Ressources/univrec/home.PNG'
import adminjob from '../Ressources/univrec/adminjobs.PNG'
import proposals from '../Ressources/univrec/proposals.PNG'
import chat from '../Ressources/univrec/home.PNG'
import login from '../Ressources/univrec/login.PNG'
import details from '../Ressources/univrec/details.PNG'
import { ExternalLink } from 'react-external-link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";
import { useState } from 'react';

const Univrec = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (

        <div className="modal fade" style={{ zIndex: "9999" }} id="univrec" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Univrec</h5>
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
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={home} alt="home unib bg"  /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={details} alt="details bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={adminjob} alt="adminjob bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={proposals} alt="filsdqsd bg" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={chat} alt="chatimage bg" /></SwiperSlide>
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
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={details} alt="details" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={adminjob} alt="adminjob" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={proposals} alt="filsdqsd" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={chat} alt="chatimage" /></SwiperSlide>
                                                <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={login} alt="login img" /></SwiperSlide>
                                            </Swiper>
                                        </>

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="portfolio-info">
                                            <p>👈Cliquez sur les images pour visualiser</p>
                                            <h3>informations</h3>
                                            <ul>
                                                <li><strong>Nom de l'app</strong>: Univrec</li>
                                                <li><strong>Stack</strong>: Laravel, Livewire, jQuery, tailwind css, Alpine js</li>
                                                <li><strong>Entreprise</strong>: Projet scolaire</li>
                                                <li><strong>Nbre de participants</strong>: Seul</li>
                                                <li><strong>Project URL</strong> :
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
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Univrec;