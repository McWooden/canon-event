
import Image from "next/image"
import MyIcon from "@/app/components/utils/MyIcon";
import AnimatedCounter from "@/app/components/motion/AnimatedCounter";
import cn from "@/app/utils/cn";
import FlyingCloud from "@/app/components/motion/FlyingCloud";

export default function Page() {
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
            className: "right-15 -bottom-[5%] translate-x-1/4",
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
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-full max-w-6xl">

                {/* TEXT */}
                <div className="flex flex-col gap-5 max-w-xl">
                    <h2 className="text-sm md:text-lg font-semibold text-just-darkpurple">
                        — Setiap ide punya potensi besar
                    </h2>

                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                        Kami Wujudkan Ide Kamu
                    </h1>

                    <p className="text-sm md:text-base lg:text-xl">
                        Dari strategi iklan, desain visual, sampai social media management —
                        kami bantu brand kamu tumbuh cepat di dunia digital.
                    </p>

                    <div className="btn w-full md:w-fit bg-just-brightblue text-just-white text-base md:text-base px-6 py-4 flex items-center gap-2">
                        <MyIcon path="/icons/play_arrow_filled.svg" />
                        <span>Mulai Sekarang</span>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="relative w-full max-w-[420px] md:max-w-[480px]">
                    <Image
                        src="/assets/hero.webp"
                        alt="gambar"
                        width={480}
                        height={430}
                        className="w-full h-auto object-contain"
                    />

                    {heroImageAttributes.map((attr, index) => (
                        <HeroImageCountingTooltip
                            key={index}
                            {...attr}
                            className={`absolute ${attr.className}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function HeroImageCountingTooltip({ className, iconPath, number, title, subtitle, decimalNumber }: { className: string, iconPath: string, number: number, title: string, subtitle: string, decimalNumber?: number | null }) {
    return (
        <FlyingCloud className={cn("absolute bg-just-black/90 text-just-white p-2 px-3 rounded-lg", className, 'scale-50 md:scale-75 lg:scale-100')}>
            <div className="flex gap-4 shrink-0">
                <div className="relative w-full max-w-[46px] h-auto">
                    <MyIcon path={iconPath} width={46} height={46} />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold leading-none">
                        <AnimatedCounter finalNumber={number} />
                        {decimalNumber && (
                            <span>.
                                <AnimatedCounter finalNumber={decimalNumber} />
                            </span>
                        )} 
                        {title}
                    </h3>
                    <h4 className="text-xs">{subtitle}</h4>
                </div>
            </div>
        </FlyingCloud>
    );
}
