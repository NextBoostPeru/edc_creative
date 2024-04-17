import Logo from '../../assets/logo.png'
import LoginIcon from '../../assets/icons/icon-user.svg'
import CartIcon from '../../assets/icons/add-to-cart.svg'
import PlayIcon from '../../assets/icons/play.svg'
import AdobeIcon from '../../assets/icons/adobe.png'
import BarIcon from '../../assets/icons/bar-chart.svg'
import CertificateIcon from '../../assets/icons/certificate.svg'
import DesktopIcon from '../../assets/icons/desktop.svg'


const Hero = () => {
    return (
        <>
            <section className="section section-one">
                <section className="hero">
                    <nav className="navbar">
                        <div className="navbar__container container">
                            <a className="navbar__logo" href="#">
                                <img src={Logo} alt="Logo EDC Creative" />
                            </a>
                            <div className="navbar__buttons">
                                <a className="btn btn__secondary btn__secondary--navbar" href="#">
                                    <img
                                        className="icon"
                                        src={LoginIcon}
                                        alt="Icon user"
                                    />
                                    Iniciar Sesión
                                </a>
                                <a className="btn btn__primary btn__primary--navbar" href="#">
                                    <img
                                        className="icon"
                                        src={CartIcon}
                                        alt="Icon add to cart"
                                    />
                                    Adquirir Curso
                                </a>
                            </div>
                        </div>
                    </nav>
                    <section className="hero__content container">
                        <div className="hero__texts">
                            <h1 className="title hero__title">
                                <span className="title-white">CONVIÉRTETE EN UN DISEÑADOR DE </span>
                                <span className="title-yellow">PRIMER NIVEL</span>
                            </h1>
                            <p className="hero__paragraph">
                                Conoce y aprende todos mis métodos y técnicas para crear flyers
                                avanzados en <span className="bold">Photoshop</span> y animaciones en{" "}
                                <span className="bold">After Effects</span> para fiestas.
                            </p>
                        </div>
                        <div className="hero__buttons">
                            <a className="btn btn__primary btn__primary--hero" href="#">
                                Incríbete aquí
                            </a>
                            <a className="btn btn__secondary btn__secondary--hero" href="#">
                                <img className="icon" src={PlayIcon} alt="Icon play" />
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
                                <img src={BarIcon} alt="Icon certificate" />
                                <div className="hero__info-title">
                                    <span className="small">Certificado</span>
                                    <span>Digital</span>
                                </div>
                            </div>
                            <div className="hero__info">
                                <img src={CertificateIcon} alt="Icon desktop" />
                                <div className="hero__info-title">
                                    <span className="small">Aula</span>
                                    <span>Virtual</span>
                                </div>
                            </div>
                            <div className="hero__info">
                                <img src={DesktopIcon} alt="Icon bar chart" />
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