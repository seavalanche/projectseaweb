export default function GamePage() {
    return (
        <div className='tictactoe'>
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
                    // width="100%"
                    // height="100%"
                    style={{ border: 'none' }}
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
        </div>
    );
}
// import { useEffect } from "react";

// export default function GamePage() {
//     useEffect(() => {
//         if (!document.getElementById("godot-script")) {
//             const script = document.createElement("script");
//             script.id = "godot-script";
//             script.src = `${process.env.PUBLIC_URL}/game/TicTacToe.js`;
//             script.async = true;
//             document.body.appendChild(script);
//         }
//     }, []);

//     return (
//         <div
//             id="godot-container"
//             style={{
//                 width: "100vw",
//                 height: "100vh",
//                 overflow: "hidden",
//                 backgroundColor: "#000", // or your choice
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//             }}
//         >
//             <canvas id="canvas"></canvas>
//         </div>
//     );
// }