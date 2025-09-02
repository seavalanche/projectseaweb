import pfpVesnea from '../Assets/Characters/charcardPFP/PFP_VesneaBM.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Vesnea Blossom Mode/V01.jpg'
import artwork01 from '../Assets/Characters/charcardArtwork/Vesnea Blossom Mode/S165 - Vesnea Blossom Mode.jpg'
const VesneaBM = {
    id: "vesneaBM",
    profilePicture: pfpVesnea,
    profilePicture2: pfpVesnea,
    name: "Vesnea",
    alternateName: "Blossom Mode",
    nameMeaning: {
        en: "An anagram of Seavalanche. Blossom is to symbolize the growth that Vesnea experiences marked by the leaves adorning her whole body.",
        jp: "Seavalancheのアナグラムです。「Blossom（開花）」は、Vesneaの全身を飾る葉に象徴される成長を表しています。",
    },
    gender: { en: "Female", jp: "女性" },
    species: { en: "Fox-like creature", jp: "キツネのような生き物" },
    height: { en: "1.2 m", jp: "1.2メートル" },
    weight: { en: "35 kg", jp: "35キログラム" },
    createdDate: { en: "31 December 2024", jp: "2024年12月31日" },
    attributes: ["Magical", "Nature"],
    bio: {
        en: "The nature attribute has amplified her cheerful and friendly personality and it evolves into nurture and growth~! In this form, Vesnea realized that helping herself grow is as important as helping others grow.",
        jp: "自然の属性が、彼女の明るくてフレンドリーな性格をさらに引き立て、やがて育みと成長へと進化します〜！この姿のVesneaは、自分自身の成長を助けることも、他の誰かの成長を助けるのと同じくらい大切だと気づいたのです。",
    },
    abilities: {
        en: [
            "Water Breathing: Vesnea can swim with no effort and can breath underwater.",
            "Aqua Regeneration: Vesnea can harness the innate power of water to heal her physical wounds and restore her vitality. This power accelerate her body’s natural healing processes, even able to heal from severe cuts and bruises.",
            "Semi-levitation: Vesnea’s innate ability of levitation using fairy power, but she can only use it in a short time in a short distance."
        ],
        jp: [
            "水中呼吸：Vesneaは努力せずに泳ぐことができ、水中でも呼吸ができます。",
            "アクア再生：Vesneaは水の持つ力を利用して、傷を癒し体力を回復させます。この能力は自然治癒力を加速させ、深い傷や打撲でも回復可能です。",
            "セミ浮遊：Vesneaは妖精の力で短時間・短距離だけ浮遊することができます。",
        ],
    },
    moves: {
        en: [
            "Aqua Blast: Vesnea shoot a concentrated high-pressure stream of water from her mouth or between two of her flippers.",
            "Fairy Bubble Barrage: Vesnea conjures a flurry of magical water bubbles infused with her fairy attribute. When these bubbles hit the target, they release a calming energy that soothes and pacifies, making the opponent lose their will to fight and promoting peace.",
        ],
        jp: [
            "アクアブラスト：Vesneaは口や両方のヒレの間から高圧の水流を放ちます。",
            "フェアリーバブルバラージ：Vesneaは妖精の力を込めた魔法の水泡を無数に生み出します。この泡が相手に当たると、心を癒し戦意を失わせ、平和を促します。",
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "V01",
            caption: { en: "Vesnea Blossom Mode's reference sheet.", jp: "VesneaのBlossom Modeの設定資料です。" }
        },
        {
            src: artwork01,
            title: "S165 - Vesnea Blossom Mode",
            caption: { en: "Vesnea Blossom Mode.", jp: "VesneaのBlossom Mode。" }
        },
    ],
        giftarts: [
        {
            src: "",
            title: "",
            caption: { en: "", jp: "" }
        },
    ],
        commarts: [
        {
            src: "",
            title: "",
            caption: { en: "", jp: "" }
        },
    ]
};
export default VesneaBM;