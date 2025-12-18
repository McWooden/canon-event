"use client"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const simpleText = "Platform all-in-one untuk membuat, mengelola, dan mengoptimalkan kampanye iklan digital kamu dengan mudah."

import Image from "next/image"
import MyIcon from "@/app/components/utils/MyIcon";
import AnimatedCounter from "@/app/components/motion/AnimatedCounter";
import cn from "@/app/utils/cn";
import FlyingCloud from "@/app/components/motion/FlyingCloud";
import {useTranslations} from 'next-intl';

export default function Page() {
    const [openReels, setOpenReels] = useState(false)
    const t = useTranslations('Home.hero');


    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [muted, setMuted] = useState(false)

    const toggleMute = () => {
        if (!videoRef.current) return
        videoRef.current.muted = !muted
        setMuted(!muted)
    }

    const mobileSlideUp = {
        initial: { 
            y: "100%", // Mulai dari luar layar (bawah)
            opacity: 1 
        },
        animate: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                type: "spring" as const, 
                stiffness: 300, 
                damping: 30 
            } 
        },
        exit: { 
            y: "100%", 
            opacity: 1, 
            transition: { duration: 0.3 } 
        }
    }
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const heroImageAttributes = [
        {
            iconPath: "/icons/thumb.webp",
            number: 211,
            title: "+ Client",
            subtitle: "kami tangani",
            className: "left-0 bottom-[20%] -translate-x-1/4"
        },
        {
            iconPath: "/icons/money.webp",
            number: 2,
            title: " Miliar",
            subtitle: "Total profit/tahun",
            className: "right-15 -bottom-[10%] translate-x-1/4",
            decimalNumber: 7
        },
        {
            iconPath: "/icons/clock.webp",
            number: 4,
            title: " Tahun",
            subtitle: "Pengalaman",
            className: "-right-[15%] top-[26%]"
        },
    ];

    return (
        <section className="relative md:min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-full max-w-6xl">

                {/* TEXT */}
                <div className="relative flex flex-col gap-5 max-w-xl">
                    <h2 className="text-sm md:text-lg font-semibold text-just-darkpurple">
                        — {t('subtitle')}
                    </h2>

                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                        {t('title')}
                    </h1>

                    <p className="text-sm md:text-base lg:text-xl">
                        {t('description')}
                    </p>

                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .4, duration: .8 }} onClick={() => setOpenReels(true)} className="btn w-full md:w-fit bg-just-brightblue text-just-white text-base md:text-base px-6 py-4 flex items-center gap-2">
                        <MyIcon path="/icons/play_arrow_filled.svg" />
                        <span>{t('button')}</span>
                    </motion.div>

                    <div className="hidden md:flex gap-2.5 absolute -bottom-1/5 md:-bottom-1/4 left-0">
                        <div className="bg-just-orange w-[25px] h-[25px] rounded-full shadow"></div>
                        <div className="bg-just-darkpurple w-[58px] h-[25px] rounded-full shadow"></div>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="relative w-full max-w-[420px] md:max-w-[480px]">
                    <motion.div initial={{ filter: 'blur(20px)', opacity: 0 }} whileInView={{ filter: 'blur(0px)', opacity: 1 }}>
                        <Image
                            src="/assets/hero.webp"
                            alt="gambar"
                            width={480}
                            height={430}
                            className="w-full h-auto object-contain"
                        />
                    </motion.div>

                    {heroImageAttributes.map((attr, index) => (
                        <HeroImageCountingTooltip
                            key={index}
                            {...attr}
                            className={`absolute ${attr.className}`}
                        />
                    ))}
                </div>
            </div>
            <div className="hidden md:flex overflow-visible w-full opacity-5 absolute -top-1/2 -left-1/3">
                <div className="w-[700px] h-[700px] shadow-[4px_4px_4px_5px_#000000] rounded-full"></div>
            </div>

            {/* MODAL REELS DENGAN ANIMATEPRESENCE */}
            <AnimatePresence>
                {openReels && (
                    <div
                        onClick={() => setOpenReels(false)}
                        // items-end di mobile untuk slide-up dari bawah
                        className="fixed inset-0 z-50 bg-black/50 flex items-end md:items-center justify-center"
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-just-white w-full md:max-w-[900px] h-[85vh] md:h-[500px] overflow-hidden flex flex-col md:flex-row p-8 md:p-0 rounded-2xl"
                            
                            // Menerapkan Varian Bersyarat
                            initial={isMobile ? "initial" : "initialDesktop"}
                            animate={isMobile ? "animate" : "animateDesktop"}
                            exit={isMobile ? "exit" : "exitDesktop"}
                            
                            variants={{
                                // Desktop Default (Fade/Scale In & Out)
                                initialDesktop: { opacity: 0, scale: 0.95 },
                                animateDesktop: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
                                exitDesktop: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
                                
                                // Mobile Slide Up
                                initial: mobileSlideUp.initial,
                                animate: mobileSlideUp.animate,
                                exit: mobileSlideUp.exit
                            }}
                        >
                            {/* VIDEO WRAPPER */}
                            <div onClick={toggleMute} className="relative w-full md:w-3/5 h-full rounded-2xl md:rounded-none overflow-hidden">
                                <video
                                ref={videoRef}
                                src="/assets/reels/lihat-feed.mp4"
                                autoPlay
                                loop
                                playsInline
                                controls={false}
                                className="w-full h-full object-cover"
                                />

                                {/* CAPTION MOBILE (NIMPA VIDEO) */}
                                <div className="pointer-events-none md:hidden absolute bottom-0 left-0 w-full p-4 text-white bg-linear-to-t from-black/80 to-transparent">
                                <p className="text-sm">
                                    Kamu butuh marketing yang gak asal ngiklan. Adsvate bisa bantu dari Ads sampai manajemen KOL untuk bikin brand kamu lebih growth.
                                </p>
                                <p className="text-sm mt-1">
                                    Mau coba konsultasi dulu? Free coba hubungi Minsvate via DM Instagram ya👋🏻🤩
                                </p>
                                <p className="text-xs opacity-70 mt-2">
                                    #DigitalMarketing #Adsvate #MarketingAgency
                                </p>
                                </div>
                            </div>

                            {/* DESKTOP TEXT */}
                            <div className="hidden md:flex p-6 flex-col gap-3 text-base bg-white">
                                <p>
                                Kamu butuh marketing yang gak asal ngiklan. Adsvate bisa bantu dari Ads sampai manajemen KOL untuk bikin brand kamu lebih growth.
                                </p>
                                <p>
                                Mau coba konsultasi dulu? Free coba hubungi Minsvate via DM Instagram ya👋🏻🤩
                                </p>
                                <p className="text-blue-700">
                                #DigitalMarketing #Adsvate #MarketingAgency
                                </p>
                                <div className="w-full mt-auto">
                                    <div 
                                        onClick={() => setOpenReels(false)} 
                                        className="btn w-fit ml-auto bg-just-brightblue text-just-white text-base px-12 py-4 flex items-center justify-center gap-2"
                                    >
                                        <span>Tutup</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* MOBILE BUTTON (Hanya Muncul di Mobile) */}
                            {/* Tombol ini akan otomatis muncul dari bawah karena modalnya slide-up dari bawah */}
                            <div className="md:hidden w-full mt-4">
                                <div 
                                    onClick={() => setOpenReels(false)} 
                                    className="btn w-full bg-just-brightblue text-just-white text-base px-6 py-4 flex items-center justify-center gap-2"
                                >
                                    <span>Tutup</span>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            

        </section>
    );
}

function HeroImageCountingTooltip({ className, iconPath, number, title, subtitle, decimalNumber }: { className: string, iconPath: string, number: number, title: string, subtitle: string, decimalNumber?: number | null }) {
    return (
        <FlyingCloud className={cn("absolute", className, 'scale-60 md:scale-75 lg:scale-100')}>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { duration: .3 } }} className="flex gap-4 shrink-0 bg-just-black/90 text-just-white p-2 px-3 rounded-lg shadow-2xl">
                <div className="relative w-full max-w-[46px] h-auto">
                    <MyIcon path={iconPath} width={46} height={46} />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold leading-none">
                        <AnimatedCounter finalNumber={number} />
                        {decimalNumber && (
                            <span>.
                                <AnimatedCounter finalNumber={decimalNumber} duration={3} />
                            </span>
                        )} 
                        {title}
                    </h3>
                    <h4 className="text-xs">{subtitle}</h4>
                </div>
            </motion.div>
        </FlyingCloud>
    );
}