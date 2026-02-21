"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import servicesBannerBg from "../../../../public/imagenes/image-home/imagen-destacada-servicios.jpg";
import ServicesMain from "./services";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Nuestros Servicios" />
            <HeaderOne />
            <BreadCrumb title="Nuestros Servicios" innerTitle="Nuestros Servicios" bgImage={servicesBannerBg} />
            <ServicesMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ServicePage;
