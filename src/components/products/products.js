import './products.css';

import img1 from '../../assets/products/images/1.png';
import img2 from '../../assets/products/images/2.png';
import img3 from '../../assets/products/images/3.png';
import img4 from '../../assets/products/images/4.png';
import img5 from '../../assets/products/images/5.png';
import img6 from '../../assets/products/images/6.png';
import img7 from '../../assets/products/images/7.png';
import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";

function Products() {

 const [productsRef, inView] = useInView({
        threshold: 0.7,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            document.body.className = 'blue';
        }
    }, [inView]);


    const prodcuts = [
        {
            id: "1",
            title: "Video Game",
            platforms: [img1, img2, img3, img4, img5]
        },
        {
            id: "2",
            title: "Game DLC",
            platforms: [img1, img2, img3]
        },
        {
            id: "3",
            title: "Netflix Serie",
            platforms: [img6]
        },
        {
            id: "4",
            title: "Store",
            platforms: [img7]
        }
    ];

    return (
        <div className='products' ref={productsRef}>

            <div className='products-top'>
                <h1>WELCOME TO THE DARK FUTURE</h1>
                <span>
                    Immerse yourself in the Cyberpunk universe, from the original storyline of Cyberpunk 2077 and its gripping spy-thriller expansion Phantom Liberty to the award-winning anime series Cyberpunk: Edgerunners — there are countless stories to discover in the deadly megalopolis of Night City.
                </span>
            </div>

            {
                prodcuts.map((item, index) => (
                    <div
                        className='prodcuts-card-wrapper'
                        key={index}
                    >
                        <div
                            data-augmented-ui='b-clip-xy border'
                            className='pcw-card'
                        >
                            <div className={`pcw-card-image pcwci-${item.id}`}></div>
                            <div className='pcw-card-bottom'>
                                <div className='pcwcb-headline'>{item.title}</div>
                                <div className='pcwcb-platforms'>
                                    {
                                        item.platforms.map((itm, ind) => (
                                            <React.Fragment key={ind}>
                                                <img src={itm} alt='Platform' />
                                            </React.Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div
                            data-augmented-ui='tl-clip tr-clip br-clip bl-clip border'
                            className='pcw-learn-more'
                        >
                            Learn More
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Products;