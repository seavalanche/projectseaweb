import pfp from '../Assets/Characters/charcardPFP/PFP_Arnamini.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Arna/D31 - Design Arna.jpg'
import artwork01 from '../Assets/Characters/charcardArtwork/Arna/S172 - Arna.webp'
const MiniArna = {
    id: "miniArna",
    profilePicture: pfp,
    name: "Mini Arna",
    alternateName: "",
    nameMeaning: {
        en: " Mini means small version. A portmanteau of the words 'care' and 'N/A'.",
        jp: "「Mini」は「小さいバージョン」という意味です。「care（ケア）」と「N/A（該当なし）」を組み合わせた造語です。",
    },
    gender: { en: "Male", jp: "男性" },
    species: { en: "Rabbit creature", jp: "ウサギのようなクリーチャー" },
    height: { en: "0.5 m", jp: "1メートル" },
    weight: { en: "4 kg", jp: "12キログラム" },
    createdDate: { en: "27 February 2025", jp: "2025年2月27日" },
    attributes: ["Magical"],
    bio: {
        en: "Three Mini Arnas usually accompany Arna. While the three of them look identical, they are separate beings with their own thoughts and personalities. One thing in common with the three is that they are all agreed with protecting Arna from danger. Despite Arna's frequent protests, the three Mini Arnas will endure any injuries if it means Arna will be safe.",
        jp: "3体のMini Arnaは、通常Arnaに付き添っています。見た目は全く同じですが、それぞれが独立した存在であり、異なる思考や個性を持っています。共通しているのは、全員がArnaを危険から守ることに強く同意している点です。Arnaがどれだけ抗議しても、彼女を守るためなら、Mini Arnaたちは自ら傷つくことも厭いません。",
    },
    moves: {
        en: [
            "Shield: Mini Arnas try to endure damages using their bodies.",
            "Unseen Hit: Mini Arnas attack by kicking the target so fast that it looks like a blur. The more hit the target sustained, the more damage this move deals"
        ],
        jp: [
            "シールド：Mini Arnaたちは、自分の体を使ってダメージを耐えようとします。",
            "見えない一撃：Mini Arnaたちは、あまりにも素早くターゲットを蹴ることで、攻撃がぼやけて見えるほどです。ターゲットが受けたダメージが多いほど、この技の威力も上がります。"
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
    ]
};
export default MiniArna;