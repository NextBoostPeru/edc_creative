import Logo from "../../assets/logo.png"
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import BehanceIcon from "../../assets/icons/behance.svg"
import EmailIcon from "../../assets/icons/email.svg"
import PhoneIcon from "../../assets/icons/phone.svg"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__content-primary">
                    <div className="footer__primary container">
                        <a href="#">
                            <img
                                className="footer__logo"
                                src={Logo}
                                alt="Logo EDC Creative"
                                loading="lazy"
                            />
                        </a>
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
                        <div className="footer__contact">
                            <div className="footer__email">
                                <img
                                    className="footer__email-icon"
                                    src={EmailIcon}
                                    alt="Icon email"
                                />
                                <a
                                    className="footer__email-name"
                                    href="mailto:info@edccreative.com"
                                    title="Abrir correo"
                                >
                                    info@edccreative.com
                                </a>
                            </div>
                            <div className="footer__phone">
                                <img
                                    className="footer__phone-icon"
                                    src={PhoneIcon}
                                    alt="Icon phone"
                                />
                                <a
                                    className="footer__phone-name"
                                    href="tel:+51963852741"
                                    title="Llamar al número"
                                >
                                    +51 963852741
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__content-developed">
                    <p className="footer__developed container">
                        Desarrollado por <strong>Next Boost Perú</strong>
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer