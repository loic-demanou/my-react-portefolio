import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
const Contact = () => {

    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                        <p>Vous pouvez me joindre via ces reférences.
                    </p>
                </div>
                <div className="row" data-aos="fade-in">
                    <div className="">
                        <div className="info d-flex flex-wrap align-items-center justify-content-evenly flex-row gap-3">
                            <div className="email">
                                <a href="mailto:loicdemanou.9@gmail.com">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>loicdemanou.9@gmail.com</p>
                                </a>
                            </div>
                            <div className="phone">
                                <a href="tel:+2250701826764">
                                    <i className="bi bi-phone" />
                                    <h4>Téléphone:</h4>
                                    <p>+225 07 01 82 67 64</p>
                                </a>
                            </div>
                            <div className="social d-flex flex-column align-items-center justify-content-center gap-2">
                                
                                    <h4>Réseaux sociaux</h4>
                                    <div>
                                        <p className="d-flex flex-row gap-3">
                                            <a href="https://linkedin.com/in/loic-demanou-dev" target="_blank" rel='noreferrer'>
                                                <BsLinkedin size={30} />
                                            </a>
                                            <a href="https://github.com/loic-demanou" target="_blank" rel='noreferrer'>
                                                <BsGithub size={30} />
                                            </a>
                                            <a href="https://web.facebook.com/loic.demanou.7/" target="_blank" rel='noreferrer'>
                                                <BsFacebook size={30} />
                                            </a>
                                        </p>
                                    </div>
                                    {/* <p>+225 07 01 82 67 64</p> */}
                            </div>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen /> */}
                        </div>
                    </div>
                    {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form onSubmit={sendEmail} className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Votre nom</label>
                                    <input type="text" name="name" className="form-control" id="name" required />
                                    {name && <span className="form-text text-danger">{name}</span>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Votre email</label>
                                    <input type="email" className="form-control" name="email" id="email" required/>
                                    {email && <span className="form-text text-danger">{email}</span>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Objet</label>
                                <input type="text" className="form-control" name="subject" id="subject" required/>
                                {subject && <span className="form-text text-danger">{subject}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows={10} defaultValue={""} required />
                                {message && <span className="form-text text-danger">{message}</span>}
                            </div>
                            <div className="my-3">
                                {isloading && <div className="loading">Patientez</div>}
                                <div className="error-message" />
                                {sent && <div className="sent-message">Votre message a bien été envoyé. merci!</div>}
                            </div>
                            <div className="text-center"><button type="submit">Envoyer le message</button></div>
                        </form>
                    </div> */}
                </div>
            </div>


        </>
    );
}

export default Contact;