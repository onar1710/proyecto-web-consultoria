import BlogGrid from "@/components/pages/blogs/blog";
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/components/seo/schema-generator';

const Blog = () => {
    const title = "Blog";
    const description = "Descubre artículos sobre contabilidad, impuestos y consultoría empresarial en República Dominicana.";
    const canonical = "/blog";
    
    const webPageSchema = generateWebPageSchema(title, description, canonical);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" }
    ]);
    
    const schema = [webPageSchema, breadcrumbSchema];

    return (
        <>
            <SEOMetadata 
                title={title}
                description={description}
                canonical={canonical}
                keywords="blog contabilidad, impuestos República Dominicana, consultoría empresarial"
                schema={schema}
            />
            <BlogGrid />
        </>
    );
};

export default Blog;