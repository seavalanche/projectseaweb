import mythseavalanche from '../Assets/About/ACinfo/Myth Seavalanche.png';
import seavalanche from '../Assets/About/ACinfo/Seavalanche.png';
import seava from '../Assets/About/ACinfo/Seava.png';
import vesnea from '../Assets/About/ACinfo/Vesnea.png';
import korazu from '../Assets/About/ACinfo/Korazu.png';
import uzakon from '../Assets/About/ACinfo/Uzakon.png';
import zumiko from '../Assets/About/ACinfo/Zumiko.png';
import aboutseavalanche from '../Assets/About/AC/Seavalanche.png';
import aboutseava from '../Assets/About/AC/Seava.png';
import aboutvesnea from '../Assets/About/AC/Vesnea.png';
import aboutkorazu from '../Assets/About/AC/Korazu.png';
import aboutuzakon from '../Assets/About/AC/Uzakon.png';
import aboutzumiko from '../Assets/About/AC/Zumiko.png';
import aboutseparator from '../Assets/S75 - Vesnea_b_338x450.gif';
import { useTheme } from "../ThemeContext";

function About() {
    const { theme } = useTheme();
    return (
        <div>
            <div className={`ACinfo ${theme || "light"}`}>
                <div className='ACinfoitem'>
                    <div className='ACinfoitemcard'>
                        <img className='mythseavalanche' src={mythseavalanche} alt="mythseavalanche" />
                        <div className={`ACinfoitemtitle0 ${theme || "light"}`}>Myth Seavalanche</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            The Original Seavalanche.<br />     <br />
                            Nothing has been discovered about this character yet.</div><br />
                    </div>
                </div>
                <div className='ACinfoitem'>
                    <div className='ACinfoitemcard'>
                        <img className='seavalanche' src={seavalanche} alt="seavalanche" />
                        <div className={`ACinfoitemtitle1 ${theme || "light"}`}>Seavalanche</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            Created on 31 March 2023<br /><br />
                            Represents Seavalanche’s full power to achieve what needs to be achieved.</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='seava' src={seava} alt="seava" />
                        <div className={`ACinfoitemtitle2 ${theme || "light"}`}>Seava</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            Created on 29 October 2021<br /><br />
                            Represents Seavalanche’s strength and willpower to improve and be creative.</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='vesnea' src={vesnea} alt="vesnea" />
                        <div className={`ACinfoitemtitle3 ${theme || "light"}`}>Vesnea</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            Created on 22 May 2022<br /><br />
                            Represents Seavalanche’s friendliness and cheerfulness to connect with many people.</div><br />
                    </div>
                </div>
                <div className='ACinfoitem'>
                    <div className='ACinfoitemcard'>
                        <img className='korazu' src={korazu} alt="korazu" />
                        <div className={`ACinfoitemtitle4 ${theme || "light"}`}>Korazu</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            Created on 4 January 2024<br /><br />
                            Represents Seavalanche’s courage.</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='uzakon' src={uzakon} alt="uzakon" />
                        <div className={`ACinfoitemtitle5 ${theme || "light"}`}>Uzakon</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            Created on 4 January 2024<br /><br />
                            Represents Seavalanche’s perserverance and calmness.</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='zumiko' src={zumiko} alt="zumiko" />
                        <div className={`ACinfoitemtitle6 ${theme || "light"}`}>Zumiko</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            Created on 4 January 2024<br /><br />
                            Represents Seavalanche’s wish, desire, and hope.</div><br />
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetseavalanche'>
                <img className='aboutseavalanche' src={aboutseavalanche} alt="Seavalanche" />
                <div className={`ACseavalancheint ${theme || "light"}`}>
                    <div className={`ACseavalancheinttitle ${theme || "light"}`}>Seavalanche</div>
                    A fox-like creature that moves elegantly and shows love to the world.
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                    <div className='ACcardtitle'>Name and Design</div>
                        <div className='ACcontent1'>
                            The name is a word combination of sea and avalanche.<br /><br />

                            The color scheme: white (pure), pink (playful), purple (elegance),
                            blue (energy), and yellow (energy).<br /><br />

                            It is a combination of Seava and Vesnea’s design. So she has Seava’s Scice and Vesnea’s Tail.
                        </div>
                    </div>
                    <div className='ACcard2'>
                    <div className='ACcardtitle'>Form and Personality</div>
                        <div className='ACcontent2'>
                            While we don’t know the form and personality of the original Seavalanche, we know that Vesnea’s Seavalanche has a personality similar to Vesnea.<br /><br />

                            Seavalanche looks elegant and acts cutely sometimes. But she will show determination and strength when it’s needed.
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetseava'>
                <img className='aboutseava' src={aboutseava} alt="Seava" />
                <div className={`ACseavaint ${theme || "light"}`}>
                    <div className={`ACseavainttitle ${theme || "light"}`}>Seava</div>
                    A fox-like creature that uses ice elements to protect their beloved ones.
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                        <div className='ACcardtitle'>Name and Design</div>
                        <div className='ACcontent1'>
                            The name is a short form of Seavalanche.<br /><br />

                            The color scheme of Seava is deep blue (sea), light blue (ice), and cream (sand).<br /><br />

                            Seava has a cloth-like accessory called <i><b>Scice</b></i> that is formed from his ice and psychic aura.<br /><br />

                            In <i>Child form</i>, the <i><b>Scice</b></i> is wrapped around his left front leg, while in <i>Normal form</i> the <i><b>Scice</b></i> is left hanging using his psychic aura behind his back. The <i><b>Scice</b></i> is visibly longer in <i>Ascended form</i>.
                        </div>
                    </div>
                    <div className='ACcard2'>
                    <div className='ACcardtitle'>Form and Personality</div>
                        <div className='ACcontent2'>
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
            <div className={`AC ${theme || "light"}`} id='targetvesnea'>
                <img className='aboutvesnea' src={aboutvesnea} alt="Vesnea" />
                <div className={`ACvesneaint ${theme || "light"}`}>
                    <div className={`ACvesneainttitle ${theme || "light"}`}>Vesnea</div>
                    A fox-like creature that shows a cheerful personality that can calm anyone.
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                    <div className='ACcardtitle'>Name and Design</div>
                        <div className='ACcontent1'>
                            The name is an anagram of Seavalanche.<br /><br />

                            The color scheme of Vesnea is white (pure), pink (playful), and purple (elegance).<br /><br />

                            With flippers as her hands and a mermaid tail, she can swim freely in water. The hindlegs allows Vesnea to move on land.
                        </div>
                    </div>
                    <div className='ACcard2'>
                    <div className='ACcardtitle'>Form and Personality</div>
                        <div className='ACcontent2'>
                            It’s shown that Vesnea gained the form of Seavalanche once she received a small part of Seava’s power.<br /><br />

                            The cheerful personality that Vesnea shows will help to lessen any conflicts.<br /><br />

                            Vesnea also will behave elegantly once in a while and it is unknown whether Vesnea has ever shown sadness or not.
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetkorazu'>
                <img className='aboutkorazu' src={aboutkorazu} alt="Korazu" />
                <div className={`ACkorazuint ${theme || "light"}`}>
                    <div className={`ACkorazuinttitle ${theme || "light"}`}>Korazu</div>
                    A half cat, half bird creature that has a courageous heart and uses the power of the sun to help the people he knows.
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                    <div className='ACcardtitle'>Name and Design</div>
                        <div className='ACcontent1'>
                            The name is a an arrangement of the word “courage”.<br /><br />

                            The color scheme: yellow (energy) and orange (courage).<br /><br />

                            He is a cat who has bird wings and tail. There is a ribbon on the right leg and a sun collar on the neck. He has a single tuff of fluff on the tip of the left ear.
                        </div>
                    </div>
                    <div className='ACcard2'>
                    <div className='ACcardtitle'>Form and Personality</div>
                        <div className='ACcontent2'>
                            Power of the sun gave him a light attribute. He blends easily in a bright environment.<br /><br />

                            Korazu, Uzakon, and Zumiko seems to be a group of little fairies that accompany Vesnea on her journey.<br /><br />

                            He has a docile personality despite the burning courage he possesses. He doesn’t seek change without a reason.
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetuzakon'>
                <img className='aboutuzakon' src={aboutuzakon} alt="Uzakon" />
                <div className={`ACuzakonint ${theme || "light"}`}>
                    <div className={`ACuzakoninttitle ${theme || "light"}`}>Uzakon</div>
                    A half cat, half bunny creature that has a persevering and calm heart and uses the power of the moon to help the people he knows.
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                    <div className='ACcardtitle'>Name and Design</div>
                        <div className='ACcontent1'>
                            The name is a an arrangement of Korazu’s name and also 根気 (perserverance).<br /><br />

                            The color scheme: purple (calmness).<br /><br />

                            He is a cat who has a bunny tail. There is a ribbon on the right leg and a moon collar on the neck. He has two tuffs of fluff on the tip of the left ear.
                        </div>
                    </div>
                    <div className='ACcard2'>
                    <div className='ACcardtitle'>Form and Personality</div>
                        <div className='ACcontent2'>
                            Power of the moon gave him a dark attribute. He blends easily in a dark environment.<br /><br />

                            Korazu, Uzakon, and Zumiko seems to be a group of little fairies that accompany Vesnea on her journey.<br /><br />

                            He has a determined and calm personality. He prefers to solve problems with calmness.
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetzumiko'>
                <img className='aboutzumiko' src={aboutzumiko} alt="Zumiko" />
                <div className={`ACzumikoint ${theme || "light"}`}>
                    <div className={`ACzumikointtitle ${theme || "light"}`}>Zumiko</div>
                    A half cat, half dragon creature that has a lovely heart and uses the power of the stars to help the people he knows.
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                    <div className='ACcardtitle'>Name and Design</div>
                        <div className='ACcontent1'>
                            The name is a an arrangement of Korazu’s name and also 望み (wish, desire, hope).<br /><br />

                            The color scheme: red (desire).<br /><br />

                            He is a cat who has dragon wings and tail. There is a ribbon on the right leg and a star bow tie on the neck. He has three tuffs of fluff on the tip of the left ear.
                        </div>
                    </div>
                    <div className='ACcard2'>
                    <div className='ACcardtitle'>Form and Personality</div>
                        <div className='ACcontent2'>
                            Power of the stars gave him a fire attribute. He can withstand even the hottest environment.<br /><br />

                            Korazu, Uzakon, and Zumiko seems to be a group of little fairies that accompany Vesnea on her journey.<br /><br />

                            He has a lovely personality. His wish, desire, and hope drives him to help people that he knows.
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