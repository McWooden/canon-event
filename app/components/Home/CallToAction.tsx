import Link from "next/link"
import Image from "next/image"

export default function CallToAction() {
    return <section>
        <div className="flex bg-linear-to-r from-[#FF941C] to-[#FFD400] rounded-4xl">
            <div className="flex flex-col gap-8 p-12">
                <h2 className="font-bold text-3xl max-w-[269px]">Coba Adsvate&nbsp;sekarang</h2>
                <p className="text-xl">Siapa tau brand kamu next viral<br/>yang ROI-nya gila-gilaan</p>
                <div className="flex flex-col lg:flex-row gap-4">
                    <Link href={'#'} className="btn bg-just-darkpurple text-just-white">Ayo mulai!</Link>            
                    <Link href={'#'} className="btn bg-just-white">Konsultasi gratis sekarang</Link>            
                </div>
            </div>
            <div className="relative w-[463px] h-[326px] mt-auto">
                <Image src={'/assets/cta.webp'} alt="cta" fill className="object-contain"/>
            </div>
        </div>
    </section>
}