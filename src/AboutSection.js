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
                            Née en 2000 et Titulaire d'une licence technologique en Génie Logiciel, je suis un développeur web passionné d'informatique, j'ai appris a coder
                                dans divers langages informatiques (JavaScript, Laravel,
                                React js...). Polyvalent et rigoureux, je connais les différentes étapes
                                techniques de la création d’une application web; de la compréhension des besoins utilisateurs, 
                                au développement frontend et backend en passant par la maintenance.
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