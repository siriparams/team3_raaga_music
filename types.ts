
export type Language = 'English' | 'Kannada' | 'Tamil' | 'Telugu' | 'Malayalam';

export interface Song {
  id: string;
  name: string;
  movieName: string;
  composer: string;
  singer: string;
  duration: number; // in seconds
  language: Language;
  genre: string;
  coverUrl: string;
  audioUrl: string;
  replays: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  isPro: boolean;
  downloadCount: number;
  playlists: string[]; // playlist IDs
  favoriteSongs: string[]; // song IDs
}

export interface Playlist {
  id: string;
  name: string;
  ownerId: string;
  songIds: string[];
  coverUrl: string;
}

export type ViewType = 'home' | 'search' | 'library' | 'playlist-detail' | 'profile';
