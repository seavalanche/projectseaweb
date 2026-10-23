import { Link } from 'react-router-dom';
import '../styles/pages/CalendarGallery.css'

const carouselData = [
    {
        title: "Seavalanche's 2026 Calendar",
        year: '2026',
        type: 'pokemon',
        src: 'carousel.webp',
        url: 'https://ko-fi.com/s/6a5a609509',
        button: 'Go to Ko-fi!',
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
            childAmount: '12',
            url: 'https://ko-fi.com/s/7470eb7b05',
            button: 'Go to Ko-fi!',
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
            childAmount: '12',
            url: 'https://ko-fi.com/s/807a181d60',
            button: 'Go to Ko-fi!',
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
            childAmount: '12',
            url: 'https://ko-fi.com/s/03390599f8',
            button: 'Go to Ko-fi!',
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
            childAmount: '12',
            url: 'https://ko-fi.com/s/712f080cfc',
            button: 'Go to Ko-fi!',
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
            childAmount: '12',
            url: 'https://ko-fi.com/s/ee9fbdc42e',
            button: 'Go to Ko-fi!',
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
            childAmount: '12',
            url: 'https://ko-fi.com/s/6a5a609509',
            button: 'Go to Ko-fi!',
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
                kjasjkdhaskdhjlasdkh I'll think of the words later, muehehe.
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
                                <div key={childIndex} className='calendar-card'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/calendar-gallery/${yearGroup.year}/${childItem.type}/${childItem.src}`} alt={childItem.title} />
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
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarGallery;