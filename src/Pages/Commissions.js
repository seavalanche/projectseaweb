import commheroimg from '../Assets/CommHero.jpg';
import seavaicon from '../Assets/Seava icon.png';
import vesneaicon from '../Assets/Vesnea icon.png';
import promo1 from '../Assets/Promotional1.png';
import promo2 from '../Assets/Promotional2.png';
import vesneacomminfo from '../Assets/CommStatusimg.png';
import kofinav from '../Assets/KofiNav.png';
import commboard from '../Assets/CommBoard.jpg';
import artstyleimg from '../Assets/ArtStyleWrap.jpg';
import commamount from '../Assets/Commission Amount.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import item01 from '../Assets/Completed Commission/SEA 2022 - C01 - Truffles and Claus - 220529-0088.jpg';

// const itemsLength = Array.from({ length: 5 });
// const items = itemsLength.map((item, index) => {
//     const style = { width: 150 + index * 100 };
//     return (<div className="item" style={style}>{index + 1}</div>);
// });

// const handleDragStart = (e) => e.preventDefault();
// const items = [
//     <img src="../Assets/Completed Commission/SEA 2022 - C01 - Truffles and Claus - 220529-0088.jpg" onDragStart={handleDragStart} role="presentation" alt=''/>,
//     <img src="../Assets/Completed Commission/SEA 2022 - C01b - Truffles and Claus - 220529-0039.jpg" onDragStart={handleDragStart} role="presentation" alt=''/>,
//     <img src="path-to-img" onDragStart={handleDragStart} role="presentation" alt=''/>,
// ];

const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 2
    },
    1024: {
        items: 3,
        itemsFit: 'contain'
    },
};

const items = [
    <div className="item" data-value="1"><img src={item01} className='carouselpict' alt='' /></div>,
    <div className="item" data-value="2"><img src={item01} className='carouselpict' alt='' /></div>,
    <div className="item" data-value="3"><img src={item01} className='carouselpict' alt='' /></div>,
    <div className="item" data-value="4"><img src={item01} className='carouselpict' alt='' /></div>,
    <div className="item" data-value="5"><img src={item01} className='carouselpict' alt='' /></div>,
];

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
                Commissions Requests Completed
                <img className='commboard' src={commboard} alt="a temporary collage" />
                {/* <AliceCarousel
                    autoWidth
                    infinite
                    mouseTracking
                    items={items}
                /> */}

                <div className='commcarousel'>
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                    />
                </div>
                <img className='commamount' src={commamount} alt="Completed commission amount" />
            </div>
            {/* <div className='projectsshowcase'>
                ( Under Construction )
            </div> */}
        </div>
    )
}

export default Commissions;