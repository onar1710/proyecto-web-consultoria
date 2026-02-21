
import Link from "next/link";
import bgImage from "../../../../public/imagenes/image-home/consultoria-8.jpg";

const GetInTouch = () => {
    const touchContent = {
        subtitle: 'Contáctanos',
        title: 'Consulta Gratuita',
        title2: 'Servimos a empresas de toda República Dominicana',
        des: 'LEEXMS SRL es tu aliado estratégico para el crecimiento empresarial. Ofrecemos soluciones contables integrales adaptadas a tus necesidades.',
    }
    return (
        <>
            <div className="getIn__touch section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
                <img className="getIn__touch-shape left-right-animate2" src="assets/img/shape/getInTouch.png" alt="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 lg-mb-30">
                            <div className="getIn__touch-left">
                                <div className="getIn__touch-left-title">
                                    <span className="subtitle-one">{touchContent.subtitle}</span>
                                    <h2>{touchContent.title}</h2>							
                                </div>
                                <div className="getIn__touch-left-form">
                                    <form action="#">	
                                        <div className="mt-25">
                                            <input type="text" name="name" placeholder="Nombre Completo" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <input type="email" name="email" placeholder="Correo Electrónico" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <input type="text" name="subject" placeholder="Asunto" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <button className="btn-one" type="submit">Consulta Gratuita</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="getIn__touch-right">
                                <div className="getIn__touch-right-title">
                                    <h2>{touchContent.title2}</h2>
                                    <p>{touchContent.des}</p>
                                </div>
                                <div className="getIn__touch-right-bottom">
                                    <div className="getIn__touch-right-bottom-text">
                                        <h4>Satisfacción del Cliente a Nivel Global</h4>
                                    </div>
                                    <div className="getIn__touch-right-bottom-shape">
                                        <img src="assets/img/icon/getInTouch.png" alt="shape" />
                                    </div>
                                    <div className="getIn__touch-right-bottom-image">
                                        <ul>
                                            <li><img src="/imagenes/image-home/consultaria-1.jpg" alt="avatar" /></li>
                                            <li><img src="/imagenes/image-home/consultaria-2.jpg" alt="avatar" /></li>
                                            <li><img src="/imagenes/image-home/consultaria-4.jpg" alt="avatar" /></li>
                                            <li><img src="/imagenes/image-home/consultoria.jpg" alt="avatar" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5"></div>
                    <div className="col-xl-7">
                        <div className="help__area">
                            <div className="help__area-item">
                                <div className="help__area-item-icon icon-animation">
                                    <i className="fal fa-phone-alt"></i>
                                </div>
                                <div className="help__area-item-info">
                                    <span className="text-three">Ayuda de Emergencia</span>
                                    <h5><Link href="tel:+012652689523">+012 652 689 523</Link></h5>
                                </div>
                            </div>
                            <div className="help__area-item">
                                <div className="help__area-item-icon">
                                    <i className="fal fa-envelope-open-text"></i>
                                </div>
                                <div className="help__area-item-info">
                                    <span className="text-three">Email drop Us</span>
                                    <h5><Link href="mailto:info@leexms.com">info@leexms.com</Link></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>      
    );
};

export default GetInTouch;