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
                            <h4>Bachelor of Technology (BTECH) En Génie Logiciel</h4>
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
                            <h4>Développeur web Laravel stagiaire</h4>
                            <h5>De Juin 2021 - Septembre 2021</h5>
                            <p><em>Lyss consulting, Douala, Cameroun </em></p>
                            <ul>
                                <li>J'ai participé à la conception et l’implementation d’une application web de marketing SMS avec le framework Laravel,
                                    plus précisement du module utilisateur, rôles, permissions (ACL) et aussi de l'envoi manuel de SMS
                                </li>
                                <li>Conception et réalisation d'un site d'annonce d'emploi avec le framework PHP Laravel  </li>
                                {/* <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the
                        design</li>
                      <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> */}
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Développeur web (Stage académique)</h4>
                            <h5>De juillet 2019 - septembre 2019</h5>
                            <p><em>UPTIMA CM, Douala, Cameroun</em></p>
                            <ul>
                                <li>Recommander les clients sur la conception graphique la plus appropriée</li>
                                <li>Création des sites web avec le CMS wordpress</li>
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