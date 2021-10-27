// import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import { HashLink as Link, NavHashLink } from 'react-router-hash-link';
// import { NavLink } from 'react-router-dom';
import profil from './profil.jpeg';
const Sidebar = () => {
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={profil} alt="Profile imagjjje" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><Link to="#">Demanou Loïc</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <ExternalLink href="https://www.linkedin.com/in/loic-demanou-683215204" className="linkedin"><i className="bx bxl-linkedin" /></ExternalLink>
                            <ExternalLink href="https://github.com/loic-demanou" className="twitter"><i className="bx bxl-github" /></ExternalLink>
                            {/* <ExternalLink href="live:.cid.cce7389a7fc5b513" className="google-plus"><i className="bx bxl-skype" /></ExternalLink> */}
                            <ExternalLink href="https://web.facebook.com/loic.demanou.7/" className="facebook"><i className="bx bxl-facebook" /></ExternalLink>
                            {/* <Link to="#" className="linkedin"><i className="bx bxl-linkedin" /></Link>
                            <Link to="#" className="twitter"><i class='bx bxl-github'></i></Link>
                            <Link to="#" className="google-plus"><i className="bx bxl-skype" /></Link>
                            <Link to="#" className="facebook"><i className="bx bxl-facebook" /></Link> */}
                            {/* <Link to="#" className="instagram"><i className="bx bxl-instagram" /></Link> */}
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><NavHashLink to="#hero" className="nav-link scrollto"><i className="bx bx-home" /> <span>Accueil</span></NavHashLink></li>
                            {/* <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>A propos</span></a></li> */}
                            <li><NavHashLink to="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>A propos</span></NavHashLink></li>
                            <li><NavHashLink to="#skills" className="nav-link scrollto"><i className="bx bx-cloud-lightning" /> <span>Compétences</span></NavHashLink></li>
                            <li><NavHashLink to="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resumé</span></NavHashLink></li>
                            <li><NavHashLink to="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" />
                                <span>Réalisations</span></NavHashLink></li>
                            <li><NavHashLink to="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Services</span></NavHashLink></li>
                            <li><NavHashLink to="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></NavHashLink></li>
                        </ul>
                    </nav>{/* .nav-menu */}
                </div>
            </header>{/* End Header */}
        </>
    );
}

export default Sidebar;