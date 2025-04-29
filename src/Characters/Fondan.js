import pfp from '../Assets/Characters/charcardPFP/PFP_Fondan.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Fondan/D33 - Design Fondan.jpg'
import artwork01 from '../Assets/Characters/charcardArtwork/Fondan/S171 - Fondan_fix1.webp'
const Fondan = {
    id: "fondan",
    profilePicture: pfp,
    name: "Fondan",
    alternateName: "",
    nameMeaning: {
        en: "Fondan (helpful, researcher, foundation), fondant (cake icing).",
        jp: "",
    },
    gender: { en: "Male", jp: "" },
    species: { en: "Wolf creature", jp: "" },
    height: { en: "1.2 m", jp: "" },
    weight: { en: "30 kg", jp: "" },
    createdDate: { en: "1 March 2025", jp: "" },
    attributes: ["Light"],
    bio: {
        en: "Fondan is a wise anthromorphic wolf with three claws on his hands. His brown fur is rough and unkempt. He has a pair of long white ears and usually wore a white wizard pointy hat and a pair of white half-rim glasses. Fondan also carries a thick spell book that helped to increase his mental prowess. He usually talks in riddles, claimed to know everything in the world.",
        jp: "",
    },
    moves: {
        en: ["Light of Knowledge: Fondan summon a bright light using his spell book to burn his target.", "Light Pillar: Fondan summon a bright light concentrated into several spots from the sky that looks like big pillars of light to burn his target.", "Energy Palm: Fondan can fight in close range using his paws covered with light energy."],
        jp: ["", "", ""],
    },
    artworks: [
        {
            src: artwork00,
            title: "D33 - Design Fondan",
            caption: { en: "The original Fondan reference sheet.", jp: "" }
        },
        {
            src: artwork01,
            title: "S171 - Fondan",
            caption: { en: "Pretty cool Fondan pose with his white shirt and black tie.", jp: "" }
        },
    ]
};
export default Fondan;