'use client';

import Link from "next/link"
import { useState } from "react";
import LogoMark from "../ui/LogoMark";
import LogoTypo from "../ui/LogoTypo";

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
]

const MainHeader = () => {
    const [selected, setSelected] = useState(0);
    const [open, setOpen] = useState(false);

    return (
        <header className="container">
            <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href={'/'} className="flex items-end gap-x-1 -m-1.5 p-1.5" onClick={() => setSelected(0)}>
                        <LogoMark className="fill-spine-neutral-800" />
                        <LogoTypo className="fill-spine-neutral-800" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" type="button" onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 rotate-180">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden lg:flex gap-x-6">
                    {links.map((link, index) => (
                        <li key={index} className={`flex flex-col items-center font-poppins font-bold text-web-body-2 mx-6`}>
                            <Link href={link.href} className={`${selected === index ? `text-spine-neutral-800` : `text-spine-neutral-600`}`} onClick={() => setSelected(index)}>
                                {link.name}
                            </Link>
                            <div className={`border-2 rounded-full ${selected === index ? `border-spine-pale-lime` : `border-transparent`} w-5`}></div>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button className="border border-spine-neutral-800 rounded-xl font-poppins font-bold text-button-2 text-spine-neutral-800 px-6 py-3">
                        Sign Up
                    </button>
                </div>
            </nav>
            <div className={`lg:hidden ${open ? `` : `hidden`}`}>
                <div className="fixed inset-0 z-50 bg-white"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-spine-pale-lime/50 via-spine-pale-lime/0 to-white px-6 py-6 sm:max-w-sm">
                    <div className="flex items-center justify-between">
                        <Link href={'/'} className="flex items-end gap-x-1 -m-1.5 p-1.5" onClick={() => setOpen(!open)}>
                            <LogoMark className="fill-spine-neutral-800" />
                            <LogoTypo className="fill-spine-neutral-800" />
                        </Link>
                        <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" type="button" onClick={() => setOpen(!open)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <ul className="space-y-2 py-6">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="block font-poppins font-bold text-web-body-2 -mx-3 px-3 py-2" onClick={() => { setSelected(index); setOpen(!open); }}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="py-6">
                                <button className="block bg-spine-pale-lime border rounded-xl font-poppins font-bold text-button-2 text-spine-neutral-800 -mx-3 px-6 py-3">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader