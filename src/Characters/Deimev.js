import pfp from '../Assets/Characters/charcardPFP/PFP_Deimev.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Deimev/D36 - Design Deimev.jpg'
const Deimev = {
    id: "deimev",
    profilePicture: pfp,
    name: "Deimev",
    alternateName: "",
    nameMeaning: {
        en: "Deem (English: to come to think or judge : consider), domevlo (Ghana: Don't take others at face value), δειμός (Ancient Greek, deimós, 'terror').",
        jp: "Deem（英語: 思考や判断、考慮する）、domevlo（ガーナ語: 他人をそのまま受け入れないこと）、δειμός（古代ギリシャ語、デイモス、「恐怖」）。",
    },
    gender: { en: "Male", jp: "男性" },
    species: { en: "Bull creature", jp: "牛のようなクリーチャー" },
    height: { en: "2 m", jp: "2メートル" },
    weight: { en: "60 kg", jp: "60キログラム" },
    createdDate: { en: "7 March 2025", jp: "2025年3月7日" },
    attributes: ["Wind", "Spirit"],
    bio: {
        en: "Deimev is a big purple bull creature that has wispy endings instead of legs. He floats around with two purple/silver rings behind him called the Judgment Gale. His head has two horns and a big ring accessory on his left ear. He upholds justice no matter the circumstances using his Judgment Gale.",
        jp: "Deimevは、足の代わりにふわふわした端を持つ大きな紫色の牛のようなクリーチャー。彼は「ジャッジメントゲイル」と呼ばれる2つの紫と銀のリングを背後に浮かせながら移動する。彼の頭には2本の角と左耳に大きなリングのアクセサリーがある。どんな状況でも「ジャッジメントゲイル」を使って正義を貫く。",
    },
    moves: {
        en: [
            "Judgment Gale: Deimev's Judgment Gale spins at high speeds, forming a slicing wind that cuts through anything deemed guilty in his eyes.",
            "Unwavering Justice: Deimev's Judgment Gale cannot be stopped or deflected. If someone tries to evade, it adjusts its trajectory automatically, ensuring a guaranteed punishment.",
            "Passive ability - Judgment Recoil: If an attack is justified or hit the target, Deimev got a temporary buff to his strength. On the other hand, if the attack is unjustified or missed the target, Deimev got a temporary debuff to his strength."
        ],
        jp: [
            "ジャッジメントゲイル：Deimevのジャッジメントゲイルが高速で回転し、彼の目で有罪と見なされたものを切り裂く風を生み出す。",
            "揺るぎない正義：Deimevのジャッジメントゲイルは止められず、反射することもない。誰かが回避しようとすると、その軌道を自動で調整し、確実な罰を保証する。",
            "パッシブ能力 - ジャッジメントリコイル：攻撃が正当化されたりターゲットをヒットした場合、Deimevは一時的に強さが強化される。逆に、攻撃が不当であったりターゲットを外した場合、Deimevの強さは一時的に弱化される。"
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "D36 - Design Deimev",
            caption: { en: "The original Deimev reference sheet.", jp: "Deimevのオリジナル設定資料。" }
        },
    ]
};
export default Deimev;