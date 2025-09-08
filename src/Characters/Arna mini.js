import pfp from '../Assets/Characters/charcardPFP/PFP_Arnamini.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Arna/D31 - Design Arna.jpg'
import artwork01 from '../Assets/Characters/charcardArtwork/Arna/S172 - Arna.webp'
const MiniArna = {
    id: "miniArna",
    profilePicture: pfp,
    profilePicture2: pfp,
    name: "Mini Arna",
    alternateName: "",
    nameMeaning: {
        en: "A portmanteau of the words 'care' and 'N/A'. Mini means small version.",
        jp: "「care（ケア）」と「N/A（該当なし）」を組み合わせた造語です。「Mini」は「小さいバージョン」という意味です。",
    },
    gender: { en: "Male ♂", jp: "男性 ♂" },
    genderColor: "Male",
    species: { en: "Rabbit creature", jp: "ウサギのようなクリーチャー" },
    height: { en: "0.5 m", jp: "1メートル" },
    weight: { en: "4 kg", jp: "12キログラム" },
    createdDate: { en: "27 February 2025", jp: "2025年2月27日" },
    attributes: ["Magical"],
    bio: {
        en: "Three Mini Arnas usually accompany Arna. While the three of them look identical, they are separate beings with their own thoughts and personalities. One thing in common with the three is that they are all agreed with protecting Arna from danger. Despite Arna's frequent protests, the three Mini Arnas will endure any injuries if it means Arna will be safe.",
        jp: "3体のMini Arnaは、通常Arnaに付き添っています。見た目は全く同じですが、それぞれが独立した存在であり、異なる思考や個性を持っています。共通しているのは、全員がArnaを危険から守ることに強く同意している点です。Arnaがどれだけ抗議しても、彼女を守るためなら、Mini Arnaたちは自ら傷つくことも厭いません。",
    },
    abilities: {
        en: [
            "Endless Block: The Mini Arnas have special reflexes that always move to block an attack to protect Arna even if it means it will hurt them.",
        ],
        jp: [
            "エンドレスブロック：Mini Arnaたちは特別な反射神経を持っており、Arnaを守るためなら、どんな攻撃にも即座に反応して身を挺して防ごうとします。たとえ自分が傷つくことになっても。",
        ],
    },
    moves: {
        en: [
            "Shield: Mini Arnas try to endure damages using their bodies.",
            "Unseen Hit: Mini Arnas attack by kicking the target so fast that it looks like a blur. The more hit the target sustained, the more damage this move deals",
            "Tactical Escape: When the Mini Arnas decided they can't win a battle and Arna got hit badly, they will create a distraction using their speed so Arna can escape."
        ],
        jp: [
            "シールド：Mini Arnaたちは、自分の体を使ってダメージを耐えようとします。",
            "見えない一撃：Mini Arnaたちは、あまりにも素早くターゲットを蹴ることで、攻撃がぼやけて見えるほどです。ターゲットが受けたダメージが多いほど、この技の威力も上がります。",
            "タクティカルエスケープ：Mini Arnaたちがこの戦いに勝てないと判断し、Arnaが大きなダメージを受けたとき、彼女を逃がすために自らのスピードを使って陽動を行います。"
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "D31 - Design Arna",
            caption: { en: "The original Arna reference sheet.", jp: "Arnaのオリジナル設定資料。" }
        },
        {
            src: artwork01,
            title: "S172 - Arna",
            caption: { en: "Arna and her three Mini Arnas.", jp: "Arnaと3匹のミニArna。" }
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
export default MiniArna;