"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import blogBannerBg from "../../../../public/imagenes/imagen-personas-testimonios/our-blog-destacada.jpg";
import BlogGridMain from "./blog-grid";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blog' />
            <HeaderOne />
            <BreadCrumb title="Blog" innerTitle="Blog" bgImage={blogBannerBg} />
            <BlogGridMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;