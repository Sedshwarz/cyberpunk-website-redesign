import "./news.css";
import Marquee from "react-fast-marquee";
import newsContent from "./news.json";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function News() {

    const [activeNew, setActiveNew] = useState("1");

    const [news, inView] = useInView({
        threshold: 0.7,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            document.body.className = 'yellow';
        }
    }, [inView]);

    return (
        <div className='news' ref={news}>
            <div className='news-container'>
                <div className='news-border-shape nbs1'></div>
                <div className='news-border-shape nbs2'></div>
                <div className='news-border-shape nbs3'></div>
                <div className='news-border-shape nbs4'></div>

                <div className='new-container-left'>
                    {
                        newsContent
                            .filter(item => item.id === activeNew)
                            .map((itm, index) => (
                                <React.Fragment key={index}>
                                    <div className={`big-new-image bni-${activeNew}`}></div>
                                    <div className='big-new'></div>
                                    <div
                                        className='big-new-title glitch2'
                                        data-content={itm.title}
                                    >
                                        {itm.title}
                                    </div>
                                </React.Fragment>
                            ))
                    }
                </div>
                <div className='new-container-right'>

                    <Marquee
                        autoFill={true}
                        direction="down"
                        className="marquee1"
                        speed={35}
                    >
                        {
                            newsContent.map((item, ind) => {
                                if (Math.floor(newsContent.length / 2) >= ind) {
                                    return <div
                                        className={`itm itm-${item.id} ${item.id === activeNew ? 'itm-active' : null}`}
                                        key={ind}
                                        onClick={() => setActiveNew(item.id)}
                                    ></div>;
                                }
                                return null;
                            })
                        }
                    </Marquee>

                    <Marquee
                        autoFill={true}
                        direction="up"
                        className="marquee1"
                        speed={30}
                    >
                        {
                            newsContent.map((item, ind) => {
                                if (Math.floor(newsContent.length / 2) < ind) {
                                    return <div
                                        className={`itm itm-${item.id} ${item.id === activeNew ? 'itm-active' : null}`}
                                        key={ind}
                                        onClick={() => setActiveNew(item.id)}
                                    ></div>;
                                }
                                return null;
                            })
                        }
                    </Marquee>

                </div>
            </div>
        </div>
    )
}
export default News;