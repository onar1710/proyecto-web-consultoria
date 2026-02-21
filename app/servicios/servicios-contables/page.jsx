"use client"
import { useParams, useRouter } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/components/seo/schema-generator';

const ServiciosContables = () => {
    const serviceDetails = servicesData?.find((service) => service.id === 'servicios-contables');
    const router = useRouter();
    if (!serviceDetails) {
        return router.push("/404-error");
    }
    
    const title = "Servicios Contables";
    const description = "Servicios contables integrales para tu empresa. Contabilidad general, estados financieros, conciliaciones bancarias y más.";
    const canonical = "/servicios/servicios-contables";
    
    const serviceSchema = generateServiceSchema(title, description, canonical);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" },
        { name: "Servicios Contables", url: canonical }
    ]);
    
    const schema = [serviceSchema, breadcrumbSchema];
    
    const serviceBannerBg = "/imagenes/image-home/consultaria-1.jpg";
    
    return (
        <>
            <SEOMetadata 
                title={title}
                description={description}
                canonical={canonical}
                keywords="servicios contables, contabilidad general, estados financieros, conciliaciones bancarias"
                schema={schema}
                type="service"
            />
            <ServicesSingle serviceDetails={serviceDetails} bgImage={serviceBannerBg} />
        </>
    );
};

export default ServiciosContables;
