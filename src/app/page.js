import React from "react";
import "../Components/VideoPlayer/VideoPlayer.scss";
import { VideoPlayer } from "../Components/VideoPlayer/VideoPlayer.jsx";
import './globals.css'
const styles = {
  header: {
    backgroundColor: '#183642',
    color: 'white',
    margin: 0,
    marginBottom: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    textAlign: 'center',
  },

  footer: {
    backgroundColor: '#183642',
    color: 'white',
    margin: 0,
    marginTop: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    textAlign: 'center',
    height: '45px',
    alignItems: 'center',
    lineHeight: '45px',
  }
}

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
    fluid: false,
    responsive: false,
    fill: true,
    aspectRatio: '16:9',
    controlBar: {fullscreenToggle: false}
  };

  const markers = [
    { start: 14, duration: 7, graphic: '', type: 'entrance' },  // Show at 3s for 5s
    { start: 39, duration: 15, graphic: '', type: 'stats'},  // Show at 3s for 5s
    { start: 65, duration: 20, graphic: '', type: 'highlightedPlayer'},  // Show at 3s for 5s
    { start: 136, duration: 6, graphic: '', type: 'kickoff'},  // Show at 20s for 6s
    { start: 200, duration: 4, graphic: '', type: 'throwIn', team: 'TEAM A'},  // Show at 20s for 6s
    { start: 218, duration: 8, graphic: 'assets/placeholderHeadshot.jpg', type: 'goal', player: 'R. Lundström', minute: 15 },  // Show at 3s for 5s
    { start: 266, duration: 4, graphic: 'https://play-lh.googleusercontent.com/qRjc6GCX6U4IhUkW4I3ZjpY1Y2jOaJF6fUbx88AY62YY2NUDcaUOk-wHResDClrutd8', type: 'shotsOnTarget', player: 'R. Lundström', shots: '4' },  // Show at 10s for 4s
    { start: 295, duration: 4, graphic: '', type: 'offside', team: 'TEAM A'},  // Show at 10s for 4s
    { start: 345, duration: 4, graphic: '', type: 'freeKick', team:'TEAM B'},  // Show at 10s for 4s
    { start: 428, duration: 4, graphic: '', type: 'freeKick', team:'TEAM A'},  // Show at 10s for 4s
    { start: 444, duration: 4, graphic: '', type: 'freeKick', team:'TEAM A'},  // Show at 10s for 4s
    { start: 495, duration: 8, graphic: '', type: 'cornerKick', team:'TEAM B'},  // Show at 10s for 4s
    { start: 522, duration: 15, graphic: '', type: 'halfTime'},  // Show at 10s for 4s
    { start: 573, duration: 4, graphic: '', type: 'freeKick', team:'TEAM A'},  // Show at 10s for 4s
    { start: 596, duration: 20, graphic: '', type: 'substitution', team: 'TEAM A', playerOut: 'Jordan Blake #9', playerIn: 'Marcus Reid #18' },  // Show at 10s for 4s
    { start: 637, duration: 20, graphic: '', type: 'substitution', team: 'TEAM A', playerOut: 'Liam Carter #7', playerIn: 'Noah Bennett #19' },  // Show at 10s for 4s
    { start: 661, duration: 4, graphic: '', type: 'throwIn', team: 'TEAM A' },  // Show at 10s for 4s
    { start: 681, duration: 4, graphic: '', type: 'freeKick', team: 'TEAM A'},  // Show at 10s for 4s
    { start: 686, duration: 4, graphic: '', type: 'yellowCard', team: 'TEAM B', player: 'Ethan Wallace', number: '11'},  // Show at 10s for 4s
    { start: 732, duration: 10, graphic: 'assets/placeholderHeadshot.jpg', type: 'goal', player: 'Marcus Bennett', minute: '87' },  // Show at 10s for 4s
    { start: 805, duration: 4, graphic: '', type: 'freeKick', team: 'TEAM B'},  // Show at 10s for 4s
    { start: 846, duration: 14, graphic: '', type: 'fullTime'},  // Show at 10s for 4s
    { start: 860, duration: 30, graphic: '', type: 'fullTimeStats'},  // Show at 10s for 4s
  ];

  return (
    <div className="App">
      <div style={styles.header}>
        <h1>Timeline Video</h1>
      </div>
      <VideoPlayer playerOptions={playerConfig} markers={markers} />
      <div style={styles.footer}>
        <p>Made by Ronin Brandsma</p>
      </div>
    </div>
  );
}
