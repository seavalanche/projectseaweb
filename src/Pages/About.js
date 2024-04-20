import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import mythseavalanche from '../Assets/About/aboutchar/Myth Seavalanche.png';
import seavalanche from '../Assets/About/aboutchar/Seavalanche.png';
import seava from '../Assets/About/aboutchar/Seava.png';
import vesnea from '../Assets/About/aboutchar/Vesnea.png';
import korazu from '../Assets/About/aboutchar/Korazu.png';
import uzakon from '../Assets/About/aboutchar/Uzakon.png';
import zumiko from '../Assets/About/aboutchar/Zumiko.png';
import aboutseava from '../Assets/by Seava - 20220501 (2) 3.png';
import aboutvesnea from '../Assets/S84 - Vesnea.png';
import aboutseavalanche from '../Assets/S85 - Seavalanche.png';
import aboutseparator from '../Assets/S75 - Vesnea_b_338x450.gif';

function About() {
    function scrollToSelection(targetSection) {
        scroller.scrollTo(targetSection, {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -75,
        });
    }
    return (
        <div>
            <div className="abouthero">
                <div className="aboutherocontainer">
                    <div className="aboutherotitle">About Me</div>
                    <p>
                        I am a self-taught digital artist who has a big interest in cute stuff. I  started around 2015 with nothing but a pencil, paper, and a computer  mouse. I scanned the sketch and then tried to trace the lines I had  drawn on Photoshop using just the mouse—vector lines were a life-saver!
                    </p>
                    <p>
                        The artworks I mostly create are watercolor-esque. I like to blend  colors to create smooth transitions of shading. Digital media made it  easier with layers, transform, and especially undo-s! But don’t let it  fool you, because I also create some art without digital media, hehe~
                    </p>
                    <p>
                        My inspirations come from soft and cute creations by other artists. I  also appreciate cool and snappy creations. Varied expressions of  characters, nice and neat clothing, atmospheric backgrounds, and many  more are what inspire me to keep creating!
                    </p>
                    <p>Currently, I’m aiming to expand my own original creations—with  Seavalanche and the bunch—including the world, which can also be  expanded through Seavalanche’s lore story writing. Furthermore, the  creation of this website is also a part of it!</p>
                    <p>I have a small Discord server where a bunch of artists and non-artists  have gathered to talk about stuff—including arts! It’s a place where I  frequently share updates about my life and also my art processes and  thoughts. The members frequently share their favorite arts from other  artists too—we have a special album channel where we can see various  artworks as inspirations!</p>
                    <p>Fans can support me and commission me via Ko-fi. It’s also a place where  I will put out some special items—such as calendars—and hopefully  physical merch in the future! Any support helps me monetarily and  emotionally to keep going with my hobby—which I hope can help brighten  any people and fans that see it~</p>
                </div>
            </div>
            <div className="aboutcharinfo">
                <div className='aboutcharinfoitem'>
                    <div className='aboutcharinfoitemcard'>
                        <img className='mythseavalanche' src={mythseavalanche} alt="mythseavalanche" />
                        <div className='aboutcharinfoitemtitle0'>Myth Seavalanche</div>
                        <div className='aboutcharinfoitemtext'>
                            The Original Seavalanche.<br />     <br />
                            Nothing has been discovered about this character yet.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetmythseavalanche')}>See more about it</Link>
                    </div>
                </div>
                <div className='aboutcharinfoitem'>
                    <div className='aboutcharinfoitemcard'>
                        <img className='seavalanche' src={seavalanche} alt="seavalanche" />
                        <div className='aboutcharinfoitemtitle1'>Seavalanche</div>
                        <div className='aboutcharinfoitemtext'>
                            Created on 31 March 2023<br /><br />
                            Represents Seavalanche’s full power to achieve what needs to be achieved.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetseavalanche')}>See more about it</Link>
                    </div>
                    <div className='aboutcharinfoitemcard'>
                        <img className='seava' src={seava} alt="seava" />
                        <div className='aboutcharinfoitemtitle2'>Seava</div>
                        <div className='aboutcharinfoitemtext'>
                            Created on 29 October 2021<br /><br />
                            Represents Seavalanche’s strength and willpower to improve and be creative.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetseava')}>See more about it</Link>
                    </div>
                    <div className='aboutcharinfoitemcard'>
                        <img className='vesnea' src={vesnea} alt="vesnea" />
                        <div className='aboutcharinfoitemtitle3'>Vesnea</div>
                        <div className='aboutcharinfoitemtext'>
                            Created on 22 May 2022<br /><br />
                            Represents Seavalanche’s friendliness and cheerfulness to connect with many people.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetvesnea')}>See more about it</Link>
                    </div>
                </div>
                <div className='aboutcharinfoitem'>
                    <div className='aboutcharinfoitemcard'>
                        <img className='korazu' src={korazu} alt="korazu" />
                        <div className='aboutcharinfoitemtitle4'>Korazu</div>
                        <div className='aboutcharinfoitemtext'>
                            Created on 4 January 2024<br /><br />
                            Represents Seavalanche’s courage.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetkorazu')}>See more about it</Link>
                    </div>
                    <div className='aboutcharinfoitemcard'>
                        <img className='uzakon' src={uzakon} alt="uzakon" />
                        <div className='aboutcharinfoitemtitle5'>Uzakon</div>
                        <div className='aboutcharinfoitemtext'>
                            Created on 4 January 2024<br /><br />
                            Represents Seavalanche’s perserverance and calmness.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetuzakon')}>See more about it</Link>
                    </div>
                    <div className='aboutcharinfoitemcard'>
                        <img className='zumiko' src={zumiko} alt="zumiko" />
                        <div className='aboutcharinfoitemtitle6'>Zumiko</div>
                        <div className='aboutcharinfoitemtext'>
                            Created on 4 January 2024<br /><br />
                            Represents Seavalanche’s wish, desire, and hope.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetzumiko')}>See more about it</Link>
                    </div>
                </div>
            </div>
            <div className='aboutchar' id='targetseavalanche'>
                <img className='aboutseavalanche' src={aboutseavalanche} alt="Seavalanche" />
                <div className='aboutcharseavalancheint'>
                    <div className='aboutcharseavalancheinttitle'>Seavalanche</div>
                    A fox-like creature that moves elegantly and shows love to the world.
                </div>
                <div className='aboutcharitem'>
                    <div className='aboutcharcard1'>
                        Name and Design
                        <div className='aboutcharcontent1'>
                            The name is a word combination of sea and avalanche.<br /><br />

                            The color scheme: white (pure), pink (playful), purple (elegance),
                            blue (energy), and yellow (energy).<br /><br />

                            It is a combination of Seava and Vesnea’s design. So she has Seava’s Scice and Vesnea’s Tail.
                        </div>
                    </div>
                    <div className='aboutcharcard2'>
                        Form and Personality
                        <div className='aboutcharcontent2'>
                            While we don’t know the form and personality of the original Seavalanche, we know that Vesnea’s Seavalanche has a personality similar to Vesnea.<br /><br />

                            Seavalanche looks elegant and acts cutely sometimes. But she will show determination and strength when it’s needed.
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutchar' id='targetseava'>
                <img className='aboutseava' src={aboutseava} alt="Seava" />
                <div className='aboutcharseavaint'>
                    <div className='aboutcharseavainttitle'>Seava</div>
                    A fox-like creature that uses ice elements to protect their beloved ones.
                </div>
                <div className='aboutcharitem'>
                    <div className='aboutcharcard1'>
                        Name and Design
                        <div className='aboutcharcontent1'>
                            The name is a short form of Seavalanche.<br /><br />

                            The color scheme of Seava is deep blue (sea), light blue (ice), and cream (sand).<br /><br />

                            Seava has a cloth-like accessory called <i><b>Scice</b></i> that is formed from his ice and psychic aura.<br /><br />

                            In <i>Child form</i>, the <i><b>Scice</b></i> is wrapped around his left front leg, while in <i>Normal form</i> the <i><b>Scice</b></i> is left hanging using his psychic aura behind his back. The <i><b>Scice</b></i> is visibly longer in <i>Ascended form</i>.
                        </div>
                    </div>
                    <div className='aboutcharcard2'>
                        Form and Personality
                        <div className='aboutcharcontent2'>
                            He has three forms: <i>Child</i>, <i>Normal</i>, and <i>Ascended form</i><br /><br />

                            <i>Normal form</i> is the default, but will use <i>Child form</i> when he needs to preserve energy / hide his aura.
                            When the situation is dire, Seava will unleash his full power form, the <i>Ascended form</i>.<br /><br />

                            Seava can utilize the <i><b>Scice</b></i> in combat. But he also has a signature move called <i><b>Frost Force</b></i> (ice element).<br /><br />

                            Seava is caring and kind. He will show that he is determined to support the loved ones.<br /><br />

                            <b>Frost Force:</b><br />
                            Seava lowers his surrounding temperature until it is cold enough that ice forms, then pushes all of it using his psychic power towards the target.<br /><br />
                            All forms has ice elements. But Seava also has water and psychic power.
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutchar' id='targetvesnea'>
                <img className='aboutvesnea' src={aboutvesnea} alt="Vesnea" />
                <div className='aboutcharvesneaint'>
                    <div className='aboutcharvesneainttitle'>Vesnea</div>
                    A fox-like creature that shows a cheerful personality that can calm anyone.
                </div>
                <div className='aboutcharitem'>
                    <div className='aboutcharcard1'>
                        Name and Design
                        <div className='aboutcharcontent1'>
                            The name is an anagram of Seavalanche.<br /><br />

                            The color scheme of Vesnea is white (pure), pink (playful), and purple (elegance).<br /><br />

                            With flippers as her hands and a mermaid tail, she can swim freely in water. The hindlegs allows Vesnea to move on land.
                        </div>
                    </div>
                    <div className='aboutcharcard2'>
                        Form and Personality
                        <div className='aboutcharcontent2'>
                            It’s shown that Vesnea gained the form of Seavalanche once she received a small part of Seava’s power.<br /><br />

                            The cheerful personality that Vesnea shows will help to lessen any conflicts.<br /><br />

                            Vesnea also will behave elegantly once in a while and it is unknown whether Vesnea has ever shown sadness or not.
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutseparator'>
                <img src={aboutseparator} className='aboutseparatorimg1' alt='Vesnea' />
            </div>
        </div>
    )
}

export default About;