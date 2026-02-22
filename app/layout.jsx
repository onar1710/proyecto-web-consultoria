"use client"
import { useEffect } from 'react';
import "./globals.css";
import WhatsAppButton from '@/components/pages/common/whatsapp-button';
import CookieBanner from '@/components/pages/common/cookie-banner';
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateOrganizationSchema } from '@/components/seo/schema-generator';

export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
        // Forzar modo claro permanente
        document.body.classList.remove('dark-mode');
    }, []);

    const organizationSchema = generateOrganizationSchema();

    return (
        <html lang="es">
            <head>
                {/* Preconnect hints for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                
                {/* Critical CSS */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                        /* Critical CSS for above-the-fold content */
                        body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; }
                        .banner__one { min-height: 100vh; background-size: cover; background-position: center; position: relative; }
                        .banner__one-content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white; }
                        .banner__one-content h1 { font-size: 3rem; margin-bottom: 1rem; }
                        .banner__one-content p { font-size: 1.2rem; margin-bottom: 2rem; }
                        .btn { display: inline-block; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: 600; }
                        .btn-one { background: #007bff; color: white; }
                        .btn-one:hover { background: #0056b3; color: white; }
                    `
                }} />
                
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
                <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg" />
                <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-32x32.svg" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
                
                {/* Optimized font loading */}
                <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
                
                <SEOMetadata 
                    schema={organizationSchema}
                />
            </head>
            <body>
                {children}
                <WhatsAppButton />
                <CookieBanner />
            </body>
        </html>
    );
}