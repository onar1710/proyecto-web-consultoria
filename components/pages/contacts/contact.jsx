"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import contactBannerBg from "../../../public/imagenes/imagen-personas-testimonios/destacada-formulario-contacto.jpg";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contacto" />
            <HeaderOne />
            <BreadCrumb title="Contacto" innerTitle="Contacto" bgImage={contactBannerBg} />
            <div className="contact__page section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 order-last order-lg-first">
                            <div className="contact__page-form">
                                <h3 className="mb-30">Contáctanos</h3>
                                <form action="#">	
                                    <div className="row">
                                        <div className="col-sm-12 mb-20"> 
                                            <div className="contact__page-form-item contact-item">
                                                <span className="fal fa-user"></span>
                                                <input type="text" name="name" placeholder="Nombre Completo" required="required" />
                                            </div>										
                                        </div>
                                        <div className="col-sm-12 mb-20">
                                            <div className="contact__page-form-item contact-item">
                                                <span className="far fa-envelope-open"></span>
                                                <input type="email" name="email" placeholder="Correo Electrónico" required="required" />											
                                            </div>									
                                        </div>
                                        <div className="col-sm-12 mb-30"> 
                                            <div className="contact__page-form-item contact-item">
                                                <span className="far fa-comments"></span>
                                                <textarea name="message" placeholder="Escribe tu mensaje aquí..."></textarea>
                                            </div>										
                                        </div>
                                        <div className="col-lg-12">										
                                            <div className="contact__page-form-item">
                                                <button className="btn-one" type="submit">Enviar Ahora<i className="far fa-chevron-double-right"></i></button>
                                            </div>										
                                        </div>
                                    </div>							
                                </form>                        
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 lg-mb-30">
                            <div className="contact__page-info">
                                <h2 className="mb-60 lg-mb-30">Ponte en Contacto</h2>
                                <div className="contact__page-info-item">
                                    <h6>Dirección de la Oficina<span>:</span></h6>
                                    <span>Santo Domingo, República Dominicana</span>
                                </div>
                                <div className="contact__page-info-item">
                                    <h6>Correo Electrónico<span>:</span></h6>
                                    <span>
                                        <a href="mailto:info@leexms.com">info@leexms.com</a>
                                        <a href="mailto:contacto@leexms.com">contacto@leexms.com</a>
                                    </span>
                                </div>
                                <div className="contact__page-info-item">
                                    <h6>Número de Teléfono<span>:</span></h6>
                                    <span>
                                        <a href="tel:+18099990083">+1 (809) 999-0083</a>
                                        <a href="tel:+18099990084">+1 (809) 999-0084</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__page-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3993775394!2d-69.91374388459395!3d18.4864086873997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf87f5b5b5b5b5%3A0x1234567890abcdef!2sSanto%20Domingo%2C%20Dominican%20Republic!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd" loading="lazy"></iframe>
            </div>
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ContactUs;