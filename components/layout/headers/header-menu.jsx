import Link from 'next/link';
import React from 'react';

const MainMenu = () => {
    return (
        <>    
            <ul className="main-menu d-flex flex-row">
                <li className="menu-item"><Link href='/'>Inicio</Link></li>  
                <li className="menu-item"><Link href='/servicios'>Servicios</Link></li>
                <li className="menu-item"><Link href='/nosotros'>Acerca de Nosotros</Link></li>
                <li className="menu-item"><Link href='/blog'>Blog</Link></li>
                <li className="menu-item"><Link href='/contacto'>Contacto</Link></li>      
            </ul>  
        </>
    );
};

export default MainMenu;