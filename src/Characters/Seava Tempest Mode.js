import pfpSeava from '../Assets/Characters/charcardPFP/PFP_SeavaTM.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Seava Tempest Mode/V02.jpg'
import artwork01 from '../Assets/Characters/charcardArtwork/Seava Tempest Mode/S166 - Seava Tempest Mode.jpg'
const SeavaTM = {
    id: "seavaTM",
    profilePicture: pfpSeava,
    profilePicture2: pfpSeava,
    name: "Seava",
    alternateName: "Tempest Mode",
    nameMeaning: {
        en: "A short version of Seavalanche. Tempest is to symbolize the turbulence in Seava's heart. But Seava chose to overpower and control the turbulence instead of letting it loose.",
        jp: "Seavalancheの短縮形です。「Tempest（嵐）」は、Seavaの心にある激しい動揺を象徴しています。しかし、Seavaはその嵐を解き放つのではなく、自らの力で制御することを選びました。",
    },
    gender: { en: "Genderless", jp: "性別なし" },
    species: { en: "Fox-like creature", jp: "キツネのような生き物" },
    height: { en: "1.6 m", jp: "1.6メートル" },
    weight: { en: "50 kg", jp: "50キログラム" },
    createdDate: { en: "3 January 2025", jp: "2025年1月3日" },
    attributes: ["Electric", "Wind", "Water", "Psionic"],
    bio: {
        en: "Seava gained the power of Storm and it affected his form. His eyes glow bright yellow while the Scice become jagged and even more pointy. In this form, Seava is more focused on overpowering and controlling any obstacles more of because he is afraid of the uncertainty if it wasn't.",
        jp: "Seavaは嵐の力を得て、その影響で姿が変化しました。彼の目は明るい黄色に輝き、Sciceはギザギザでさらに鋭くなっています。この姿のSeavaは、障害を力でねじ伏せ、制御しようとする傾向が強くなります。そうしなければ何が起こるかわからないという不安から、恐れを抱いているのです。",
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
            title: "V02",
            caption: { en: "Seava Tempest Mode's reference sheet.", jp: "SeavaのTempest Modeの設定資料です。" }
        },
        {
            src: artwork01,
            title: "S166 - Seava Tempest Mode",
            caption: { en: "Seava Tempest Mode.", jp: "SeavaのTempest Mode。" }
        },
    ]
};
export default SeavaTM;