import EmailIcon from "../../assets/icons/email.svg"
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import BehanceIcon from "../../assets/icons/behance.svg"
import Logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <section className="section__header">
                <div className="submenu">
                    <div className="nav-primary container">
                        <div className="nav-primary__email">
                            <img
                                className="nav-primary__email-icon"
                                src={EmailIcon}
                                alt="Icon email"
                            />
                            <a
                                className="nav-primary__email-name"
                                href="mailto:info@edccreative.com"
                                title="Abrir correo"
                            >
                                info@edccreative.com
                            </a>
                        </div>
                        <ul className="socials-media">
                            <li className="socials-media-item">
                                <a className="socials-media-link" href="#" title="Ir a Facebook">
                                    <img
                                        className="socials-media-icon"
                                        src={FacebookIcon}
                                        alt="Icon facebook"
                                    />
                                </a>
                            </li>
                            <li className="socials-media-item">
                                <a className="socials-media-link" href="#" title="Ir a Instagram">
                                    <img
                                        className="socials-media-icon"
                                        src={InstagramIcon}
                                        alt="Icon instagram"
                                    />
                                </a>
                            </li>
                            <li className="socials-media-item">
                                <a className="socials-media-link" href="#" title="Ir a Behance">
                                    <img
                                        className="socials-media-icon"
                                        src={BehanceIcon}
                                        alt="Icon behance"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <header className="header">
                    <nav className="nav">
                        <div className="navbar">
                            <div className="navbar__container container">
                                <a className="navbar__logo" href="#">
                                    <img src={Logo} alt="Logo EDC Creative" />
                                </a>
                                <div className="navbar__buttons">
                                    <a className="btn btn__secondary btn__secondary--navbar" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M16.625 9.059a4.505 4.505 0 1 1-9.01 0 4.505 4.505 0 0 1 9.01 0Z"
                                            />
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M.106 12.062a12.014 12.014 0 1 1 24.028 0 12.014 12.014 0 0 1-24.028 0ZM12.12 1.55a10.513 10.513 0 0 0-8.212 17.075c1.067-1.718 3.414-3.559 8.212-3.559s7.144 1.84 8.212 3.56A10.513 10.513 0 0 0 12.12 1.55Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Iniciar Sesión
                                    </a>
                                    <a className="btn btn__primary btn__primary--navbar" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M.363.849a.8.8 0 0 1 .801-.801h2.403a.801.801 0 0 1 .777.607l.649 2.597h18.599a.801.801 0 0 1 .786.948l-2.403 12.815a.8.8 0 0 1-.786.654H6.77a.8.8 0 0 1-.786-.654L3.583 4.226l-.64-2.575H1.163a.801.801 0 0 1-.8-.801Zm4.97 4.005 2.103 11.213h13.088l2.103-11.213H5.333Zm3.04 12.815a3.204 3.204 0 1 0 0 6.408 3.204 3.204 0 0 0 0-6.408Zm11.214 0a3.204 3.204 0 1 0 0 6.407 3.204 3.204 0 0 0 0-6.407ZM8.373 19.271a1.602 1.602 0 1 1 0 3.204 1.602 1.602 0 0 1 0-3.204Zm11.214 0a1.602 1.602 0 1 1 0 3.204 1.602 1.602 0 0 1 0-3.204Z"
                                            />
                                        </svg>
                                        Adquirir Curso
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </section>
        </>
    )
}

export default Navbar