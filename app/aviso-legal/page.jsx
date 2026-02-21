"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";
import BreadCrumb from "@/components/pages/common/breadcrumb";

const LegalNotice = () => {
    const legalBannerBg = "/imagenes/image-home/consultoria-5.jpg";
    return (
        <>
            <SEO pageTitle="Aviso Legal" />
            <HeaderOne />
            <BreadCrumb title="Aviso Legal" innerTitle="Aviso Legal" />
            <div className="service__details section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service__details-left">
                                <div className="service__details-left-content">
                                    <h2 className="mb-30">Aviso Legal</h2>
                                    <p><strong>Fecha de entrada en vigor:</strong> 21 de febrero de 2026</p>
                                    
                                    <h4 className="mb-25">1. Información de la Empresa</h4>
                                    <p>LEEXMS SRL es una empresa de servicios contables y consultoría debidamente constituida y registrada en la República Dominicana.</p>
                                    <ul>
                                        <li><strong>Nombre comercial:</strong> LEEXMS SRL</li>
                                        <li><strong>RNC:</strong> [Número de Registro Nacional de Contribuyentes]</li>
                                        <li><strong>Dirección:</strong> Santo Domingo, República Dominicana</li>
                                        <li><strong>Teléfono:</strong> +1 (809) 999-0083</li>
                                        <li><strong>Email:</strong> info@leexms.com</li>
                                        <li><strong>Sitio web:</strong> www.leexms.com</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">2. Objeto Social</h4>
                                    <p>LEEXMS SRL tiene como objeto social la prestación de servicios profesionales de contabilidad, auditoría, consultoría empresarial, asesoría fiscal y gestión de nóminas.</p>
                                    
                                    <h4 className="mb-25">3. Licencias y Certificaciones</h4>
                                    <p>LEEXMS SRL cuenta con las licencias y certificaciones necesarias para prestar servicios de contabilidad y consultoría en la República Dominicana:</p>
                                    <ul>
                                        <li>Licencia de Contador Público Autorizado</li>
                                        <li>Certificación de Consultoría Empresarial</li>
                                        <li>Registro en la Dirección General de Impuestos Internos</li>
                                        <li>Autorización para servicios de auditoría</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">4. Responsabilidad Profesional</h4>
                                    <p>LEEXMS SRL opera bajo los más altos estándares éticos y profesionales, cumpliendo con:</p>
                                    <ul>
                                        <li>Código de Ética Profesional de Contadores</li>
                                        <li>Normas Internacionales de Auditoría</li>
                                        <li>Legislación fiscal y comercial dominicana</li>
                                        <li>Normas de protección de datos personales</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">5. Seguro de Responsabilidad Civil</h4>
                                    <p>LEEXMS SRL mantiene un seguro de responsabilidad civil profesional que cubre posibles errores u omisiones en la prestación de nuestros servicios.</p>
                                    
                                    <h4 className="mb-25">6. Propiedad Intelectual</h4>
                                    <p>Todo el contenido de este sitio web, incluyendo但不限于 textos, imágenes, logos, diseño y software, es propiedad de LEEXMS SRL y está protegido por las leyes de propiedad intelectual.</p>
                                    
                                    <h4 className="mb-25">7. Limitación de Garantías</h4>
                                    <p>Los servicios proporcionados por LEEXMS SRL se ofrecen "tal como están". No garantizamos resultados específicos, aunque nos comprometemos a prestar nuestros servicios con la debida diligencia y profesionalismo.</p>
                                    
                                    <h4 className="mb-25">8. Jurisdicción y Ley Aplicable</h4>
                                    <p>Para cualquier disputa o reclamación relacionada con nuestros servicios, las partes se someten a la jurisdicción de los tribunales de la República Dominicana.</p>
                                    
                                    <h4 className="mb-25">9. Modificaciones del Aviso Legal</h4>
                                    <p>LEEXMS SRL se reserva el derecho de modificar este aviso legal en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en este sitio web.</p>
                                    
                                    <h4 className="mb-25">10. Contacto Legal</h4>
                                    <p>Para cualquier asunto legal, contacte con nuestro departamento legal:</p>
                                    <ul>
                                        <li>Email: legal@leexms.com</li>
                                        <li>Teléfono: +1 (809) 999-0084</li>
                                        <li>Dirección: Santo Domingo, República Dominicana</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">11. Quejas y Reclamaciones</h4>
                                    <p>Si tiene alguna queja o reclamación sobre nuestros servicios, puede contactarnos a través de:</p>
                                    <ul>
                                        <li>Email: complaints@leexms.com</li>
                                        <li>Teléfono: +1 (809) 999-0083</li>
                                        <li>Formulario de contacto en nuestro sitio web</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default LegalNotice;
