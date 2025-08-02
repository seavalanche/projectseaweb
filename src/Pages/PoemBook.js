import React, { useState, useRef, useEffect } from 'react';
import '../css/poembook.css';
import { useLocalization } from '../localization/hooks/useLocalization';

const pages = [
    `${process.env.PUBLIC_URL}/poems/page_1.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_2.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_3.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_4.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_5.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_6.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_7.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_8.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_9.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_10.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_11.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_12.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_13.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_14.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_15.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_16.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_17.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_18.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_19.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_20.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_21.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_22.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_23.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_24.jpg`,
    `${process.env.PUBLIC_URL}/poems/page_25.jpg`,
];

export default function PoemBook() {
    const { t } = useLocalization();
    const [mode, setMode] = useState('vertical'); // 'vertical', 'ltr', 'rtl'
    const [zoomIndex, setZoomIndex] = useState(null); // null = no zoom
    const scrollRef = useRef(null);
    const isHorizontal = mode === 'ltr' || mode === 'rtl';
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleWheel = (e) => {
            if (mode === 'ltr' || mode === 'rtl') {
                e.preventDefault();
                el.scrollBy({
                    left: e.deltaY * 5, // Use Y delta to move left/right!
                    behavior: 'smooth',
                });
            }
        };

        el.addEventListener('wheel', handleWheel, { passive: false });

        return () => el.removeEventListener('wheel', handleWheel);
    }, [mode]);

    return (
        <div className="generalbody">
            <h1 className="generalbigtitle">{t("poembook.umbreonJourney")}</h1>
            <div className="generaldesc-containerwrapper">
                <div className="generaldesc-container">
                    <div className="label">{t("poembook.author")}</div>
                    <div className="value">{t("poembook.vesnea")}</div>

                    <div className="label">{t("poembook.artworkArtist")}</div>
                    <div className="value">{t("poembook.vesnea")}</div>

                    <div className="label">{t("poembook.desc")}</div>
                    <div className="value">{t("poembook.descUmbreonJourney")}</div>

                    <div className="label">{t("poembook.date")}</div>
                    <div className="value">{t("poembook.dateUmbreonJourney")}</div>

                    <div className="label">{t("poembook.totalTitles")}</div>
                    <div className="value">{t("poembook.totalTitlesUmbreonJourney")}</div>

                    <div className="label">{t("poembook.status")}</div>
                    <div className="value">{t("poembook.statusUmbreonJourney")}</div>
                </div>
            </div>
            <div className="generaldesc generalcontent">{t("poembook.instruction")}</div>
            <div className="poembookmenu">
                <button onClick={() => setMode('vertical')} className="btn">{t("poembook.btnVert")}</button>
                <button onClick={() => setMode('ltr')} className="btn">{t("poembook.btnLtr")}</button>
                <button onClick={() => setMode('rtl')} className="btn">{t("poembook.btnRtl")}</button>
            </div>

            <div className="poembook-wrapper">
                <div ref={scrollRef}
                    className={`poembook-viewer ${isHorizontal ? 'horizontal' : 'vertical'} ${mode === 'rtl' ? 'rtl' : ''
                        }`}
                >
                    {pages.map((src, index) => (
                        <div
                            key={index}
                            className={`poembook-page ${zoomIndex === index ? 'zoomed' : ''}`}
                            onClick={() =>
                                setZoomIndex(zoomIndex === index ? null : index)
                            }
                        >
                            <img src={src} alt={`Page ${index + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
                {isHorizontal && (
                    <>
                        <button className="poembook-scroll-btn left" onClick={() => {
                            scrollRef.current?.scrollBy({ left: mode === 'rtl' ? 500 : -500, behavior: 'smooth' });
                        }}>
                            ‹
                        </button>
                        <button className="poembook-scroll-btn right" onClick={() => {
                            scrollRef.current?.scrollBy({ left: mode === 'rtl' ? -500 : 500, behavior: 'smooth' });
                        }}>
                            ›
                        </button>
                    </>
                )}
                {!isHorizontal && (
                    <>
                        <button className="poembook-scroll-btn left" onClick={() => {
                            scrollRef.current?.scrollBy({ top: -500, behavior: 'smooth' });
                        }}>
                            ‹
                        </button>
                        <button className="poembook-scroll-btn right" onClick={() => {
                            scrollRef.current?.scrollBy({ top: 500, behavior: 'smooth' });
                        }}>
                            ›
                        </button>
                    </>
                )}
            </div>
            <div className="generaldisclaimer generalcontent">{t("poembook.disclaimerUmbreonJourney")}</div>
        </div>
    );
}
