import { Link } from 'react-router-dom';

const GamePage = () => {
    return (
        <div className='generalbody'>
            <div className='generalbigtitle'>
                Vesnea's Game Page
            </div>
            <div className='generaltitle'>
                Hi! See my collection of games that I've created!
            </div>
            <div className='generalcontent'>
                <ul>
                    <li>
                        <Link to='/TicTacToe' className='li'>Tic Tac Toe</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default GamePage;