import React from 'react';

export const Main = () => {
    return (
        <>
            <section>
                <div className="hero" >
                    <video className="video-container" muted autoPlay loop>
                        <source
                            src="https://res.cloudinary.com/juntola/video/upload/v1597892653/website/videoplayback.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </section>
        </>
    )

}