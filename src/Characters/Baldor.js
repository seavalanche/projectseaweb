import pfp from '../Assets/Characters/charcardPFP/PFP_Baldor.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Baldor/D30 - Design Baldor.jpg'
const Baldor = {
    id: "baldor",
    profilePicture: pfp,
    name: "Baldor",
    alternateName: "",
    nameMeaning: {
        en: "A distortion of the word 'boulder'.",
        jp: "「boulder（巨石）」の歪めた形。",
    },
    gender: { en: "Genderless", jp: "性別なし" },
    species: { en: "Boulder creature", jp: "巨石のようなクリーチャー" },
    height: { en: "5 m", jp: "5メートル" },
    weight: { en: "60.000 kg", jp: "60,000キログラム" },
    createdDate: { en: "26 February 2025", jp: "2025年2月26日" },
    attributes: ["Nature"],
    bio: {
        en: "Baldor is a huge rock shaped like a big wall, composed of Basalt exterior with granite reinforcements and sandstone interior. Don't mess with him because even as huge and heavy as he is, he still can move quite fast with his two pillar-like arms beside him. He is very determined to outlast everything, even if hundreds of attackers fight him alone. With his root rocks, he also can't be toppled over by anyone except intentionally by himself.",
        jp: "Baldorは大きな壁のような形をした巨大な岩のクリーチャーで、外側は玄武岩、内部は花崗岩で補強され、中心には砂岩が使われている。その巨体と重量にもかかわらず、両脇の柱のような腕を使って素早く動くことができる。何百人もの敵に囲まれても耐え抜く覚悟を持っており、根のように地中に繋がった岩によって、自分の意思以外では倒されることはない。",
    },
    moves: {
        en: [
            "Topplover: Baldor press his body against the target, using his massive weight as a damaging move.",
            "Pebble shards: Baldor summoned many sharp pebbles to pelt the target.",
            "Unmoving: Baldor endures damage by hardening his body."
        ],
        jp: [
            "トップラバー：Baldorはその巨体を相手に押し付け、圧倒的な重量でダメージを与える技。",
            "ペブルシャード：鋭い小石を多数召喚し、相手に向かって一斉に放つ。",
            "不動：Baldorは身体を硬化させ、攻撃を受けながらも動じず耐える。"
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "D30 - Design Baldor",
            caption: { en: "The original Baldor reference sheet.", jp: "Baldorのオリジナル設定資料。" }
        },
    ]
};
export default Baldor;