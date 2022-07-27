import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refVideo = document.querySelector('#vimeo-player');

const player = new Player(refVideo);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', function (time) {
  const timeSecond = time.seconds;
  console.log(timeSecond);
  const saveTime = localStorage.setItem(LOCALSTORAGE_KEY, timeSecond);
  //const throobleTime = throttle(saveTime, 1000);
  throttle(saveTime, 1000);
});

const localTime = localStorage.getItem(LOCALSTORAGE_KEY) || '';

player.setCurrentTime(localTime).then(function (time) {
  console.log('time', time);
});
