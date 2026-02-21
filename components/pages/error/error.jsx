import Link from 'next/link';
import React from 'react';
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateWebPageSchema } from '@/components/seo/schema-generator';

const Error = () => {
    const title = "Página No Encontrada";
    const description = "La página que buscas no está disponible o no pertenece a este sitio web de LEEXMS SRL.";
    const canonical = "/404";
    
    const webPageSchema = generateWebPageSchema(title, description, canonical);

    return (
        <>
            <SEOMetadata 
                title={title}
                description={description}
                canonical={canonical}
                keywords="error 404, página no encontrada, LEEXMS"
                schema={webPageSchema}
            />
            <div className="error section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page">
                                <h1>4<span>0</span>4</h1>
                                <h2>¡Oops! Página no encontrada.</h2>
                                <p>La página que estás buscando no está disponible o no pertenece a este sitio web.</p>						
                                <Link className="btn-one" href="/">Volver al Inicio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;