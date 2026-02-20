import { Song } from './types';

export const MOCK_SONGS: Song[] = [
  {
    id: '1',
    name: 'Belageddu',
    movieName: 'Kirik Party',
    composer: 'B. Ajaneesh Loknath',
    singer: 'Vijay Prakash',
    duration: 210,
    language: 'Kannada',
    genre: 'Romance',
    coverUrl: 'https://res.cloudinary.com/driumz9xo/image/upload/v1771579614/p4ynxrfrcawj00wogcqa.jpg',
    audioUrl: 'https://res.cloudinary.com/driumz9xo/video/upload/v1771580344/fpq5xcaojrugze1zvwgm.mp3',
    replays: 1200
  },
  {
    id: '2',
    name: 'Butta Bomma',
    movieName: 'Ala Vaikunthapurramuloo',
    composer: 'S. Thaman',
    singer: 'Armaan Malik',
    duration: 195,
    language: 'Telugu',
    genre: 'Dance',
    coverUrl: 'https://res.cloudinary.com/driumz9xo/image/upload/v1771579615/ihmvyw6wizl9gganucsy.jpg',
    audioUrl: 'https://res.cloudinary.com/driumz9xo/video/upload/v1771580347/tu1euy8kiymwythen86c.mp3',
    replays: 5000
  },
  {
    id: '3',
    name: 'Blinding Lights',
    movieName: 'After Hours',
    composer: 'The Weeknd',
    singer: 'The Weeknd',
    duration: 200,
    language: 'English',
    genre: 'Synthwave',
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png',
    audioUrl: 'https://res.cloudinary.com/driumz9xo/video/upload/v1771580346/trz4fwg9mjmib2rhuhyg.mp3',
    replays: 1000000
  },
  {
    id: '4',
    name: 'Arabic Kuthu',
    movieName: 'Beast',
    composer: 'Anirudh Ravichander',
    singer: 'Anirudh, Jonita Gandhi',
    duration: 280,
    language: 'Tamil',
    genre: 'Folk-Pop',
    coverUrl: 'https://res.cloudinary.com/driumz9xo/image/upload/v1771579616/iib6sj9ax17r1wxpaevu.jpg',
    audioUrl: 'https://res.cloudinary.com/driumz9xo/video/upload/v1771580342/wrncynt6kabcspit78bb.mp3',
    replays: 3500
  },
  {
    id: '5',
    name: 'Malare',
    movieName: 'Premam',
    composer: 'Rajesh Murugesan',
    singer: 'Vijay Yesudas',
    duration: 310,
    language: 'Malayalam',
    genre: 'Melody',
    coverUrl: 'https://res.cloudinary.com/driumz9xo/image/upload/v1771579613/b3twzsr9rrdrvaokhgmf.jpg',
    audioUrl: 'https://res.cloudinary.com/driumz9xo/video/upload/v1771580350/qeealwmfvxd1sw6wlw3s.mp3',
    replays: 8900
  },
  {
    id: '6',
    name: 'Heat Waves',
    movieName: 'Dreamland',
    composer: 'Glass Animals',
    singer: 'Glass Animals',
    duration: 238,
    language: 'English',
    genre: 'Indie Pop',
    coverUrl: 'https://res.cloudinary.com/driumz9xo/image/upload/v1771579616/xce3kssxehtbkngphkeu.png',
    audioUrl: 'https://res.cloudinary.com/driumz9xo/video/upload/v1771580349/mm8a2smhpif2oobv5ey8.mp3',
    replays: 150000
  }
];




export const LANGUAGES = ['English', 'Kannada', 'Tamil', 'Telugu', 'Malayalam'] as const;