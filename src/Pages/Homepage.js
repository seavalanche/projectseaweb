import { Link } from 'react-router-dom';
import { useTheme } from "../ThemeContext";
import smallintro1 from '../Assets/Homepage/shortintro/S98 - Vesnea See You.png';
import smallintro2 from '../Assets/2023-18-Sprigatito.jpg';
import commsectbanner from '../Assets/D11-Commission-Banner-v2_3by1.jpg';

function Homepage() {

    const { theme } = useTheme();

    return (
        <div>
            <div className="introduction">
            </div>
            <div className="welcome" id="arrowtarget">
                <div className={`welcomewrapper ${theme || "light"}`}>
                    <div className='welcometextwrap'>
                        <div className={`welcometitle ${theme || "light"}`}>Welcome!</div>
                        <div className={`welcometext ${theme || "light"}`}>This is Seavalanche's Website</div>
                        <div className={`welcometext ${theme || "light"}`}>Please take a look!</div>
                    </div>
                </div>
            </div>
            <div className={`shortintro ${theme || "light"}`}>
                <div className='shortintro1'>
                    I am Seavalanche, a self-taught digital artist that likes to draw cute characters. You can call me Vesnea.
                    <img className='smallintro1' src={smallintro1} alt="Vesnea" />
                </div>
                <div className='shortintro2'>
                    <img className='smallintro2' src={smallintro2} alt="2023 - 18 - Sprigatito" />
                    I spent most of my free time drawing and creating creative things.
                    Started as a Pokémon fanart artist, I also create original arts now.
                </div>
                <div className='shortintro3'>
                    I also opened commission requests on Ko-fi. With many styles that I can draw, you can choose one that fits your mood.
                </div>
            </div>
            <div className='commsect'>
                <img className='commsectbanner' src={commsectbanner} alt="D11 - Commission Banner v2" />
                <div className='commsectitem'>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>Projects</div>
                        <div className='commsectitemtext'>
                            I separated each creations into categories which I called Projects.<br /><br />
                            The current Pokémon fanarts are in Project Rea.<br /><br />
                            Creative creations are in Project Seava.</div><br />
                        <Link to='/Projects' className='commsectlearnmore'>Learn more</Link>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>Commissions</div>
                        <div className='commsectitemtext'>
                            I take commission requests of your original characters with your own creative ideas.<br /><br />
                            To see what kind of request I take, please click Learn more.
                        </div><br />
                        <a href='https://ko-fi.com/seavalanche/commissions' target='_blank' rel="noreferrer" className='commsectlearnmore'>Learn more</a>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>Animations</div>
                        <div className='commsectitemtext'>
                            I’ve always been interested in creating animations.<br /><br />
                            There will be more animations in the future.<br /><br />
                            But there will be other stuffs too, like 3D models.
                        </div><br />
                        <a href='https://www.pixiv.net/en/users/14390223/illustrations/Ugoira' target='_blank' rel="noreferrer" className='commsectlearnmore'>Learn more</a>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>Merchandises</div>
                        <div className='commsectitemtext'>
                            There are satisfactions in creating merchs, in which I already created the 2023 Calendar that is free to be downloaded.<br /><br />
                            I hope for the future Seava and Vesnea plushies!
                        </div><br />
                        <a href='https://ko-fi.com/seavalanche/shop' target='_blank' rel="noreferrer" className='commsectlearnmore'>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;