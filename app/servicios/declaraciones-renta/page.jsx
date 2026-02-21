"use client"
import { useParams, useRouter } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';

const DeclaracionesRenta = () => {
    const serviceDetails = servicesData?.find((service) => service.id === 'declaraciones-renta');
    const router = useRouter();
    if (!serviceDetails) {
        return router.push("/404-error");
    }
    const serviceBannerBg = "/imagenes/image-home/consultoria-8.jpg";
    return (
        <>
            <ServicesSingle serviceDetails={serviceDetails} bgImage={serviceBannerBg} />
        </>
    );
};

export default DeclaracionesRenta;
