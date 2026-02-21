import Link from 'next/link';
import logo2 from "../../../public/leexms-logo.svg";
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
                <div className="header__area-menubar-right-sidebar-popup-logo">
                <Link href='/'>
                    <img src={logo2.src} alt="logo" />
                </Link>
                </div>
                <p>LEEXMS SRL es tu aliado estratégico para el crecimiento empresarial. Ofrecemos soluciones contables integrales adaptadas a tus necesidades con profesionalismo y confianza.</p>
                <div className="header__area-menubar-right-box-sidebar-popup-contact">
                    <h4 className="mb-30">Contáctanos</h4>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                            <i className="fal fa-phone-alt icon-animation"></i>
                        </div>
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                            <span>Llamar Ahora</span>
                            <h6><a href="tel:+012652689523">+012 652 689 523</a></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                            <i className="fal fa-envelope"></i>
                        </div>
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                            <span>Correo Rápido</span>
                            <h6><a href="mailto:info@leexms.com">info@leexms.com</a></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                            <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                            <span>Dirección de Oficina</span>
                            <h6><a href="#">Santo Domingo, República Dominicana</a></h6>
                        </div>
                    </div>
                </div>
                <div className="header__area-menubar-right-box-sidebar-popup-social">
                    <Social />							
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;