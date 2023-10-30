import './footer.css';
import { useEffect, useState } from 'react';

import img_witcher from '../../assets/footer/witcher.png';
import img_gwent from '../../assets/footer/gwent.png';
import img_cdproject from '../../assets/footer/cdproject.png';
import img_alienware from '../../assets/footer/alienware.png';
import img_rtx from '../../assets/footer/rtx.png';
import img_amd from '../../assets/footer/amd.png';
import img_cdp from '../../assets/footer/cdp.png';
import img_ic1 from '../../assets/footer/ic1.png';
import img_ic2 from '../../assets/footer/ic2.png';
import img_ic3 from '../../assets/footer/ic3.png';
import img_ic4 from '../../assets/footer/ic4.png';
import { useInView } from "react-intersection-observer";

function Footer() {

 const [footer, inView] = useInView({
        threshold: 0.6,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            document.body.className = 'red';
        }
    }, [inView]);

    const [mailTest,setMailTest] = useState(false);
    const [checkboxTest,setCheckBoxTest] = useState(false);

    const controlMail = (data) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setMailTest(emailRegex.test(data));
    }

    return (
        <div className='footer' ref={footer}>
            <div className='footer-column ftc1'>
                <div className='other-sites'>

                    <div className='other-sites-item'>
                        <div className='osi-outter'>
                            <img src={img_witcher} width={150} height={74} alt='Witcher' />
                            <div className='osi-right'>
                                <span>thewitcher.com</span>
                                <button className='go'>GO</button>
                            </div>
                        </div>
                        <div className='osi-triangle'></div>
                    </div>

                    <div className='other-sites-item'>
                        <div className='osi-outter'>
                            <img src={img_gwent} width={150} height={74} alt='Gwent' />
                            <div className='osi-right'>
                                <span>playgwent.com</span>
                                <button className='go'>GO</button>
                            </div>
                        </div>
                        <div className='osi-triangle'></div>
                    </div>

                    <div className='other-sites-item'>
                        <div className='osi-outter'>
                            <img src={img_cdproject} width={150} height={74} alt='CD Project' />
                            <div className='osi-right'>
                                <span>gear.cdprojektred.com</span>
                                <button className='go'>GO</button>
                            </div>
                        </div>
                        <div className='osi-triangle'></div>
                    </div>
                </div>

                <div className='newsletter'>
                    <input
                        type='email'
                        id='mail'
                        placeholder='Enter Email Address'
                        onKeyUp={(e)=>controlMail(e.target.value)}
                    />
                    <div>
                        <input 
                            type='checkbox' 
                            id='checkbox' 
                            onChange={(e)=>setCheckBoxTest(e.target.checked)}
                        />
                        <label htmlFor='checkbox'>
                            I would like to receive news, special offers and other information from CD PROJEKT and I am 16 years old or older. CD PROJEKT will be responsible for your personal data. For more information please check our <font>CD PROJEKT Privacy Policy.</font>
                        </label>
                    </div>
                    <div
                        className={`submit ${checkboxTest && mailTest ? 'glitch' : null}`}
                        data-content='SUBMIT'
                    >
                        SUBMIT
                    </div>
                </div>

            </div>

            <div className='footer-column ftc2'>
                <div className='partners-coverflow'>
                    <img src={img_alienware} width={200} height={50} alt='Partner' />
                    <img src={img_rtx} width={200} height={64} alt='Partner' />
                    <img src={img_amd} width={200} height={62} alt='Partner' />
                </div>
            </div>

            <div className='footer-column ftc3'>
                <div className='ftc3-links'>
                    <span>Terms of Use & Privacy Policy</span>
                    <span>Careers</span>
                    <span>User agreement</span>
                    <span>Fan Content Guidelines</span>
                    <span>REDmod</span>
                </div>
                <p>
                    CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2022 CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their respective owners.
                </p>
            </div>

            <div className='social-media-mobile'>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M19.607 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.501 6 12.001 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592c-.109.424-.394 2.2-.394 5.005c0 2.804.285 4.58.394 5.006c.076.297.292.522.538.59C5.373 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592c.11-.424.394-2.205.394-5.005s-.285-4.58-.394-5.005Zm1.937-.497c.457 1.782.457 5.502.457 5.502s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.897 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.108 4 12.001 4 12.001 4s5.896 0 7.605.476c.944.266 1.687 1.04 1.938 2.022ZM10.001 15.5v-7l6 3.5l-6 3.5Z"/></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"/></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 18 20"><path fill="currentColor" d="M15.45 0c1.118 0 2.031.901 2.05 2.025V20l-2.15-1.9l-1.21-1.12l-1.28-1.19l.53 1.85H2.05A2.055 2.055 0 0 1 0 15.615V2.06C0 .932.901.019 2.015 0H15.45ZM7.32 4.78l-.1-.12h-.057c-.273.009-1.486.1-2.753 1.05l-.048.092c-.251.49-1.392 2.872-1.392 5.738l.02.033c.142.217 1.019 1.423 3.03 1.487l.295-.361l.375-.469c-1.166-.349-1.666-1.051-1.74-1.164l-.01-.016l.041.027c.045.03.127.08.239.143c.01.01.02.02.04.03c.03.02.06.03.09.05c.25.14.5.25.73.34c.41.16.9.32 1.47.43c.729.136 1.58.187 2.508.025l.082-.015c.47-.08.95-.22 1.45-.43c.35-.13.74-.32 1.15-.59l-.016.025c-.096.14-.62.833-1.794 1.165l.165.207c.253.314.495.603.495.603c2.21-.07 3.06-1.52 3.06-1.52c0-3.22-1.44-5.83-1.44-5.83c-1.238-.929-2.425-1.037-2.733-1.049L10.4 4.66l-.14.16c1.508.461 2.3 1.103 2.46 1.243l.03.027a8.152 8.152 0 0 0-5.03-.94c-.06 0-.11.01-.17.02l-.056.005c-.38.039-1.197.179-2.214.625l-.145.068c-.182.086-.314.153-.385.19l-.06.032s.813-.774 2.576-1.294l.054-.016Zm-.38 3.61c.57 0 1.03.5 1.02 1.11c0 .61-.45 1.11-1.02 1.11c-.56 0-1.02-.5-1.02-1.11c0-.61.45-1.11 1.02-1.11Zm3.65 0c.57 0 1.02.5 1.02 1.11c0 .61-.45 1.11-1.02 1.11c-.56 0-1.02-.5-1.02-1.11c0-.61.45-1.11 1.02-1.11Z"/></svg></div>
            </div>

            <div className='footer-column ftc4'>
                <div className='footer-icons'>
                    <div>
                        <img src={img_ic1} alt='Warnings' />
                    </div>
                    <div>
                        <img src={img_ic2} alt='Warnings' />
                    </div>
                    <div>
                        <img src={img_ic3} alt='Warnings' />
                    </div>
                    <div>
                        <img src={img_ic4} alt='Warnings' />
                    </div>
                </div>

                <div className='cdp'>
                    <img src={img_cdp} width={240} height={106} alt='Warnings' />
                </div>
            </div>
        </div>
    )
}
export default Footer;