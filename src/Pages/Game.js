function GodotGame() {
    return (
        <div style={{ width: "100%", height: "600px", border: "none" }}>
            <iframe
                title="Tic Tac Toe Game"
                src={`${process.env.PUBLIC_URL}/game/TicTacToe.html`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
}

export default GodotGame