import ServicePage from '@/components/pages/services/service';
import React from 'react';
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/components/seo/schema-generator';

const ServicePages = () => {
    const title = "Services";
    const description = "Discover all services from LEEXMS SRL: accounting, auditing, tax advisory, business consulting and payroll management in the Dominican Republic.";
    const canonical = "/services";
    
    const webPageSchema = generateWebPageSchema(title, description, canonical);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" }
    ]);
    
    const schema = [webPageSchema, breadcrumbSchema];

    return (
        <>
            <SEOMetadata 
                title={title}
                description={description}
                canonical={canonical}
                keywords="accounting services, auditing, tax advisory, business consulting, payroll management"
                schema={schema}
            />
            <ServicePage />
        </>
    );
};

export default ServicePages;