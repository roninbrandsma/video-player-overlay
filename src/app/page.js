import React from "react";
import "../Components/VideoPlayer/VideoPlayer.scss";
import { VideoPlayer } from "../Components/VideoPlayer/VideoPlayer.jsx";

export default function App() {
// config.js
  const playerConfig = {
    sources: [
      {
        src: 'https://edge.stream.easelive.tv/vod/_definst_/s3/smil:vod-assets-ireland-sixty-no/wowza/client/tippeligaen/Fotball_vod.smil/playlist.m3u8',
      },
    ],
    controls: true,
    autoplay: true,
    preload: 'auto',
    fluid: true,
    responsive: true,
  };

  const markers = [
  { start: 218, duration: 5, graphic: 'https://www.footballdatabase.eu/images/photos/players/2015-2016/a_124/124259.jpg' },  // Show at 3s for 5s
  { start: 10, duration: 4, graphic: '/images/graphic2.png' },  // Show at 10s for 4s
  { start: 20, duration: 6, graphic: '/images/graphic3.png' },  // Show at 20s for 6s
  ];

  return (
    <div className="App">
      <VideoPlayer playerOptions={playerConfig} markers={markers} />
    </div>
  );
}
