"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "@/components/pages/common/scroll/scroll-to-top";
import BreadCrumb from "@/components/pages/common/breadcrumb";

const CookiePolicy = () => {
    const cookieBannerBg = "/linceciado-lergio.jpg";
    return (
        <>
            <SEO pageTitle="Política de Cookies" />
            <HeaderOne />
            <BreadCrumb title="Política de Cookies" innerTitle="Política de Cookies" />
            <div className="service__details section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service__details-left">
                                <div className="service__details-left-content">
                                    <h2 className="mb-30">Política de Cookies</h2>
                                    <p><strong>Fecha de entrada en vigor:</strong> 21 de febrero de 2026</p>
                                    
                                    <h4 className="mb-25">1. ¿Qué son las Cookies?</h4>
                                    <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a mejorar su experiencia de navegación y proporcionarnos información sobre cómo utiliza nuestro sitio.</p>
                                    
                                    <h4 className="mb-25">2. Tipos de Cookies que Utilizamos</h4>
                                    <p>En LEEXMS SRL utilizamos los siguientes tipos de cookies:</p>
                                    <ul>
                                        <li><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                                        <li><strong>Cookies de Rendimiento:</strong> Recopilan información sobre cómo utiliza el sitio</li>
                                        <li><strong>Cookies Funcionales:</strong> Recuerdan sus preferencias y configuraciones</li>
                                        <li><strong>Cookies de Marketing:</strong> Utilizadas para personalizar contenido y anuncios</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">3. ¿Cómo Utilizamos las Cookies?</h4>
                                    <p>Utilizamos cookies para:</p>
                                    <ul>
                                        <li>Mantenerlo conectado durante su sesión</li>
                                        <li>Recordar sus preferencias y configuraciones</li>
                                        <li>Analizar el tráfico del sitio web</li>
                                        <li>Personalizar contenido y anuncios</li>
                                        <li>Mejorar nuestros servicios</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">4. Gestión de Cookies</h4>
                                    <p>Usted puede controlar y administrar las cookies de las siguientes maneras:</p>
                                    <ul>
                                        <li>A través de la configuración de su navegador</li>
                                        <li>Aceptando o rechazando cookies cuando visite nuestro sitio</li>
                                        <li>Eliminando cookies ya almacenadas en su dispositivo</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">5. Cookies de Terceros</h4>
                                    <p>Algunos servicios de terceros que utilizamos pueden instalar cookies en su dispositivo, incluyendo:</p>
                                    <ul>
                                        <li>Servicios de análisis web</li>
                                        <li>Redes sociales</li>
                                        <li>Servicios de publicidad</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">6. Duración de las Cookies</h4>
                                    <p>Las cookies tienen diferentes duraciones:</p>
                                    <ul>
                                        <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierra su navegador</li>
                                        <li><strong>Cookies persistentes:</strong> Permanecen en su dispositivo durante un período específico</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">7. Sus Derechos</h4>
                                    <p>Usted tiene derecho a:</p>
                                    <ul>
                                        <li>Saber qué cookies utilizamos</li>
                                        <li>Aceptar o rechazar cookies</li>
                                        <li>Administrar sus preferencias de cookies</li>
                                        <li>Eliminar cookies de su dispositivo</li>
                                    </ul>
                                    
                                    <h4 className="mb-25">8. Actualizaciones de esta Política</h4>
                                    <p>Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestras prácticas o por razones operativas, legales o regulatorias.</p>
                                    
                                    <h4 className="mb-25">9. Contacto</h4>
                                    <p>Para preguntas sobre nuestra política de cookies, contacte con nosotros:</p>
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

export default CookiePolicy;
