import React from 'react';

const CtaArea = () => {
    return (
        <>
        <div className="cta__area" style={{backgroundImage: 'url(/imagenes/image-home/imagen-destacada-banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="container">
                <div className="row cta__area-bg align-items-center">
                    <div className="col-xxl-5 col-xl-4">
                        <div className="cta__area-title">
                            <h2>Mantente Conectado</h2>
                            <span className="text-two">recibe todas las notificaciones</span>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-8 pr-0">
                        <div className="cta__area-form">
                            <form>
                                <div className="cta__area-form-item md-mb-30">
                                    <input type="email" name="email" placeholder="Dirección de correo" required />
                                </div>
                                <div className="cta__area-form-item">
                                    <button className="btn-four" type="submit">Suscribirse Ahora<i className="far fa-chevron-double-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default CtaArea;