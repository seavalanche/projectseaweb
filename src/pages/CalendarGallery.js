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
        year: '2025',
        src: '',
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
        }]
    },
    {
        year: '2025',
        src: '',
        calendar: [{
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
        src: '',
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
                {carouselData.map((item, index) => (
                    <div key={index} className='calendar-carousel-card'>
                        <h5>{item.title}</h5>
                        <img src={`${process.env.PUBLIC_URL}/assets/calendar-gallery/${item.year}/${item.type}/${item.src}`} alt={item.title} />
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
                {calendarData.map((item, index) => (
                    <div key={index} className='calendar-banner-container'>
                        <div
                            className='calendar-banner'
                            style={{ backgroundImage: `url(${item.src})` }}
                        >
                            <span className='calendar-banner-title'>{item.year}</span>
                        </div>
                        <div className='calendar-card-wrapper'>
                            {item.calendar.map((childItem, childIndex) => (
                                <div key={childIndex} className='calendar-card'>
                                    <img src={`${process.env.PUBLIC_URL}/assets/calendar-gallery/${item.year}/${childItem.type}/${childItem.src}`} alt={childItem.title} />
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