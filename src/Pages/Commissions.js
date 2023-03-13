import commheroimg from '../Assets/CommHero.jpg';
import seavaicon from '../Assets/Seava icon.png';
import vesneaicon from '../Assets/Vesnea icon.png';
import promo1 from '../Assets/Promotional1.png';
import promo2 from '../Assets/Promotional2.png';
import vesneacomminfo from '../Assets/CommStatusimg.png';
import kofinav from '../Assets/KofiNav.png';
import commboard from '../Assets/CommBoard.jpg';
import artstyleimg from '../Assets/ArtStyleWrap.jpg';

function Commissions() {
    return (
        <div>
            <div className="commhero">
                <img className='commheroimg' src={commheroimg} alt="D11 - Commission Banner v2" />
                <div className='commheroitem'>
                    <div className='commicon'>
                        <img className='commiconimg' src={seavaicon} alt="Seava Icon" />
                        <img className='commiconimg' src={vesneaicon} alt="Vesnea Icon" />
                        <div className='commicontext'>
                            seavalanche
                            <a href="https://ko-fi.com/seavalanche" target='_blank' rel="noreferrer" className='commiconlink'>ko-fi.com/seavalanche</a>
                        </div>
                    </div>
                    <div className='commpromo'>
                        <a href="https://ko-fi.com/s/7470eb7b05" target='_blank' rel="noreferrer" >
                            <div className='commpromowrapper'>
                                <img className='promoimg' src={promo1} alt="2023 Calendar" />
                                <div className='promotext'>2023 Calendar</div>
                            </div>
                        </a>
                        <a href="https://ko-fi.com/s/839bc16f74" target='_blank' rel="noreferrer" >
                            <div className='commpromowrapper'>
                                <img className='promoimg' src={promo2} alt="Sylveon Pattern" />
                                <div className='promotext'>Sylveon Pattern</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='artstyle'>
                <div className='artstylewrap1'>
                    <div className='artstylewrapimg'>
                        <img className='artstyleimg' src={artstyleimg} alt="a temporary collage" />
                    </div>
                    <div className='artstylewraptitle'>

                    </div>
                </div>
                <div className='artstylewrap2'>

                </div>
            </div>
            <div className='commstatus'>
                <div className='commstatuswrapper'>
                    <img className='vesneacomminfo' src={vesneacomminfo} alt="S47 - Vesnea" />
                    <div className='commstatustext'>
                        <div className='commstatustext1'>
                            <div className='commstatustexttitle'>Commission Status</div>
                            See my Ko-fi page!
                        </div>
                        <div className='commstatustext2'>
                            I appreciate any support given by you!
                            <a href="https://ko-fi.com/seavalanche" target="_blank" rel="noopener noreferrer" ><img className='kofinav' src={kofinav} alt="Ko-fi button" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='commcontent'>
                Commissions Requests Received
                <img className='commboard' src={commboard} alt="a temporary collage" />
            </div>
            {/* <div className='projectsshowcase'>
                ( Under Construction )
            </div> */}
        </div>
    )
}

export default Commissions;