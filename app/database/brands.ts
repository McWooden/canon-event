interface IBrands {
    nickname: string, 
    from: 'Instagram' | 'Tiktok' | 'Shopee' | 'Shopee Instagram' | 'Shopee Lazada', 
    name: string, 
    description: string, 
    comment?: string,
    doHavePath?: Boolean
}

const brands: IBrands[] = [
    {
        nickname: 'its.madfood', 
        from: 'Instagram', 
        name: 'KURSUS MASAK BUAT MULAI USAHA', 
        description: '💰 111× ROAS pas launching produk baru — stabil di atas 15× pakai landing page.', 
        comment: '💯 “Kapan lagi nih cuan 100× kayak Mad Food, cuma modal konsep matang dan eksekusi cepat”'
    },
    {
        nickname: 'belzgallery', 
        from: 'Tiktok', 
        name: 'belzgallery', 
        description: '💰 23× ROAS, bantu naikkan trafik organik setelah setahun stuck', 
        comment: '📈 "Belz sempet mandek setahun, tapi sekarang malah meledak — literally balik performa"'
    },
    {
        nickname: 'giantpalaceart', 
        from: 'Shopee Instagram', 
        name: 'Vendor Percetakan & Hampers Unik & Kreatif No 1', 
        description: '💰 10× ROAS, naik 120% dari handling sebelumnya (udah langganan, nih)', 
        comment: '"Udah kayak keluarga sendiri, tiap project selalu naik performanya"'
    },
    {
        nickname: 'rumahsimbahstudio', 
        from: 'Instagram', 
        name: 'Rumah Simbah Studio', 
        description: '💰 230 juta omzet cuma dari 1.7 juta budget — kolaborasi bareng artis besar (Hanung Bramantya, Morgan Oey, Denny Caknan, Brisia Jodie, dll)', 
        comment: '🚀 “Tim kreatifnya gokil, bisa ngangkat engagement bahkan tanpa boost gede”'
    },
    {
        nickname: 'fatcat.id', 
        from: 'Shopee', 
        name: 'MEN APPAREL', 
        description: '💰 10× ROI di GMV Max', 
        comment: '🐱 "ROI-nya gemuk banget, sesuai namanya"'
    },
    {
        nickname: 'ip.collection', 
        from: 'Tiktok', 
        name: 'BY-Hijabstuff🛍️', 
        description: '💰 21× ROAS dari TikTok Ads', 
        comment: '"Konsisten testing dan timing, hasilnya juga konsisten cuan"'
    },
    {
        nickname: 'cleanpro99kinclong', 
        from: 'Tiktok', 
        name: 'Clean Pro 99', 
        description: '💰 19× ROAS di TikTok — padahal brand baru, belum dua bulan jalan', 
        comment: '🥶 "Masih panas baru launch, tapi perform-nya udah kayak pemain lam - kelazz"'
    },
    {
        nickname: 'brey.co', 
        from: 'Instagram', 
        name: 'Jaket | Jacket', 
        description: '💰 17× cuan dari total biaya iklan yang mereka keluarin', 
    },
    {
        nickname: 'BRAND KERUDUNG', 
        from: 'Shopee Lazada', 
        name: 'Clean Pro 99', 
        description: '💰 121× return dari TikTok, 40× dari CPAS, 12× di Lazada.', 
        comment: '🥳 "Multi-channel done right — satu brand, tapi impact-nya kayak punya tim ads besar — Selamat cuan buat brand satu ini"',
        doHavePath: false
    },
    {
        nickname: 'moslem.epic', 
        from: 'Instagram', 
        name: 'Daily Basic Muslim Wear', 
        description: '💰 60× ROAS dari Meta Ads dan CPAS', 
        comment: '🕌 "Kampanye simpel, tapi targetingnya nempel banget di audiensnya"'
    },
    {
        nickname: 'dospices', 
        from: 'Shopee', 
        name: 'Bumbu cabai', 
        description: '💰 21× hasil balik modal dari kampanye yang dijalankan', 
        comment: '🌶️ "Bumbu dapurnya cuan semua — literally setiap klik berasa baliknya"'
    },
    
]

export default brands