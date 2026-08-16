interface IArticle {
    imgPath: string,
    title: string,
    description: string,
    date: number,
}

const articles: IArticle[] = [
    {
        imgPath: 'ayamgorengbutatik',
        title: 'Ayam Goreng Bu Tatik x Adsvate',
        description: 'Ayam Goreng Bu Tatik resmi berkolaborasi dengan Adsvate, “Saatnya bikin aroma lezat Bu Tatik viral di seluruh timeline.”',
        date: 1761498000000,
    },
    {
        imgPath: 'jetdesign',
        title: 'Jet Design x Adsvate',
        description: 'Kami resmi berkolaborasi dengan tim desain kelas dunia dari Jet Studio 🚀 “Good design meets smart marketing — hasilnya, impact yang nyata.”',
        date: 1761152400000,
    },
    {
        imgPath: 'brandkerudung',
        title: '1.6 Miliar Sales dari 81 Juta Budget',
        description: 'Salah satu brand klien kami menutup periode September dengan hasil luar biasa —  ROI-nya? Bikin hari penuh semangat sampai pagi.',
        date: 1761066000000,
    },
]

export default articles