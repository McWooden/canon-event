'use client'

import Image from 'next/image'
import navlist from '../database/navlist'
import Link from 'next/link'

export default function Footer() {
    const kontakList = [
        {svgPath: 'whatsapp', name: '+62 877-4545-7767'},
        {svgPath: 'instagram', name: '@adsvate'},
        {svgPath: 'email', name: 'info@adsvate.com'},
    ]
    return <footer className="flex flex-col md:flex-row py-16 justify-between lg:px-0">
        <div className='flex flex-col gap-8 justify-between'>
            <Image src='/assets/adsvate.webp' alt='logo adsvate' width={190} height={82}/>
            <div className='flex flex-col mt-4'>
                <span className='text-just-gray text-sm'>©2025 Adsvate. Semua hak dilindungi.</span>
                <span className='text-just-gray text-sm'>Ketentuan Layanan | Kebijakan Privasi</span>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-12 md:gap-14 lg:gap-16 mt-16 md:mt-0'>
            <div className='flex flex-col md:flex-row gap-12 md:gap-14 lg:gap-16'>
                <div className='flex flex-col gap-4'>
                    <span>Navigasi</span>
                    <div className='flex flex-col gap-3'>
                        {navlist.map((link, i) => <Link key={i} href={`#${link}`} className='text-just-gray capitalize'>{link}</Link>)}
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <span>Kontak</span>
                    <div className='flex flex-col gap-3'>
                        {kontakList.map((link, i) => <Link key={i} href={`#${link}`} className='text-just-gray flex gap-3'>
                            <Image src={`/icons/${link.svgPath}.svg`} alt={link.svgPath} width={20} height={20}/>
                            {link.name}
                        </Link>)}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 max-w-[187px]'>
                <span>Yuk, ngobrol!</span>
                <span className='text-just-gray text-[14px]'>Pertanyaan, atau saran? Kami selalu terbuka buat dengerin kamu</span>
            </div>
        </div>
    </footer>
}