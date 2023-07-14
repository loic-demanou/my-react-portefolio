import profil from './Ressources/images/profil.jpeg'
const AboutSection = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>A propos</h2>
                        {/* <p>Née en 2000 et Titulaire d'une licence technologique je suis un développeur web passionné d'informatique, j'ai appris a coder
                                dans divers langages informatiques (JavaScript, Laravel,
                                React js...). Polyvalent, je maîtrise les différentes étapes
                                techniques de la création d’une application web;  de la compréhension des besoins utilisateurs, 
                                au développement frontend et backend en passant par la maintenance. </p> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src={profil} className="img-fluid" alt="home-cover" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Développeur web Fullstack React JS | Laravel | Node Js</h3>
                            <p className="fst-italic">
                            Titulaire d'une licence technologique en Génie Logiciel et fort de mon expérience en développement web, 
                            je suis passionné par la transformation des idées en réalités digitales. Grâce à mon expertise et à mon désir 
                            constant d'apprendre et de relever de nouveaux défis, je me suis développé en tant que développeur polyvalent 
                            capable de concevoir et de développer des applications efficaces et esthétiques pour les entreprises et 
                            les organisations de toutes tailles.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>22 ans</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Ville:</strong> <span>Abidjan, Côte d'Ivoire</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Etude:</strong> <span>Licence Technologique (Bac+3) </span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Disponible</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End About Section */}
        </>
    );
}

export default AboutSection;