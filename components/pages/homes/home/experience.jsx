import Link from "next/link";
import image1 from "../../../../public/imagenes/image-home/consultoria-9.jpg";
import image2 from "../../../../public/imagenes/image-home/cnsultoria-6.jpg";
import SkillBar from "../../common/skill-bar";
import SkillBarItem from "../../common/skill-bar";

const Experience = () => {
    const experienceContent = {
        subtitle: 'Éxito Empresarial',
        title: 'Impulsando el Crecimiento Juntos',
        des: 'En LEEXMS SRL, estamos comprometidos con el éxito de tu empresa. Ofrecemos soluciones contables y de consultoría que impulsan el crecimiento y la eficiencia operativa.',
        btn_text: 'Obtener Consultoría',
        btn_link: '/contact',
        progress1: '60',
        progress2: '85',
    }
    return (
        <>
            <div className="experience__area dark__image section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 lg-mb-30">
                            <div className="experience__area-image">
                                <img className="experience__area-image-shape left-right-animate" src="assets/img/shape/dots.png" alt="" />
                                <div className="experience__area-image-item">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="experience__area-image-item mt-65">
                                    <img src={image2.src} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="experience__area-right">
                                <div className="experience__area-right-title">
                                    <span className="subtitle-one">{experienceContent.subtitle}</span>
                                    <h2>{experienceContent.title}</h2>		
                                    <p>{experienceContent.des}</p>
                                </div>
                                <div className="skill__area mt-30">
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Servicios Contables</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress1} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Asesoría Fiscal</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress2} />
                                        </div>
                                    </div>
                                </div>
                                <Link className="btn-two" href={experienceContent.btn_link}>{experienceContent.btn_text}<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;