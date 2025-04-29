import pfpUzakon from '../Assets/Characters/charcardPFP/PFP_Uzakon.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Uzakon/D18 - Korazu, Uzakon, and Zumiko_full ref.webp'
import artwork01 from '../Assets/Characters/charcardArtwork/Uzakon/S113 - Korazu, Uzakon, Zumiko_wip2.webp'
import artwork02 from '../Assets/Characters/charcardArtwork/Uzakon/S116 - Uzakon.webp'
import artwork03 from '../Assets/Characters/charcardArtwork/Uzakon/S134 - Uzakon.gif'
import artwork04 from '../Assets/Characters/charcardArtwork/Uzakon/S142 - Uzakon.webp'
import artwork05 from '../Assets/Characters/charcardArtwork/Uzakon/S156 - Seava and Uzakon.webp'
import artwork06 from '../Assets/Characters/charcardArtwork/Uzakon/S158 - Korazu, Uzakon, and Zumiko.webp'
import artwork07 from '../Assets/Characters/charcardArtwork/Uzakon/S163 - Elemental Power_full.webp'
const Uzakon = {
    id: "uzakon",
    profilePicture: pfpUzakon,
    name: "Uzakon",
    alternateName: "",
    nameMeaning: {
        en: "An arrangement of Korazu’s name and also 根気 (perserverance).",
        jp: "",
    },
    gender: { en: "Male", jp: "" },
    species: { en: "Cat-bunny creature", jp: "" },
    height: { en: "0.4 m", jp: "" },
    weight: { en: "8 kg", jp: "" },
    createdDate: { en: "4 January 2024", jp: "" },
    attributes: ["Darkness", "Aether"],
    bio: {
        en: "Uzakon is a half cat, half bunny creature that appeared around the time an elderly found Vesnea near a beach. Bearing the power of the moon, Uzakon will use the steady calmness to help the people he knows.",
        jp: "",
    },
    moves: {
        en: [
            "Shadow Eclipse: Uzakon conjures a cloak of darkness that eclipses the area, engulfing foes in a shroud of shadow. This darkness saps away at the strength and resolve of enemies, leaving them vulnerable and disoriented. Those caught within the Shadow Eclipse find their senses dulled and their movements slowed, making them easy prey for Uzakon's subsequent attacks. A more potent manifestation of this ability can even disintegrate objects caught in its path, leaving destruction in its wake.",
            "Dark Resilience: Uzakon's unyielding perseverance manifests as a cloak of darkness, enveloping himself and allies in a shield of resilience. Despite the odds, he stands firm, inspiring those around him to endure even the darkest of trials. This move not only fortifies the resolve of allies but also casts doubt and shadows over enemies, weakening their morale and resolve to confront Uzakon's unwavering determination.",
            "Levitation: Celestial energy grants Uzakon the ability of levitation.",
            "Moonlight Beacon: Uzakon harnesses the calming power of the moon to illuminate even the darkest paths, guiding those who seek his help toward safety and clarity. However, those with ill intent who follow Uzakon feel their strength and will drained, forcing them to abandon their malicious intentions."
        ],
        jp: ["", "", ""],
    },
    artworks: [
        {
            src: artwork00,
            title: "D18 - Korazu, Uzakon, and Zumiko",
            caption: { en: "The original Seavalanche's Three Cats design.", jp: "" }
        },
        {
            src: artwork01,
            title: "S113 - Korazu, Uzakon, Zumiko",
            caption: { en: "The Seavalanche's Three Cats.", jp: "" }
        },
        {
            src: artwork02,
            title: "S116 - Uzakon",
            caption: { en: "Sleeping Uzakon.", jp: "" }
        },
        {
            src: artwork03,
            title: "S134 - Uzakon",
            caption: { en: "Uzakon rotating 360 degrees.", jp: "" }
        },
        {
            src: artwork04,
            title: "S142 - Uzakon",
            caption: { en: "Nyehehehe.", jp: "" }
        },
        {
            src: artwork05,
            title: "S156 - Uzakon",
            caption: { en: "Seava pats Uzakon on the head.", jp: "" }
        },
        {
            src: artwork06,
            title: "S158 - Korazu, Uzakon, and Zumiko",
            caption: { en: "The Seavalanche's Three Cats.", jp: "" }
        },
        {
            src: artwork07,
            title: "S163 - Elemental Power",
            caption: { en: "Korazu's Sun, Uzakon's Moon, Zumiko's Fire.", jp: "" }
        },
    ]
};
export default Uzakon;