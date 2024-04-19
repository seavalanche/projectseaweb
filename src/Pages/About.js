import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import seava from '../Assets/Seava.png';
import vesnea from '../Assets/Vesnea.png';
import seavalanche from '../Assets/Seavalanche.png';
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
                <div className="aboutheroheader">
                    <div className="aboutherotitle">About Me</div>
                    aaas2
                </div>
                <div className="aboutherocontent">
                    <div className="aboutherocontent1">
                        Initially learned to draw because I wanted to create something that I imagined but wasn’t created by anyone else on the internet. Giving birth to new ideas is pretty exciting. Once shared, the creations are going to be enjoyed by the public, in which could inspire viewers and new artists alike to grow together.
                    </div>
                    <div className="aboutherocontent1">
                        The name Seavalanche was taken by combining the word “Sea” and “Avalanche”. It was used to convey the power of a creature with both water and ice attributes. CeruleanFrost name was also chosen due to the color similarity to how I imagined when both elements combined, albeit with the ice being dominant.</div>
                </div>
            </div>
            <div className="aboutcharinfo">
                <div className='aboutcharinfoitem'>
                    <div className='aboutcharinfoitemcard'>
                        <img className='seava' src={seava} alt="seava" />
                        <div className='aboutcharinfoitemtitle1'>Seava</div>
                        <div className='aboutcharinfoitemtext'>
                            Created on 29 October 2021<br /><br />
                            Represents Seavalanche’s strength and willpower to improve and be creative.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetseava')}>See more about it</Link>
                    </div>
                    <div className='aboutcharinfoitemcard'>
                        <img className='vesnea' src={vesnea} alt="vesnea" />
                        <div className='aboutcharinfoitemtitle2'>Vesnea</div>
                        <div className='aboutcharinfoitemtext'>
                            Created on 22 May 2022<br /><br />
                            Represents Seavalanche’s friendliness and cheerfulness to connect with many people.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetvesnea')}>See more about it</Link>
                    </div>
                    <div className='aboutcharinfoitemcard'>
                        <img className='seavalanche' src={seavalanche} alt="seavalanche" />
                        <div className='aboutcharinfoitemtitle3'>Seavalanche</div>
                        <div className='aboutcharinfoitemtext'>
                            Created on 31 March 2023<br /><br />
                            Represents Seavalanche’s full power to achieve what needs to be achieved.</div><br />
                        <Link to='/About' className='aboutcharinfolearnmore' onClick={() => scrollToSelection('targetseavalanche')}>See more about it</Link>
                    </div>
                </div>
            </div>
            <div className='aboutcharseava' id='targetseava'>
                <img className='aboutseava' src={aboutseava} alt="Seava" />
                <div className='aboutcharseavaint'>
                    <div className='aboutcharseavainttitle'>Seava</div>
                    A fox-like creature that uses ice elements to protect their beloved ones.
                </div>
                <div className='aboutcharitem'>
                    <div className='aboutcharcard'>
                        Name and Design
                        <div className='aboutcharcontent'>
                            The name is a short form of Seavalanche.<br /><br />

                            Seava’s form was indirectly inspired by Fennekin, Zeraora, and Angewomon.<br /><br />

                            The color scheme of Seava is deep blue (sea), light blue (ice), and cream (sand).<br /><br />

                            Seava has a cloth-like accessory called Scice that is formed from their ice and psychic aura.<br /><br />

                            In Child form, the cloth is wrapped around their left front leg, while in Normal form the cloth is left hanging using their psychic aura behind their back. It is visibly longer in Ascended form.
                        </div>
                    </div>
                    <div className='aboutcharcard'>
                        Form and Personality
                        <div className='aboutcharcontent'>
                            They have no known gender. And they have three forms: Child, Normal, and Ascended form<br /><br />

                            Normal form is the default, but will use Child form when they need to preserve energy / hide their aura.
                            When the situation is dire, Seava will unleash their full power form, the Ascended form.<br /><br />

                            Seava can utilize the Scice in combat. But they also have a signature move called Frost Force (ice element).<br /><br />

                            Frost Force:
                            Seava lowers their surrounding temperature until it is cold enough that ice forms, then pushes all of it using their psychic power towards the target.<br /><br />

                            All forms has ice elements. But Seava also has water and psychic power.
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutcharvesnea' id='targetvesnea'>
                <img className='aboutvesnea' src={aboutvesnea} alt="Vesnea" />
                <div className='aboutcharvesneaint'>
                    <div className='aboutcharvesneainttitle'>Vesnea</div>
                    A fox-like creature that shows a cheerful personality that can calm anyone.
                </div>
                <div className='aboutcharitem'>
                    <div className='aboutcharcard'>
                        Name and Design
                        <div className='aboutcharcontent'>
                            The name is an anagram of Seavalanche.<br /><br />

                            Vesnea’s form was indirectly inspired by Vaporeon, Brionne, Vulpix, and Primarina<br /><br />

                            The color scheme of Vesnea is white (pure), pink (playful), and purple (elegance).<br /><br />

                            With flippers as her hands and a mermaid tail, she can swim freely in water. The forelegs allows Vesnea to move on land.
                        </div>
                    </div>
                    <div className='aboutcharcard'>
                        Form and Personality
                        <div className='aboutcharcontent'>
                            Vesnea is a female. Has no other form.<br /><br />

                            The cheerful personality that Vesnea shows will help to lessen any conflicts.<br /><br />

                            Vesnea also will behave elegantly once in a while. Showing to anyone that she isn’t an immature creature.<br /><br />

                            It is unknown whether Vesnea has ever shown sadness or not. Everyone believes that they have never seen that happened.
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutcharseavalanche' id='targetseavalanche'>
                <img className='aboutseavalanche' src={aboutseavalanche} alt="Seavalanche" />
                <div className='aboutcharseavalancheint'>
                    <div className='aboutcharseavalancheinttitle'>Seavalanche</div>
                    A fox-like creature that moves elegantly and shows love to the world.
                </div>
                <div className='aboutcharitem'>
                    <div className='aboutcharcard'>
                        Name and Design
                        <div className='aboutcharcontent'>
                            The name is a word combination of<br />sea and avalanche.<br /><br />

                            Seavalanche’s form is<br />a modified form of Vesnea.<br /><br />

                            The color scheme: white (pure), pink (playful), purple (elegance),
                            blue (energy), and yellow (energy).
                        </div>
                    </div>
                    <div className='aboutcharcard'>
                        Form and Personality
                        <div className='aboutcharcontent'>
                            Seavalanche is Vesnea’s form after receiving a part of Seava’s power.<br /><br />

                            Vesnea has gotten the power of Seava. It also made her to act even more elegantly.
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