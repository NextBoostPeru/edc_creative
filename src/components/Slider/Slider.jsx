import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';


import CheckIcon from "../../assets/icons/check.svg"
import SrcIcon from "../../assets/icons/resources.svg"
import StrategiesIcon from "../../assets/icons/strategies.svg"
import AwardIcon from "../../assets/icons/award.svg"

const Slider = () => {
    return (
        <>
            <section className="section section-seven">
                <section className="creativity container">
                    <h4 className="title title-creativity">
                        <span className="title-white title-white-creativity">
                            DESPIERTA TU CREATIVIDAD
                        </span>
                        <span className="title-yellow">ESTE 2024 ES TUYO</span>
                    </h4>
                    <div className="slider">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <article className="slider__card">
                                    <span className="slider__title">Recursos</span>
                                    <ul className="slider__list">
                                        <li className="slider__item">
                                            <img
                                                src={CheckIcon}
                                                alt="Icon check"
                                                loading="lazy"
                                            />
                                            Proyectos y recursos de cada clase.
                                        </li>
                                        <li className="slider__item">
                                            <img
                                                src={CheckIcon}
                                                alt="Icon check"
                                                loading="lazy"
                                            />
                                            Recursos Premium.
                                        </li>
                                        <li className="slider__item">
                                            <img
                                                src={CheckIcon}
                                                alt="Icon check"
                                                loading="lazy"
                                            />
                                            Paquete de recursos adicional para alumnos.
                                        </li>
                                    </ul>
                                    <div className="slider__icon">
                                        <img
                                            src={SrcIcon}
                                            alt="Icon resources"
                                            loading="lazy"
                                        />
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="slider__card">
                                    <span className="slider__title">Estrategias</span>
                                    <ul className="slider__list">
                                        <li className="slider__item">
                                            <img
                                                src={CheckIcon}
                                                alt="Icon check"
                                                loading="lazy"
                                            />
                                            Tips para comenzar un trabajo.
                                        </li>
                                        <li className="slider__item">
                                            <img
                                                src={CheckIcon}
                                                alt="Icon check"
                                                loading="lazy"
                                            />
                                            Secretos para realizar contenido de inicio a fin.
                                        </li>
                                        <li className="slider__item">
                                            <img
                                                src={CheckIcon}
                                                alt="Icon check"
                                                loading="lazy"
                                            />
                                            Búsqueda de referencias para flyers.
                                        </li>
                                    </ul>
                                    <div className="slider__icon">
                                        <img
                                            src={StrategiesIcon}
                                            alt="Icon strategies"
                                            loading="lazy"
                                        />
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="slider__card">
                                    <span className="slider__title">Beneficios</span>
                                    <ul className="slider__list">
                                        <li className="slider__item">
                                            <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                            Gestión de precios y excel.
                                        </li>
                                        <li className="slider__item">
                                            <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                            Comandos y scripts secretos de after effects.
                                        </li>
                                        <li className="slider__item">
                                            <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                            Certificación Digital.
                                        </li>
                                    </ul>
                                    <div className="slider__icon">
                                        <img
                                            src={AwardIcon}
                                            alt="Icon certificate"
                                            loading="lazy"
                                        />
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="slider__card">
                                    <span className="slider__title">Domina After Effects</span>
                                    <ul className="slider__list">
                                        <li className="slider__item">
                                            <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                            Exportación y compresor de video con After Effects y Adobe Premiere
                                        </li>
                                        <li className="slider__item">
                                            <img src={CheckIcon} alt="Icon check" loading="lazy" />
                                            Niveles: Básico, Intermedio, Profesional y Master
                                        </li>
                                    </ul>
                                    <div className="slider__icon">
                                        <img
                                            src={AwardIcon}
                                            alt="Icon certificate"
                                            loading="lazy"
                                        />
                                    </div>
                                </article>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </section>

        </>
    )
}

export default Slider