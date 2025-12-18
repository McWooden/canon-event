'use client'

import Image from "next/image"
import { motion } from "framer-motion"

interface IFeatureCard {
  image: string
  title: string
  detail?: string
  tags?: string[]
  index?: number
}

export function FeatureCard({ image, title, detail, tags, index = 0 }: IFeatureCard) {

  return (
    <motion.div 
      className="flex-1 flex flex-col gap-2 bg-white p-4 text-[10px] rounded-btn overflow-hidden"
      initial={{ opacity: 0, rotate: -2, y: 30 }}
      whileInView={{ opacity: 1, rotate: 0, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ scale: 1.02, rotate: 0 }}
    >
      
      {/* image */}
      <motion.div 
        className="flex items-center justify-center p-4 bg-just-white rounded-3xl"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.1 }}
      >
        <div className="w-30 h-30 relative">
          <Image
            src={`/features/${image}.svg`}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* title selalu kelihatan */}
      <motion.h3 
        className="font-bold text-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
      >
        {title}
      </motion.h3>

      {/* detail + tags muncul dengan animasi smooth */}
      <motion.div 
        className="flex flex-col gap-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
      >
        <p className="text-[10px] leading-relaxed">{detail}</p>
        <div className="flex flex-wrap gap-1">
          {tags?.map((tag, i) => (
            <motion.span 
              key={i} 
              className="text-just-orange text-[10px] px-1 py-0.5 rounded-sm bg-just-orange/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.15 + 0.4 + i * 0.05 }}
            >
              #{tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}


interface IFeatures {
    image: string,
    title: string,
    detail?: string,
    tags?: string[],
}

export default function Features() {
  const features: IFeatures[] = [
    {
      image: "meta",
      title: "Meta Ads",
      detail: "Buat ningkatin jangkauan brand kamu lewat platform iklan resmi dari Facebook!",
      tags: ["Facebook", "Instagram", "Messenger", "Whatsapp"],
    },
    {
      image: "shopee",
      title: "E-Commerce Ads",
      detail: "Iklan berbayar khusus buat toko online di marketplace biar toko kamu makin rame!",
      tags: ["Shopee", "Tokopedia", "Lazada"],
    },
    {
      image: "tiktok",
      title: "Tiktok Ads",
      detail: "Bantu produkmu tampil di feed mereka biar dilihat sama banyak orang",
      tags: ["Tiktok", "BikinViral", "TiktokShop"],
    },
    {
      image: "figma",
      title: "Webs",
      detail: "Bikin situs premium buat pamer produk atau langsung jualan",
      tags: ["Figma", "Design", "NextJS", "Framework"],
    },
  ]

  return (
    <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 px-4">
                <h2 className="font-semibold text-2xl lg:text-4xl leading-[150%]">
                    Apa Yang Kami <br />
                    <span className="text-just-orange">Kerjakan</span>
                </h2>
                <p className="italic text-xs max-w-[218px]">Kami ngerjain banyak hal, mau lihat beberapa?</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
                {features.map((item, i) => (
                <FeatureCard key={i} {...item} index={i} />
                ))}
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-4 text-end md:items-center px-4">
            <p className="italic text-xs">Dari Iklanin produkmu<br/>sampai bikin situs web!</p>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .3, duration: .3, delay: .3 }} className="btn bg-just-darkpurple text-just-white ml-auto md:ml-0">Cek Harga Sekarang!</motion.div>
        </div>
    </section>
  )
}