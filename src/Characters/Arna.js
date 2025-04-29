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
        jp: "",
    },
    gender: { en: "Female", jp: "" },
    species: { en: "Rabbit creature", jp: "" },
    height: { en: "1 m", jp: "" },
    weight: { en: "12 kg", jp: "" },
    createdDate: { en: "27 February 2025", jp: "" },
    attributes: ["Magical"],
    bio: {
        en: "Arna is a white bunny with a pair of very long ears, usually accompanied by three Mini Arnas. She is a very skilled healer, while the Mini Arnas are very skilled fighters. Arna can also fight, probably fight better than even Mini Arna. But due to her kind behavior, she usually avoids fights and just heals the Mini Arnas throughout a fight to the point of exhaustions. Her ears are a very useful asset in a fight: it can be used to heal, shield, or even damage opponents.",
        jp: "",
    },
    moves: {
        en: ["Endless Heal: Arna uses her life force to heal her subordinates, draining her own life. This is activated as long as her subordinates use moves.", "Shield: Arna tries to endure damages using her long ears.", "Unseen Hit: her subordinate attacks by kicking the target so fast that it looks like a blur."],
        jp: ["", "", ""],
    },
    artworks: [
        {
            src: artwork00,
            title: "D31 - Design Arna",
            caption: { en: "The original Arna reference sheet.", jp: "" }
        },
        {
            src: artwork01,
            title: "S172 - Arna",
            caption: { en: "Arna and her three Mini Arnas.", jp: "" }
        },
    ]
};
export default Arna;