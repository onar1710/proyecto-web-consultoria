import AboutUs from "@/components/pages/about";
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/components/seo/schema-generator';

const About = () => {
    const title = "Sobre Nosotros";
    const description = "Conoce más sobre LEEXMS SRL, tu empresa de confianza en servicios contables y consultoría empresarial en República Dominicana.";
    const canonical = "/nosotros";
    
    const webPageSchema = generateWebPageSchema(title, description, canonical);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Sobre Nosotros", url: "/nosotros" }
    ]);
    
    const schema = [webPageSchema, breadcrumbSchema];

    return (
        <>
            <SEOMetadata 
                title={title}
                description={description}
                canonical={canonical}
                keywords="sobre nosotros, LEEXMS, empresa contable, consultoría República Dominicana"
                schema={schema}
            />
            <AboutUs />
        </>
    );
};

export default About;
