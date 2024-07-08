import type { Metadata } from 'next';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import '@styles/global.css';

import { IBM_Plex_Sans } from 'next/font/google';



const ibm_plex_sans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700']
});



export const metadata: Metadata = {
    title: 'BuyIllini',
    description: 'The best online marketplace for University of Illinois students!',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={ibm_plex_sans.className}>
                <Navbar />
                <main style={{flex: 1}}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}