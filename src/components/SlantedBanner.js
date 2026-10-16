import '../styles/components/SlantedBanner.css';

export default function SlantedBanner({ sections = [] }) {
    const total = sections.length;

    return (
        <div className="slanted-banner-wrapper">
            {sections.map((section, index) => {
                // Calculate dynamic positioning so panels distribute evenly and overlap cleanly
                const widthPercent = 100 / total + 15; // Extra width to allow for diagonal overlap
                const leftPercent = (index / total) * (100 - (15 / total) * total); // Stagger spacing

                return (
                    <div
                        key={index}
                        className="slanted-slice"
                        style={{
                            zIndex: index + 1,
                            width: `${widthPercent}%`,
                            left: `${leftPercent}%`
                        }}
                    >
                        <video
                            src={section.videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        {/* Optional text or overlay per section */}
                        {section.title && (
                            <div className="slice-content">
                                <h3>{section.title}</h3>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}