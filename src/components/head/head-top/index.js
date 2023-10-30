import { Menu } from '../menu-items';
import logo from '../../../assets/other/logo.png';

export default function HeadTop() {
    return (
        <div className='head-top'>
            <img src={logo} alt='Cyberpunk' />
            <div className='menu'>
                {
                    Menu.map((item, index) => (
                        <div
                            className={`menu-item ${item.title === 'EN' ? 'mio' : ''}`}
                            key={index}
                            style={{ zIndex: (100 - index) }}
                        >
                            <div className='menu-item-shape'>
                                {item.title}
                            </div>
                            {
                                item.sub !== "" ? (
                                    <>
                                        <div className='menu-item-items-wrapper'></div>
                                        <div className='menu-item-items'>
                                            {
                                                item.sub.map((itm, ind) => (
                                                    <div className='mii-item' key={ind}>
                                                        {itm}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                ) : null
                            }
                        </div>
                    ))
                }

                <div className='menu-item menu-item-buy'>
                    <div className='menu-item-shape'>
                        BUY
                    </div>
                </div>
            </div>
        </div>
    )
}