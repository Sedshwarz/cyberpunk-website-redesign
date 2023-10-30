import video from '../../../assets/other/video.mp4';

export default function BannerVideo() {
    return (
        <div className='banner-video'>
            <div className='bv-shadow'></div>
            <div
                className='video-frame'
                data-augmented-ui='tl-clip bl-clip tr-scoop b-clip-x border'
            >
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video.
                </video>

                <div className='video-description'>
                    <h2>PHANTOM LIBERTY IS NOW AVAILABLE</h2>
                    <div className='vd-buttons'>
                        <div
                            className='vdb-button glitch'
                            data-augmented-ui='tl-clip-x br-clip border'
                            data-content='Learn More'
                        >
                            Learn More
                        </div>
                        <div
                            className='vdb-button glitch'
                            data-augmented-ui='tl-clip-x br-clip border'
                            data-content='Watch Trailer'
                        >
                            Watch Trailer
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}