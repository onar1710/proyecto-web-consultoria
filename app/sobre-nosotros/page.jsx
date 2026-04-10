import AboutUs from "@/components/pages/about";
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/components/seo/schema-generator';

const About = () => {
    const title = "About Us";
    const description = "Learn more about LEEXMS SRL, your trusted company for accounting services and business consulting in the Dominican Republic.";
    const canonical = "/about-us";
    
    const webPageSchema = generateWebPageSchema(title, description, canonical);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about-us" }
    ]);
    
    const schema = [webPageSchema, breadcrumbSchema];

    return (
        <>
            <SEOMetadata 
                title={title}
                description={description}
                canonical={canonical}
                keywords="about us, LEEXMS, accounting company, consulting Dominican Republic"
                schema={schema}
            />
            <AboutUs />
        </>
    );
};

export default About;