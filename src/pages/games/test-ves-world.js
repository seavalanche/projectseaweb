export default function GameShowcase() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>

            <iframe
                src={`${process.env.PUBLIC_URL}/game/test-ves-world/test-ves-world.html`}
                title="Godot Showcase"
                width="960"
                height="540"
                style={{ border: '3px solid #333', borderRadius: '8px' }}
            />

        </div>
    );
}