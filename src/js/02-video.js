import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
  const time = event.seconds;
  localStorage.setItem(STORAGE_KEY, time);
}

function setCurrentTime() {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
setCurrentTime();
