'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function CallToAction() {
    return <section>
        <div className="relative flex flex-col md:flex-row bg-linear-to-r from-[#FF941C] to-[#FFD400] rounded-4xl justify-center items-center md:items-end overflow-x-hidden">
            <motion.div initial={{ filter: 'blur(20px)', opacity: 0 }} whileInView={{ filter: 'blur(0px)', opacity: 1 }} className="relative w-full aspect-463/326 md:w-1/2 lg:w-[463px] mask-b-from-50% md:mask-none mt-4">
                <Image
                    src="/assets/cta.webp"
                    alt="cta"
                    fill
                    className="object-contain object-bottom pointer-events-none"
                />
            </motion.div>

            <div className="flex flex-col gap-4 lg:gap-8 p-6 lg:p-12 z-10">
                <h2 className="font-bold text-2xl lg:text-3xl max-w-[269px]">Coba Adsvate&nbsp;sekarang</h2>
                <p className="text-sm lg:text-xl">Siapa tau brand kamu next viral<br/>yang ROI-nya gila-gilaan</p>

                <div className="flex flex-col lg:flex-row gap-4 shrink-0 text-sm">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .3, duration: .3, delay: .3 }} className="btn justify-center bg-just-darkpurple text-just-white w-full md:w-fit">Lihat harga</motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .3, duration: .3, delay: .3 }} className="btn justify-center bg-just-white w-full md:w-fit">Konsultasi Gratis Sekarang</motion.div>
                </div>
            </div>

        </div>

    </section>
}