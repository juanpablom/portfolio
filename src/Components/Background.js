import React from 'react';
import video from '../Utils/background.mp4'

const Background = () => {

    return (   
        <section className="background">
            <video preload='auto' loop autoPlay muted>
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
        </section>
    )
}

export default Background