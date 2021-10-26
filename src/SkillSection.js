const SkillSection = () => {
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Competences</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                        in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        <center className="">👉Développement web</center>
                        <div className="progress">
                            <span className="skill">HTML/CSS/Bootstrap <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript/jQuery <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">React js <i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Vue js <i className="val">60%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">PHP-Laravel <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                        <center className="">👉Autres Compétences</center>
                        <div className="progress">
                            <span className="skill">WordPress/CMS <i className="val">60%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Git &amp; Github <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">UI/UX design <i className="val">65%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Analyse et gestion des Systèmes d’information avec UML &amp; Merise <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkillSection;