import { Link } from 'react-router-dom';
import linktreebg from '../Assets/Project Sea Web/weblinktree/Vesnea.png';

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
        </div>
    )
}

export default ProjectSeaWeb;