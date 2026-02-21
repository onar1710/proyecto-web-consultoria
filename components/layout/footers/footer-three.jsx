import Social from "@/components/data/social";
import logo from "../../../public/leexms-logo.svg";
import footerBg from "../../../public/assets/img/shape/footer-bg-2.png";
import Link from "next/link";

const FooterThree = () => {
    return (
        <>
            <div className="subscribe">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="subscribe-title">
                                <h2>Stay informed, subscribe to our newsletter</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" name="email" placeholder="Email Address" required />
                                    <button className="btn-seven" type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__three">
                <img className="footer__three-shape" src={footerBg.src} alt="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-7 md-mb-30">
                            <div className="footer__three-widget">
                                <div className="footer__three-widget-about">
                                    <Link href="/">
                                        <img className="dark-n" src={logo.src} alt="logo" />
                                        <img className="light-n" src={logo.src} alt="logo" />
                                    </Link>
                                    <p>LEEXMS SRL - Servicios contables y de consultoría empresarial en República Dominicana</p>							
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 xl-mb-30">
                            <div className="footer__three-widget">
                                <h4>Oficina Principal</h4>
                                <div className="footer__three-widget-location">
                                    <div className="footer__three-widget-location-item">
                                        <div className="footer__three-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__three-widget-location-item-info">
                                            <Link href="https://google.com/maps">Calle Manolo Tavares Justo, Edificio 23, Apartamento 202, Residencial Filadelfia VIII, San Isidro, Santo Domingo Este</Link>
                                        </div>
                                    </div>
                                    <h6>Contacto</h6>
                                    <div className="footer__three-widget-location-item">
                                        <div className="footer__three-widget-location-item-icon">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="footer__three-widget-location-item-info">
                                            <Link href="tel:+18099990083">+1 (809) 999-0083</Link>
                                        </div>
                                    </div>
                                    <div className="footer__three-widget-location-item">
                                        <div className="footer__three-widget-location-item-icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <div className="footer__three-widget-location-item-info">
                                            <Link href="mailto:leexmssrl@gmail.com">leexmssrl@gmail.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 sm-mb-30">
                            <div className="footer__three-widget">
                                <h4>Company</h4>
                                <div className="footer__three-widget-solution">
                                    <ul>
                                        <li><a href="#"><i className="far fa-chevron-double-right"></i>Help Center</a></li>
                                        <li><a href="#"><i className="far fa-chevron-double-right"></i>terms & conditions</a></li>
                                        <li><a href="#"><i className="far fa-chevron-double-right"></i>privacy policy</a></li>
                                        <li><a href="#"><i className="far fa-chevron-double-right"></i>Consulting</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="footer__three-widget border-one tow">
                                <h4>Working Time</h4>
                                <div className="footer__three-widget-hour">
                                    <p>Mon - fri : 9:00 AM - 5:00 PM</p>
                                    <p>sat : 10:00 AM - 6:00 PM</p>
                                    <p>Sunday Close</p>
                                    <div className="footer__three-widget-hour-social">
                                        <Social />
                                    </div>
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
                <div className="copyright__three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <p>Copyright 2024  <Link href="/">Leexms</Link> - Todos los derechos reservados | Este proyecto web de consultoría ha sido desarrollado por <Link href="https://omarfuentes.com" target="_blank" rel="dofollow">Omar Fuentes</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default FooterThree;