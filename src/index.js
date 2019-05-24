import hello from './App';

document.getElementById('container').appendChild(hello());
document
  .getElementById('container')
  .appendChild(hello('p', 'Webpack is awesome!'));
