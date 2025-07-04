import pfp from '../Assets/Characters/charcardPFP/PFP_Sarchie.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Sarchie/D35 - Design Sarchie.jpg'
const Sarchie = {
    id: "sarchie",
    profilePicture: pfp,
    name: "Sarchie",
    alternateName: "",
    nameMeaning: {
        en: "Sachie (Japanese: happiness, blessed), archie (German: truly brave).",
        jp: "幸恵（しあわせ・祝福）とドイツ語の「アーチー」（真の勇敢さ）を組み合わせた名前。",
    },
    gender: { en: "Female", jp: "女性" },
    species: { en: "Bird creature", jp: "鳥のようなクリーチャー" },
    height: { en: "0.3 m", jp: "0.3メートル" },
    weight: { en: "3 kg", jp: "3キログラム" },
    createdDate: { en: "4 March 2025", jp: "2025年3月4日" },
    attributes: ["Sound"],
    bio: {
        en: "Sarchie is a small, lightweight, hummingbird-like creature with incredible agility. She has a long, slender, and pointed beak. Two short head streamers extend from the top of her head, while two longer tail streamers flow from her bird-like tail, both ending in delicate heart shapes. Her beautiful singing has the power to heal an entire village, yet she can also unleash a piercing screech to disorient her opponents.",
        jp: "Sarchieは非常に軽くて小さなハチドリのようなクリーチャーで、驚異的な敏捷性を持つ。細長く尖ったくちばしを持ち、頭からは短いストリーマーが2本伸びており、尾からも2本の長いストリーマーが流れている。その両方は繊細なハート型で終わっている。彼女の美しい歌声には村全体を癒す力があるが、鋭い叫びを放って敵を混乱させることもできる。",
    },
    abilities: {
        en: [
            "",
        ],
        jp: [
            "",
        ],
    },
    moves: {
        en: [
            "Wingbeat Screech: Sarchie uses her wings combined with her voice to screech loudly at her opponents to hinder their train of thoughts. It can be so loud that it may deafen the target for a short period.",
            "Hum of the Heavens: Sarchie's specialty in healing using her beautiful singing voice. This move can only heal if everyone nearby can hear sounds.",
            "Beak Stab: Sarchie uses her beak to stab her target."
        ],
        jp: [
            "羽ばたきの悲鳴：翼と声を組み合わせて大音量の悲鳴を放ち、相手の思考を妨げる。非常に大きな音で、一時的に聴覚を失わせることもある。",
            "天のハミング：Sarchieの美しい歌声による回復技。この技は、周囲の全員が音を聞くことができる環境でのみ効果を発揮する。",
            "くちばし突き：鋭いくちばしで相手を突く物理攻撃。",
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "D35 - Design Sarchie",
            caption: { en: "The original Sarchie reference sheet.", jp: "Sarchieのオリジナル設定資料。" }
        },
    ]
};
export default Sarchie;