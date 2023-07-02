import home from '../Ressources/rentalbnb/home.PNG'
import darkHome from '../Ressources/rentalbnb/homedark.PNG'
import details from '../Ressources/rentalbnb/details.PNG'
import filter1 from '../Ressources/rentalbnb/filter1.PNG'
import formPost from '../Ressources/rentalbnb/formPost.PNG'
import login from '../Ressources/rentalbnb/login.PNG'

import { ExternalLink } from "react-external-link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";
import { useState } from 'react';
const Rentalbnb = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="modal fade" style={{ zIndex: "9999" }} id="rentalbnb" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Rentalbnb</h5>
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
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={home} alt="dashqs bg"   /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={darkHome} alt="dashboard bg" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={details} alt="add bg" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={login} alt="login bg" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={formPost} alt="formPost bg" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={filter1} alt="filter1 bg" /></SwiperSlide>
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
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={home} alt="dashqsdqsd"  /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={darkHome} alt="dashboard" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={details} alt="add" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={login} alt="login"/></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={formPost} alt="formPost"/></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={filter1} alt="filter1"/></SwiperSlide>
                      </Swiper>
                    </>

                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <p>👈Cliquez sur les images pour visualiser</p>
                      <h3>informations</h3>
                      <ul>
                        <li><strong>Nom</strong>: Rentalbnb</li>
                        <li><strong>Stack</strong>: NextJs, TypeScript, TailwindCss, MongoDB</li>
                        <li><strong>Nbre de participants</strong>: 0</li>
                        <li><strong>Démo</strong> : &nbsp;
                          <ExternalLink href="https://rentalbnb.vercel.app/" />
                        </li>
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>Détails</h2>
                      <p>
                        Rentalbnb est un clône du très populaire site de réservation en ligne Airbnb
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

export default Rentalbnb;