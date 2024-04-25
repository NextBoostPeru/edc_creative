import AdobeIcon from '../../assets/icons/adobe.png'
import BarIcon from '../../assets/icons/bar-chart.svg'
import CertificateIcon from '../../assets/icons/certificate.svg'
import DesktopIcon from '../../assets/icons/desktop.svg'


const Hero = () => {
    return (
        <>
            <section className="section section-one" id='hero'>
                <section className="hero">
                    <section className="hero__content container">
                        <div className="hero__texts">
                            <h1 className="title hero__title">
                                <span className="title-white">CONVIÉRTETE EN UN DISEÑADOR DE </span><br />
                                <span className="title-yellow">PRIMER NIVEL</span>
                            </h1>
                            <p className="hero__paragraph">
                                Conoce y aprende todos mis métodos y técnicas para crear flyers
                                avanzados en <span className="bold">Photoshop</span> y animaciones en{" "}
                                <span className="bold">After Effects</span> para fiestas.
                            </p>
                        </div>
                        <div className="hero__buttons">
                            <a className="btn btn__primary btn__primary--hero" href="#payment">
                                Incríbete aquí
                            </a>
                            <a className="btn btn__secondary btn__secondary--hero" href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={23}
                                    height={23}
                                    viewBox="0 0 23 23"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M11.209 21.264a9.637 9.637 0 1 1 0-19.274 9.637 9.637 0 0 1 0 19.274Zm0 1.376a11.013 11.013 0 1 0 0-22.026 11.013 11.013 0 0 0 0 22.026Z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M8.828 7.573a.688.688 0 0 1 .716.053l4.817 3.44a.687.687 0 0 1 0 1.121L9.544 15.63a.688.688 0 0 1-1.089-.56V8.185a.688.688 0 0 1 .373-.613Z"
                                    />
                                </svg>
                                Ver Demo
                            </a>
                        </div>
                        <figure className="hero__figure">
                            <img
                                src={AdobeIcon}
                                alt="Icon photoshop and after effects"
                            />
                        </figure>
                    </section>
                    <footer className="hero__footer">
                        <div className="hero__footer-container container">
                            <div className="hero__info">
                                <img src={CertificateIcon} alt="Icon certificate" />
                                <div className="hero__info-title">
                                    <span className="small">Certificado</span>
                                    <span>Digital</span>
                                </div>
                            </div>
                            <div className="hero__info">
                                <img src={DesktopIcon} alt="Icon desktop" />
                                <div className="hero__info-title">
                                    <span className="small">Aula</span>
                                    <span>Virtual</span>
                                </div>
                            </div>
                            <div className="hero__info">
                                <img src={BarIcon} alt="Icon bar chart" />
                                <div className="hero__info-title">
                                    <span className="small">Equilibrado</span>
                                    <span>por Niveles</span>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </section>
        </>
    )
}

export default Hero