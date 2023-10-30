import '../../../node_modules/augmented-ui/augmented-ui.min.css';
import './head.css';
import HeadTop from './head-top';
import BannerVideo from './banner-video';
import SocialMedia from './social-media';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

function Head() {

 const [head, inView] = useInView({
        threshold: 0.7,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            document.body.className = 'purple';
        }
    }, [inView]);

    return (
        <div className='head' ref={head}>
            <HeadTop/>
            <BannerVideo/>
            <SocialMedia/>            
        </div>
    )
}
export default Head;