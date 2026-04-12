import React, { useState, useRef, useEffect } from 'react';
import '../styles/PoemBook.css';
import { useLocalization } from '../localization/hooks/useLocalization';

const pages = [
    `${process.env.PUBLIC_URL}/poems/page-1.webp`,
    `${process.env.PUBLIC_URL}/poems/page-2.webp`,
    `${process.env.PUBLIC_URL}/poems/page-3.webp`,
    `${process.env.PUBLIC_URL}/poems/page-4.webp`,
    `${process.env.PUBLIC_URL}/poems/page-5.webp`,
    `${process.env.PUBLIC_URL}/poems/page-6.webp`,
    `${process.env.PUBLIC_URL}/poems/page-7.webp`,
    `${process.env.PUBLIC_URL}/poems/page-8.webp`,
    `${process.env.PUBLIC_URL}/poems/page-9.webp`,
    `${process.env.PUBLIC_URL}/poems/page-10.webp`,
    `${process.env.PUBLIC_URL}/poems/page-11.webp`,
    `${process.env.PUBLIC_URL}/poems/page-12.webp`,
    `${process.env.PUBLIC_URL}/poems/page-13.webp`,
    `${process.env.PUBLIC_URL}/poems/page-14.webp`,
    `${process.env.PUBLIC_URL}/poems/page-15.webp`,
    `${process.env.PUBLIC_URL}/poems/page-16.webp`,
    `${process.env.PUBLIC_URL}/poems/page-17.webp`,
    `${process.env.PUBLIC_URL}/poems/page-18.webp`,
    `${process.env.PUBLIC_URL}/poems/page-19.webp`,
    `${process.env.PUBLIC_URL}/poems/page-20.webp`,
    `${process.env.PUBLIC_URL}/poems/page-21.webp`,
    `${process.env.PUBLIC_URL}/poems/page-22.webp`,
    `${process.env.PUBLIC_URL}/poems/page-23.webp`,
    `${process.env.PUBLIC_URL}/poems/page-24.webp`,
    `${process.env.PUBLIC_URL}/poems/page-25.webp`,
    `${process.env.PUBLIC_URL}/poems/page-26.webp`,
    `${process.env.PUBLIC_URL}/poems/page-27.webp`,
    `${process.env.PUBLIC_URL}/poems/page-28.webp`,
    `${process.env.PUBLIC_URL}/poems/page-29.webp`,
    `${process.env.PUBLIC_URL}/poems/page-30.webp`,
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
