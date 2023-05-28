import Player from '@vimeo/player';
// npm install @vimeo/player
import throttle from 'lodash.throttle';
// npm i lodash.thtottle

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(seconds => {
        localStorage.setItem('videoplayer-current-time', seconds);
      })
      .catch(function (error) {
        console.error('Error! Didn`t get current time', error);
      });
  }, 1000)
);
const playbackPosition = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(playbackPosition)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.error(
          'the time was less than 0 or greater than the video’s duration'
        );
        break;

      default:
        console.error('some other error occurred');
        break;
    }
  });
