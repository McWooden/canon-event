'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
    const navlist = ['partner', 'workflow', 'harga', 'FAQ']
    const langList = ['en', 'id']

    const [isScrolled, setIsScrolled] = useState(false)
    // 1. New State for the Mobile Menu
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav id="navbar"
                className={
                    `fixed top-0 left-0 right-0 px-8 py-6 flex justify-between items-center font-montserrat z-50
                transition-all duration-300 shadow-lg
                ${isScrolled ? 'bg-just-white' : 'bg-transparent shadow-transparent'}
                ${isOpen && '-translate-y-full'}
                `
                }
            >
                {/* LOGO - Visible on all screens */}
                <div className="relative w-20 h-[34px] md:w-[100px] md:h-[42px] lg:w-[121px] lg:h-[52px]">
                    <Image 
                        src={'/assets/adsvate-logo.webp'} 
                        alt="logo" 
                        fill 
                        style={{ objectFit: 'contain' }} // Pastikan gambar terlihat penuh di dalam wadah
                    />
                </div>

                {/* 2. DESKTOP MENU - Hidden on mobile, Flex on Medium screens+ */}
                <div className="hidden lg:flex gap-5">
                    {navlist.map((item, key) =>
                        <Link
                            key={key}
                            className="font-semibold text-[16px] capitalize"
                            href={`#${item}`}
                        >
                            {item}
                        </Link>
                    )}
                </div>

                {/* 3. DESKTOP RIGHT SECTION - Hidden on mobile */}
                <div className="hidden lg:flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-online rounded-full"></div>
                        <span className="text-[16px]">Online</span>
                    </div>

                    <div className="flex items-center cursor-pointer">
                        <div className="flex">
                            {langList.map((lang, index) => (
                                <div key={index} className="-mr-2 last:mr-0 rounded-full border-2 border-just-white">
                                    <Image
                                        src={`/icons/${lang}.webp`}
                                        alt={lang}
                                        width={28}
                                        height={28}
                                    />
                                </div>
                            ))}
                        </div>
                        <Image
                            src={`/icons/chevron-down.svg`}
                            alt={'chevron-down'}
                            width={28}
                            height={28}
                        />
                    </div>

                    <div className="btn bg-just-darkpurple text-just-white">Hubungi Kami</div>
                </div>

                {/* 4. HAMBURGER BUTTON - Visible only on mobile */}
                <button 
                    className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Simple CSS Hamburger lines */}
                    <span className="block w-full h-[3px] shadow-md bg-just-darkpurple transition-all duration-300"></span>
                    <span className="block w-full h-[3px] shadow-md bg-just-darkpurple transition-all duration-300"></span>
                    <span className="block w-full h-[3px] shadow-md bg-just-darkpurple transition-all duration-300"></span>
                </button>
            </nav>

            {/* 5. MOBILE DRAWER / SIDEBAR */}
            {/* Overlay Background (Optional: dims the rest of the screen) */}
            <div 
                className={`fixed inset-0 bg-just-black/50 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* The Drawer Panel */}
            <div className={`fixed top-0 left-0 w-[75%] max-w-[300px] h-full bg-just-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col p-8 gap-8 h-full overflow-y-auto">
                    {/* Logo in Drawer */}
                    <Image src={'/assets/adsvate-logo.webp'} alt="logo" width={100} height={42} />

                    {/* Mobile Links */}
                    <div className="flex flex-col gap-6">
                        {navlist.map((item, key) =>
                            <Link
                                key={key}
                                className="font-semibold text-xl capitalize border-b border-just-black/25 pb-2"
                                href={`#${item}`}
                                onClick={() => setIsOpen(false)} // Close menu when clicked
                            >
                                {item}
                            </Link>
                        )}
                    </div>

                    {/* Mobile Right Section Items (Moved here for mobile view) */}
                    <div className="mt-auto flex flex-col gap-6">
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-online rounded-full"></div>
                            <span className="text-[16px]">Online</span>
                        </div>
                        
                        <div className="btn w-full bg-just-darkpurple text-just-white flex items-center justify-center py-3">Hubungi Kami</div>
                    </div>
                </div>
            </div>
        </>
    )
}