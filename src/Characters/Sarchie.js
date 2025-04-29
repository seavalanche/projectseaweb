import pfp from '../Assets/Characters/charcardPFP/PFP_Sarchie.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Sarchie/D35 - Design Sarchie.jpg'
const Sarchie = {
    id: "sarchie",
    profilePicture: pfp,
    name: "Sarchie",
    alternateName: "",
    nameMeaning: {
        en: "Sachie (Japanese: happiness, blessed), archie (German: truly brave).",
        jp: "",
    },
    gender: { en: "Female", jp: "" },
    species: { en: "Bird creature", jp: "" },
    height: { en: "0.3 m", jp: "" },
    weight: { en: "3 kg", jp: "" },
    createdDate: { en: "4 March 2025", jp: "" },
    attributes: ["Sound"],
    bio: {
        en: "Sarchie is a small, lightweight, hummingbird-like creature with incredible agility. She has a long, slender, and pointed beak. Two short head streamers extend from the top of her head, while two longer tail streamers flow from her bird-like tail, both ending in delicate heart shapes. Her beautiful singing has the power to heal an entire village, yet she can also unleash a piercing screech to disorient her opponents.",
        jp: "",
    },
    moves: {
        en: ["Wingbeat Screech: Sarchie uses her wings combined with her voice to screech loudly at her opponents to hinder their train of thoughts. It can be so loud that it may deafen the target for a short period.", "Hum of the Heavens: Sarchie's specialty in healing using her beautiful singing voice. This move can only heal if everyone nearby can hear sounds.", "Beak Stab: Sarchie uses her beak to stab her target."],
        jp: ["", "", ""],
    },
    artworks: [
        {
            src: artwork00,
            title: "D35 - Design Sarchie",
            caption: { en: "The original Sarchie reference sheet.", jp: "" }
        },
    ]
};
export default Sarchie;