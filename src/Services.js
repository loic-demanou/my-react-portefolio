import './service.css'
const Services = () => {
    return (
        <>
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    {/* <p>Mes services sont beaucoup plus basés sur le développement web e</p> */}
                </div>

                <div className="row">
                <div className="col-lg-6">
                        <div className="card bg-dark text-white">
                            <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" height="382px" className="card-img" alt="services" />
                            <div className="card-img-overlay" style={{ marginTop:"35%" }}>
                                <h3 className="card-title fw-bold">Développement web</h3>
                                <h6 className="card-text">Réaliser des sites web ou des applications web est l'une de mes plus grandes
                                passions quotidiennes.</h6>
                                {/* <p className="card-text">Last updated 3 mins ago</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card bg-dark text-white">
                            <img src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=965&q=80" height="382px" className="card-img" alt="services" />
                            <div className="card-img-overlay">
                                <h3 className="card-title fw-bold">Désign UI/UX</h3>
                                <h6 className="card-text">Je suis également disponible pour la réalisation des maquettes de vos sites web,
                                 applications en version Web et/ou mobile.</h6>
                                {/* <p className="card-text">Last updated 3 mins ago</p> */}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="row">
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                        <div className="icon"><i className="bi bi-briefcase" /></div>
                        <h4 className="title"><a href>Lorem Ipsum</a></h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                        <div className="icon"><i className="bi bi-card-checklist" /></div>
                        <h4 className="title"><a href>Dolor Sitema</a></h4>
                        <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat tarad limino ata</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                        <div className="icon"><i className="bi bi-bar-chart" /></div>
                        <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                        <div className="icon"><i className="bi bi-binoculars" /></div>
                        <h4 className="title"><a href>Magni Dolores</a></h4>
                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                        <div className="icon"><i className="bi bi-brightness-high" /></div>
                        <h4 className="title"><a href>Nemo Enim</a></h4>
                        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque</p>
                    </div>
                    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                        <div className="icon"><i className="bi bi-calendar4-week" /></div>
                        <h4 className="title"><a href>Eiusmod Tempor</a></h4>
                        <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                            soluta nobis est eligendi</p>
                    </div>
                </div>
 */}

            </div>


        </>
    );
}

export default Services;