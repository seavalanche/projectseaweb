import pfp from '../Assets/Characters/charcardPFP/PFP_Veranite.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Veranite/D34 - Design Veranite.jpg'
const Veranite = {
    id: "veranite",
    profilePicture: pfp,
    name: "Veranite",
    alternateName: "",
    nameMeaning: {
        en: "Veran (faith, loyal, faithful), verán (Spanish, 'ver' = to see).",
        jp: "Veran（信仰、忠実）とスペイン語の「verán」（見る）をかけた名前。",
    },
    gender: { en: "Male", jp: "男性" },
    species: { en: "Fox creature", jp: "キツネのようなクリーチャー" },
    height: { en: "0.5 m", jp: "0.5メートル" },
    weight: { en: "10 kg", jp: "10キログラム" },
    createdDate: { en: "2 March 2025", jp: "2025年3月2日" },
    attributes: ["Void"],
    bio: {
        en: "Veranite is a Fennec fox look-alike with dark fur all over the body and some spots that can glow bright yellow. The fur is as dark as the void itself, but his eyes are bright yellow as bright as a star in the middle of a dark, empty space. Veranite has three tails instead of one, and those tails make it seems like he has a cloak covering his back in a battle. In a dark environment, with all of his glow spots glowing, Veranite might look like a galaxy in the sky.",
        jp: "Veraniteはフェネックに似たキツネの姿をしたクリーチャーで、全身が暗黒のような毛に覆われており、所々に明るい黄色に光るスポットがある。その毛はまるで虚無そのものであり、しかしその瞳は星のように輝く黄色で、暗い宇宙の中にひとつ浮かぶ光のようだ。彼には1本ではなく3本の尻尾があり、それが戦闘中にはマントのように背中を覆って見える。暗闇の中で発光するその姿は、まるで夜空に輝く銀河のように見える。",
    },
    abilities: {
        en: [
            "Darkness Cloak: Veranite's ability to hide from his opponent that always works in a dark environment.",
            "Darkness Search: Veranite's ability to search for all things that will work best in a dark environment.",
        ],
        jp: [
            "闇のマント：暗い環境下で敵から姿を隠す能力。常に成功する。",
            "闇の探索：暗い場所で最も効果的に機能する探索能力。",
        ],
    },
    moves: {
        en: [
            "Void of Uncertainty: Veranite glows and spread dark aura of uncertainty towards everyone nearby, making them doubt themselves and their situation."
        ],
        jp: [
            "不確かなる虚無：Veraniteが光りながら暗いオーラを放ち、周囲の者たちに疑念を抱かせ、自分や状況への自信を失わせる。"
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "D34 - Design Veranite",
            caption: { en: "The original Veranite reference sheet.", jp: "Veraniteのオリジナル設定資料。" }
        },
    ]
};
export default Veranite;