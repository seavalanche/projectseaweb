import { useState } from 'react';
import charactersData from './Data/charactersData.json'
import { useLocalization } from '../localization/hooks/useLocalization';

const VesneaThemes = () => {
    const { t } = useLocalization();
    const [viewCard, setViewCard] = useState(null);

    return (
        <div className="generalbody">
            <div className="generalbigtitle">{t(`themes.title`)}</div>
            <div className="generaltitle">{t(`themes.subtitle`)}</div>
            <ul className="VT-container">
                {charactersData.map((char) => (
                    <li
                        key={char.id}
                        className={`VT-list ${viewCard === char.id ? 'active' : ''}`}
                        onClick={() => setViewCard(viewCard === char.id ? null : char.id)}
                    >
                        <div className='VT-char-main'>
                            <div className="VT-char-name">
                                <div style={{ fontStyle: char.namestyle }}>{t(`characters.${char.id}.name`)}</div>
                                <div className={`VT-charname alt ${char.altnamestyle}`} style={{ fontStyle: char.altnamestyle }}>{t(`characters.${char.id}.altname`)}</div>
                            </div>
                            <div className='VT-char-pfp-container'>
                                {char.pfp.map((pfp, i) => (
                                    <div className='VT-char-pfp' key={i}>
                                        <img className={`VT-pfp-img ${pfp.size}`} src={process.env.PUBLIC_URL + pfp.image} alt={pfp.name} />
                                        <div className={`VT-pfp-name ${pfp.size}`}>{t(`characters.${char.id}.pfpname.${i}`)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='VT-char-sub'>
                            <div className={`VT-color-palette ${char.id}`}>
                                {char.colors.map((color, i) => (
                                    <div className="VT-color-cell" key={i}>
                                        <div className="VT-color-swatch" style={{ backgroundColor: color.hex }}></div>
                                        <div className="VT-color-hexcode">{color.hex}</div>
                                        <div className="VT-color-name">{color.name}</div>
                                    </div>
                                ))}
                            </div>
                            <div className='VT-details'>
                                <div className={`VT-det VT-det1 ${char.detDesc1.visibility}`}>
                                    <div className='VT-det-title'>{t(`characters.${char.id}.detDesc1.title`)}</div>
                                    <div className='VT-det-details'>
                                        <div className='VT-color-palette2'>
                                            {char.detColor1.map((color, i) => (
                                                <div key={i} className="VT-color-tooltip-container">
                                                    <div
                                                        className="VT-color-swatch2"
                                                        style={{ backgroundColor: color.hex }}
                                                    >
                                                        <span className="VT-tooltip-text">{color.hex}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='VT-det-desc'>{t(`characters.${char.id}.detDesc1.desc`)}</div>
                                    </div>
                                </div>
                                <div className={`VT-det VT-det2 ${char.detDesc2.visibility}`}>
                                    <div className='VT-det-title'>{t(`characters.${char.id}.detDesc2.title`)}</div>
                                    <div className='VT-det-details'>
                                        <div className='VT-color-palette2'>
                                            {char.detColor2.map((color, i) => (
                                                <div key={i} className="VT-color-tooltip-container">
                                                    <div
                                                        className="VT-color-swatch2"
                                                        style={{ backgroundColor: color.hex }}
                                                    >
                                                        <span className="VT-tooltip-text">{color.hex}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='VT-det-desc'>
                                            {t(`characters.${char.id}.detDesc2.desc`)}
                                        </div>
                                    </div>
                                </div>
                                <div className={`VT-det VT-det3 ${char.detDesc3.visibility}`}>
                                    <div className='VT-det-title'>{t(`characters.${char.id}.detDesc3.title`)}</div>
                                    <div className='VT-det-details'>
                                        <div className='VT-color-palette2'>
                                            {char.detColor3.map((color, i) => (
                                                <div key={i} className="VT-color-tooltip-container">
                                                    <div
                                                        className="VT-color-swatch2"
                                                        style={{ backgroundColor: color.hex }}
                                                    >
                                                        <span className="VT-tooltip-text">{color.hex}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='VT-det-desc'>{t(`characters.${char.id}.detDesc3.desc`)}</div>
                                    </div>
                                </div>
                                <div className={`VT-det VT-det4 ${char.detDesc4.visibility}`}>
                                    <div className='VT-det-title'>{t(`characters.${char.id}.detDesc4.title`)}</div>
                                    <div className='VT-det-details'>
                                        <div className='VT-color-palette2'>
                                            {char.detColor4.map((color, i) => (
                                                <div key={i} className="VT-color-tooltip-container">
                                                    <div
                                                        className="VT-color-swatch2"
                                                        style={{ backgroundColor: color.hex }}
                                                    >
                                                        <span className="VT-tooltip-text">{color.hex}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='VT-det-desc'>{t(`characters.${char.id}.detDesc4.desc`)}</div>
                                    </div>
                                </div>
                                <div className={`VT-det VT-det5 ${char.detDesc5.visibility}`}>
                                    <div className='VT-det-title'>{t(`characters.${char.id}.detDesc5.title`)}</div>
                                    <div className='VT-det-details'>
                                        <div className='VT-color-palette2'>
                                            {char.detColor5.map((color, i) => (
                                                <div key={i}>
                                                    <div className="VT-color-swatch2" style={{ backgroundColor: color.hex }}></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='VT-det-desc'>{t(`characters.${char.id}.detDesc5.desc`)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default VesneaThemes;