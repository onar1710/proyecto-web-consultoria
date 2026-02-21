import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://www.facebook.com/share/16v2xTixWY/?mibextid=wwXIfr" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://www.instagram.com/leexmssrl?igsh=MXUzNW9pbGc3Yjc5ag%3D%3D&utm_source=qr" target="_blank"><i className="fab fa-instagram"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;