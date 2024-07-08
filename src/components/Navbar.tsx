'use client';

import Link from 'next/link';

import navbarStyles from '@styles/navbar.module.css';



export default function Navbar() {
    return (
        <div className={navbarStyles.navbar}>
            <img alt='logop' src='https://buyillini.s3.us-east-2.amazonaws.com/bi-logo' width='50'  /> 
            {/* <NavbarItem title='How It Works' link='/how-it-works' /> */}
        </div>
    );
}



function NavbarItem({ title, link }: { title: string, link: string}) {
    return (
        <Link href={link} className={navbarStyles.navbarItem}>
            <h3>{title}</h3>
        </Link>
    );
}