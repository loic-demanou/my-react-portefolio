import { useState } from "react";
import dash from '../Ressources/Bluepush/Dashboard.PNG'
import msgman from '../Ressources/Bluepush/msgmanuels.PNG'
import adduser from '../Ressources/Bluepush/adduser.PNG'
import survey from '../Ressources/Bluepush/survey.PNG'
import userlist from '../Ressources/Bluepush/userlist.PNG'
import login from '../Ressources/Bluepush/login.PNG'
import msgContact from '../Ressources/Bluepush/msgContact.PNG'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, FreeMode, Thumbs } from "swiper";

// import { Link } from "react-router-dom";
const Bluepush = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="modal fade" style={{ zIndex: "9999" }} id="bluepush" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">BluePush</h5>
            <button type="button" className="bx bx-x" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">

            {/* ======= Breadcrumbs ======= */}
            {/* ======= Portfolio Details Section ======= */}
            <section id="portfolio-details" className="portfolio-details">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-8">


                    {/* <div className="diapo portfolio-details-slider">
                      
                      <div className="align-items-center">
                        <input type="radio" id="check_6" name="check" className="r_check" defaultChecked="checked" />
                        <label htmlFor="check_6" className="on_check">
                          <img className="vignette" src={dash} alt="dashqsdqsd" />
                        </label>
                        <img className="big_image" src={dash} alt="dashqsdqsd big" /></div>
                      
                      <div>
                        <input type="radio" id="check_7" name="check" className="r_check" />
                        <label htmlFor="check_7" className="on_check">
                          <img className="vignette" src={msgman} alt="dashboard" />
                        </label>
                        <img className="big_image" src={msgman} alt="msg manuel" /></div>
                      
                      <div>
                        <input type="radio" id="userlistju" name="check" className="r_check" />
                        <label htmlFor="userlistju" className="on_check">
                          <img className="vignette" src={userlist} alt="user list " />
                        </label>
                        <img className="big_image" src={userlist} alt="user list big" />
                      </div>
                      
                      <div>
                        <input type="radio" id="check_9" name="check" className="r_check" />
                        <label htmlFor="check_9" className="on_check">
                          <img className="vignette" src={adduser} alt="add" />
                        </label>
                        <img className="big_image" src={adduser} alt="adduser" />
                      </div>
                      
                      <div>
                        <input type="radio" id="surveyyy" name="check" className="r_check" />
                        <label htmlFor="surveyyy" className="on_check">
                          <img className="vignette" src={survey} alt="survey" />
                        </label>
                        <img className="big_image" src={survey} alt="survey big" />
                      </div>
                    </div> */}

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
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={dash} alt="dash big" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={login} alt="login big" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={msgContact} alt="message big" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={msgman} alt="message big" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={userlist} alt="user list " /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={adduser} alt="adduser" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={survey} alt="survey big" /></SwiperSlide>
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
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={dash} alt="dash" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={login} alt="msg" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={msgContact} alt="msg" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={msgman} alt="msg" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={userlist} alt="user list " /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={adduser} alt="adduser" /></SwiperSlide>
                        <SwiperSlide><img className="" style={{ height:"100%", width:'100%' }} src={survey} alt="survey" /></SwiperSlide>
                    </Swiper>
    

                    </>


                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <p>👈Cliquez sur les images pour visualiser</p>
                      <h3>informations</h3>
                      <ul>
                        <li><strong>Nom</strong>: Bluepush</li>
                        <li><strong>Stack</strong>: Laravel, Ajax, jQuery, Nexah API, Bootstrap 4</li>
                        <li><strong>Entreprise</strong>: Lyss consulting</li>
                        <li><strong>Nbre de participants</strong>: 03</li>
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>Détails</h2>
                      <p>
                        Bluepush est une application web de relance et de fildélisation de clientelle via l'envoi des SMS
                      </p>
                      <p><strong>Mes tâches </strong>:<br />
                        <i class='bx bx-right-arrow-alt'></i> Module ACL(Access Control List) avec le package Spatie
                        pour la gestion des Utilisateurs, Rôles et des permissions de ces utilisateurs <br />
                        <i class='bx bx-right-arrow-alt'></i> L'envoi des SMS manuels grâce a l'API nexah </p>
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

export default Bluepush;