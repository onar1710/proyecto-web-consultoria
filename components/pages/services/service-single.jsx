"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../pages/common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../pages/common/scroll/scroll-to-top";
import Link from "next/link";

const ServicesSingle = ({ serviceDetails, bgImage }) => {
    return (
        <>
            <SEO pageTitle={serviceDetails.title} />
            <HeaderOne />
            <BreadCrumb title="Servicios" innerTitle={serviceDetails.title} bgImage={bgImage} />
            <div className="service__details section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 lg-mb-50">
                            <div className="service__details-left">
                                <div className="service__details-left-content">
                                    <h2 className="mb-30">{serviceDetails.title}</h2>
                                    <p>{serviceDetails.description}</p>
                                    <p>En LEEXMS SRL, ofrecemos soluciones integrales adaptadas a las necesidades específicas de tu empresa. Nuestro equipo de expertos está comprometido con la excelencia y la innovación en cada proyecto que emprendemos.</p>
                                    <div className="service__details-left-features">
                                        <h4 className="mb-25">Características Principales</h4>
                                        <ul>
                                            <li><i className="fal fa-check"></i>Asesoramiento personalizado</li>
                                            <li><i className="fal fa-check"></i>Soluciones integrales</li>
                                            <li><i className="fal fa-check"></i>Equipo de expertos certificados</li>
                                            <li><i className="fal fa-check"></i>Resultados garantizados</li>
                                        </ul>
                                    </div>
                                    <div className="service__details-left-process">
                                        <h4 className="mb-25">Nuestro Proceso</h4>
                                        <div className="process__item">
                                            <div className="process__item-number">
                                                <span>1</span>
                                            </div>
                                            <div className="process__item-content">
                                                <h5>Análisis y Diagnóstico</h5>
                                                <p>Evaluamos tus necesidades actuales y identificamos oportunidades de mejora.</p>
                                            </div>
                                        </div>
                                        <div className="process__item">
                                            <div className="process__item-number">
                                                <span>2</span>
                                            </div>
                                            <div className="process__item-content">
                                                <h5>Planificación Estratégica</h5>
                                                <p>Desarrollamos un plan de acción personalizado para alcanzar tus objetivos.</p>
                                            </div>
                                        </div>
                                        <div className="process__item">
                                            <div className="process__item-number">
                                                <span>3</span>
                                            </div>
                                            <div className="process__item-content">
                                                <h5>Implementación</h5>
                                                <p>Ejecutamos las soluciones con seguimiento continuo y ajustes necesarios.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="service__details-right">
                                <div className="service__details-right-contact">
                                    <h4>¿Necesitas más información?</h4>
                                    <p>Contáctanos para una consulta gratuita</p>
                                    <Link href="/contact" className="btn-one">Contactar Ahora<i className="far fa-chevron-double-right"></i></Link>
                                </div>
                                <div className="service__details-right-services">
                                    <h4>Otros Servicios</h4>
                                    <ul>
                                        <li><Link href="/services/servicios-contables">Servicios Contables</Link></li>
                                        <li><Link href="/services/auditorias-financieras">Auditorías Financieras</Link></li>
                                        <li><Link href="/services/asesoria-tributaria">Asesoría Tributaria</Link></li>
                                        <li><Link href="/services/consultoria-empresarial">Consultoría Empresarial</Link></li>
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

export default ServicesSingle;
