"use client"
import { useParams, useRouter } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';

const ConsultoriaEmpresarial = () => {
    const serviceDetails = servicesData?.find((service) => service.id === 'consultoria-empresarial');
    const router = useRouter();
    if (!serviceDetails) {
        return router.push("/404-error");
    }
    const serviceBannerBg = "/imagenes/image-home/consultoria-5.jpg";
    return (
        <>
            <ServicesSingle serviceDetails={serviceDetails} bgImage={serviceBannerBg} />
        </>
    );
};

export default ConsultoriaEmpresarial;
