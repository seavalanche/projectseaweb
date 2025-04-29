import pfp from '../Assets/Characters/charcardPFP/PFP_Veranite.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Veranite/D34 - Design Veranite.jpg'
const Veranite = {
    id: "veranite",
    profilePicture: pfp,
    name: "Veranite",
    alternateName: "",
    nameMeaning: {
        en: "Veran (faith, loyal, faithful), verán (Spanish, 'ver' = to see).",
        jp: "",
    },
    gender: { en: "Male", jp: "" },
    species: { en: "Fox creature", jp: "" },
    height: { en: "0.5 m", jp: "" },
    weight: { en: "10 kg", jp: "" },
    createdDate: { en: "2 March 2025", jp: "" },
    attributes: ["Void"],
    bio: {
        en: "Veranite is a Fennec fox look-alike with dark fur all over the body and some spots that can glow bright yellow. The fur is as dark as the void itself, but his eyes are bright yellow as bright as a star in the middle of a dark, empty space. Veranite has three tails instead of one, and those tails make it seems like he has a cloak covering his back in a battle. In a dark environment, with all of his glow spots glowing, Veranite might look like a galaxy in the sky.",
        jp: "",
    },
    moves: {
        en: ["Darkness Cloak: Veranite's ability to hide from his opponent that always works in a dark environment.", "Darkness Search: Veranite's ability to search for all things that will work best in a dark environment.", "Void of Uncertainty: Veranite glows and spread dark aura of uncertainty towards everyone nearby, making them doubt themselves and their situation."],
        jp: ["", "", ""],
    },
    artworks: [
        {
            src: artwork00,
            title: "D34 - Design Veranite",
            caption: { en: "The original Veranite reference sheet.", jp: "" }
        },
    ]
};
export default Veranite;