import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import arrow from '../Assets/Arrow.png';
import smallintro1 from '../Assets/small Seava and Vesnea.png';
import smallintro2 from '../Assets/2023 - 18 - Sprigatito 1.png';
import commsectbanner from '../Assets/D11 - Commission Banner v2_3by1 1.png';

function Homepage() {
    function scrollToWelcome(targetSection) {
        scroller.scrollTo(targetSection, {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -75,
        });
    }

    return (
        <div>
            <div className="introduction">
                <img className='arrow' src={arrow} alt="see next" onClick={() => scrollToWelcome('arrowtarget')} />
            </div>
            <div className="welcome" id="arrowtarget">
                <div className='welcometitle'>Welcome!</div>
                <div className='welcometext'>This is Seavalanche's Website</div>
                <div className='welcometext'>Please take a look!</div>
            </div>
            <div className='shortintro'>
                <div className='shortintro1'>
                    I am Seavalanche, a self-taught digital artist that likes to draw cute characters. You can call me either Seava or Vesnea.
                    <img className='smallintro1' src={smallintro1} alt="small Seava and Vesnea" />
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
                <div>
                    <img className='commsectbanner' src={commsectbanner} alt="D11 - Commission Banner v2" />
                </div>
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
                        <div className='commsectlearnmore'>Learn more</div>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>Animations</div>
                        <div className='commsectitemtext'>
                            I’ve always been interested in creating animations.<br /><br />
                            There will be more animations in the future.<br /><br />
                            But there will be other stuffs too, like 3D models.
                        </div><br />
                        <div className='commsectlearnmore'>Learn more</div>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>Merchandises</div>
                        <div className='commsectitemtext'>
                            There are satisfactions in creating merchs, in which I already created the 2023 Calendar that is free to be downloaded.<br /><br />
                            I hope for the future Seava and Vesnea plushies!
                        </div><br />
                        <div className='commsectlearnmore'>Learn more</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;