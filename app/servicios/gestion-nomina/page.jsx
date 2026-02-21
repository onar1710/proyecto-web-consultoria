"use client"
import { useParams, useRouter } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';

const GestionNomina = () => {
    const serviceDetails = servicesData?.find((service) => service.id === 'gestion-nomina');
    const router = useRouter();
    if (!serviceDetails) {
        return router.push("/404-error");
    }
    const serviceBannerBg = "/imagenes/image-home/consultoria-7.jpg";
    return (
        <>
            <ServicesSingle serviceDetails={serviceDetails} bgImage={serviceBannerBg} />
        </>
    );
};

export default GestionNomina;
