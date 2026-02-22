"use client"
import { useParams, useRouter } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import servicesData from '@/components/data/services-data';

const AsesoriaTributaria = () => {
    const serviceDetails = servicesData?.find((service) => service.id === 'asesoria-tributaria');
    const router = useRouter();
    if (!serviceDetails) {
        return router.push("/404-error");
    }
    const serviceBannerBg = "/linceciado-lergio.jpg";
    return (
        <>
            <ServicesSingle serviceDetails={serviceDetails} bgImage={serviceBannerBg} />
        </>
    );
};

export default AsesoriaTributaria;
