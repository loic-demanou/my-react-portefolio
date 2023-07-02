import dash from '../Ressources/monbeatmaker/home.PNG'
import msgman from '../Ressources/monbeatmaker/beatracks.PNG'
import adduser from '../Ressources/monbeatmaker/beatdetail.PNG'
import survey from '../Ressources/monbeatmaker/beamakerdetails.PNG'
import { ExternalLink } from "react-external-link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";
import { useState } from 'react';
const Monbeatmaker = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="modal fade" style={{ zIndex: "9999" }} id="monbeatmaker" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Monbeatmaker</h5>
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
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={dash} alt="dashqs bg"   /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={msgman} alt="dashboard bg" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={adduser} alt="add bg" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={survey} alt="survey bg" /></SwiperSlide>
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
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={dash} alt="dashqsdqsd"  /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={msgman} alt="dashboard" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={adduser} alt="add" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={survey} alt="survey"/></SwiperSlide>
                      </Swiper>
                    </>

                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <p>👈Cliquez sur les images pour visualiser</p>
                      <h3>informations</h3>
                      <ul>
                        <li><strong>Nom</strong>: Monbeatmaker</li>
                        <li><strong>Stack</strong>: NextJs, Laravel, TailwindCss</li>
                        <li><strong>Entreprise</strong>: Parazit Music</li>
                        <li><strong>Nbre de participants</strong>: 0</li>
                        <li><strong>Démo</strong> : &nbsp;
                          <ExternalLink href="https://bantubeat.com/" />
                        </li>
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>Détails</h2>
                      <p>
                        Monbeatmaker est une plateforme d'ecommerce qui permet à tout beatmaker de vendre des beats musicaux
                      </p>
                      <p><strong>Mes tâches </strong>:<br />
                        <i class='bx bx-right-arrow-alt'></i> Back-office complet (Module ACL(Access Control List) avec le package Spatie
                        pour la gestion des Utilisateurs, Rôles et permissions, gestion des beats) <br />
                        <i class='bx bx-right-arrow-alt'></i> Front-office: (Marketplace, Panier, Follow/unfollow, Like/Dislike, Lecteur,...) </p>
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

export default Monbeatmaker;