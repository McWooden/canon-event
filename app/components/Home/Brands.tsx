'use client'

import brands from '@/app/database/brands'
import { chunkArray } from '@/app/utils/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Brands() {
    const brandCols = chunkArray(brands, 3)

    return (
        <section id='brand' className="flex flex-col gap-4 max-w-full overflow-visible px-0">
            <div className='relative font-montserrat md:text-center w-fit md:mx-auto overflow-visible'>
                <div className='flex flex-col px-4'>
                    <div className='relative flex flex-col font-semibold'>
                        <h2 className='text-2xl lg:text-4xl leading-none'>Brand Yang</h2>
                        <h2 className='text-2xl lg:text-4xl'><span className='text-just-orange'>Kolaborasi</span> Sama Kami</h2>
                        <div className='absolute md:hidden flex -top-2 right-0'>
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .3, duration: .3, delay: .9 }} ><Image src={'/assets/sunglasses.webp'} alt='sunglasses' width={32} height={32} className='-translate-x-3'/></motion.div>
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .3, duration: .3, delay: 1.2 }} ><Image src={'/assets/shock.webp'} alt='shock' width={32} height={32} className='-translate-y-1'/></motion.div>
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .3, duration: .3, delay: 1.5 }} ><Image src={'/assets/confetti.webp'} alt='confetti' width={32} height={32} className='translate-y-3'/></motion.div>
                        </div>
                    </div>
                    <p className='italic text-xs lg:text-xl'>Kira kira ada yang kamu kenal ngga nih?</p>
                </div>
                <motion.div 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }} 
                    transition={{ type: "spring", bounce: .3, duration: .3, delay: 1.9 }} 
                    className="absolute hidden md:flex md:-left-[23%] top-0 w-[87px] h-[83px]"
                    >
                    <Image src={'/assets/sunglasses.webp'} alt='sunglasses' fill className="object-contain" />
                    </motion.div>
                    <motion.div 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }} 
                    transition={{ type: "spring", bounce: .3, duration: .3, delay: 2.2 }} 
                    className="absolute hidden md:flex md:-right-[15%] top-0 w-[55px] h-[49px]"
                    >
                    <Image src={'/assets/shock.webp'} alt='shock' fill className="object-contain" />
                    </motion.div>
                    <motion.div 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }} 
                    transition={{ type: "spring", bounce: .3, duration: .3, delay: 2.5 }} 
                    className="absolute hidden md:flex md:-right-[37%] top-0 md:bottom-0 w-[90px] h-[75px]"
                    >
                    <Image src={'/assets/confetti.webp'} alt='confetti' fill className="object-contain" />
                    </motion.div>
            </div>
            
            <div className="relative w-full py-4 md:py-6 lg:py-8 max-w-[1042px] mx-auto">
                <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 md:gap-4 lg:gap-4 pb-2 md:pb-0 mask-r-from-90% mask-l-from-90% mask-l-from-just-white mask-r-from-just-white lg:mask-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as any}>
                    {brandCols.map((brandCol, colIndex) => (
                        <div key={colIndex} className="w-[248px] shrink-0 snap-center flex flex-col gap-4 h-full first:ml-4 lg:first:ml-0 last:mr-4 lg:last:mr-0">
                            {brandCol.map((brand, index) => (
                                <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ type: "spring", bounce: .3, duration: .3, delay: index * 0.05 }} className='font-montserrat flex flex-col flex-1 bg-white p-4 rounded-2xl justify-between'>
                                    {brand.doHavePath === false ? null : <Image src={`/assets/brands/${brand.nickname}.webp`} alt={brand.name} width={64} height={64} onError={e => e.currentTarget.style.display = "none"}/>}
                                    <div className='flex flex-col'>
                                        <h3 className='text-sm font-medium w-full text-nowrap overflow-x-hidden text-ellipsis'>
                                            {brand.nickname} | {brand.from}
                                        </h3>
                                        <h4 className='text-[8px]'>{brand.name}</h4>
                                    </div>
                                    <p className='text-[10px]'>{brand.description}</p>
                                    <p className='text-[10px] italic'>{brand.comment}</p>
                                </motion.div>
                            ))}
                            {colIndex === brandCols.length - 1 && (
                                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .3, duration: .3, delay: .3 }} className='btn bg-just-darkpurple text-just-white text-base'>
                                    Lihat Semua Kolaborasi
                                </motion.div>

                            )}
                        </div>
                        
                    ))}
                </div>
            </div>
            
            <div className='relative px-4 w-fit mx-auto flex gap-2 items-center'>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .3, duration: .3, delay: .6 }}><Image src={'/assets/cocky.webp'} alt='cocky' width={40} height={40}/></motion.div>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .3, delay: .9 }} className='w-fit italic text-xs lg:text-xl'>Nah, brand punyamu mau nambah relasi juga ngga nih?</motion.p>
            </div>
        </section>
    )
}