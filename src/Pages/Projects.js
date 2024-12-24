import timeline from '../Assets/Timelinehelper.png';
import { Link } from 'react-router-dom';
import { useTheme } from "../ThemeContext";

function Projects() {
    const { theme } = useTheme();
    return (
        <div>
            <div className={`projectshero ${theme || "light"}`}>
                <div className="projectsheroheader">
                    <div className="projectsherotitle">Projects</div>
                    I categorized my arts into Projects. There are Pokémon fanarts and also Creative arts currently. All the things that is not Pokémon related is categorized as Project Seava.
                </div>
                <div className="projectsheroitem">
                    <div className="projectsheroitemcard">
                        <div className="projectsheroitemtitle">Project Rea</div>
                        <div className="projectsheroitemtext">
                            Pokémon fanarts fall into this Project.<br /><br />
                            Currently has more than 700 artworks and a few animations!
                        </div>
                        <div className='projectsherolearnmore'>See more about it</div>
                    </div>
                    <div className="projectsheroitemcard">
                        <div className="projectsheroitemtitle">Project Oshyarena</div>
                        <div className="projectsheroitemtext">
                            This Project is specialized in experimental stuffs.<br /><br />
                            It will have new artstyle artworks, about cloth designs, etc.
                        </div>
                        <div className='projectsherolearnmore'>See more about it</div>
                    </div>
                    <div className="projectsheroitemcard">
                        <div className="projectsheroitemtitle">Project Seava</div>
                        <div className="projectsheroitemtext">
                            All original creations will be here.<br /><br />
                            Commission requests and the design of this Website is also in this category!
                        </div>
                        <div className='projectsherolearnmore'>See more about it</div>
                    </div>
                </div>
            </div>
            <div className="historicalsect">
                <img className='timeline' src={timeline} alt="timeline" />
                <div className='historicalsectinfo'>
                    Notable dates:
                    <ul>
                        <li>The “Evening Walk” was the first digital artwork that I started on 10 June 2015</li>
                        <li>Rhon was the first original character that I created on 21 September 2019</li>
                        <li>Discord server “seavalanche’s circle” was created on 4 September 2020</li>
                        <li>The first ever art trade was the “2020 - 96” on 18 December 2020</li>
                        <li>CeruleanFrost Twitter account reaches 1000 followers on 11 January 2021</li>
                        <li>The first ever art collaboration was the “2021 - 41” on 25 February 2021</li>
                        <li>
                            Seava character was created on 29 October 2021
                            seavalanche Twitter account started to be active on January 2022
                        </li>
                        <li>The first Seava model in Live2D (v0.1) was created on 2 January 2022</li>
                        <li>The first Seava model in 3D (v0) was created on 16 January 2022</li>
                        <li>The latest working Seava model in 3D (v0.4.2d) was updated on 3 February 2022</li>
                        <li>Seava got a changes on the latest ref sheet created on 1 May 2022</li>
                        <li>Vesnea character was created on 22 May 2022</li>
                        <li>
                            The first ever commission request was received on 29 May 2022
                            CeruleanFrost Twitter account reaches 2000 followers on 18 July 2022
                        </li>
                        <li>The latest Seava model in Live2D (v0.8) was created on 4 August 2022</li>
                        <li>The latest Vesnea model in Live2D (v0) was created on 18 August 2022</li>
                        <li>The latest Seavalanche website (v2) was online on 2 September 2022</li>
                        <li>The first ever digital merchandise was sold (2023 Calendar) on 21 December 2022</li>
                    </ul>
                </div>
            </div>
            <div className='projectsshowcase'>
                ( Under Construction )
                <Link to='/ProjectSeaWeb'>Project Sea Web</Link>
            </div>
        </div>
    )
}

export default Projects;