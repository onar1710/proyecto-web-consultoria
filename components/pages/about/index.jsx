"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import aboutBannerBg from "../../../public/imagenes/image-home/imagen-destacada-banner.jpg";
import AboutMain from "./about";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../common/scroll/scroll-to-top";
import WhoWeAre from "./who-we-are";
import History from "./history";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="Acerca de Nosotros" />
        <HeaderOne />
        <BreadCrumb title="Acerca de Nosotros" innerTitle="Sobre Nuestra Empresa" bgImage={aboutBannerBg} />
        <AboutMain />
            <WhoWeAre />
            <History />
        <div className='all-footer'>
            <FooterTwo />
        </div>
            <ScrollToTop />
      </>
    );
};

export default AboutUs;