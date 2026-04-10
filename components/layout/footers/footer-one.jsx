import servicesData from "@/components/data/services-data";
import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/leexms-logo.svg";

const FooterOne = () => {
    const servicesD = servicesData.slice(0, 4);
    return (
        <>
            <div className="footer__one">
                <img className="footer__one-shape" src="assets/img/shape/footer-bg.png" alt="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
                            <div className="footer__one-widget">
                                <div className="footer__one-widget-about">
                                    <Link href="/"><img src={logo.src} alt="logo" /></Link>
                                    <p>LEEXMS SRL - Servicios contables y de consultoría empresarial en República Dominicana</p>
                                    <div className="footer__one-widget-about-social">
                                        <Social />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
                            <div className="footer__one-widget border-one">
                                <h4>Recent Post</h4>
                                <div className="footer__one-widget-solution">
                                    <ul>
                                        <li><Link href="#"><i className="far fa-chevron-double-right"></i>Mar 10, 2024</Link></li>
                                        <li><Link href="#"><i className="far fa-chevron-double-right"></i>Mejora tu Negocio con Consultoría Experta</Link></li>
                                        <li><Link href="#"><i className="far fa-chevron-double-right"></i>Mar 12, 2024</Link></li>
                                        <li><Link href="#"><i className="far fa-chevron-double-right"></i>Impulsa el Crecimiento de tu Empresa</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
                            <div className="footer__one-widget border-one">
                                <h4>Oficina Principal</h4>
                                <div className="footer__one-widget-location">
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info">
                                            <Link href="https://google.com/maps">Calle Manolo Tavares Justo, Edificio 23, Apartamento 202, Residencial Filadelfia VIII, San Isidro, Santo Domingo Este</Link>
                                        </div>
                                    </div>
                                    <h6>Contacto</h6>
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info">
                                            <Link href="tel:+18099990083">+1 (809) 999-0083</Link>
                                        </div>
                                    </div>
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info">
                                            <Link href="mailto:leexmssrl@gmail.com">leexmssrl@gmail.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div className="footer__one-widget border-one tow">
                                <h4>Suscríbete</h4>
                                <div className="footer__one-widget-subscribe">
                                    <p>Únete a <span>miles</span> de personas recibiendo nuestros emails</p>
                                    <form action="#">
                                        <input type="text" name="email" placeholder="Correo Electrónico" required />
                                        <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__legal-links">
                    <div className="legal-links">
                        <Link href="/politica-privacidad">Política de Privacidad</Link>
                        <span className="separator">|</span>
                        <Link href="/terminos-condiciones">Términos y Condiciones</Link>
                        <span className="separator">|</span>
                        <Link href="/politica-cookies">Política de Cookies</Link>
                        <span className="separator">|</span>
                        <Link href="/aviso-legal">Aviso Legal</Link>
                    </div>
                </div>
                <div className="copyright__one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <p>Copyright 2024 <Link href="/">Leexms</Link> - Todos los derechos reservados</p>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>            
        </>
    );
};

export default FooterOne;
