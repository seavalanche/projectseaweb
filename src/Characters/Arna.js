import pfp from '../Assets/Characters/charcardPFP/PFP_Arna.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Arna/D31 - Design Arna.jpg'
import artwork01 from '../Assets/Characters/charcardArtwork/Arna/S172 - Arna.webp'
const Arna = {
    id: "arna",
    profilePicture: pfp,
    name: "Arna",
    alternateName: "",
    nameMeaning: {
        en: "A portmanteau of the words 'care' and 'N/A'.",
        jp: "「care（ケア）」と「N/A（該当なし）」を組み合わせた造語。",
    },
    gender: { en: "Female", jp: "女性" },
    species: { en: "Rabbit creature", jp: "ウサギのようなクリーチャー" },
    height: { en: "1 m", jp: "1メートル" },
    weight: { en: "12 kg", jp: "12キログラム" },
    createdDate: { en: "27 February 2025", jp: "2025年2月27日" },
    attributes: ["Magical"],
    bio: {
        en: "Arna is a white bunny with a pair of very long ears, usually accompanied by three Mini Arnas. She is a very skilled healer, while the Mini Arnas are very skilled fighters. Arna can also fight, probably fight better than even Mini Arna. But due to her kind behavior, she usually avoids fights and just heals the Mini Arnas throughout a fight to the point of exhaustions. Her ears are a very useful asset in a fight: it can be used to heal, shield, or even damage opponents.",
        jp: "Arnaは白いウサギの姿をしたクリーチャーで、非常に長い耳を持ち、いつも3匹のミニArnaたちと一緒に行動している。彼女は優れたヒーラーであり、ミニArnaたちは熟練の戦士。Arna自身も戦うことができ、その実力はミニArnaたちを上回るかもしれない。しかし、その優しい性格から、彼女は戦いを避け、戦闘中はミニArnaたちを回復し続けて自分が疲弊するまで尽くす。彼女の長い耳は戦闘でも非常に役立ち、回復、シールド、さらには敵への攻撃にも使える。",
    },
    moves: {
        en: [
            "Endless Heal: Arna uses her life force to heal her three Mini Arnas, draining her own life. This is activated as long as her Mini Arnas use moves.",
            "Shield: Arna tries to endure damages using her long ears."
        ],
        jp: [
            "エンドレスヒール：Arnaは自分の生命力を使って3体のMini Arnaを回復させます。その代わりに自分の命が削られていきます。Mini Arnaたちが技を使い続けている間、この回復は自動的に発動し続けます。",
            "シールド：Arnaは自分の長い耳を使ってダメージを耐えようとします。"
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
export default Arna;