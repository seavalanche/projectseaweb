import pfpKorazu from '../Assets/Characters/charcardPFP/PFP_Korazu.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Korazu/D18 - Korazu, Uzakon, and Zumiko_full ref.webp'
import artwork01 from '../Assets/Characters/charcardArtwork/Korazu/S113 - Korazu, Uzakon, Zumiko_wip2.webp'
import artwork02 from '../Assets/Characters/charcardArtwork/Korazu/S118 - Korazu.webp'
import artwork03 from '../Assets/Characters/charcardArtwork/Korazu/S133 - Korazu.webp'
import artwork04 from '../Assets/Characters/charcardArtwork/Korazu/S139 - Korazu_pattern.webp'
import artwork05 from '../Assets/Characters/charcardArtwork/Korazu/S158 - Korazu, Uzakon, and Zumiko.webp'
import artwork06 from '../Assets/Characters/charcardArtwork/Korazu/S163 - Elemental Power_full.webp'
const Korazu = {
    id: "korazu",
    profilePicture: pfpKorazu,
    name: "Korazu",
    alternateName: "",
    nameMeaning: {
        en: "An arrangement of the word “courage”",
        jp: "",
    },
    gender: { en: "Male", jp: "" },
    species: { en: "Cat-bird creature", jp: "" },
    height: { en: "0.4 m", jp: "" },
    weight: { en: "8 kg", jp: "" },
    createdDate: { en: "4 January 2024", jp: "" },
    attributes: ["Light", "Aether"],
    bio: {
        en: "Korazu is a half cat, half bird creature that appeared around the time an elderly found Vesnea near a beach. Bearing the power of the sun, Korazu will use the burning courage to help the people he knows.",
        jp: "",
    },
    moves: {
        en: [
            "Luminous Nova: Korazu unleashes a radiant burst of solar energy, engulfing the area in a dazzling explosion of light. The brilliance of the Nova blinds and disorients any who gaze upon it, leaving them vulnerable to subsequent attacks. Objects unfortunate enough to be caught in its path are incinerated by the intense heat, reduced to ashes in the aftermath of the radiant onslaught. Luminous Nova showcases the overwhelming power of Korazu's connection to the Sun element, leaving a trail of destruction in its wake.",
            "Eternal Courage: Korazu's boundless courage shines brightly, infusing his allies with unshakeable resolve and determination. Even in the darkest of moments, he stands firm, a beacon of unwavering bravery. This move not only emboldens allies with renewed vigor but also undermines the confidence of enemies, casting doubt upon their ability to challenge Korazu's eternal courage.",
            "Levitation: Celestial energy grants Korazu the ability of levitation.",
            "Darkness Eraser: Korazu radiates an intense, blinding light that reaches into every corner and shadow. This brilliant aura eradicates any trace of darkness, obliterating those with malicious intent with its overwhelming purity."
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
            title: "S118 - Korazu",
            caption: { en: "Korazu is licking a popsicle.", jp: "" }
        },
        {
            src: artwork03,
            title: "S133 - Korazu",
            caption: { en: "Korazu on a cloud.", jp: "" }
        },
        {
            src: artwork04,
            title: "S139 - Korazu",
            caption: { en: "Korazu with a modest pose.", jp: "" }
        },
        {
            src: artwork05,
            title: "S158 - Korazu, Uzakon, and Zumiko",
            caption: { en: "The Seavalanche's Three Cats.", jp: "" }
        },
        {
            src: artwork06,
            title: "S163 - Elemental Power",
            caption: { en: "Korazu's Sun, Uzakon's Moon, Zumiko's Fire.", jp: "" }
        },
    ]
};
export default Korazu;