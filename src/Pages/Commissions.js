import commheroimg from '../Assets/CommHero.png';
import seavaicon from '../Assets/Seava icon.png';
import vesneaicon from '../Assets/Vesnea icon.png';
import promo1 from '../Assets/Promotional1.png';
import promo2 from '../Assets/Promotional2.png';
import vesneacomminfo from '../Assets/CommStatusimg.png';
import kofinav from '../Assets/KofiNav.png';
import commboard from '../Assets/CommBoard.png';

function Commissions() {
    return (
        <div>
            <div className="commhero">
                <img className='commheroimg' src={commheroimg} alt="D11 - Commission Banner v2" />
                <div className='commicon'>
                    <img className='seavaicon' src={seavaicon} alt="Seava Icon" />
                    <img className='vesneaicon' src={vesneaicon} alt="Vesnea Icon" />
                    <div className='commicontext'>
                        seavalanche
                        <a href="https://kofi.com/seavalanche" target='_blank' rel="noreferrer" className='commiconlink'>kofi.com/seavalanche</a>
                    </div>
                </div>
                <div className='commpromo'>
                    <img className='promo1' src={promo1} alt="2023 Calendar" />
                    <img className='promo2' src={promo2} alt="Sylveon Pattern" />
                </div>
            </div>
            <div className='artstyle'>
                <div className='artstylewrap1'>
                    <div className='artstylewrapimg'>

                    </div>
                    <div className='artstylewraptitle'>

                    </div>
                </div>
                <div className='artstylewrap2'>

                </div>
            </div>
            <div className='commstatus'>
                <img className='vesneacomminfo' src={vesneacomminfo} alt="S47 - Vesnea" />
                <div className='commstatustext'>
                    <div className='commstatustext1'>
                        Commission Status
                        See my Ko-fi page!
                    </div>
                    <div className='commstatustext2'>
                        I appreciate any support given by you!
                        <img className='kofinav' src={kofinav} alt="Ko-fi button" />
                    </div>
                </div>
            </div>
            <div className='commcontent'>
                Commissions Requests Received
                <img className='commboard' src={commboard} alt="a temporary collage" />
            </div>
            <div className='projectsshowcase'>
                ( Under Construction )
            </div>
        </div>
    )
}

export default Commissions;