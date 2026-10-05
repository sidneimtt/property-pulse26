import '@/assets/styles/globals.css';

import React from 'react';  

export const metadata = {
    title: 'Property Pulse',
    description: 'Real Estate App built with Next.js 13 and Tailwind CSS',
    keywords: ['Real Estate', 'Next.js', 'Tailwind CSS', 'Property Pulse'],
}

const MainLayout = ({ children }) => {
    return ( <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>);
}
 
export default MainLayout;