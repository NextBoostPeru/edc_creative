import ImageLaptop from '../../assets/images/laptop.webp'

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
                    <h3 className="title">
                        <span className="title-white">¡ESO NO ES TODO! </span>
                        <br />
                        <span className="title-yellow">TAMBIÉN APRENDERÁS</span>
                    </h3>
                    <a className="about__scroll" href="#paso-a-paso">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            className="home__scroll-mouse"
                            viewBox="0 0 247 390"
                        >
                            <path
                                className="animate-scroll"
                                d="M123.359 79.775v72.843"
                                style={{ stroke: "#ffdc00", strokeWidth: "20PX" }}
                            />
                            <path
                                fill="none"
                                stroke="#FFDC00"
                                strokeWidth={20}
                                d="M236.717 123.359C236.717 60.794 185.923 10 123.359 10 60.794 10 10 60.794 10 123.359v143.237c0 62.565 50.794 113.359 113.359 113.359 62.564 0 113.358-50.794 113.358-113.359V123.359Z"
                            />
                        </svg>
                        <span className="about__scroll-text">
                            Sigue hacia abajo
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-arrow-down-short"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                                />
                            </svg>
                        </span>
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