import articles from "@/app/database/articles"
import Image from "next/image"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import Link from "next/link"


export default function Artikel() {

    return <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-2xl lg:text-4xl leading-[150%]"><span className="text-just-orange">Cerita</span> <br/> Perjalana Kami</h2>
        </div>
        <div className="flex flex-wrap flex-col lg:flex-row gap-4">
            {articles.map((article,key) => <div key={key} className="flex-1 md:flex-row lg:flex-col bg-white flex flex-col gap-2.5 px-6 py-8 rounded-2xl">
                <div className="relative w-full md:max-w-[289px] h-[126px] rounded-xl overflow-hidden">
                    <Image src={`/assets/articles/${article.imgPath}.webp`} alt={article.imgPath} fill className="object-cover"/>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h5 className="font-semibold line-clamp-1">{article.title}</h5>
                    <p className="line-clamp-3 text-sm">{article.description}</p>
                    <span className="text-sm font-semibold">{format(article.date, "d MMMM", { locale: id })}</span>
                </div>
            </div>)}
        </div>
        <div className="flex flex-col lg:flex-row justify-end gap-4 text-end lg:items-center">
            <p className="italic text-xs">Adsvate selalu up-to-date!<br/>apa itu libur?</p>
            <Link href={'#'} className="btn bg-just-purple text-just-white ml-auto lg:ml-0">Lihat semua</Link>
        </div>
    </section>
}