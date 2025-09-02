import pfpSeava from '../Assets/Characters/charcardPFP/PFP_Seava.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Seava/D05.webp'
import artwork01 from '../Assets/Characters/charcardArtwork/Seava/D01 - Seava Ref v1.webp'
import artwork02 from '../Assets/Characters/charcardArtwork/Seava/D02 - Design 2.webp'
import artwork03 from '../Assets/Characters/charcardArtwork/Seava/D03.webp'
import artwork04 from '../Assets/Characters/charcardArtwork/Seava/D04.webp'
import artwork05 from '../Assets/Characters/charcardArtwork/Seava/D07 - Ko-fi commission banner_dark.webp'
import artwork06 from '../Assets/Characters/charcardArtwork/Seava/D09 - Seava pixelart_enlarged.webp'
import artwork07 from '../Assets/Characters/charcardArtwork/Seava/D11 - Commission Banner v2.webp'
import artwork08 from '../Assets/Characters/charcardArtwork/Seava/S39 - Seava.webp'
import artwork09 from '../Assets/Characters/charcardArtwork/Seava/S49 - Frost Force.webp'
import artwork10 from '../Assets/Characters/charcardArtwork/Seava/S57 - Seava 500x406px.gif'
import artwork11 from '../Assets/Characters/charcardArtwork/Seava/S59 - Seava.webp'
import artwork12 from '../Assets/Characters/charcardArtwork/Seava/S62 - Seava.webp'
import artwork13 from '../Assets/Characters/charcardArtwork/Seava/S69 - Takeaway Food.webp'
import artwork14 from '../Assets/Characters/charcardArtwork/Seava/S124 - Seavas Scice.gif'
import artwork15 from '../Assets/Characters/charcardArtwork/Seava/S135 - Fabulous Seava_A.webp'
import artwork16 from '../Assets/Characters/charcardArtwork/Seava/S156 - Seava and Uzakon.webp'
import artwork17 from '../Assets/Characters/charcardArtwork/Seava/S161 - Seava.webp'
import artwork18 from '../Assets/Characters/charcardArtwork/Seava/S162 - Matching Clothes.webp'
import artwork19 from '../Assets/Characters/charcardArtwork/Seava/S182 - Seava.webp'

const Seava = {
    id: "seava",
    profilePicture: pfpSeava,
    profilePicture2: pfpSeava,
    name: "Seava",
    alternateName: "(Ascended form)",
    nameMeaning: {
        en: "A short version of Seavalanche.",
        jp: "Seavalancheの短縮形。",
    },
    gender: { en: "Genderless", jp: "性別なし" },
    species: { en: "Fox-like creature", jp: "キツネのような生き物" },
    height: { en: "1.6 m", jp: "1.6メートル" },
    weight: { en: "50 kg", jp: "50キログラム" },
    createdDate: { en: "29 October 2021", jp: "2021年10月29日" },
    attributes: ["Water", "Psionic"],
    bio: {
        en: "The village he protected were calling Seava as the Myth Seavalanche’s descendant. Seava is determined and always ready to help whoever needed the help. It is said that even the fiercest foe would cower under the appearance of him.",
        jp: "彼が守っていた村では、SeavaはMyth Seavalancheの子孫と呼ばれていた。Seavaは決意に満ち、助けを求める者には誰にでも手を差し伸べる準備ができている。その姿を見ただけで、どんな凶悪な敵もひるむと言われている。",
    },
    abilities: {
        en: [
            "Levitation: Seava uses his psychic power to levitate.",
            "Telekinesis: Seava uses his psychic power to move things around.",
            "Psyche Soothe: Seava’s innate ability to heal his mental injuries. This ability will numb any sensations from any injuries for the stretch of a battle, promoting heightened focus to end a battle. A Lengthened use of this ability will strain Seava after the battle.",
            "Aquatic Veil: When Seava is underwater, he can summon a shimmering veil of air bubbles that surrounds his head. The bubble veil is created by his fairy and water aura, sustained by a gentle psychic force, glows with a soft, ethereal light, allowing him to breath effortlessly underwater. His psychic power protect him from extreme pressure underwater. The fairy power of the veil enhances his focus and clarity.",
            "Aqua Soothe: Seava’s innate ability to heal his physical injuries. A small amount of restorative water washes over the affected area, promoting faster recovery and providing immediate relief. This ability will not help if the wound is bad and deep.",
        ],
        jp: [
            "レヴィテーション：Seavaは超能力で空中に浮かぶ。",
            "テレキネシス：Seavaは超能力で物体を動かす。",
            "サイキ・スーズ：Seavaの精神的な傷を癒す生得能力。この能力は戦闘中、負傷による感覚を麻痺させ、集中力を高めて戦いを早く終わらせる。長時間使用すると、戦闘後にSeavaの体に負担がかかる。",
            "アクアティック・ヴェール：水中にいる時、Seavaは頭を囲む気泡のヴェールを召喚できる。妖精と水のオーラで作られ、穏やかな超能力で維持されるこのヴェールは、淡く幻想的な光を放ち、水中で楽に呼吸できるようにする。超能力により水圧からも守られ、妖精の力が集中力と明晰さを高める。",
            "アクア・スーズ：Seavaの身体的な傷を癒す生得能力。癒しの水が傷に触れ、回復を促進し即座に安らぎを与える。ただし、深く重い傷には効果がない。",
        ],
    },
    moves: {
        en: [
            "Frost Force: Seava lowers his surrounding temperature until it is cold enough that ice forms, then pushes all of it using his psychic power towards the target.",
            "Scice Attack: Seava uses the Scice to attack. It could bash, slash, wrap, or even change form into showers become Frost Force.",
            "Psychic Maelstrom: Seava unleashes multiple powerful psychic waves relentlessly battering targets’ mind.",
            "Aqua Freeze: Seava shoot a concentrated high-pressure stream of very cold water from his mouth or between two of his paws.",

        ],
        jp: [
            "フロスト・フォース：Seavaは周囲の温度を氷が形成されるほどまで下げ、超能力を使ってその氷を目標に向かって押し出す。",
            "スサイス・アタック：Seavaはスサイスを使って攻撃する。打撃、切り裂き、絡みつき、さらには霧状になってフロスト・フォースに変化することもできる。",
            "サイキック・メイルストロム：Seavaは強力な精神波を連続で放ち、相手の心を容赦なく叩きつける。",
            "アクア・フリーズ：Seavaは口や前足の間から、非常に冷たい高圧の水流を発射する。",
        ],
    },
    artworks: [
        {
            src: artwork00,
            title: "D05",
            caption: { en: "Seava's Updated Reference Sheet.", jp: "Seavaの最新設定資料。" }
        },
        {
            src: artwork01,
            title: "D01 - Seava Ref v1",
            caption: { en: "The original Seava Normal Form reference sheet.", jp: "Seavaの通常形態の初期設定資料。" }
        },
        {
            src: artwork02,
            title: "D02 - Design 2",
            caption: { en: "The original Seava Child Form reference.", jp: "Seava Child Formの初期設定資料。" }
        },
        {
            src: artwork03,
            title: "D03",
            caption: { en: "The original Seava Ascended Form reference sketch.", jp: "Seava Ascended Formの初期スケッチ。" }
        },
        {
            src: artwork04,
            title: "D04",
            caption: { en: "A cropped full face drawing of Seava.", jp: "Seavaの顔をアップにしたイラスト。" }
        },
        {
            src: artwork05,
            title: "D07 - Ko-fi commission banner",
            caption: { en: "The original commission banner drawn with Vesnea.", jp: "Vesneaと一緒に描かれた元のコミッションバナー。" }
        },
        {
            src: artwork06,
            title: "D09 - Seava pixelart",
            caption: { en: "The first ever pixelart of Seava.", jp: "Seavaの初めてのドット絵。" }
        },
        {
            src: artwork07,
            title: "D11 - Commission Banner v2",
            caption: { en: "A commission banner design of Seava and Vesnea.", jp: "SeavaとVesneaのコミッションバナーデザイン。" }
        },
        {
            src: artwork08,
            title: "S39 - Seava",
            caption: { en: "Seava with a comfy cloak!", jp: "快適なマントを身に着けたSeava！" }
        },
        {
            src: artwork09,
            title: "S49 - Frost Force",
            caption: { en: "Seava uses Frost Force.", jp: "Seavaがフロスト・フォースを使用。" }
        },
        {
            src: artwork10,
            title: "S57 - Seava",
            caption: { en: "The first animation with Seava.", jp: "Seavaが登場する初めてのアニメーション。" }
        },
        {
            src: artwork11,
            title: "S59 - Seava",
            caption: { en: "Seava in a forest setting.", jp: "森の中にいるSeava。" }
        },
        {
            src: artwork12,
            title: "S62 - Seava",
            caption: { en: "Seava with his power aura.", jp: "力のオーラをまとったSeava。" }
        },
        {
            src: artwork13,
            title: "S69 - Takeaway Food",
            caption: { en: "Nom Nom!", jp: "もぐもぐタイム！" }
        },
        {
            src: artwork14,
            title: "S124 - Seava's Scice",
            caption: { en: "Seava using Frost Force from the converted Scice.", jp: "変形したスサイスからフロスト・フォースを使うSeava。" }
        },
        {
            src: artwork15,
            title: "S135 - Fabulous Seava",
            caption: { en: "Seava in a fabulous outfit.", jp: "華やかな衣装のSeava。" }
        },
        {
            src: artwork16,
            title: "S156 - Seava and Uzakon",
            caption: { en: "Seava pats Uzakon on the head.", jp: "SeavaがUzakonの頭をなでている。" }
        },
        {
            src: artwork17,
            title: "S161 - Seava",
            caption: { en: "Seava is leaning on a road sign.", jp: "道標にもたれかかるSeava。" }
        },
        {
            src: artwork18,
            title: "S162 - Matching Clothes",
            caption: { en: "Seava posing in a cute school uniform together with Seavalanche and Vesnea.", jp: "SeavaがSeavalancheとVesneaと一緒に可愛い制服姿でポーズをとる。" }
        },
        {
            src: artwork19,
            title: "S182 - Seava",
            caption: { en: "It's a portrait of Seava.", jp: "" }
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
export default Seava;