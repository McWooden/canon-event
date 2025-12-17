import Image from "next/image"

interface IFeatureCard {
  image: string
  title: string
  detail?: string
  tags?: string[]
}

export function FeatureCard({ image, title, detail, tags }: IFeatureCard) {

  return (
    <div 
      className="flex-1 flex flex-col gap-2 bg-white p-4 text-[10px] rounded-btn transition-all duration-300 ease-in-out overflow-hidden"
    >
      
      {/* image */}
      <div className="flex items-center justify-center p-4 bg-just-white rounded-3xl">
        <div className="w-30 h-30 relative">
          <Image
            src={`/features/${image}.svg`}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* title selalu kelihatan */}
      <h3 className="font-bold text-xs">{title}</h3>

      {/* detail + tags muncul dengan animasi smooth via state */}
      <div 
        className={`flex flex-col gap-1 transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <p className="text-[10px] leading-relaxed">{detail}</p>
        <div className="flex flex-wrap gap-1">
          {tags?.map((tag, i) => (
            <span key={i} className="text-just-orange text-[10px] px-1 py-0.5 rounded-sm bg-just-orange/10">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
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
                <FeatureCard key={i} {...item} />
                ))}
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-4 text-end md:items-center px-4">
            <p className="italic text-xs">Dari Iklanin produkmu<br/>sampai bikin situs web!</p>
            <div className="btn bg-just-darkpurple text-just-white ml-auto md:ml-0">Cek Harga Sekarang!</div>
        </div>
    </section>
  )
}
