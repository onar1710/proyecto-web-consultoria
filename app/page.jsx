import HomeOne from "@/components/pages/homes/home";
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateWebPageSchema } from '@/components/seo/schema-generator';

export default function Home() {
    const title = "Inicio";
    const description = "LEEXMS SRL - Servicios contables y consultoría empresarial en República Dominicana. Soluciones integrales para tu empresa.";
    const canonical = "/";
    
    const webPageSchema = generateWebPageSchema(title, description, canonical);

    return (
        <>
            <SEOMetadata 
                title={title}
                description={description}
                canonical={canonical}
                keywords="LEEXMS, servicios contables, consultoría empresarial, República Dominicana, inicio"
                schema={webPageSchema}
                type="website"
            />
            <HomeOne />
        </>
    );
}