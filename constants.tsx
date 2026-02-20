
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
    // FIXED: Direct link to the image file
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/9/91/Kirik_Party_Poster.jpg',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
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
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Butta_Bomma_Song_Poster.jpg',
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
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
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
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Arabic_Kuthu_poster.jpg',
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
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/1/13/Premam_film_poster.jpg',
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
    coverUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    replays: 150000
  }
];

export const LANGUAGES = ['English', 'Kannada', 'Tamil', 'Telugu', 'Malayalam'] as const;
