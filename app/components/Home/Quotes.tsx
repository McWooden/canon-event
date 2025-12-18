'use client'

import { motion } from "framer-motion"

export function QuotesOne() {
    return <section className='text-center justify-center flex flex-col gap-2 h-screen md:h-fit'>
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .3, delay: .3 }}  className='text-base lg:text-3xl leading-[25px] lg:leading-[50px]'>Pernah nggak sih kepikiran <motion.span initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: .8, delay: .3 }} className='font-semibold'>ide keren</motion.span> buat bisnismu, tapi <motion.span initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: .8, delay: .3 }} className='font-semibold'>bingung mulainya dari mana?</motion.span> Tenang, serahin aja ke&nbsp;Adsvate.</motion.h3>
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className='text-xs lg:text-xl italic'>Kami yang kerjain semuanya buatmu.</motion.span>
    </section>
}
export function QuotesTwo() {
    return <section className='text-center justify-center flex flex-col gap-2 h-screen md:h-fit'>
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .3, delay: .3 }}  className='text-base lg:text-3xl leading-[25px] lg:leading-[50px]'>Nggak masalah mulai dari nol — yang penting kamu naik bareng <motion.span initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: .8, delay: .3 }} className='font-semibold'>Adsvate</motion.span> yang tahu cara bikin brand&nbsp;tumbuh</motion.h3>
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className='text-xs lg:text-xl italic'>Semua jadi lebih simpel.</motion.span>
    </section>
}