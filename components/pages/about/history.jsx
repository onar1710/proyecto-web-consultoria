import React from 'react';
import image1 from "../../../public/imagenes/image-home/consultaria-2.jpg";
import image2 from "../../../public/imagenes/image-home/consultaria-4.jpg";
import image3 from "../../../public/imagenes/image-home/imagen-largconsultoria.jpg";
import image4 from "../../../public/imagenes/image-home/consultaria-1.jpg";
import image5 from "../../../public/imagenes/image-home/imagen-destacada-banner.jpg";

const History = () => {
    return (
        <div className="company__history section-padding">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="company__history-title t-center">
                            <span className="subtitle-one">Nuestra Historia</span>
                            <h2>Historia de Nuestra Empresa</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="company__history-area dark__image">
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2003</span>
                                            <h5>Inicio de la Empresa</h5>
                                        </div>
                                        <p>Todo comenzó con una visión clara: ofrecer servicios contables y de consultoría de la más alta calidad. Desde nuestros inicios, nos hemos comprometido con la excelencia y el crecimiento sostenible de nuestros clientes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2008</span>
                                            <h5>Apertura de Oficina</h5>
                                        </div>
                                        <p>Todo comenzó con una visión clara: ofrecer servicios contables y de consultoría de la más alta calidad. Desde nuestros inicios, nos hemos comprometido con la excelencia y el crecimiento sostenible de nuestros clientes.</p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image2.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                        <img src={image3.src} alt="image" />
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2013</span>
                                            <h5>Improve Management</h5>
                                        </div>
                                        <p>Todo comenzó con una visión clara: ofrecer servicios contables y de consultoría de la más alta calidad. Desde nuestros inicios, nos hemos comprometido con la excelencia y el crecimiento sostenible de nuestros clientes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2018</span>
                                            <h5>Open Research Team</h5>
                                        </div>
                                        <p>Todo comenzó con una visión clara: ofrecer servicios contables y de consultoría de la más alta calidad. Desde nuestros inicios, nos hemos comprometido con la excelencia y el crecimiento sostenible de nuestros clientes.</p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image4.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                        <img src={image5.src} alt="image" />
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2024</span>
                                            <h5>Winning Award</h5>
                                        </div>
                                        <p>Todo comenzó con una visión clara: ofrecer servicios contables y de consultoría de la más alta calidad. Desde nuestros inicios, nos hemos comprometido con la excelencia y el crecimiento sostenible de nuestros clientes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;