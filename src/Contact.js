import emailjs from 'emailjs-com';
import { useState } from 'react';
const Contact = () => {
    const [isloading, setIsloading] = useState(false);
    const [sent, setSent] = useState(false);
    // const [error, setError] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    
    const sendEmail = (e) => {
        e.preventDefault();

        let name = e.target.name.value;
        let email = e.target.email.value;
        let subject = e.target.subject.value;
        let message = e.target.message.value;

        if (name.length <=0) {
            setName("Le champ nom est obligatoire")
            // setError(true)
        } else if(email.length <=0) {
            setEmail("Le champ email est obligatoire")
            // setError(true)
        }else if (subject.length <=0) {
            setSubject("Le champ objet est obligatoire")
            // setError(true)
        }else if (message.length <=0) {
            setMessage("Le champ message est obligatoire")
            // setError(true)
        }else {

            setIsloading(true);
            emailjs.sendForm('service_km3dqto', 'template_jhv14fs', e.target, 'user_NY0zyzsEMehFFjxqQ7vki')
            .then(res => {
                setIsloading(false);
                setSent(true)
                console.log(res);
            })
            .catch(err => {
                setIsloading(false);
                console.log(err);
            })

        }

        // console.log(name.length);
        // console.log(email);
        // console.log(subject);
        // console.log(message);
            
            // setIsloading(true);
            // emailjs.sendForm('service_km3dqto', 'template_jhv14fs', e.target, 'user_NY0zyzsEMehFFjxqQ7vki')
            // .then(res => {
            //     setIsloading(false);
            //     setSent(true)
            //     console.log(res);
            // })
            // .catch(err => {
            //     setIsloading(false);
            //     console.log(err);
            // })

    }
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Vous pouvez me joindre via mon numéro de téléphone ou par l'envoi d'un email depuis le formulaire de contact
                        ci-dessous.
                    </p>
                </div>
                <div className="row" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Location:</h4>
                                <p>Douala, Cameroun</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email:</h4>
                                <p>loicdemanou.9@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Téléphone:</h4>
                                <p>+237 683 92 10 73</p>
                            </div>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen /> */}
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
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
                                {sent && <div className="sent-message">Your message a bien été envoyé. merci!</div>}
                            </div>
                            <div className="text-center"><button type="submit">Envoyer le message</button></div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Contact;