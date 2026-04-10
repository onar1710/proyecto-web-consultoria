
import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/leexms-logo.svg";
import blogData from "@/components/data/blog-data";
import footerBg from "../../../public/imagenes/image-home/imagen-destacada-servicios.jpg";

const FooterTwo = () => {
    const blogPost = blogData.slice(0, 2);
    return (
        <>
            <div className="footer__two" data-background="assets/img/shape/footer-bg-1.png">
                <div className="subscribe__area">
                    <div className="container">
                        <div className="row align-items-center subscribe__area-bg" style={{backgroundImage: `url(${footerBg.src})`}}>
                            <div className="col-xl-5 col-lg-5 lg-mb-40">
                                <div className="subscribe__area-left">
                                    <h2>Mantente Conectado</h2>
                                    <div className="subscribe__area-left-notification">
                                        <h6>recibe todas las notificaciones</h6>
                                        <div className="subscribe__area-left-notification-icon icon-animation video-pulse">
                                            <i className="far fa-bell"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="subscribe__area-form">
                                    <form>
                                        <input type="email" name="email" placeholder="Dirección de correo" />
                                        <button type="submit">Suscribirse Ahora</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                            <div className="footer__two-widget">
                                <div className="footer__two-widget-about">
                                    <Link href="/">
                                        <img className="f_logo" src={logo.src} alt="logo" />
                                    </Link>
                                    <p>LEEXMS SRL - Servicios contables y de consultoría empresarial en República Dominicana</p>
                                    <div className="footer__two-widget-about-social">
                                        <Social />
                                    </div>							
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                            <div className="footer__two-widget footer-border">
                                <h4>Oficina Principal</h4>
                                <div className="footer__two-widget-location">
                                    <div className="footer__two-widget-location-item">
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            <Link href="https://google.com/maps">Calle Manolo Tavares Justo, Edificio 23, Apartamento 202, Residencial Filadelfia VIII, San Isidro, Santo Domingo Este</Link>
                                        </div>
                                    </div>
                                    <h6>Contacto</h6>
                                    <div className="footer__two-widget-location-item">
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            <Link href="tel:+18099990083">+1 (809) 999-0083</Link>
                                        </div>
                                    </div>
                                    <div className="footer__two-widget-location-item">
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            <Link href="mailto:leexmssrl@gmail.com">leexmssrl@gmail.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="footer__two-widget footer-border">
                                <h4>Recent Post</h4>
                                {blogPost.map((data, id) => (
                                    <div className="post__item" key={id}>
                                        <div className="post__item-image">
                                            <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="" /></Link>
                                        </div>
                                        <div className="post__item-title">
                                            <span><i className="far fa-calendar-alt"></i>Mar {data.date}, 2024</span>
                                            <h6><Link href={`/blog/${data.id}`}>{data.title}</Link></h6>
                                        </div>
                                    </div>
                                ))}
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
                <div className="copyright__two">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <p>Copyright 2024  <Link href="/">Leexms</Link> - Todos los derechos reservados</p>
                            </div>
                        </div>
                    </div>
                </div>		
            </div>          
        </>
    );
};

export default FooterTwo;
