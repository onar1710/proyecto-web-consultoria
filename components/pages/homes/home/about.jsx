import shape1 from "../../../../public/assets/img/shape/about-1.png";
import shape2 from "../../../../public/assets/img/shape/about-1-dark.png";
import shape3 from "../../../../public/assets/img/shape/about-2.png";
import shape4 from "../../../../public/assets/img/shape/about-2-dark.png";
import image1 from "../../../../public/imagenes/image-home/consultaria-1.jpg";
import image2 from "../../../../public/imagenes/image-home/imagen-largconsultoria.jpg";
import image3 from "../../../../public/imagenes/image-home/consultaria-2.jpg";
import image4 from "../../../../public/imagenes/image-home/consultaria-4.jpg";
import avatar from "../../../../public/linceciado-lergio.jpg";
import Count from "../../common/count";
import Link from "next/link";

const About = () => {
    const aboutData = {
        count: 15,
        exp: 'Años de Experiencia en Servicios Contables',
        subtitle: 'Acerca de Leexms',
        title: 'Construimos un Mejor Mundo de Negocios',
        description: 'En LEEXMS SRL trabajamos para construir un mejor mundo de negocios, ofreciendo conocimientos y servicios de calidad que generan confianza, impulsan el liderazgo responsable y crean valor sostenible para nuestros clientes, nuestra gente y la comunidad. Reunimos a gente extraordinaria, como tú, para construir un mejor mundo de negocios. Nuestro propósito es ayudar a crear valor a largo plazo para los clientes, las personas y la sociedad, generando confianza en los mercados de capital.',
        author_name: 'Leexms Team',
        author_sub: 'Fundadores',
        btn_title: 'Descubrir Más',
        btn_link: '/nosotros'
    }
    return (
        <div className="about__one dark__image section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 lg-mb-30">
                        <div className="about__one-left">
                            <div className="about__one-left-image">
                                <img className="one" src={image1.src} alt="about-image" />
                                <img className="two" src={image2.src} alt="about-image" />
                                <img className="three" src={image3.src} alt="about-image" />
                                <img className="four" src={image4.src} alt="about-image" />
                            </div>
                            <div className="about__one-left-experience">
                                <h1><Count number={aboutData?.count}/>+</h1>
                                <h6>{aboutData?.exp}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__one-right">
                            <div className="about__one-right-title">
                                <span className="subtitle-one">{aboutData?.subtitle}</span>
                                <h2>{aboutData?.title}</h2>
                                <p>{aboutData?.description}</p>
                            </div>
                            <div className="about__one-right-btn">
                                <div>
                                    <Link className="btn-one" href={aboutData?.btn_link}>{aboutData?.btn_title}<i className="far fa-chevron-double-right"></i></Link>
                                </div>
                                <div className="about__one-right-btn-author">
                                    <div className="about__one-right-btn-author-avatar">
                                        <img src={avatar.src} alt="about-avatar" />
                                    </div>
                                    <div className="about__one-right-btn-author-name">
                                        <span className="text-one">{aboutData?.author_name}</span>
                                        <h6>{aboutData?.author_sub}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="about__one-right-bottom">
                                <div className="about__one-right-bottom-list">
                                    <span><i className="far fa-check"></i>Investigación de mercado.</span>
                                    <span><i className="far fa-check"></i>Proporcionando información al cliente.</span>
                                    <span><i className="far fa-check"></i>Planificación estratégica.</span>
                                </div>
                                <div className="about__one-right-bottom-experience">
                                    <h3><span className="counter">150</span>+</h3>
                                    <h6>Miembros del Equipo Experto</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="about__one-shape-1 dark-n" src={shape1?.src} alt="about-shape" />
            <img className="about__one-shape-1 light-n" src={shape2?.src} alt="about-shape" />
            <img className="about__one-shape-2 dark-n" src={shape3?.src} alt="about-shape" />
            <img className="about__one-shape-2 light-n" src={shape4?.src} alt="about-shape" />
        </div>
    );
};

export default About;