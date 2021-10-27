import xavier from './xavier.jpg';
import julio from './julio.jpg';
const Testimonial = () => {
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Témoignages</h2>
                    {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                        in iste officiis commodi quidem hic quas.</p> */}
                </div>
                <div className="row justify-content-center">

                    <div className="col-md-6">
                        <div className="testimonial-item" data-aos="fade-up">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                J'ai eu la chance de travailler avec Loïc surtout pour sa discipline et aussi sa capacité à trouver une solution
                                aux difficultés qu'on a pu rencontré dans le code mais je crois que c'est quelqu'un qui peut encore donner plus, quelqu'un
                                qui peut s'adapter a beaucoup de situations et d'environnement de travail et je le recommande vraiment.
                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                            </p>
                            <img src={xavier} className="testimonial-img" alt="Bette Xavier" />
                            <h3>M. BETTE Xavier</h3>
                            <h4 className="mb-sm-3">Gérant Lyss Consulting</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="testimonial-item" data-aos="fade-up">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                Loic est un bon développeur assez intelligent j'ai eu a travailler avec lui sur un projet ou il était le chef 
                                son esprit leadership est assez développé car il n'hésitait pas à nous aider pour que l'on avance rapidement
                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                            </p>
                            <img src={julio} className="testimonial-img" alt="Nguepempoue Julio" />
                            <h3>M. NGUEPEMPOUE Julio</h3>
                            <h4>Développeur web a Lyss consulting</h4>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Testimonial;