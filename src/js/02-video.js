//import Player from '@vimeo/player';
import _throttle from 'lodash';

const refVideo = document.querySelector('#vimeo-player');
console.log(refVideo);

const player = new Vimeo.Player(refVideo);
console.log(player);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player
  .on('timeupdate', function (time) {
    const timeSecond = time.seconds;
    console.log(timeSecond);
    const saveTime = localStorage.setItem(LOCALSTORAGE_KEY, timeSecond);
  })
  .throttle(1000);

const localTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(localTime).then(function (time) {
  console.log('time', time);
});
