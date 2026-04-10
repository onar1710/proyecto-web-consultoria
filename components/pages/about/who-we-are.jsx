import React from 'react';
import bgImage from "../../../public/assets/img/about/about-solution.jpg";
import image1 from "../../../public/imagenes/image-home/consultaria-1.jpg";
import image2 from "../../../public/assets/img/about/about-9.jpg";
import solutionImage from "../../../public/imagenes/image-home/imagen-destacada-servicios.jpg";
import shape from "../../../public/assets/img/shape/about-solution.png";
import Count from '../common/count';
import Link from 'next/link';

const WhoWeAre = () => {
    return (
        <>
            <div className="company__two section-padding pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7 lg-mb-30">
                            <div className="company__two-left">
                                <div className="company__two-left-title">
                                    <span className="subtitle-one">Quiénes Somos</span>
                                    <h2>La Mejor Empresa Especializada en Negocios</h2>
                                    <p>En LEEXMS SRL nos dedicamos a ofrecer soluciones integrales de consultoría y servicios contables que ayudan a las empresas a alcanzar su máximo potencial. Nuestro equipo de expertos está comprometido con la excelencia y el crecimiento sostenible de nuestros clientes.</p>
                                </div>
                                <div className="company__two-left-skill">
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={89} />k</h2>
                                        <h6>Proyectos Completados en los Últimos Años</h6>
                                    </div>
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={73} />k</h2>
                                        <h6>Clientes Satisfechos en Todo el Mundo</h6>
                                    </div>
                                </div>
                                <Link className="btn-two" href="/nosotros">Descubrir más<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="company__two-right dark__image t-right">
                                <img className="img__full" src={image1.src} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="about__solution" style={{backgroundImage: `url(${solutionImage.src})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8">
                            <div className="about__solution-left xl-t-center">
                                <h2>Implementamos Soluciones y Alcanzamos Objetivos.</h2>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="about__solution-right t-right xl-t-center">						
                                <Link className="btn-one" href="/contact">Obtén Consultas Gratuitas<i className="far fa-chevron-double-right"></i></Link>
                                <img className="about__solution-right-shape left-right-animate" src={shape.src} alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    );
};

export default WhoWeAre;