import { useState, useEffect, useCallback } from 'react';
import '../styles/Homepage.css'
import { wallpapers } from './data/wallpapers';
import { favpkmn } from './data/favorite-pokemon';
import CharacterBox from '../components/CharacterBox.js';
import Showcase from '../components/Showcase.js';

import { ReactComponent as LogoBluesky } from '../assets/Header/header-bsky.svg'

const friendsData = [
    {
        name: "April",
        pfp: "april.webp",
        link: "https://aprilsflowers.github.io/",
    },
    {
        name: "Enma Jibakoma",
        pfp: "enma.webp",
        link: "https://enmajibakoma.github.io/",
    }
]

const Homepage = () => {
    const [currentCarousel, setCurrentCarousel] = useState(0);
    useEffect(() => {
        if (!wallpapers.length) return;

        const timer = setInterval(() => {
            setCurrentCarousel((prev) => (prev + 1) % wallpapers.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [currentCarousel]);
    const handlePrev = useCallback(() => {
        if (!wallpapers.length) return;
        setCurrentCarousel((prev) =>
            prev === 0 ? wallpapers.length - 1 : prev - 1
        );
    }, []);
    const handleNext = useCallback(() => {
        if (!wallpapers.length) return;
        setCurrentCarousel((prev) => (prev + 1) % wallpapers.length);
    }, []);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                handlePrev();
            } else if (e.key === "ArrowRight") {
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handlePrev, handleNext]);

    return (
        <div>
            <div className="HPcarousel">
                {wallpapers.map((item, idx) => (
                    <div
                        key={item.src || idx}
                        className={`HPcarousel-slide ${idx === currentCarousel ? "active drift" : ""}`}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/hp-carousel/' + item.src})` }}
                    ></div>
                ))}
                <button className="HPcarousel-btn HPcarousel-prev" onClick={handlePrev}>‹</button>
                <button className="HPcarousel-btn HPcarousel-next" onClick={handleNext}>›</button>
                <div className="HPcarousel-indicators">
                    {wallpapers[currentCarousel] && (
                        <div className="HPcarousel-info">
                            <h3>{wallpapers[currentCarousel].title}</h3>
                            <p>{wallpapers[currentCarousel].description}</p>
                        </div>
                    )}
                    {wallpapers.map((_, idx) => (
                        <span
                            key={idx}
                            className={`HPcarousel-dot ${idx === currentCarousel ? "active" : ""}`}
                            onClick={() => setCurrentCarousel(idx)}
                        ></span>
                    ))}
                </div>
            </div>
            <div className='HPheader'>
                <div className='HPheader-head'>
                    <div className='HPheader-side'>
                        <div className='HPheader-size-gender'>
                            Female ♀
                            <span className='pronoun-badge'>She/Her</span>
                        </div>
                        <div className='HPheader-size-favpkmn'>
                            Favorite Pokémon
                            <div className='HPheader-size-favpkmn-list'>
                                {favpkmn.map((item, idx) => (
                                    <div className='HPheader-size-favpkmn-icon'>
                                        <img
                                            key={item.src || idx}
                                            src={process.env.PUBLIC_URL + '/favpkmn/' + item.src}
                                            alt={item.alt}
                                        />
                                        <div className='HPheader-size-favpkmn-name'>{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='HPheader-main'>
                        <h3>Hi~!</h3>
                        <p>I'm Seavalanche Vesnea, but you can just call me Vesnea! I'm a hobbyist digital artist driven by cuteness.</p>
                        <p>My favorite color is baby pink & baby blue. Love cats and foxes.</p>
                        <p>I draw 2D digital illustrations on Clip Studio Paint as my favorite software. But I also create very short animations, some Live2D avatars, and also some 3D models on Blender that works in VRChat!</p>
                    </div>
                </div>
                <div className='HPheader-tail'>
                    <div className='comm-banner'>

                    </div>
                    <div className='follow-me'>
                        <h4>Follow me!</h4>
                        <a className='follow-me-link' href="https://bsky.app/profile/seavalanche.bsky.social" target='_blank' rel="noreferrer">
                            <div className='follow-me-link-icon'><LogoBluesky /></div>
                            <div className='follow-me-link-name'>Bluesky</div>
                        </a>
                    </div>
                    <CharacterBox />
                    <div className='commission-banner-container' >
                        <div className='commission-banner' />
                        <a href="https://ko-fi.com/seavalanche" target='_blank' rel="noreferrer">
                            <div className='commission-link-hover'>&gt;</div>
                            Go here!
                            <div className='commission-link-hover'>&lt;</div>
                        </a>
                    </div>
                    <Showcase />
                    <div className='friends'>
                        <h4>My Friends!</h4>
                        <p>These are my friends' personal website! Go look at their creations!</p>
                        <div className='friends-card-container'>
                            {friendsData.map((friends, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='friends-card'
                                    >
                                        <img src={`${process.env.PUBLIC_URL}/assets/friends-pfp/${friends.pfp}`} alt={friends.name} />
                                        <h6>{friends.name}</h6>
                                        <a href={friends.link} target='_blank' rel="noreferrer">
                                            <div className='friends-link-hover'>&gt;</div>
                                            I wanna visit!
                                            <div className='friends-link-hover'>&lt;</div>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;