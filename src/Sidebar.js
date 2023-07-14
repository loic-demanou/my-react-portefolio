import { ExternalLink } from 'react-external-link';
import { HashLink as Link, NavHashLink } from 'react-router-hash-link';
import profil2 from './Ressources/images/profil2.jpg'
const Sidebar = () => {
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={profil2} alt="Profile" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><Link to="#">Demanou Loïc</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <ExternalLink href="https://linkedin.com/in/loic-demanou-dev" className="linkedin"><i className="bx bxl-linkedin" /></ExternalLink>
                            <ExternalLink href="https://github.com/loic-demanou" className="twitter"><i className="bx bxl-github" /></ExternalLink>
                            <ExternalLink href="https://web.facebook.com/loic.demanou.7/" className="facebook"><i className="bx bxl-facebook" /></ExternalLink>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><NavHashLink to="#hero" className="nav-link scrollto"><i className="bx bx-home" /> <span>Accueil</span></NavHashLink></li>
                            {/* <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>A propos</span></a></li> */}
                            <li><NavHashLink to="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>A propos</span></NavHashLink></li>
                            <li><NavHashLink to="#skills" className="nav-link scrollto"><i className="bx bx-cloud-lightning" /> <span>Compétences</span></NavHashLink></li>
                            <li><NavHashLink to="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Expérience</span></NavHashLink></li>
                            <li><NavHashLink to="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" />
                                <span>Réalisations</span></NavHashLink></li>
                            <li><NavHashLink to="#testimonials" className="nav-link scrollto"><i class='bx bx-user-voice' ></i> <span>Témoignages</span></NavHashLink></li>
                            <li><NavHashLink to="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></NavHashLink></li>
                        </ul>
                    </nav>{/* .nav-menu */}
                </div>
            </header>{/* End Header */}
        </>
    );
}

export default Sidebar;