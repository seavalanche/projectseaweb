import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/CalendarGallery.css'

const carouselData = [
    {
        title: "Seavalanche's 2026 Calendar",
        year: '2026',
        type: 'pokemon',
        src: 'carousel.webp',
        url: 'https://ko-fi.com/s/6a5a609509',
        button: 'Get it from ko-fi',
    }
]
const calendarData = [
    {
        year: '2023',
        src: 'banner.webp',
        calendar: [{
            title: "Seavalanche's 2023 Calendar",
            type: 'pokemon',
            src: 'cover.webp',
            child: 'light',
            childType: '.webp',
            childAmount: '0',
            url: 'https://ko-fi.com/s/7470eb7b05',
            button: 'Get it from ko-fi',
            promotional: 'https://www.youtube.com/watch?v=71XUCsXQrhw',
            promotionalButton: 'Promotional video on YouTube',
            themes: ["light", "dark"],
            variants: ["calendar A4", "desktop 16:9", "mobile 9:16"],
        }]
    },
    {
        year: '2024',
        src: 'banner.webp',
        calendar: [{
            title: "Seavalanche's 2024 Calendar",
            type: 'pokemon',
            src: 'cover.webp',
            child: 'light',
            childType: '.webp',
            childAmount: '0',
            url: 'https://ko-fi.com/s/807a181d60',
            button: 'Get it from ko-fi',
            promotional: 'https://www.youtube.com/watch?v=WVxr6TiXaXA',
            promotionalButton: 'Promotional video on YouTube',
            themes: ["light", "dark"],
            variants: ["calendar A4", "desktop 16:9", "mobile 9:16"],
        },
        {
            title: "Vesnea's 2024 Calendar",
            type: 'vesnea',
            src: 'cover.webp',
            child: 'light',
            childType: '.webp',
            childAmount: '0',
            url: 'https://ko-fi.com/s/03390599f8',
            button: 'Get it from ko-fi',
            promotional: 'https://www.youtube.com/watch?v=c-geJ8fNG6w',
            promotionalButton: 'Promotional video on YouTube',
            themes: ["light", "dark"],
            variants: ["calendar A4", "desktop 16:9", "mobile 9:16"],
        }]
    },
    {
        year: '2025',
        src: 'banner.webp',
        calendar: [{
            title: "Seavalanche's 2025 Calendar",
            type: 'pokemon',
            src: 'cover.webp',
            child: 'light',
            childType: '.webp',
            childAmount: '0',
            url: 'https://ko-fi.com/s/712f080cfc',
            button: 'Get it from ko-fi',
            promotional: 'https://www.youtube.com/watch?v=qzy4Emktg18',
            promotionalButton: 'Promotional video on YouTube',
            themes: ["light", "dark"],
            variants: ["calendar A4", "desktop 16:9", "mobile 9:16"],
        }, {
            title: "Vesnea 2025 Calendar",
            type: 'vesnea',
            src: 'cover.webp',
            child: 'light',
            childType: '.webp',
            childAmount: '0',
            url: 'https://ko-fi.com/s/ee9fbdc42e',
            button: 'Get it from ko-fi',
            promotional: 'https://www.youtube.com/watch?v=1fduX0kgkjI',
            promotionalButton: 'Promotional video on YouTube',
            themes: ["light", "dark"],
            variants: ["calendar A4", "desktop 16:9", "mobile 9:16"],
        }]
    },
    {
        year: '2026',
        src: 'banner.webp',
        calendar: [{
            title: "Seavalanche's 2026 Calendar",
            type: 'pokemon',
            src: 'cover.webp',
            child: 'light',
            childType: '.webp',
            childAmount: '15',
            url: 'https://ko-fi.com/s/6a5a609509',
            button: 'Get it from ko-fi',
            promotional: 'https://www.youtube.com/watch?v=01sO2_2b4Bs',
            promotionalButton: 'Promotional video on YouTube',
            themes: ["light", "dark"],
            variants: ["calendar A4", "desktop 16:9", "mobile 9:16"],
        }]
    }
]

const CalendarGallery = () => {
    return (
        <div className='generalbody'>
            <div className='generalbigtitle'>
                Calendar Gallery
            </div>
            <div className='generaltitle'>
                This is a gallery for the calendars I've made since 2023!
            </div>
            <div className='calendar-carousel'>
                <h4>Latest Calendar!</h4>
                {carouselData.map((item, index) => (
                    <div key={index} className='calendar-carousel-card'>
                        <img src={`${process.env.PUBLIC_URL}/assets/calendar-gallery/${item.year}/${item.type}/${item.src}`} alt={item.title} />
                        <h5>{item.title}</h5>
                        {item.path ? (
                            <Link to={item.path}>
                                <button>{item.button}</button>
                            </Link>
                        ) : (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" >
                                <button>{item.button}</button>
                            </a>
                        )}
                    </div>
                ))}
            </div>
            <div className='calendar-showcase'>
                {calendarData.map((yearGroup, index) => (
                    <div key={index} className='calendar-banner-container'>
                        <div
                            className='calendar-banner'
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/calendar-gallery/${yearGroup.year}/${yearGroup.src})` }}
                        >
                            <span className='calendar-banner-blur' />
                            <span className='calendar-banner-title'>{yearGroup.year}</span>
                        </div>
                        <div className='calendar-card-wrapper'>
                            {yearGroup.calendar.map((childItem, childIndex) => (
                                // <div key={childIndex} className='calendar-card'>
                                //     <img src={`${process.env.PUBLIC_URL}/assets/calendar-gallery/${yearGroup.year}/${childItem.type}/${childItem.src}`} alt={childItem.title} />
                                //     <h5>{childItem.title}</h5>
                                //     {childItem.path ? (
                                //         <Link to={childItem.path}>
                                //             <button>{childItem.button}</button>
                                //         </Link>
                                //     ) : (
                                //         <a href={childItem.url} target="_blank" rel="noopener noreferrer">
                                //             <button>{childItem.button}</button>
                                //         </a>
                                //     )}
                                //     <a className='calendar-promotional' href={childItem.promotional} target="_blank" rel="noopener noreferrer">
                                //         <div className='calendar-link-hover'>&gt;</div>
                                //         {childItem.promotionalButton}
                                //         <div className='calendar-link-hover'>&lt;</div>
                                //     </a>
                                // </div>
                                <CalendarCard key={childIndex} year={yearGroup.year} childItem={childItem} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const CalendarCard = ({ year, childItem }) => {
    const totalChildren = parseInt(childItem.childAmount);
    const images = [
        childItem.src,
        ...Array.from({ length: totalChildren }, (_, i) => {
            const fileNum = (i + 1).toString().padStart(2, '0');
            return `${childItem.child}-${fileNum}${childItem.childType}`;
        })
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className='calendar-card'>
            <div className="calendar-card-image-container">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/calendar-gallery/${year}/${childItem.type}/${images[currentIndex]}`}
                    alt={childItem.title}
                />
                <button onClick={prevImage} className="calendar-card-image-btn calendar-left">‹</button>
                <span className="calendar-card-image-counter">{currentIndex + 1} / {images.length}</span>
                <button onClick={nextImage} className="calendar-card-image-btn calendar-right">›</button>
            </div>

            <h5>{childItem.title}</h5>

            {childItem.path ? (
                <Link to={childItem.path}>
                    <button>{childItem.button}</button>
                </Link>
            ) : (
                <a href={childItem.url} target="_blank" rel="noopener noreferrer">
                    <button>{childItem.button}</button>
                </a>
            )}

            <a className='calendar-promotional' href={childItem.promotional} target="_blank" rel="noopener noreferrer">
                <div className='calendar-link-hover'>&gt;</div>
                {childItem.promotionalButton}
                <div className='calendar-link-hover'>&lt;</div>
            </a>
        </div>
    );
};

export default CalendarGallery;