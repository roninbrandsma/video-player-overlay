"use client"

import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './VideoPlayer.scss';
import { useRef, useEffect, useState } from "react";


const VideoPlayer = (props) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const {options, onReady} = props;

    useEffect(() => {

        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
        // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
            const videoElement = document.createElement("video-js");
            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });

            // You could update an existing player in the `else` block here
            // on prop change, for example:
        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);

        }
        }, [options, videoRef]);

        // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div className='videoContainer' data-vjs-player>
            <div ref={videoRef} />
            <StopWatch />
        </div>
    )
}

const StopWatch = (player) => {
    function formatTime(ms) {
        const time = String(Math.floor(ms / 1000));
        const minutes = String(Math.floor(time % 3600) / 60);
        const seconds = String(Math.floor(time % 60)).padStart(2, '0');
        return `${minutes}:${seconds}`;
    }


    return (
        <div className='overlayArea'>
            <div className='stopWatch'></div>
        </div>
    )
}


export default VideoPlayer;