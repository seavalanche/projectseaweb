import pfp from '../Assets/Characters/charcardPFP/PFP_Deimev.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Deimev/D36 - Design Deimev.jpg'
const Deimev = {
    id: "deimev",
    profilePicture: pfp,
    profilePicture2: pfp,
    name: "Deimev",
    alternateName: "",
    nameMeaning: {
        en: "Deem (English: to come to think or judge : consider), domevlo (Ghana: Don't take others at face value), δειμός (Ancient Greek, deimós, 'terror').",
        jp: "Deem（英語: 思考や判断、考慮する）、domevlo（ガーナ語: 他人をそのまま受け入れないこと）、δειμός（古代ギリシャ語、デイモス、「恐怖」）。",
    },
    gender: { en: "Male ♂", jp: "男性 ♂" },
    genderColor: "Male",
    species: { en: "Bull creature", jp: "牛のようなクリーチャー" },
    height: { en: "2 m", jp: "2メートル" },
    weight: { en: "60 kg", jp: "60キログラム" },
    createdDate: { en: "7 March 2025", jp: "2025年3月7日" },
    attributes: ["Wind", "Spirit"],
    bio: {
        en: "Deimev is a big purple bull creature that has wispy endings instead of legs. He floats around with two purple/silver rings behind him called the Judgment Gale. His head has two horns and a big ring accessory on his left ear. He upholds justice no matter the circumstances using his Judgment Gale.",
        jp: "Deimevは、足の代わりにふわふわした端を持つ大きな紫色の牛のようなクリーチャー。彼は「ジャッジメントゲイル」と呼ばれる2つの紫と銀のリングを背後に浮かせながら移動する。彼の頭には2本の角と左耳に大きなリングのアクセサリーがある。どんな状況でも「ジャッジメントゲイル」を使って正義を貫く。",
    },
    abilities: {
        en: [
            "Judgment Recoil: If an attack is justified or hit the target, Deimev got a temporary buff to his strength. On the other hand, if the attack is unjustified or missed the target, Deimev got a temporary debuff to his strength.",
            "Phasing: As a spirit attribute bearer, Deimev can temporarily phase through solid things without much effort. But with a downside that his weapon Judgment Gale will needed to be left behind as it can't phase through things."
        ],
        jp: [
            "ジャッジメントリコイル：攻撃が正当化されたりターゲットをヒットした場合、Deimevは一時的に強さが強化される。逆に、攻撃が不当であったりターゲットを外した場合、Deimevの強さは一時的に弱化される。",
            "フェイジング：霊属性を持つDeimevは、少ない労力で一時的に物体をすり抜けることができます。ただし、武器である「Judgment Gale」はすり抜けられないため、その場に置いていかなければなりません。"
        ],
    },
    moves: {
        en: [
            "Judgment Gale: Deimev's Judgment Gale spins at high speeds, forming a slicing wind that cuts through anything deemed guilty in his eyes.",
            "Unwavering Justice: Deimev's Judgment Gale cannot be stopped or deflected. If someone tries to evade, it adjusts its trajectory automatically, ensuring a guaranteed punishment.",
            "Horn of Pain: Deimev charges forward using his horns to damage his opponent. If it connects, the receiver will feel short pains on the whole body with a random interval. As long as Deimev is around and is  deeming the receiver to be in the wrong, they will keep receiving random pains.",
            "Ultimate Punishment: Deimev's last resort move that he will use if he strongly believed his opponent is really truly in the wrong the whole time. He will concentrate all of his power onto his Judgment Gale that combined it into a singular, bigger Judgment Gale. Then he will throw it onto his opponent which will always connect whether now or later as the bigger Judgment Gale will circle around until it connects. It can slash through boulders without issues so hiding from it is futile.",
            "Shameful Retreat: Deimev's last resort move that he will use if he realized his judgment has been wrong the whole time. He will leave his Judgment Gale behind and run away phasing through objects without attacking or defending back. "
        ],
        jp: [
            "ジャッジメントゲイル：Deimevのジャッジメントゲイルが高速で回転し、彼の目で有罪と見なされたものを切り裂く風を生み出す。",
            "揺るぎない正義：Deimevのジャッジメントゲイルは止められず、反射することもない。誰かが回避しようとすると、その軌道を自動で調整し、確実な罰を保証する。",
            "ホーン・オブ・ペイン：Deimevは角を使って突進し、相手にダメージを与えます。この攻撃が命中すると、相手の全身にランダムな間隔で短い痛みが走るようになります。そしてDeimevが近くにいて、なおかつ相手を「間違っている」と判断し続けている限り、その痛みは止むことはありません。",
            "アルティメットパニッシュメント：Deimevが相手に一切の正義がないと確信したときにのみ使う最後の手段です。すべての力をJudgment Galeに集中させ、それを融合させて巨大な1つのJudgment Galeへと変化させます。それを投げつけることで、即時でなくても必ず命中します。巨大なJudgment Galeは相手の周囲を旋回し、最終的に確実に当たるため、隠れることは無意味です。岩をも容易く斬るその力は凄まじいものです。",
            "シェイムフルリトリート：自らの判断が完全に誤っていたと気づいたときに使用する、Deimevのもう一つの最後の手段です。Judgment Galeを置き去りにし、一切攻撃も防御もせず、物体をすり抜けながら戦場から逃げ去ります。"
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "D36 - Design Deimev",
            caption: { en: "The original Deimev reference sheet.", jp: "Deimevのオリジナル設定資料。" }
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
export default Deimev;