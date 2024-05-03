import { useEffect } from 'react';
import DesktopIcon from "../../assets/icons/desktop.svg";
import CardIcon from "../../assets/icons/card.svg";
import SegureIcon from "../../assets/icons/segure.svg";
import Logo from "../../assets/logo.png";

const Payment = () => {
    // Función para cargar el script de Mercado Pago
    const loadMPScript = () => {
        if (!window.$MPC_loaded) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = `${document.location.protocol}//secure.mlstatic.com/mptools/render.js`;
            document.getElementsByTagName('head')[0].appendChild(script);
            window.$MPC_loaded = true;
        }
    };

    // Función para manejar mensajes relacionados con Mercado Pago
    const handleMPCMessage = (event) => {
        console.log(`Received message: ${event.data}`);
        // Aquí puedes agregar tu función de callback para manejar eventos de mensaje.
    };

    // useEffect para cargar el script de Mercado Pago y establecer el manejador de eventos
    useEffect(() => {
        // Carga el script de Mercado Pago
        loadMPScript();

        // Agrega el manejador de eventos de mensaje
        window.addEventListener('message', handleMPCMessage);

        // Función de limpieza para quitar el manejador de eventos
        return () => {
            window.removeEventListener('message', handleMPCMessage);
        };
    }, []);

    return (
        <>
            <section className="section section-nine" id="payment">
                <section className="pricing container">
                    <div className="pricing__content">
                        <h4 className="title title-pricing fade-in-left">
                            <span className="title-white title-white-pricing">¿CÓMO ADQUIRIR</span>
                            <span className="title-yellow">EL CURSO?</span>
                        </h4>
                        <p className="pricing__paragraph fade-in-left">
                            Elija su forma de pago: un solo pago o pago mensual. Puede pagar con su cuenta de Mercado
                            Pago o seleccionar la opción sin cuenta e ingresar sus datos de pago. Confirme el pago y
                            recibirá una notificación de confirmación.
                        </p>
                        <div className="pricing__info fade-in-bottom">
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
                    <article className="pricing__card fade-in-right">
                        <img
                            className="pricing__card-logo"
                            src={Logo}
                            alt="Logo EDC Creative"
                            loading="lazy"
                        />
                        <div className="pricing__card-now">
                            <span className="pricing__card-now-title">Ahora</span>
                            <span className="pricing__card-now-price">S/450.00</span>
                            <span className="pricing__card-now-coin">PEN</span>
                        </div>
                        <span className="pricing__card-info">Elige cómo pagar</span>
                        <a className="btn btn__primary btn__primary--pricing" name="MP-payButton" href="https://www.mercadopago.com.pe/subscriptions/checkout?preapproval_plan_id=2c9380848ef38745018f06a987c70b24">Pago anual</a>
                        <a className="btn btn__secondary btn__secondary--pricing" name="MP-payButton" href="https://www.mercadopago.com.pe/subscriptions/checkout?preapproval_plan_id=2c9380848ef38745018f06ac21a70b27">Pago mensual</a>
                        <span className="pricing__card-info">Paga con Mercado pago</span>
                        <span className="pricing__card-info pricing__card-info--help">
                            ¿Necesitas ayuda? <a href="#">Click aquí</a>
                        </span>
                    </article>
                </section>
            </section>
        </>
    )
};

export default Payment;
