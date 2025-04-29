import pfpMythSeavalanche from '../Assets/Characters/charcardPFP/PFP_MythSeavalanche.png'
import artwork01 from '../Assets/Characters/charcardArtwork/MythSeavalanche/V04.jpg'
import artwork02 from '../Assets/Characters/charcardArtwork/MythSeavalanche/S169 - Seavalanche.webp'
import artwork03 from '../Assets/Characters/charcardArtwork/MythSeavalanche/S170 - Some Nights.webp'
import artwork04 from '../Assets/Characters/charcardArtwork/MythSeavalanche/S178 - Myth Seavalanche.webp'
const MythSeavalanche = {
    id: "mythseavalanche",
    profilePicture: pfpMythSeavalanche,
    name: "Seavalanche",
    alternateName: "(aka Myth Seavalanche)",
    nameMeaning: {
        en: "Sea + Avalanche. Calm and Powerful.",
        jp: "",
    },
    gender: { en: "Female", jp: "" },
    species: { en: "Fox-cat creature", jp: "" },
    height: { en: "1.4 m", jp: "" },
    weight: { en: "40 kg", jp: "" },
    createdDate: { en: "6 January 2025", jp: "" },
    attributes: ["Aether", "Nature", "Magical"],
    bio: {
        en: "It is said that the world was incredibly peaceful when they existed. The creature was seen as pure, bright, powerful, intelligent, and kind. No one knows the exact appearance of the Myth Seavalanche.",
        jp: "",
    },
    moves: {
        en: [
            "Permafrost Guard: Seavalanche’s special ability to withstand and remain unaffected by even the most extreme cold temperatures, including those approaching absolute zero.",
            "Neural Implosion: Seavalanche’s final option of psychic attack. A concentrated attack targeting the target’s brain. A psychic force so powerful it collapsed any neural functions of the target’s brain until it is destroyed.",
            "Psionic Dash: Seavalanche’s special ability to move to places in a short distance with no noticeable time delay.",
            "Hydroforce: Seavalanche harnesses her water water attribute to manipulate any body of water. She can change the pressure of water to the point she can even wield any amount of water as a weapon.",
            "Divine Lightburst: Seavalanche channels her fairy power to summon a concentrated beam of magical light, brimming with ethereal energy. This overwhelmingly powerful beam is able to obliterate any obstacles in its path. It Radiating with immensely beautiful colors that affects the mental of anyone experienced it. Those witnessed or struck by the beam find their resolve weakened and their desire to continue fighting dissipating."
        ],
        jp: ["", "", ""],
    },
    artworks: [
        {
            src: artwork01,
            title: "V04",
            caption: { en: "The original Myth Seavalanche reference sheet.", jp: "" }
        },
        {
            src: artwork02,
            title: "S169 - Seavalanche",
            caption: { en: "Seavalanche at her abode.", jp: "" }
        },
        {
            src: artwork03,
            title: "S170 - Some Nights",
            caption: { en: "Some nights do be sad.", jp: "" }
        },
        {
            src: artwork04,
            title: "S178 - Myth Seavalanche",
            caption: { en: "Seavalanche profile at an angle.", jp: "" }
        },
    ]
};
export default MythSeavalanche;