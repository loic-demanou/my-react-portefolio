import logo from "../logo.svg";
import trending from '../Ressources/movie/trending.PNG'
import detail from '../Ressources/movie/details.PNG'
import detail2 from '../Ressources/movie/details2.GIF'
import filmsection from '../Ressources/movie/filmsection.GIF'
import search from '../Ressources/movie/search.PNG'

const MoviesTrailer = () => {
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
  
  
                      <div className="diapo portfolio-details-slider swiper">
                        {/*--------------img01-----------------*/}
                        <div>
                          <input type="radio" id="detail2" name="check" className="r_check" defaultChecked="checked" />
                          <label htmlFor="detail2" className="on_check">
                            <img className="vignette" src={detail2} alt />
                          </label>
                          <img className="big_image" src={detail2} alt /></div>
                        {/*--------------img02-----------------*/}
                        <div>
                          <input type="radio" id="trending" name="check" className="r_check" />
                          <label htmlFor="trending" className="on_check">
                            <img className="vignette" src={trending} alt="trending" />
                          </label>
                          <img className="big_image" src={trending} alt="trending big" /></div>
                        {/*--------------img03-----------------*/}
                        <div>
                          <input type="radio" id="details" name="check" className="r_check" />
                          <label htmlFor="details" className="on_check">
                            <img className="vignette" src={detail} alt="detail" />
                          </label>
                          <img className="big_image" src={detail} alt="detail big" />
                        </div>
                        {/*--------------img04-----------------*/}
                        <div>
                          <input type="radio" id="searchmov" name="check" className="r_check" />
                          <label htmlFor="searchmov" className="on_check">
                            <img className="vignette" src={search} alt="search" />
                          </label>
                          <img className="big_image" src={search} alt="search big" />
                        </div>
                        {/*--------------img05-----------------*/}
                        <div>
                          <input type="radio" id="filmsection" name="check" className="r_check" />
                          <label htmlFor="filmsection" className="on_check">
                            <img className="vignette" src={filmsection} alt />
                          </label>
                          <img className="big_image" src={filmsection} alt />
                        </div>
                      </div>
  
  
  
  
                    </div>
                    <div className="col-lg-4">
                      <div className="portfolio-info">
                        <p>👈Cliquez sur les images pour visualiser</p>
                        <h3>informations</h3>
                        <ul>
                          <li><strong>Nom</strong>: Mobies trailer</li>
                          <li><strong>Category</strong>: React js, Material UI, The movie DB (TMDB) API</li>
                          <li><strong>Entreprise</strong>: Projet personnel</li>
                          {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                          <li><strong>Nbre de participants</strong>: Seul</li>
                          <li><strong>Project URL</strong>: <a href="#">aucun</a></li>
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