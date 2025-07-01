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
            <StopWatch  player={playerRef.current} />
        </div>
    )
}

const StopWatch = ({player}) => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        if (!player) return

        const updateTime = () => {
            setTime(player.currentTime())
        }

        player.on('timeupdate', updateTime);

        return () => {
            player.off('timeupdate', updateTime);
        };
    }, [player]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return (
            `${mins}:${secs}`
        )
    }

    return (
        <div className='overlayArea'>
            <div className='stopWatch'>{formatTime(time)}</div>
        </div>
    )
}


export default VideoPlayer;