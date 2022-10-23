const Resume = () => {
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Resumé</h2>
                    {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                        in iste officiis commodi quidem hic quas.</p> */}
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Licence Technologique En Génie Logiciel</h4> 
                            <h5>2020 - 2021</h5>
                            <p><em>Institut Universitaire de la Côte, Douala, Cameroun</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Brevet de Technicien Supérieur (BTS) En Génie Logiciel</h4>
                            <h5>2019 - 2020</h5>
                            <p><em>Institut Universitaire de la Côte, Douala, Cameroun</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Baccalauréat D </h4>
                            <h5>2017 - 2018</h5>
                            <p><em>Lycée classique, Dschang, Cameroun</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                        <h3 className="resume-title">Experience Professionel</h3>
                        <div className="resume-item">
                            <h4>Développeur fullstack React Js &amp; Node Js</h4>
                            <h5>De Mai 2022 - Octobre 2022</h5>
                            <p><em>ItWebson, Abidjan, Côte d'Ivoire </em></p>
                            <ul>
                                <li>J'ai participation au développement d'une application de gestion de stock et facturation, système multi-boutique: 
                                    de la commande des produits chez les fournisseurs à la livraison chez les clients <del></del>
                                </li>
                                {/* <li>Conception et réalisation d'un site d'annonce d'emploi avec le framework PHP Laravel  </li> */}
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Développeur freelance</h4>
                            <h5>De février 2022 - Avril 2022</h5>
                            <ul>
                                <li>Développement d'une application de gestion de stock avec les Framework Laravel et Livewire,</li>
                                <li>Participation au développement d'un site web en fullstack NextJs + Laravel (réalisation complète du back-office)</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Développeur fullstack Laravel &amp; Nextjs</h4>
                            <h5>De Novembre 2021 - Janvier 2022</h5>
                            <p><em>Parazit music, Douala, Cameroun </em></p>
                            <ul>
                                <li>J'ai participation au développement d'un site de vente de beats
                                            musicaux avec Laravel et le framework front-end Nextjs, plus précisement de,  
                                            (Gestion des utilisteurs et roles, Marketplace, Panier, Gestion des
                                        beats et playlists, Système de Following et Favori, Back-Office
                                        complet, ...)
                                </li>
                                {/* <li>Conception et réalisation d'un site d'annonce d'emploi avec le framework PHP Laravel  </li> */}
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
                                <li>Développement frontend en HTML, CSS et JS</li>
                                <li>Analyse des besoins utilisateurs et création d’un cahier des
                                charges technique</li>
                                {/* <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                      <li>Created 4+ design presentations and proposals a month for clients and account managers</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Resume;