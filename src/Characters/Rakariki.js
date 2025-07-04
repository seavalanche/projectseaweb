import pfp from '../Assets/Characters/charcardPFP/PFP_Rakariki.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Rakariki/D32 - Design Rakariki.jpg'
const Rakariki = {
    id: "rakariki",
    profilePicture: pfp,
    name: "Rakariki",
    alternateName: "",
    nameMeaning: {
        en: "A distortion to the word 'reckless'.",
        jp: "「reckless（向こう見ず）」をもじった名前。",
    },
    gender: { en: "Male", jp: "男性" },
    species: { en: "Cat creature", jp: "ネコのようなクリーチャー" },
    height: { en: "0.6 m", jp: "0.6メートル" },
    weight: { en: "10 kg", jp: "10キログラム" },
    createdDate: { en: "27 February 2025", jp: "2025年2月27日" },
    attributes: ["Electric"],
    bio: {
        en: "Rakariki is a lean white-furred cat body adorned with yellow lightning stripes. He is a fearless cat due to his long winning streaks in his battles. That claim is proven by his lightning speed and his powerful lightning attack when it's raining. He has lightning-shaped fur on the tip of the ears and even the tail itself. He has a light blue collar on his neck and a yellow circle-shaped pendant as a physical proof of his courage.",
        jp: "Rakarikiは、白くてスリムな体に黄色の稲妻模様をまとったネコのようなクリーチャー。連戦連勝の戦績を誇る彼は、恐れを知らぬ存在として知られている。それを裏付けるかのように、彼は雷のようなスピードと、特に雨天時に威力を増す電撃攻撃を持っている。耳の先や尻尾の先にも雷の形をした毛が生えており、首には淡い水色の首輪と、勇気の証である黄色い丸いペンダントをつけている。",
    },
    abilities: {
        en: [
            "Ultimate Reflex: As if the yellow pendant on his neck were a talisman, he seems to always able to evade attacks using his reflexes even if he doesn't see the incoming attack.",
        ],
        jp: [
            "アルティメットリフレックス：首にかけた黄色のペンダントがまるでお守りであるかのように、Rakarikiは見えない攻撃でさえも反射的に回避できるようです。",
        ],
    },
    moves: {
        en: [
            "Bolt Strike: Rakariki launches himself into his target with a speed of a lightning, damaging the opponent with electricity and physical hit.",
            "Quick Attack: This is an even faster move than Bolt Strike because Rakariki doesn't need to think to use this move. It's useful when he needed to evade an attack or needed to test the opponent's skills.",
            "Lightning: When it's raining, Rakariki can use electricity charges on the cloud to summon a lightning to strike his target. Less accurate and also slower than his Bolt Strike, but more lethal than all of his other moves.",
            "Last Zap: Rakariki's last resort attack when he is already out of energy to sustain himself in a battle. He can choose between fleeing the arena or use this move. But if he chose to do this, he will concentrate all of his power into his pendant and then unleashes the rest of his remaining power everywhere in the hopes that it will do enough damage to defeat his opponent."
        ],
        jp: [
            "ボルトストライク：Rakarikiは稲妻のごときスピードで標的に突進し、電撃と物理の衝撃でダメージを与える。",
            "クイックアタック：ボルトストライクよりもさらに速い技。考える間もなく発動できるため、回避や相手の実力を測る時に便利。",
            "ライトニング：雨が降っている時、Rakarikiは雲の電気を利用して雷を呼び起こし、敵に落とす。この技は命中率と速度は劣るが、威力は彼の他の技を凌駕する。",
            "ラストザップ：Rakarikiが戦闘を続けるエネルギーを失ったときにのみ使える最後の手段。このとき、彼は逃走するか、この技を使うかの選択を迫られます。もしこの技を選べば、ペンダントに残されたすべての力を集中させ、それを一気に解き放ち、相手に十分なダメージを与えることを狙います。"
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "D32 - Design Rakariki",
            caption: { en: "The original Rakariki reference sheet.", jp: "Rakarikiのオリジナル設定資料。" }
        },
    ]
};
export default Rakariki;