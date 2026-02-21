import ContactUs from '@/components/pages/contacts/contact';
import React from 'react';
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/components/seo/schema-generator';

const ContactPage = () => {
    const title = "Contact";
    const description = "Contact LEEXMS SRL for your accounting and business consulting services. Offices in Santo Domingo, Dominican Republic.";
    const canonical = "/contact";
    
    const webPageSchema = generateWebPageSchema(title, description, canonical);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" }
    ]);
    const localBusinessSchema = generateLocalBusinessSchema();
    
    const schema = [webPageSchema, breadcrumbSchema, localBusinessSchema];

    return (
        <>
            <SEOMetadata 
                title={title}
                description={description}
                canonical={canonical}
                keywords="contact LEEXMS, phone, email, Santo Domingo offices"
                schema={schema}
            />
            <ContactUs />            
        </>
    );
};

export default ContactPage;