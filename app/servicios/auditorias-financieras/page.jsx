"use client"
import { useParams, useRouter } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';

const AuditoriasFinancieras = () => {
    const serviceDetails = servicesData?.find((service) => service.id === 'auditorias-financieras');
    const router = useRouter();
    if (!serviceDetails) {
        return router.push("/404-error");
    }
    const serviceBannerBg = "/imagenes/image-home/consultaria-2.jpg";
    return (
        <>
            <ServicesSingle serviceDetails={serviceDetails} bgImage={serviceBannerBg} />
        </>
    );
};

export default AuditoriasFinancieras;
