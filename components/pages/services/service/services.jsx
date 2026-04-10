import Link from 'next/link';
import CtaAreaServices from './cta-services';
import Solution from './solution';
import Testimonial from '../../homes/home/testimonial';
import servicesData from '@/components/data/services-data';

const ServicesMain = () => {
    return (
        <>
        <div className="services__page section-padding-two">
            <div className="container">
                <div className="row mb-50">
                    <div className="col-xl-12 text-center">
                        <span className="subtitle-one">Servicios Profesionales</span>
                        <h2>Soluciones Integrales para tu Empresa</h2>
                        <p>LEEXMS SRL ayuda a los clientes a crear valor a largo plazo para los stakeholders. Habilitados por los datos y la tecnología, nuestros servicios y soluciones brindan confianza a través de la garantía y ayudan a los clientes a transformarse, crecer y operar.</p>
                    </div>
                </div>
                <div className="row">
                    {servicesData?.map((data, id) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 mt-25" key={id}>
                            <div className="services__three-item page">
                                <img src={data.image.src} alt="image" />
                                <div className="services__three-item-content page">
                                    <div className="services__three-item-content-icon">
                                        {data.icon}
                                    </div>
                                    <h4><Link href={`/services/${data.id}`}>{data.title}</Link></h4>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            <CtaAreaServices />    
            <Solution />
            <Testimonial />
        </>
    );
};

export default ServicesMain;
