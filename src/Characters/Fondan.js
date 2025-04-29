import pfp from '../Assets/Characters/charcardPFP/PFP_Fondan.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Fondan/D33 - Design Fondan.jpg'
import artwork01 from '../Assets/Characters/charcardArtwork/Fondan/S171 - Fondan_fix1.webp'
const Fondan = {
    id: "fondan",
    profilePicture: pfp,
    name: "Fondan",
    alternateName: "",
    nameMeaning: {
        en: "Fondan (helpful, researcher, foundation), fondant (cake icing).",
        jp: "Fondan（助ける人、研究者、基盤）とfondant（ケーキのアイシング）をかけた名前。",
    },
    gender: { en: "Male", jp: "男性" },
    species: { en: "Wolf creature", jp: "オオカミのようなクリーチャー" },
    height: { en: "1.2 m", jp: "1.2メートル" },
    weight: { en: "30 kg", jp: "30キログラム" },
    createdDate: { en: "1 March 2025", jp: "2025年3月1日" },
    attributes: ["Light"],
    bio: {
        en: "Fondan is a wise anthromorphic wolf with three claws on his hands. His brown fur is rough and unkempt. He has a pair of long white ears and usually wore a white wizard pointy hat and a pair of white half-rim glasses. Fondan also carries a thick spell book that helped to increase his mental prowess. He usually talks in riddles, claimed to know everything in the world.",
        jp: "Fondanは三本の爪を持つ賢い人型のオオカミで、茶色い毛は荒く、手入れされていない。長い白い耳があり、白いとんがり帽子と白いハーフリム眼鏡をかけているのが特徴。厚い魔法書を常に携えており、それが彼の知力をさらに高めている。彼はしばしば謎めいた話し方をし、自分は世界のすべてを知っていると主張している。",
    },
    moves: {
        en: [
            "Light of Knowledge: Fondan summon a bright light using his spell book to burn his target.",
            "Light Pillar: Fondan summon a bright light concentrated into several spots from the sky that looks like big pillars of light to burn his target.",
            "Energy Palm: Fondan can fight in close range using his paws covered with light energy."
        ],
        jp: [
            "知識の光：魔法書を使って強烈な光を放ち、敵を焼き尽くす。",
            "光の柱：空から複数の場所に集中的に光を降らせ、巨大な光の柱で敵を焼き払う。",
            "エナジーパーム：近距離での戦闘では、光のエネルギーをまとった掌で攻撃する。"
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "D33 - Design Fondan",
            caption: { en: "The original Fondan reference sheet.", jp: "Fondanのオリジナル設定資料。" }
        },
        {
            src: artwork01,
            title: "S171 - Fondan",
            caption: { en: "Pretty cool Fondan pose with his white shirt and black tie.", jp: "白いシャツと黒いネクタイを着た、かっこいいFondanのポーズ。" }
        },
    ]
};
export default Fondan;