import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../localization/hooks/useLocalization';
import '../styles/ArtPage.css';

const artData = [
    {
        left: '1',
        middle: '',
        right: '',
        title: 'Seavalanche Universe',
        items: [
            {
                name: 'Characters',
                path: '/CharInfo',
            },
            {
                name: 'World Attributes <WIP>',
                path: '/Attributes',
            },
            {
                name: 'Seavalanche Lore <WIP>',
                url: '',
            }
        ]
    },
    {
        left: '',
        middle: '',
        right: '2',
        title: 'Exhibition',
        items: [
            {
                name: 'Art Gallery',
                path: '/Gallery',
            },
            {
                name: 'Story',
                path: '/Story',
            },
            {
                name: 'Poem',
                path: '/Poem',
            },
            {
                name: "[Poem] Umbreon's Odyssey",
                path: '/Poem/UmbreonJourney',
            },
            {
                name: '2D Animation Gallery <WIP>',
                url: '',
            },
            {
                name: 'Live2D Models Gallery <WIP>',
                url: '',
            },
            {
                name: '3D Models Gallery <WIP>',
                url: '',
            },
        ]
    },
    {
        left: '3',
        middle: '',
        right: '',
        title: 'Devlog',
        items: [
            {
                name: 'About Project Sea Web',
                path: '/ProjectSeaWeb',
            },
            {
                name: 'Game Project',
                path: '/GamePage',
            },
            {
                name: 'Miscellaneous Tools <WIP>',
                url: '',
            },
        ]
    },
    {
        left: '',
        middle: '',
        right: '4',
        title: 'Fun corner!',
        items: [
            {
                name: 'Calendar Gallery <WIP>',
                url: '',
            },
            {
                name: 'Application Themes <WIP>',
                url: '',
            },
            {
                name: 'Seavalanche Color Themes',
                path: '/Themes',
            },
            {
                name: 'Other Digital Assets <WIP>',
                url: '',
            },
            {
                name: "Vesnea's Future Wishes <WIP>",
                url: '',
            },
        ]
    },
]

const GamePage = () => {
    const { t } = useLocalization();

    const [openCard, setOpenCard] = useState(null);
    const handleToggle = (index) => {
        setOpenCard(openCard === index ? null : index);
    };

    return (
        <div className='generalbody'>
            <div className='generalbigtitle'>
                {t("artpage.title")}
            </div>
            <div className='generaltitle'>
                {t("artpage.subtitle")}
            </div>
            {/* <div className='generalcontent'>
                <ul>
                    <div className='listseparator first'>{t("artpage.separator1")}</div>
                    <li><Link to='/Characters' className='li'>{t("artpage.chars")}</Link></li>
                    <li><Link to='/Attributes' className='li'>{t("artpage.attributes")}</Link></li>
                    <li><Link to='/Story' className='li'>{t("artpage.story")}</Link></li>
                    <li><Link to='/Poem' className='li'>{t("artpage.poem")}</Link></li>

                    <div className='listseparator'>{t("artpage.separator-art")}</div>
                    <li><Link to='/Gallery' className='li'>{t("artpage.artgallery")}</Link></li>
                    <li><Link to='/Poem/UmbreonJourney' className='li'>{t("artpage.umbreonjourney")}</Link></li>
                    <li><Link to='/Projects' className='li'>{t("artpage.projects")}</Link></li>

                    <div className='listseparator'>{t("artpage.separator2")}</div>
                    <li><Link to='/GamePage' className='li'>{t("artpage.games")}</Link></li>
                    <li><Link to='/ProjectSeaWeb' className='li'>{t("artpage.seaweb")}</Link></li>
                    <li><Link to='/Themes' className='li'>{t("artpage.themes")}</Link></li>
                    <li><Link to='/Merch' className='li'>{t("artpage.merch")}</Link></li>
                    <li><Link to='/Friends' className='li'>{t("artpage.friends")}</Link></li>

                    <div className='listseparator'>{t("artpage.separator3")}</div>
                    <li><Link to='/SeaWebTree' className='li'>{t("artpage.seawebtree")}</Link></li>
                </ul>
            </div> */}
            <div className='artpage-container'>
                <div className='artpage-card-container'>
                    {artData.map((artdata, index) => {
                        const isOpen = openCard === index;

                        return (
                            <div
                                key={index}
                                className='artpage-card-wrapper'
                                onClick={() => handleToggle(index)}
                            >
                                <div className='artpage-card'>
                                    <div className='artpage-card-part left'>{artdata.left}</div>
                                    <div className='artpage-card-part middle'>
                                        <span className='artpage-card-title'>{artdata.title}</span>
                                    </div>
                                    <div className='artpage-card-part right'>{artdata.right}</div>
                                </div>
                                {isOpen && (
                                    <ul>
                                        {artdata.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <span className='artpage-card-list-bullet'>⦿</span>
                                                {item.path ? (
                                                    <Link to={item.path} className='artpage-card-list-name'>
                                                        {item.name}
                                                    </Link>
                                                ) : (
                                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className='artpage-card-list-name'>
                                                        {item.name}
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default GamePage;