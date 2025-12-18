'use client'

import articles from "@/app/database/articles"
import Image from "next/image"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { motion } from "framer-motion"


export default function Articles() {
  return <section className="flex flex-col gap-8 px-0">
    <div className="flex flex-col gap-8 px-4">
      <h2 className="font-semibold text-2xl lg:text-4xl leading-[150%]">
        <span className="text-just-orange">Cerita</span> <br/> Perjalanan Kami
      </h2>
    </div>

    {/* container scroll hanya aktif di mobile, non-aktif di lg */}
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth lg:overflow-visible lg:snap-none lg:flex-row lg:flex-nowrap lg:justify-start mask-r-from-90% mask-l-from-90% mask-l-from-just-white mask-r-from-just-purple lg:mask-none">
      {articles.map((article, key) => (
        <motion.div
          key={key}
          className="
            w-[calc(100vw-32px)] max-w-[337px] shrink-0 snap-center
            bg-white flex flex-col gap-2.5 px-6 py-8 rounded-2xl
            first:ml-4 last:mr-4
            lg:first:ml-0 lg:last:mr-0 lg:w-auto lg:shrink lg:max-w-none
          "
          initial={{ scale: 0.95, opacity: 0, rotate: -0.5 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: key * 0.1, ease: "easeOut", type: "spring", bounce: 0.3 }}
        >
          <div className="relative w-full md:max-w-[289px] h-[126px] rounded-xl overflow-hidden">
            <Image src={`/assets/articles/${article.imgPath}.webp`} alt={article.imgPath} fill className="object-cover"/>
          </div>
          <div className="flex flex-col gap-2.5">
            <h5 className="font-semibold line-clamp-1">{article.title}</h5>
            <p className="line-clamp-3 text-sm">{article.description}</p>
            <span className="text-sm font-semibold">{format(article.date, "d MMMM", { locale: id })}</span>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="flex flex-col md:flex-row justify-end gap-4 text-end md:items-center px-4">
      <p className="italic text-xs">Adsvate selalu up-to-date!<br/>apa itu libur?</p>
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", bounce: .3, duration: .8, delay: .3 }} className="btn bg-just-purple text-just-white ml-auto md:ml-0">
        Lihat semua
      </motion.div>
    </div>
  </section>
}