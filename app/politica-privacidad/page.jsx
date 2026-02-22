"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";
import BreadCrumb from "@/components/pages/common/breadcrumb";

const PrivacyPolicy = () => {
    const privacyBannerBg = "/imagenes/image-home/consultaria-1.jpg";
    return (
        <>
            <SEO pageTitle="Política de Privacidad" />
            <HeaderOne />
            <BreadCrumb title="Política de Privacidad" innerTitle="Política de Privacidad" />
            <div className="service__details section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service__details-left">
                                <div className="service__details-left-content">
                                    <h2 className="mb-30">Política de Privacidad</h2>
                                    <p><strong>Fecha de entrada en vigor:</strong> 21 de febrero de 2026</p>
                                    
                                    <h4 className="mb-25">1. Información que Recopilamos</h4>
                                    <p>En LEEXMS SRL, recopilamos información personal cuando usted utiliza nuestros servicios, visita nuestro sitio web o se comunica con nosotros. Esta información puede incluir:</p>
                                    <ul>
                                        <li>Nombre y datos de contacto</li>
                                        <li>Información profesional y empresarial</li>
                                        <li>Datos de facturación y pagos</li>
                                        <li>Información de navegación y uso del sitio</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">2. Uso de la Información</h4>
                                    <p>Utilizamos su información personal para:</p>
                                    <ul>
                                        <li>Prestar nuestros servicios de consultoría y contabilidad</li>
                                        <li>Facturar y procesar pagos</li>
                                        <li>Comunicarnos con usted sobre nuestros servicios</li>
                                        <li>Mejorar nuestros servicios y sitio web</li>
                                        <li>Cumplir con obligaciones legales y fiscales</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">3. Protección de Datos</h4>
                                    <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.</p>
                                    
                                    <h4 className="mb-25">4. Compartir Información</h4>
                                    <p>No vendemos, alquilamos ni comercializamos su información personal. Solo compartimos información con:</p>
                                    <ul>
                                        <li>Autoridades fiscales cuando es legalmente requerido</li>
                                        <li>Proveedores de servicios necesarios para prestar nuestros servicios</li>
                                        <li>Con su consentimiento explícito</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">5. Sus Derechos</h4>
                                    <p>Usted tiene derecho a:</p>
                                    <ul>
                                        <li>Acceder a su información personal</li>
                                        <li>Corregir información inexacta</li>
                                        <li>Solicitar eliminación de su información</li>
                                        <li>Oponerse al procesamiento de sus datos</li>
                                        <li>Portabilidad de datos</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">6. Contacto</h4>
                                    <p>Para ejercer sus derechos o tener preguntas sobre esta política de privacidad, contacte con nosotros:</p>
                                    <ul>
                                        <li>Email: leexmssrl@gmail.com</li>
                                        <li>Teléfono: +1 (809) 999-0083</li>
                                        <li>Dirección: Santo Domingo, República Dominicana</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">7. Cambios a esta Política</h4>
                                    <p>Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos cualquier cambio significativo publicando la nueva política en nuestro sitio web.</p>
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

export default PrivacyPolicy;
