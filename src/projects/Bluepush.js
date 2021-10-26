import { useEffect } from "react";
import logo from "../logo.svg";
// import $ from 'jquery'
// import './blupush.css';
import dash from '../Ressources/Bluepush/Dashboard.PNG'
import msgman from '../Ressources/Bluepush/msgmanuels.PNG'
import adduser from '../Ressources/Bluepush/adduser.PNG'
import survey from '../Ressources/Bluepush/survey.PNG'
import userlist from '../Ressources/Bluepush/userlist.PNG'
import { Link } from "react-router-dom";
const Bluepush = () => {
  useEffect(() => {

  }, [])

  return (
    <div className="modal fade" style={{ zIndex: "9999" }} id="bluepush" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                <div className="row gy-4">
                  <div className="col-lg-8">


                    <div className="diapo portfolio-details-slider">
                      {/*--------------img01-----------------*/}
                      <div className="align-items-center">
                        <input type="radio" id="check_6" name="check" className="r_check" defaultChecked="checked" />
                        <label htmlFor="check_6" className="on_check">
                          <img className="vignette" src={dash} alt />
                        </label>
                        <img className="big_image" src={dash} alt /></div>
                      {/*--------------img02-----------------*/}
                      <div>
                        <input type="radio" id="check_7" name="check" className="r_check" />
                        <label htmlFor="check_7" className="on_check">
                          <img className="vignette" src={msgman} alt="dashboard" />
                        </label>
                        <img className="big_image" src={msgman} alt="msg manuel" /></div>
                      {/*--------------img03-----------------*/}
                      <div>
                        <input type="radio" id="userlistju" name="check" className="r_check" />
                        <label htmlFor="userlistju" className="on_check">
                          <img className="vignette" src={userlist} alt="user list " />
                        </label>
                        <img className="big_image" src={userlist} alt="user list big" />
                      </div>
                      {/*--------------img04-----------------*/}
                      <div>
                        <input type="radio" id="check_9" name="check" className="r_check" />
                        <label htmlFor="check_9" className="on_check">
                          <img className="vignette" src={adduser} alt="add" />
                        </label>
                        <img className="big_image" src={adduser} alt="adduser" />
                      </div>
                      {/*--------------img05-----------------*/}
                      <div>
                        <input type="radio" id="surveyyy" name="check" className="r_check" />
                        <label htmlFor="surveyyy" className="on_check">
                          <img className="vignette" src={survey} alt="survey" />
                        </label>
                        <img className="big_image" src={survey} alt="survey big" />
                      </div>
                    </div>


                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <p>👈Cliquez sur les images pour visualiser</p>
                      <h3>informations</h3>
                      <ul>
                        <li><strong>Nom</strong>: Bluepush</li>
                        <li><strong>Category</strong>: Developpé avec le framework Laravel, Ajax, jQuery, Nexah API, Bootstrap 4</li>
                        <li><strong>Entreprise</strong>: Lyss consulting</li>
                        {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                        <li><strong>Nbre de participants</strong>: 03</li>
                        <li><strong>Project URL</strong>: <a href="https://drive.google.com/drive/folders/1nfYkiIBiWzLgACpQF_OeFT0ZmDcHxkuF" target="_blank">Ouvrir le lien google des images du projet</a></li>
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
            {/* <button type="button" className="btn btn-primary">Understood</button> */}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Bluepush;