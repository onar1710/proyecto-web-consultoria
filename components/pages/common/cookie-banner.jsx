"use client";

import { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verificar si el usuario ya aceptó las cookies
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const rejectCookies = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    const viewCookiePolicy = () => {
        window.open('/politica-cookies', '_blank');
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="cookie-banner">
            <div className="cookie-banner-content">
                <div className="cookie-banner-text">
                    <h4>🍪 Política de Cookies</h4>
                    <p>
                        Utilizamos cookies para mejorar su experiencia en nuestro sitio web. 
                        Al continuar navegando, acepta nuestro uso de cookies conforme a nuestra 
                        <button onClick={viewCookiePolicy} className="cookie-link">
                            Política de Cookies
                        </button>.
                    </p>
                </div>
                <div className="cookie-banner-buttons">
                    <button onClick={rejectCookies} className="cookie-btn cookie-btn-reject">
                        Rechazar
                    </button>
                    <button onClick={acceptCookies} className="cookie-btn cookie-btn-accept">
                        Aceptar Todas
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
