import DesktopIcon from "../../assets/icons/desktop.svg"
import CardIcon from "../../assets/icons/card.svg"
import SegureIcon from "../../assets/icons/segure.svg"
import Logo from "../../assets/logo.png"

const Payment = () => {
    return (
        <>
            <section className="section section-nine" id="payment">
                <section className="pricing container">
                    <div className="pricing__content">
                        <h4 className="title title-pricing">
                            <span className="title-white title-white-pricing">¿CÓMO ADQUIRIR</span>
                            <span className="title-yellow">EL CURSO?</span>
                        </h4>
                        <p className="pricing__paragraph">
                            Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.{" "}
                        </p>
                        <div className="pricing__info">
                            <div className="pricing__info-content">
                                <span className="pricing__info-icon">
                                    <img
                                        src={DesktopIcon}
                                        alt="Icon desktop"
                                        loading="lazy"
                                    />
                                </span>
                                <span className="pricing__info-text">Acceso inmediato</span>
                            </div>
                            <div className="pricing__info-content">
                                <span className="pricing__info-icon">
                                    <img src={CardIcon} alt="Icon card" loading="lazy" />
                                </span>
                                <span className="pricing__info-text">Pago seguro</span>
                            </div>
                            <div className="pricing__info-content">
                                <span className="pricing__info-icon">
                                    <img
                                        src={SegureIcon}
                                        alt="Icon segure"
                                        loading="lazy"
                                    />
                                </span>
                                <span className="pricing__info-text">Garantía incluida</span>
                            </div>
                        </div>
                    </div>
                    <article className="pricing__card">
                        <img
                            className="pricing__card-logo"
                            src={Logo}
                            alt="Logo EDC Creative"
                            loading="lazy"
                        />
                        <div className="pricing__card-before">
                            <span className="pricing__card-before-title">Antes</span>
                            <del className="pricing__card-before-price">S/450.00</del>
                        </div>
                        <div className="pricing__card-now">
                            <span className="pricing__card-now-title">Ahora</span>
                            <span className="pricing__card-now-price">S/350.00</span>
                            <span className="pricing__card-now-coin">PEN</span>
                        </div>
                        <span className="pricing__card-info">Membresía anual</span>
                        <a className="btn btn__primary btn__primary--pricing" href="#">
                            ¡COMPRAR AHORA!
                        </a>
                        <span className="pricing__card-info">Paga con Mercado pago</span>
                        <span className="pricing__card-info pricing__card-info--help">
                            ¿Necesitas ayuda? <a href="#">Click aquí</a>
                        </span>
                    </article>
                </section>
            </section>

        </>
    )
}

export default Payment