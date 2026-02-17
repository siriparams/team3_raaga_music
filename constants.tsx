
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
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60',
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
    coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&auto=format&fit=crop&q=60',
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
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop&q=60',
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
    coverUrl: 'https://images.unsplash.com/photo-1514525253361-bee8a19740c1?w=500&auto=format&fit=crop&q=60',
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
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60',
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
    coverUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=500&auto=format&fit=crop&q=60',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    replays: 150000
  }
];

export const LANGUAGES = ['English', 'Kannada', 'Tamil', 'Telugu', 'Malayalam'] as const;
