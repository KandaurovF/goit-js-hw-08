import Player from '@vimeo/player';
// npm install @vimeo/player
import throttle from 'lodash.throttle';
// npm i lodash.throttle

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
const playbackPosition = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(playbackPosition);
