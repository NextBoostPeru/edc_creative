import EmailIcon from "../../assets/icons/email.svg"
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import BehanceIcon from "../../assets/icons/behance.svg"

const Navbar = () => {
    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <div className="nav__email">
                        <img
                            className="nav__email-icon"
                            src={EmailIcon}
                            alt="Icon email"
                        />
                        <a className="nav__email-name" href="mailto:info@edccreative.com" title="Escribir un Correo">
                            info@edccreative.com
                        </a>
                    </div>
                    <ul className="nav__socials-media">
                        <li className="nav__socials-media-item">
                            <a className="nav__socials-media-link" href="#" title="Ir a Facebook">
                                <img
                                    className="nav__socials-media-icon"
                                    src={FacebookIcon}
                                    alt="Icon facebook"
                                />
                            </a>
                        </li>
                        <li className="nav__socials-media-item">
                            <a className="nav__socials-media-link" href="#" title="Ir a Instagram">
                                <img
                                    className="nav__socials-media-icon"
                                    src={InstagramIcon}
                                    alt="Icon instagram"
                                />
                            </a>
                        </li>
                        <li className="nav__socials-media-item">
                            <a className="nav__socials-media-link" href="#" title="Ir a Instagram">
                                <img
                                    className="nav__socials-media-icon"
                                    src={BehanceIcon}
                                    alt="Icon behance"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar