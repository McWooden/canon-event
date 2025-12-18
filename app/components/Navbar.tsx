'use client'
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { useEffect, useState } from "react"
import navlist from "../database/navlist"
import {routing} from '@/i18n/routing';
import {usePathname} from '@/i18n/navigation'
import { useLocale } from 'next-intl'  // Tambahin ini buat get current locale
import { motion, AnimatePresence } from "framer-motion"  // Ensure AnimatePresence is imported

export default function Navbar() {
    const locales = routing.locales
    const currentLocale = useLocale()  // Get current locale (misal 'en' atau 'id')
    const [isScrolled, setIsScrolled] = useState(false)
    // 1. New State for the Mobile Menu
    const [isOpen, setIsOpen] = useState(false)
    const [isLangOpen, setIsLangOpen] = useState(false)
    const pathname = usePathname()

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

    // Bonus: Handle Escape key to close modal
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsLangOpen(false)
        }
        if (isLangOpen) {
            document.addEventListener('keydown', handleEscape)
            return () => document.removeEventListener('keydown', handleEscape)
        }
    }, [isLangOpen])

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
                        src={'/assets/adsvate.webp'}
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
                            href={`${item.path}`}
                        >
                            {item.name}
                        </Link>
                    )}
                </div>
                {/* 3. DESKTOP RIGHT SECTION - Hidden on mobile */}
                <div className="hidden lg:flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-online rounded-full"></div>
                        <span className="text-[16px]">Online</span>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => setIsLangOpen(true)}>
                        {locales.map((lang, index) => (
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
                    <div className="btn bg-just-darkpurple text-just-white">Hubungi Kami</div>
                </div>
                {/* 4. HAMBURGER BUTTON - Visible only on mobile */}
                <div className="lg:hidden flex gap-4">
                    <div className="flex items-center cursor-pointer" onClick={() => setIsLangOpen(true)}>
                        {locales.map((lang, index) => (
                            <div key={index} className="-mr-2 last:mr-0 rounded-full border-2 border-just-white">
                                <Image
                                    src={`/icons/${lang}.webp`}
                                    alt={lang}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {/* Simple CSS Hamburger lines */}
                        <span className="block w-full h-[3px] shadow-md bg-just-darkpurple transition-all duration-300"></span>
                        <span className="block w-full h-[3px] shadow-md bg-just-darkpurple transition-all duration-300"></span>
                        <span className="block w-full h-[3px] shadow-md bg-just-darkpurple transition-all duration-300"></span>
                    </button>
                </div>
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
                    <Image src={'/assets/adsvate.webp'} alt="logo" width={100} height={42} />
                    {/* Mobile Links */}
                    <div className="flex flex-col gap-6">
                        {navlist.map((item, key) =>
                            <Link
                                key={key}
                                className="flex flex-col font-semibold text-xl capitalize pb-2"
                                href={`/${item.path}`}
                                onClick={() => setIsOpen(false)} // Close menu when clicked
                            >
                                <span>{item.name}</span>
                                <span className="text-xs text-just-gray font-normal flex gap-2">{item.detail}</span>
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
            {/* LANG MODAL - Simplified, centered for all devices */}
            <AnimatePresence>
                {isLangOpen && (
                    <motion.div
                        className="fixed inset-0 z-100 bg-black/50 flex items-center justify-center"  // Centered for all
                        onClick={() => setIsLangOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* MODAL BOX - Simple fade/scale for all */}
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl p-6 w-[280px] flex flex-col gap-4 shadow-2xl"  // Fixed width, auto height
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ 
                                duration: 0.3, 
                                ease: "easeOut"
                            }}
                        >
                            <p className="font-semibold text-center text-lg mb-4" aria-label="Select language">Brummmm 🏁?</p>
                            {locales.map((lang) => (
                                <Link
                                    key={lang}
                                    href={pathname}
                                    locale={lang}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl  border border-black/20 w-full hover:bg-gray-50 transition-colors
                                        ${currentLocale === lang ? 'bg-just-brightblue text-white' : 'bg-just-white'}`}  // Highlight active locale
                                    onClick={() => setIsLangOpen(false)}
                                >
                                    <Image
                                        src={`/icons/${lang}.webp`}
                                        alt={lang}
                                        width={24}
                                        height={24}
                                        className="shadow rounded-full"
                                    />
                                    <span className="uppercase font-medium ">{lang}</span>
                                </Link>
                            ))}
                            {/* Optional close button */}
                            <div className="flex gap-2 items-start justify-end">
                                <p className="font-semibold text-center opacity-70" aria-label="Select language">. . .</p>
                                <span className="text-center text-3xl" aria-label="Select language">🤔</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}