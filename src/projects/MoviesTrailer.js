import trending from '../Ressources/movie/trending.PNG'
import detail from '../Ressources/movie/details.PNG'
import detail2 from '../Ressources/movie/details2.GIF'
import filmsection from '../Ressources/movie/filmsection.GIF'
import search from '../Ressources/movie/search.PNG'
import { ExternalLink } from 'react-external-link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";
import { useState } from 'react';

const MoviesTrailer = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (

    <div className="modal fade" style={{ zIndex: "9999" }} id="movies" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">BluePush</h5>
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
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={detail2} alt="detail2 bg"  /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={trending} alt="trending bg" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={detail} alt="detail bg" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={search} alt="search bg" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={filmsection} alt="film section" /></SwiperSlide>
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
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={detail2} alt="detail2" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={trending} alt="trending" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={detail} alt="detail" /></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={search} alt="search"/></SwiperSlide>
                          <SwiperSlide><img style={{ height:"100%", width:'100%' }} src={filmsection} alt="film section" /></SwiperSlide>
                      </Swiper>
                    </>

                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <p>👈Cliquez sur les images pour visualiser</p>
                      <h3>informations</h3>
                      <ul>
                        <li><strong>Nom</strong>: Mobies trailer</li>
                        <li><strong>Stack</strong>: React js, Material UI, The movie DB (TMDB) API</li>
                        <li><strong>Entreprise</strong>: Projet personnel</li>
                        {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                        <li><strong>Nbre de participants</strong>: Seul</li>
                        <li><strong>Project URL</strong> :
                          {/* <a href="#">aucun</a> */}
                          <ExternalLink href="https://moviestrailer.netlify.app">
                            <span> moviestrailer.netlify.app</span>
                          </ExternalLink>
                        </li>
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>Détails</h2>
                      <p>
                        Movies trailer est une appli react qui permet d'être au courant des dernieres tendances en matière de cinema
                      </p>
                      <p><strong>Mes tâches </strong>:<br />
                        <i class='bx bx-right-arrow-alt'></i> Utiliser l'API TMDB pour lister les films et séries tendances; puis les classés
                        par catégories et afficher les détails correspondants. <br />
                        <i class='bx bx-right-arrow-alt'></i> Visualiser les bandes annonces depuis Youtube <i className='bx bxl-youtube' ></i> </p>
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

export default MoviesTrailer;