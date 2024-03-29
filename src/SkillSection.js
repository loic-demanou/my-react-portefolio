const SkillSection = () => {
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Competences</h2>
                    <p>Mes compétences sont principalement reparties en développement web, UI/UX design et Analyse logicielle.</p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        <center className="">👉Développement web</center>
                        <div className="progress">
                            <span className="skill">HTML/CSS/Bootstrap/Tailwind css <i className="val">85%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">React JS &amp; Next JS <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Laravel <i className="val">85%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">TypeScript <i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">NodeJs, Express, MongoDB <i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript/jQuery <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">REST API <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                        <center className="">👉Autres Compétences</center>
                        <div className="progress">
                            <span className="skill">UI/UX design <i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
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
                        <div className="progress">
                            <span className="skill">Git &amp; Github <i className="val">80%</i></span>
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