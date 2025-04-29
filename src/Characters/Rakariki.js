import pfp from '../Assets/Characters/charcardPFP/PFP_Rakariki.png'
import artwork00 from '../Assets/Characters/charcardArtwork/Rakariki/D32 - Design Rakariki.jpg'
const Rakariki = {
    id: "rakariki",
    profilePicture: pfp,
    name: "Rakariki",
    alternateName: "",
    nameMeaning: {
        en: "A distortion to the word 'reckless'.",
        jp: "",
    },
    gender: { en: "Male", jp: "" },
    species: { en: "Cat creature", jp: "" },
    height: { en: "0.6 m", jp: "" },
    weight: { en: "10 kg", jp: "" },
    createdDate: { en: "27 February 2025", jp: "" },
    attributes: ["Electric"],
    bio: {
        en: "Rakariki is a lean white-furred cat body adorned with yellow lightning stripes. He is a fearless cat due to his long winning streaks in his battles. That claim is proven by his lightning speed and his powerful lightning attack when it's raining. He has lightning-shaped fur on the tip of the ears and even the tail itself. He has a light blue collar on his neck and a yellow circle-shaped pendant as a physical proof of his courage.",
        jp: "",
    },
    moves: {
        en: ["Bolt Strike: Rakariki launches himself into his target with a speed of a lightning, damaging the opponent with electricity and physical hit.", "Quick Attack: This is an even faster move than Bolt Strike because Rakariki doesn't need to think to use this move. It's useful when he needed to evade an attack or needed to test the opponent's skills.", "Lightning: When it's raining, Rakariki can use electricity charges on the cloud to summon a lightning to strike his target. Less accurate and also slower than his Bolt Strike, but more lethal than all of his other moves."],
        jp: ["", "", ""],
    },
    artworks: [
        {
            src: artwork00,
            title: "D32 - Design Rakariki",
            caption: { en: "The original Rakariki reference sheet.", jp: "" }
        },
    ]
};
export default Rakariki;