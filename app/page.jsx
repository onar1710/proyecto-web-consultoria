import HomeOne from "@/components/pages/homes/home";
import { generateWebPageSchema } from '@/components/seo/schema-generator';

export const metadata = {
    title: "Inicio - LEEXMS SRL",
    description: "LEEXMS SRL - Servicios contables y consultoría empresarial en República Dominicana. Soluciones integrales para tu empresa.",
    keywords: "LEEXMS, servicios contables, consultoría empresarial, República Dominicana, inicio",
    canonical: "https://leexms.com",
    openGraph: {
        title: "Inicio - LEEXMS SRL",
        description: "LEEXMS SRL - Servicios contables y consultoría empresarial en República Dominicana. Soluciones integrales para tu empresa.",
        type: "website",
        url: "https://leexms.com",
        images: [
            {
                url: "https://leexms.com/banner-completo.png",
                width: 1200,
                height: 630,
                alt: "LEEXMS SRL - Servicios Contables y Consultoría",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Inicio - LEEXMS SRL",
        description: "LEEXMS SRL - Servicios contables y consultoría empresarial en República Dominicana. Soluciones integrales para tu empresa.",
        images: ["https://leexms.com/banner-completo.png"],
    },
};

export default function Home() {
    return <HomeOne />;
}