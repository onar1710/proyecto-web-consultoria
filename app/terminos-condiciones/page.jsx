"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";
import BreadCrumb from "@/components/pages/common/breadcrumb";

const TermsAndConditions = () => {
    const termsBannerBg = "/imagenes/image-home/consultaria-2.jpg";
    return (
        <>
            <SEO pageTitle="Términos y Condiciones" />
            <HeaderOne />
            <BreadCrumb title="Términos y Condiciones" innerTitle="Términos y Condiciones" />
            <div className="service__details section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service__details-left">
                                <div className="service__details-left-content">
                                    <h2 className="mb-30">Términos y Condiciones</h2>
                                    <p><strong>Fecha de entrada en vigor:</strong> 21 de febrero de 2026</p>
                                    
                                    <h4 className="mb-25">1. Aceptación de los Términos</h4>
                                    <p>Al acceder y utilizar los servicios de LEEXMS SRL, usted acepta estos términos y condiciones. Si no está de acuerdo, no debe utilizar nuestros servicios.</p>
                                    
                                    <h4 className="mb-25">2. Servicios Prestados</h4>
                                    <p>LEEXMS SRL ofrece servicios de consultoría empresarial, contabilidad, auditoría, asesoría fiscal y gestión de nóminas. Nos comprometemos a prestar estos servicios con profesionalismo y diligencia.</p>
                                    
                                    <h4 className="mb-25">3. Obligaciones del Cliente</h4>
                                    <p>Como cliente, usted se compromete a:</p>
                                    <ul>
                                        <li>Proporcionar información veraz y completa</li>
                                        <li>Cooperar en la prestación de los servicios</li>
                                        <li>Pagar los honorarios acordados en tiempo y forma</li>
                                        <li>Facilitar la documentación necesaria</li>
                                        <li>Mantener la confidencialidad de nuestra información</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">4. Honorarios y Pagos</h4>
                                    <p>Los honorarios por nuestros servicios se detallarán en propuestas o contratos específicos. Los pagos deben realizarse según los términos acordados. Los precios están sujetos a cambios con previo aviso.</p>
                                    
                                    <h4 className="mb-25">5. Confidencialidad</h4>
                                    <p>Tanto LEEXMS SRL como el cliente se comprometen a mantener la confidencialidad de toda información compartida durante la prestación de servicios.</p>
                                    
                                    <h4 className="mb-25">6. Propiedad Intelectual</h4>
                                    <p>Todo el material proporcionado por LEEXMS SRL, incluyendo informes, análisis y recomendaciones, es propiedad intelectual de LEEXMS SRL y no puede ser utilizado sin autorización.</p>
                                    
                                    <h4 className="mb-25">7. Limitación de Responsabilidad</h4>
                                    <p>LEEXMS SRL no será responsable por pérdidas indirectas, consecuentes o especiales que surjan del uso de nuestros servicios, excepto cuando sea requerido por ley.</p>
                                    
                                    <h4 className="mb-25">8. Terminación</h4>
                                    <p>Cualquiera de las partes puede terminar la relación contractual con previo aviso de 30 días. Los servicios pagados hasta la fecha de terminación no serán reembolsables.</p>
                                    
                                    <h4 className="mb-25">9. Ley Aplicable</h4>
                                    <p>Estos términos y condiciones se rigen por las leyes de la República Dominicana. Cualquier disputa se resolverá mediante negociación de buena fe.</p>
                                    
                                    <h4 className="mb-25">10. Contacto</h4>
                                    <p>Para preguntas sobre estos términos y condiciones, contacte con nosotros:</p>
                                    <ul>
                                        <li>Email: leexmssrl@gmail.com</li>
                                        <li>Teléfono: +1 (809) 999-0083</li>
                                        <li>Dirección: Santo Domingo, República Dominicana</li>
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

export default TermsAndConditions;
