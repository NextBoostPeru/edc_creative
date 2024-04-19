import CheckIcon from '../../assets/icons/check.svg'
import ResourcesIcon from '../../assets/icons/resources.svg'
import StrategiesIcon from '../../assets/icons/strategies.svg'
/* import CertificateIcon from '../../assets/icons/certificate-card.svg'
 */
const BenefitFive = () => {
    return (
        <>
            <section className="section section-seven">
                <section className="creativity container">
                    <h4 className="title title-creativity">
                        <span className="title-white title-white-creativity">DESPIERTA TU CREATIVIDAD</span>
                        <span className="title-yellow">ESTE 2024 ES TUYO</span>
                    </h4>
                    <div className="slider">
                        <article className="slider__card">
                            <span className="slider__title">Recursos</span>
                            <ul className="slider__list">
                                <li className="slider__item">
                                    <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                    Proyectos y recursos de cada clase.</li>
                                <li className="slider__item">
                                    <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                    Recursos Premium.</li>
                                <li className="slider__item">
                                    <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                    Paquete de recursos adicional para alumnos.</li>
                            </ul>
                            <div className="slider__icon">
                                <img src={ResourcesIcon} alt="Icon resources" loading="lazy" />
                            </div>
                        </article>
                        <article className="slider__card">
                            <span className="slider__title">Estrategias</span>
                            <ul className="slider__list">
                                <li className="slider__item">
                                    <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                    Tips para comenzar un trabajo.</li>
                                <li className="slider__item">
                                    <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                    Secretos para realizar contenido de inicio a fin.</li>
                                <li className="slider__item">
                                    <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                    Búsqueda de referencias para flyers.</li>
                            </ul>
                            <div className="slider__icon">
                                <img src={StrategiesIcon} alt="Icon strategies" loading="lazy" />
                            </div>
                        </article>
                        {/* <article className="slider__card">
                  <span className="slider__title">Beneficios</span>
                  <ul className="slider__list">
                    <li className="slider__item">
                      <img src={CheckIcon} alt="Icon check" loading="lazy" />
                      Gestión de precios y excel.</li>
                    <li className="slider__item">
                      <img src={CheckIcon} alt="Icon check" loading="lazy" />
                      Comandos y scripts secretos de after effects.</li>
                    <li className="slider__item">
                      <img src={CheckIcon} alt="Icon check" loading="lazy" />
                      Certificación Digital.</li>
                  </ul>
                  <div className="slider__icon">
                    <img src={CertificateIcon} alt="Icon certificate" loading="lazy" />
                  </div>
                </article>  */}
                    </div>
                </section>
            </section>
        </>
    )
}

export default BenefitFive