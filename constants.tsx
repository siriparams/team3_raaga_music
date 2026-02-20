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
    coverUrl: 'https://gaana.com/lyrics/belageddu',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
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
    coverUrl: 'https://cloudtechservices.com/?e=53391685041930',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
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
    coverUrl: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
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
    coverUrl: 'https://en.wikipedia.org/wiki/Arabic_Kuthu',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
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
    coverUrl: 'https://open.spotify.com/track/7MOHpwP0pcGOZ3JqN7UlCm',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
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
    coverUrl: 'https://en.wikipedia.org/wiki/Heat_Waves',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    replays: 150000
  }
];

export const LANGUAGES = ['English', 'Kannada', 'Tamil', 'Telugu', 'Malayalam'] as const;