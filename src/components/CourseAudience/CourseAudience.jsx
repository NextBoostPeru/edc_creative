import CircleCheckIcon from "../../assets/icons/circle-check.svg"
const CourseAudience = () => {
    return (
        <>
            <section className="section section-eight">
                <section className="managed container">
                    <div className="managed__content">
                        <h4 className="title title-managed">
                            <span className="title-white title-white-managed">¿A QUIÉN VA</span>
                            <span className="title-yellow">DIRIGIDO ESTE</span>
                            <span className="title-yellow">CURSO?</span>
                        </h4>
                        <p className="managed__paragraph">
                            El curso EDC está dirigido para diseñadores que deseen llevar sus
                            diseños a nuevas alturas para crear trabajos exclusivos y de alta
                            calidad. A través de este curso, aprenderás a dominar las técnicas
                            necesarias para destacar en el mercado de Flyers y Motion, tanto para
                            artistas, eventos como para redes sociales.
                        </p>
                        <div className="managed__cards">
                            <div className="managed__card">
                                <img
                                    src={CircleCheckIcon}
                                    alt="Icon circle check"
                                    loading="lazy"
                                />
                                <p>Para Diseñadores que quieren dominar el mercado de Flyers.</p>
                            </div>
                            <div className="managed__card">
                                <img
                                    src={CircleCheckIcon}
                                    alt="Icon circle check"
                                    loading="lazy"
                                />
                                <p>Para Diseñadores que quieran mejorar su nivel de creación.</p>
                            </div>
                            <div className="managed__card">
                                <img
                                    src={CircleCheckIcon}
                                    alt="Icon circle check"
                                    loading="lazy"
                                />
                                <p>Para Diseñadores que quieran llegar a clientes que pagan más.</p>
                            </div>
                            <div className="managed__card">
                                <img
                                    src={CircleCheckIcon}
                                    alt="Icon circle check"
                                    loading="lazy"
                                />
                                <p>Para Diseñadores que buscan nuevas fuentes de ingresos.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </>
    )
}

export default CourseAudience