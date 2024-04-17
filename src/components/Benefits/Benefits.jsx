import ImageLaptop from '../../assets/images/laptop.webp'
import MouseIcon from '../../assets/icons/mouse-scroll.svg'

const Benefits = () => {
    return (
        <>
            <section className="section section-two">
                <section className="about container">
                    <div className="about-pro">
                        <figure className="about__figure">
                            <img
                                src={ImageLaptop}
                                alt="About the class"
                                loading="lazy"
                            />
                        </figure>
                        <ul className="about__list about__list--one">
                            <li className="about__item">Asesorías personalizadas</li>
                            <li className="about__item">
                                Optimización de programas para un mejor flujo de trabajo
                            </li>
                            <li className="about__item">Tips para comenzar un trabajo</li>
                        </ul>
                        <ul className="about__list about__list--two">
                            <li className="about__item">Todas las Clases grabadas</li>
                            <li className="about__item">Retoque digital para artistas y Djs</li>
                            <li className="about__item">
                                Búsqueda de recursos y material para contenido
                            </li>
                        </ul>
                    </div>
                    <h2 className="title">
                        <span className="title-white"> ¡ESO NO ES TODO! </span>
                        <br />
                        <span className="title-yellow"> TAMBIÉN APRENDERÁS</span>
                    </h2>
                    <a className="about__scroll" href="#">
                        <img
                            src={MouseIcon}
                            alt="Icon mouse"
                            loading="lazy"
                        />
                    </a>
                    <div className="about__container-lists">
                        <ul className="about__list about__list--one">
                            <li className="about__item">Asesorías personalizadas</li>
                            <li className="about__item">
                                Optimización de programas para un mejor flujo de trabajo
                            </li>
                            <li className="about__item">Tips para comenzar un trabajo</li>
                        </ul>
                        <ul className="about__list about__list--two">
                            <li className="about__item">Todas las Clases grabadas</li>
                            <li className="about__item">Retoque digital para artistas y Djs</li>
                            <li className="about__item">
                                Búsqueda de recursos y material para contenido
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Benefits