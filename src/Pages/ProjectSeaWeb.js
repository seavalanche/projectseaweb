import { Link } from 'react-router-dom';
import linktreebg from '../Assets/Project Sea Web/weblinktree/Vesnea.png';
import showcasepict1 from '../Assets/Project Sea Web/webshowcase/V1 website 1.png';
import showcasepict2 from '../Assets/Project Sea Web/webshowcase/V1 website 2.png';
import showcasepict3 from '../Assets/Project Sea Web/webshowcase/V1 website 3.png';
import showcasepict4 from '../Assets/Project Sea Web/webshowcase/V1 website 4.png';
import showcasepict5 from '../Assets/Project Sea Web/webshowcase/V1 website 5.png';
import showcasepict6 from '../Assets/Project Sea Web/webshowcase/V2 website 1.png';
import showcasepict7 from '../Assets/Project Sea Web/webshowcase/V2 website 2.png';
import showcasepict8 from '../Assets/Project Sea Web/webshowcase/V2 website 3.png';
import showcasepict9 from '../Assets/Project Sea Web/webshowcase/V2 website 4.png';
import showcasepict10 from '../Assets/Project Sea Web/webshowcase/V2 website 5.png';
import showcasepict11 from '../Assets/Project Sea Web/webshowcase/V2 website 6.png';
import separator1 from '../Assets/Project Sea Web/webshowcase/Separator1.png';
import separator2 from '../Assets/Project Sea Web/webshowcase/Separator2.png';
import colorstyle from '../Assets/Project Sea Web/webshowcase/SeaWebColorStyles.png';

function ProjectSeaWeb() {
    return (
        <div>
            <div className="projectshero">
                <div className="projectsheroheader">
                    <div className="projectsherotitle">Project Sea Web</div>
                    This is the project that created this website!
                </div>
                <div className="projectsheroitem">
                    <div className="projectsheroitemcard">
                        <div className="projectsheroitemtitle">V1</div>
                        <div className="projectsheroitemtext">
                            The original website that I created using Wixsite’s web template.
                        </div>
                        <a href="https://seavalanche.wixsite.com/seava" target='_blank' rel="noreferrer" className='projectsherolearnmore'>https://seavalanche.wixsite.com/seava</a>
                    </div>
                    <div className="projectsheroitemcard">
                        <div className="projectsheroitemtitle">V2</div>
                        <div className="projectsheroitemtext">
                            The second website that I created, but the first time I built it using ReactJS.
                        </div>
                        <a href="https://seavalanche.github.io/" target='_blank' rel="noreferrer" className='projectsherolearnmore'>https://seavalanche.github.io/</a>
                    </div>
                    <div className="projectsheroitemcard">
                        <div className="projectsheroitemtitle">V3</div>
                        <div className="projectsheroitemtext">
                            The current website that I created.
                            It is written in ReactJS.
                        </div>
                        <a href="https://seavalanche.github.io/projectseaweb" target='_blank' rel="noreferrer" className='projectsherolearnmore'>https://seavalanche.github.io/projectseaweb</a>
                    </div>
                </div>
            </div>
            <div className="websitelinktree">
                <img className='linktreebg' src={linktreebg} alt="Vesnea" />
                <div className="websitelinktree-wrapper">
                    <div className='websitelinktree-title'>This website's link tree:</div>
                    <div className="websitelinktree-wrapper1">
                        <Link to='/' className='websitelinktree-text'><b>Homepage</b></Link>
                    </div>

                    <div className="websitelinktree-wrapper1">
                        <div className='websitelinktree-text'><b>Collections</b></div>
                        <div className='websitelinktree-text'>Favorite Artworks Collage</div>
                        <div className='websitelinktree-text'>Animations</div>
                        <div className='websitelinktree-text'>Merchandises</div>
                        <Link to='/Projects' className='websitelinktree-text'>Projects</Link>
                        <ul>
                            <li>
                                <div className='websitelinktree-text'>~ Project Rea</div>
                            </li>
                            <li>
                                <div className='websitelinktree-text'>~ Project Oshyarena</div>
                            </li>
                            <li>
                                <div className='websitelinktree-text'>~ Project Seava</div>
                            </li>
                            <li>
                                <div className='websitelinktree-text'>~ Project Rinrinmochi</div>
                            </li>
                            <li>
                                <div className='websitelinktree-text'>~ Project CAD</div>
                            </li>
                        </ul>
                        <Link to='/Commissions' className='websitelinktree-text'>Commissions</Link>
                    </div>

                    <div className="websitelinktree-wrapper1">
                        <Link to='/About' className='websitelinktree-text'><b>About Page</b></Link>
                        <div className='websitelinktree-text'>Characters</div>
                        <li>
                            <div className='websitelinktree-text'>~ Featuring page</div>
                        </li>
                        <Link to='/ProjectSeaWeb' className='websitelinktree-text'>Project Sea Web</Link>
                        <div className='websitelinktree-text'>Contacts</div>
                    </div>
                </div>
            </div>
            <div className="webshowcase">
                <div className="webshowcase-wrapper">
                    <img src={showcasepict1} alt="V1" />
                    <div className="webshowcase-text1">
                        <div>Homepage of the old website looks simple, with the Glaceon fanart that I drew at that time, I also showed art gallery immediately below it.</div>
                        <div>The hello is at the middle, with transparent background, giving a cool vibe, imo. And hey, the navbar is also transparent!</div>
                        <i><b>&lt; V1 website</b></i>
                    </div>
                </div>
                <div className="webshowcase-wrapper">
                    <div className="webshowcase-text2">
                        <div>The art gallery at the homepage. I like the flexible grid system. It felt like everything is aligned with a grid, yet none is being cropped.</div>
                        <div>Showing the best artworks I’ve made at that time.</div>
                        <i><b>V1 website &gt;</b></i>
                    </div>
                    <img src={showcasepict2} alt="V1" />
                </div>
                <div className="webshowcase-wrapper">
                    <img src={showcasepict3} alt="V1" />
                    <div className="webshowcase-text1">
                        <div>The grid system of the gallery is endless. So it kept going until there is no more artworks to show.</div>
                        <div>The footer is very simple. Showing just links to my popular social media accounts.</div>
                        <i><b>&lt; V1 website</b></i>
                    </div>
                </div>
                <div className="webshowcase-wrapper">
                    <div className="webshowcase-text2">
                        <div>It’s a page specialized to show my only character, Seava, at that time. There was only a handful of Seava artworks too!</div>
                        <div>The scattered images feature of Wixsite’s template is cool to see.</div>
                        <i><b>V1 website &gt;</b></i>
                    </div>
                    <img src={showcasepict4} alt="V1" />
                </div>
                <div className="webshowcase-wrapper">
                    <img src={showcasepict5} alt="V1" />
                    <div className="webshowcase-text1">
                        <div>The Commission page which also shows the art styles was a cool addition.</div>
                        <div>I made that collage to pop up an image with descriptions once you hover your cursor on top of it.</div>
                        <i><b>&lt; V1 website</b></i>
                    </div>
                </div>
                <div className="webshowcase-wrapper">
                    <div className="webshowcase-text2">
                        <div>It was created fully from scratch using ReactJS on Visual Studio Code! I learned it in a month, but I think the result is not that bad. I like the aesthetics.</div>
                        <div>The Navbar is a bluish-white shade of the original color of Vesnea. With Vesnea pink as the accent.</div>
                        <div>The icons on the bottom is a nice addition.</div>
                        <i><b>V2 website &gt;</b></i>
                    </div>
                    <img src={showcasepict6} alt="V2" />
                </div>
                <div className="webshowcase-wrapper">
                    <img src={showcasepict7} alt="V2" />
                    <div className="webshowcase-text1">
                        <div>The homepage also has an art gallery like the previous design. This time, the grid is sideways. Artworks will be trimmed to allow three artworks to be shown.</div>
                        <i><b>&lt; V2 website</b></i>
                    </div>
                </div>
                <div className="webshowcase-wrapper">
                    <div className="webshowcase-text2">
                        <div>The footer is similar to the current ones but much more simpler.</div>
                        <div>The Vesnea purple is everywhere! The combination with the white made it feels premium-ly white (light theme). I might use this color scheme again.</div>
                        <i><b>V2 website &gt;</b></i>
                    </div>
                    <img src={showcasepict8} alt="V2" />
                </div>
                <div className="webshowcase-wrapper">
                    <img src={showcasepict9} alt="V2" />
                    <div className="webshowcase-text1">
                        <div>The Projects page is to show that I have categorized the art I’ve made into a few groups.</div>
                        <div>I’ve put artworks there as a visual of which kind of artworks I did.</div>
                        <i><b>&lt; V2 website</b></i>
                    </div>
                </div>
                <div className="webshowcase-wrapper">
                    <div className="webshowcase-text2">
                        <div>The Commission page is kind of a showcase for art styles but now in the form of commission request groups.</div>
                        <i><b>V2 website &gt;</b></i>
                    </div>
                    <img src={showcasepict10} alt="V2" />
                </div>
                <div className="webshowcase-wrapper">
                    <img src={showcasepict11} alt="V2" />
                    <div className="webshowcase-text1">
                        <div>The About page is as simple as it can get. It shown Seava and Vesnea’s descriptions.</div>
                        <i><b>&lt; V2 website</b></i>
                    </div>
                </div>
            </div>
            <div className="webstyle">
                <img src={separator1} alt="separator" />
                <div className="webstyle-wrapperA">
                    <div className="webstyle-wrapperA-text">hey... suddenly the website looks different here???</div>
                    <div className="webstyle-wrapperB">
                        <div className="webstyle-wrapperB-text">✨✨ Project Sea Web’s Color Styles! ✨✨</div>
                        <img src={colorstyle} alt="SeaWeb Color's Styles" />
                    </div>
                </div>
                <img src={separator2} alt="separator" />
            </div>
            <div className='projectsshowcase'>
                ( Under Construction )
            </div>
        </div>
    )
}

export default ProjectSeaWeb;