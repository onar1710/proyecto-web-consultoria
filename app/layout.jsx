"use client"
import { useEffect } from 'react';
import "./globals.css";
import SwitchTab from '@/components/pages/common/dark-light';
import WhatsAppButton from '@/components/pages/common/whatsapp-button';
import CookieBanner from '@/components/pages/common/cookie-banner';
import SEOMetadata from '@/components/seo/metadata-generator';
import { generateOrganizationSchema } from '@/components/seo/schema-generator';

export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    const organizationSchema = generateOrganizationSchema();

    return (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
                <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg" />
                <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-32x32.svg" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
                <SEOMetadata 
                    schema={organizationSchema}
                />
            </head>
            <body>
                <SwitchTab />
                {children}
                <WhatsAppButton />
                <CookieBanner />
            </body>
        </html>
    );
}