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
    { start: 14, duration: 8, graphic: '', type: 'entrance', player: 'R. Lundström' },  // Show at 3s for 5s
    { start: 39, duration: 20, graphic: '', type: 'stats', player: 'R. Lundström' },  // Show at 3s for 5s
    { start: 65, duration: 20, graphic: '', type: 'highlightedPlayer', player: 'R. Lundström' },  // Show at 3s for 5s
    { start: 136, duration: 6, graphic: '', type: 'kickoff', teams: 'Molde FK vs Vålerenga' },  // Show at 20s for 6s
    { start: 200, duration: 4, graphic: '', type: 'throwIn', teams: 'Molde FK vs Vålerenga' },  // Show at 20s for 6s
    { start: 218, duration: 8, graphic: 'https://www.footballdatabase.eu/images/photos/players/2015-2016/a_124/124259.jpg', type: 'goal', player: 'R. Lundström', minute: 15 },  // Show at 3s for 5s
    { start: 266, duration: 4, graphic: 'https://play-lh.googleusercontent.com/qRjc6GCX6U4IhUkW4I3ZjpY1Y2jOaJF6fUbx88AY62YY2NUDcaUOk-wHResDClrutd8', type: 'shotsOnTarget', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 295, duration: 4, graphic: '', type: 'offside', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 345, duration: 4, graphic: '', type: 'freeKick', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 428, duration: 4, graphic: '', type: 'freeKick', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 444, duration: 4, graphic: '', type: 'freeKick', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 495, duration: 8, graphic: '', type: 'cornerKick', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 530, duration: 8, graphic: '', type: 'halfTime', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 534, duration: 8, graphic: '', type: 'stats', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 573, duration: 8, graphic: '', type: 'freeKick', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 596, duration: 20, graphic: '', type: 'substitution', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 661, duration: 4, graphic: '', type: 'throwIn', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 681, duration: 4, graphic: '', type: 'freeKickAward', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 713, duration: 4, graphic: '', type: 'freeKickTaken', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 732, duration: 10, graphic: '', type: 'goal', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 805, duration: 4, graphic: '', type: 'freeKickAward', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 846, duration: 4, graphic: '', type: 'fullTime', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 860, duration: 30, graphic: '', type: 'stats', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
  ];

  return (
    <div className="App">
      <VideoPlayer playerOptions={playerConfig} markers={markers} />
    </div>
  );
}
