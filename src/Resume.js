const Resume = () => {
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Experience Professionel</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        {/* <h3 className="resume-title">Education</h3> */}
                        <div className="resume-item">
                            <h4>Développeur web </h4>
                            <h5>De Février 2023 à nos jours</h5>
                            <p><em>Africa Digitalizer, Abidjan, Côte d'Ivoire </em></p>
                            {/* <ul>
                                <li>Participation au développement d'une application de gestion de stock et facturation, système multi-boutiques: 
                                    de la commande des produits chez les fournisseurs à la livraison chez les clients <del></del>
                                </li>
                            </ul> */}
                        </div>
                        <div className="resume-item">
                            <h4>Développeur fullstack React Js &amp; Node Js</h4>
                            <h5>De Mai 2022 - Janvier 2023</h5>
                            <p><em>ItWebson, Abidjan, Côte d'Ivoire </em></p>
                            <ul>
                                <li>
                                    Principalement développeur front-end dans un projet de conception d'une ERP utilisée par une entreprise pour
                                    gérer ses différentes sucursales dans tout le pays.
                                    Gestion de stock et facturation, système multi-boutiques:
                                    de la commande des produits chez les fournisseurs à la livraison chez les clients <del></del>
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Développeur fullstack Laravel &amp; ReactJs</h4>
                            <h5>De février 2022 - Avril 2022</h5>
                            <p><em>MEP Engineering, Abidjan, Côte d'Ivoire </em></p>
                            <ul>
                                <li>Développement d'une application de gestion de stock avec les Framework Laravel et Livewire,</li>
                                <li>Participation au développement d'un site web en fullstack NextJs + Laravel (réalisation complète du back-office)</li>
                            </ul>
                        </div>


                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                        {/* <h3 className="resume-title">Experience Professionel</h3> */}
                        <div className="resume-item">
                            <h4>Développeur fullstack Laravel &amp; ReactJs</h4>
                            <h5>De Novembre 2021 - Janvier 2022</h5>
                            <p><em>Parazit music, Douala, Cameroun </em></p>
                            <ul>
                                <li>Participation au développement d'un site de vente de beats
                                    musicaux avec Laravel et le framework front-end Nextjs, plus précisement de,
                                    (Gestion des utilisteurs et roles, Marketplace, Panier, Gestion des
                                    beats et playlists, Système de Following et Favori, Back-Office
                                    complet, ...)
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Développeur web Laravel stagiaire</h4>
                            <h5>De Juin 2021 - Septembre 2021</h5>
                            <p><em>Lyss consulting, Douala, Cameroun </em></p>
                            <ul>
                                <li>J'ai participé à la conception et l’implementation d’une application web de marketing SMS avec le framework Laravel,
                                    plus précisement du module utilisateur, rôles, permissions (ACL) et aussi de l'envoi manuel de SMS
                                </li>
                                <li>Conception et réalisation d'un site d'annonce d'emploi avec le framework PHP Laravel  </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Développeur web (Stage académique)</h4>
                            <h5>De juillet 2019 - septembre 2019</h5>
                            <p><em>UPTIMA CM, Douala, Cameroun</em></p>
                            <ul>
                                <li>Apprentissage des technologies web (Développement frontend en HTML, CSS et JS)</li>
                                <li>Analyse des besoins utilisateurs et création d’un cahier des charges technique</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Resume;