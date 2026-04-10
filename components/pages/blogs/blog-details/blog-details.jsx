import Link from 'next/link';
import Social from '@/components/data/social';
import blogData from '@/components/data/blog-data';
import blogImage1 from "../../../../public/imagenes/image-home/consultaria-1.jpg";
import blogImage2 from "../../../../public/imagenes/image-home/consultaria-2.jpg";
import BlogSidebar from '../blog-sidebar/blog-sidebar';

const BlogSingleMain = ({singleData}) => {
    const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '';
    const blogPost = blogData.slice(0, 3);

    return (
        <>
            <div className="blog__details dark__image section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 lg-mb-50">
                            <div className="blog__details-left dark_image">
                                <img className="img__full" src={singleData.image.src} alt="blog-details-image" />
                                <div className="blog__details-left-meta">
                                    <div className="blog__details-left-meta-left">
                                        <div className="author">
                                            <div className="author-avatar">
                                                <img src="/linceciado-lergio.jpg" alt="avatar" />
                                            </div>
                                        <div className="author-info">
                                                <span>Autor</span>
                                                <h6>Licenciado Lergio</h6>
                                            </div>
                                        </div>                                
                                    </div>
                                    <div className="blog__details-left-meta-content">
                                        <span>Fecha de publicación :</span>
                                        <h6>{singleData.month} {singleData.date}, 2026</h6>
                                    </div>
                                    <div className="blog__details-left-meta-content">
                                        <span>Categoría</span>
                                        <h6>{category}</h6>
                                    </div>
                                </div>
                                <h3 className="mb-20">{singleData.title}</h3>
                                <p>{singleData.des}</p>
                                <p>En LEEXMS SRL, nos enorgullecemos de ofrecer soluciones integrales que transforman negocios y potencian el crecimiento sostenible. Nuestro equipo de expertos está comprometido con la excelencia y la innovación en cada proyecto que emprendemos.</p>
                                <p>Descubre cómo nuestras estrategias personalizadas han ayudado a numerosas empresas a alcanzar sus metas y superar sus expectativas. Desde la optimización de procesos hasta la implementación de tecnologías avanzadas, estamos aquí para guiarte en cada paso del camino.</p>
                                <div className="blog__details-left-box">
                                <i className="fa-sharp fa-solid fa-ditto"></i>
                                    <div>
                                        <h5>"La excelencia en consultoría es nuestro compromiso con tu éxito"</h5>                                
                                        <span>Equipo LEEXMS</span>
                                    </div>
                                </div>
                                <h4 className="mb-20">Estrategias que Impulsan el Éxito Empresarial</h4>
                                <p>Exploramos las mejores prácticas y tendencias del mercado que están revolucionando la forma en que las empresas operan y compiten en el entorno actual. Desde la transformación digital hasta la optimización de recursos, cada artículo está diseñado para proporcionarte insights valiosos y aplicables.</p>
                                <div className="row mt-35 mb-30">
                                    <div className="col-6">                                        
                                        <img className="img__full" src={blogImage1.src} alt="blog-image" />
                                    </div>
                                    <div className="col-6">                                        
                                        <img className="img__full" src={blogImage2.src} alt="blog-image" />
                                    </div>
                                </div>
                                <p>Conoce las voces expertas que abogan por soluciones empresariales innovadoras: desde consultores experimentados hasta líderes empresariales que han transformado sus organizaciones. Compartimos historias que inspiran el cambio, enfatizando la importancia del conocimiento colectivo para forjar un futuro empresarial exitoso.</p>
                                <p>Acompáñanos en este viaje de posibilidades mientras exploramos las diversas opciones disponibles en el mundo de la consultoría empresarial. Desde soluciones personalizadas hasta tecnologías innovadoras,</p>
                                <div className="blog__details-left-tag">
                                    <h6>Etiquetas Relacionadas :</h6>
                                    <div className="all__sidebar-item-tag">
                                        <ul>
                                            {blogPost.map((data, id) => (
                                                <li key={id}><Link href={`/blog/${data.id}`}>{data.title.split(' ').slice(0, 1).join(' ')}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__details-left-author">
                                    <div className="blog__details-left-author-image">
                                        <img src="/linceciado-lergio.jpg" alt="avatar" />
                                    </div>
                                    <div className="blog__details-left-author-content">
                                        <h6>Licenciado Lergio</h6>
                                        <p>Experto en consultoría empresarial con más de 15 años de experiencia ayudando a empresas a alcanzar su máximo potencial.</p>
                                    </div>
                                </div>
                                <div className="blog__details-left-comment mt-60">
                                    <h5 className="mb-30">Comentarios ({singleData.comment})</h5>
                                    <div className="blog__details-left-comment-item">
                                        <div className="blog__details-left-comment-item-comment">
                                            <div className="blog__details-left-comment-item-comment-content">
                                                <h6>Carlos Rodríguez<a href="#"><i className="far fa-reply-all"></i>Responder</a></h6>
                                                <span>18 Ene, 2026  A las 9:PM</span>
                                                <p>Excelente artículo, muy informativo y bien estructurado. Gracias por compartir.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog__details-left-comment-item ml-65 sm-ml-0">
                                        <div className="blog__details-left-comment-item-comment">
                                            <div className="blog__details-left-comment-item-comment-content">
                                                <h6>María González<a href="#"><i className="far fa-reply-all"></i>Responder</a></h6>
                                                <span>18 Ene, 2026  A las 7:PM</span>
                                                <p>Muy útil la información, me ayudó a entender mejor los conceptos de consultoría empresarial.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__details-left-contact mt-60">
                                    <h5>Publicar Comentario</h5>
                                    <p className="mb-30">Tu dirección de correo no será publicada. Los campos requeridos están marcados</p>
                                    <div className="blog__details-left-contact-form">
                                        <form action="#">	
                                            <div className="row">
                                                <div className="col-sm-6 mb-30"> 
                                                    <div className="blog__details-left-contact-form-item contact-item">                                                
                                                        <input type="text" name="name" placeholder="Nombre Completo" required="required" />
                                                    </div>										
                                                </div>
                                                <div className="col-sm-6 sm-mb-30">
                                                    <div className="blog__details-left-contact-form-item contact-item">                                                
                                                        <input type="text" name="email" placeholder="Correo Electrónico" required="required" />											
                                                    </div>									
                                                </div>
                                                <div className="col-sm-12 mb-30"> 
                                                    <div className="blog__details-left-contact-form-item contact-item">                                                
                                                        <input type="text" placeholder="Asunto" required="required" />
                                                    </div>										
                                                </div>
                                                <div className="col-sm-12 mb-30"> 
                                                    <div className="blog__details-left-contact-form-item contact-item">                                                
                                                        <textarea name="message" placeholder="Escribe tu comentario aquí..."></textarea>
                                                    </div>										
                                                </div>
                                                <div className="col-lg-12">										
                                                    <div className="blog__details-left-contact-form-item">
                                                        <button className="btn-one" type="submit">Publicar Comentario</button>
                                                    </div>										
                                                </div>
                                            </div>							
                                        </form>	
                                    </div>						
                                </div>                        
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>          
        </>
    );
};

export default BlogSingleMain;