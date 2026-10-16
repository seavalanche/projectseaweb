import "../styles/components/Showcase.css";
import img1 from "../Assets/showcase/2d3d.webp";
import img2 from "../Assets/showcase/animation.webp";
import img3 from "../Assets/showcase/storypoem.webp";
import img4 from "../Assets/showcase/calendar.webp";
import vid1 from "../Assets/showcase/as.mp4";
import vid2 from "../Assets/showcase/output.mp4";
import SlantedBanner from "./SlantedBanner";

const showcaseData = [
    {
        title: '2D & 3D Creations',
        description: "I started out drawing 2D Pokémon artworks. Over time, I learned and created a few Live2D models as well as Blender 3D models. However, my main focus is about conveying emotions in 2D artworks.",
        isSlantedBanner: true,
        image: img1,
        videos: [
            { videos: [vid1, vid2], objectPosition: '60% center' },
            { videos: [vid2], objectPosition: 'center center' },
            { videos: [vid1], objectPosition: 'center center' }
        ],
    },
    {
        title: 'Animation',
        description: "There were a few instances where a still 2D artwork wasn't enough to convey the emotions I wanted to express. So, I created a few animations to bring my artworks to life.",
        image: img2,
    },
    {
        title: 'Story & Poem',
        description: "Originally a fan of Pokémon fanfics, I started writing my own stories and poems. Along the way, I created a series of poems with artworks. My current main goal is to create my own original story of Seavalanche.",
        image: img3,
    },
    {
        title: 'Calendar & Themes',
        description: "Starting since 2023, I've created yearly calendars. Learning video editing in the process to create the promotional video. I also created a few themes, which right now is for Blender and Obsidian. Both based on Seavalanche Vesnea's color themes.",
        image: img4,
    },
];

function Showcase() {
    return (
        <div className="showcase-container">
            <div className='generaltitle'>Vesnea's Showcase</div>
            <div className="showcase-album">
                {showcaseData.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`showcase-card ${!isEven ? 'reverse' : ''}`}
                        >
                            <div className="showcase-image-container">
                                {item.isSlantedBanner ? (
                                    <SlantedBanner sections={item.videos} />
                                ) : (
                                    <img src={item.image} alt={item.title} className="showcase-card-image" />
                                )}
                            </div>
                            <div className="showcase-content-container">
                                <h3 className="showcase-card-title">{item.title}</h3>
                                <p className="showcase-card-desc">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Showcase;