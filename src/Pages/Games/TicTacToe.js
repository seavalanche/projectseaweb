import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const GamePage = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const isSmall = width < 570;
            setIsSmallScreen(isSmall);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const renderMobileLayout = () => (
        <div className='generalbody'>
            <div className="generalbigtitle">Tic Tac Toe</div>
            <div className="generaltitle">I tried Godot for the first time, and I created a simple tic tac toe game~</div>
            <div className="gamedesc-containerwrapper">
                <div class="gamedesc-container">
                    <div class="label">Description:</div>
                    <div class="value">Tic Tac Toe is a classic game played by many age!</div>

                    <div class="label">Date Created:</div>
                    <div class="value">01 August 2025</div>

                    <div class="label">Game Engine:</div>
                    <div class="value">Godot</div>

                    <div class="label">Genre:</div>
                    <div class="value">Puzzle/Arcade</div>
                </div>
            </div>
            <div className="gamedesc generalcontent">
                To start the game, simply click on your desired tile. You start as player X and your opponent will be an AI that will try to crush you!!! Or you can click on a button on the right to switch to play with your friend!
            </div>
            <div
                style={{
                    width: "570px",
                    maxWidth: "100%",
                    height: "93vw",
                    border: "none",
                    overflow: "hidden",
                }}
            >
                <iframe
                    title="Tic Tac Toe Game"
                    src={`${process.env.PUBLIC_URL}/game/TicTacToe.html`}
                    style={{ border: 'none' }}
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
            <div className="gamedesc-return generalbody">
                <div className="generalcontent">Are you having fun? You can go back to the game list by clicking this link below:</div>
                <Link to='/GamePage'> &gt;&gt;&gt; &nbsp; Go back to Vesnea's Game Page &nbsp; &lt;&lt;&lt; </Link>
            </div>
        </div >
    );

    return (
        <div>
            {isSmallScreen ? (
                renderMobileLayout()
            ) : (
                <div className="generalbody">
                    <div className="generalbigtitle">Tic Tac Toe</div>
                    <div className="generaltitle">I tried Godot for the first time, and I created a simple tic tac toe game~</div>
                    <div className="gamedesc-containerwrapper">
                        <div class="gamedesc-container">
                            <div class="label">Description:</div>
                            <div class="value">Tic Tac Toe is a classic game played by many age!</div>

                            <div class="label">Date Created:</div>
                            <div class="value">01 August 2025</div>

                            <div class="label">Game Engine:</div>
                            <div class="value">Godot</div>

                            <div class="label">Genre:</div>
                            <div class="value">Puzzle/Arcade</div>
                        </div>
                    </div>
                    <div className="gamedesc generalcontent">
                        To start the game, simply click on your desired tile. You start as player X and your opponent will be an AI that will try to crush you!!! Or you can click on a button on the right to switch to play with your friend!
                    </div>
                    <div
                        style={{
                            width: "570px",
                            height: "530px",
                            border: "none",
                        }}
                    >
                        <iframe
                            title="Tic Tac Toe Game"
                            src={`${process.env.PUBLIC_URL}/game/TicTacToe.html`}

                            style={{ border: 'none' }}
                            width="100%"
                            height="100%"
                        ></iframe>
                    </div>
                    <div className="gamedesc-return generalbody">
                        <div className="generalcontent">Are you having fun? You can go back to the game list by clicking this link below:</div>
                        <Link to='/GamePage'> &gt;&gt;&gt; &nbsp; Go back to Vesnea's Game Page &nbsp; &lt;&lt;&lt; </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GamePage;