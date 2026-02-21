
import React from 'react';
import { ViewType, Song, Playlist } from '../types';

interface MainViewProps {
  view: ViewType;
  searchSongs: Song[];
  activeSong: Song | null;
  onPlay: (song: Song) => void;
  onDownload: (song: Song) => void;
  playlist?: Playlist | null;
  allSongs: Song[];
  likedSongIds: string[];
  onToggleLike: (song: Song) => void;
}

const MainView: React.FC<MainViewProps> = ({ view, searchSongs, onPlay, onDownload, activeSong, playlist, allSongs, likedSongIds, onToggleLike }) => {
  const renderHome = () => {
    const languages = [...new Set(allSongs.map(s => s.language))];

    return (
      <div className="space-y-12 animate-fadeIn">
        <section>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-black text-white italic tracking-tight underline decoration-green-500 underline-offset-8">Top Songs</h2>
            <button className="text-xs font-black text-gray-500 hover:text-white uppercase tracking-widest transition">Show all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {allSongs.slice(0, 6).map(song => (
              <SongCard key={song.id} song={song} onPlay={onPlay} isActive={activeSong?.id === song.id} isLiked={likedSongIds.includes(song.id)} onToggleLike={onToggleLike} />
            ))}
          </div>
        </section>

        {languages.map(lang => (
          <section key={lang}>
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-black text-white italic tracking-tight">{lang} Masterpieces</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {allSongs.filter(s => s.language === lang).slice(0, 6).map(song => (
                <SongCard key={song.id} song={song} onPlay={onPlay} isActive={activeSong?.id === song.id} isLiked={likedSongIds.includes(song.id)} onToggleLike={onToggleLike} />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  };

  const renderSearch = () => (
    <div className="animate-fadeIn">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-4xl font-black text-white italic tracking-tight">Explore Library</h2>
        <p className="text-sm font-bold text-gray-500">{searchSongs.length} matches found</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {searchSongs.length > 0 ? (
          searchSongs.map(song => (
            <SongCard key={song.id} song={song} onPlay={onPlay} isActive={activeSong?.id === song.id} isLiked={likedSongIds.includes(song.id)} onToggleLike={onToggleLike} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <svg className="w-16 h-16 text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="text-gray-500 font-bold text-xl">We couldn't find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderLiked = () => {
    const likedSongs = allSongs.filter(s => likedSongIds.includes(s.id));
    return (
      <div className="animate-fadeIn">
        {/* Header */}
        <div className="flex items-end gap-8 mb-12">
          <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-700 flex items-center justify-center shadow-[0_20px_60px_rgba(236,72,153,0.4)] flex-shrink-0">
            <svg className="w-24 h-24 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-pink-400 mb-2">Playlist</p>
            <h1 className="text-7xl font-black text-white italic tracking-tighter leading-none mb-4">Liked Songs</h1>
            <p className="text-gray-400 font-bold">{likedSongs.length} {likedSongs.length === 1 ? 'song' : 'songs'}</p>
          </div>
        </div>

        {likedSongs.length === 0 ? (
          <div className="py-20 text-center">
            <svg className="w-20 h-20 text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-white font-black text-2xl mb-2">Songs you like will appear here</p>
            <p className="text-gray-500 font-bold">Save songs by tapping the heart icon ♥</p>
          </div>
        ) : (
          <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-12 gap-4 px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500 border-b border-white/5">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Title / Artist</div>
              <div className="col-span-3">Album</div>
              <div className="col-span-2">Lang</div>
              <div className="col-span-1 text-right">♥</div>
            </div>
            <div className="py-4">
              {likedSongs.map((song, idx) => (
                <div
                  key={song.id}
                  className={`grid grid-cols-12 gap-4 px-8 py-3 text-sm text-gray-400 hover:bg-white/10 rounded-xl group transition-all cursor-pointer items-center mx-2 ${activeSong?.id === song.id ? 'bg-white/10' : ''}`}
                  onClick={() => onPlay(song)}
                >
                  <div className="col-span-1 flex items-center font-black">
                    {activeSong?.id === song.id ? <span className="text-green-500 animate-pulse">▶</span> : idx + 1}
                  </div>
                  <div className="col-span-5 flex items-center gap-4">
                    <img src={song.coverUrl} className="w-12 h-12 rounded-lg shadow-lg object-cover" alt={song.name} />
                    <div className="overflow-hidden">
                      <p className={`font-black text-base truncate ${activeSong?.id === song.id ? 'text-green-500' : 'text-white'}`}>{song.name}</p>
                      <p className="text-xs font-bold opacity-60 group-hover:opacity-100 truncate">{song.singer} • {song.composer}</p>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center font-bold text-xs truncate group-hover:text-white transition-colors">{song.movieName}</div>
                  <div className="col-span-2 flex items-center">
                    <span className="px-2 py-0.5 bg-white/5 rounded-md text-[9px] font-black uppercase group-hover:bg-white/20 transition-colors">{song.language}</span>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <button
                      onClick={(e) => { e.stopPropagation(); onToggleLike(song); }}
                      className="p-2 hover:bg-pink-500/20 rounded-full transition-all active:scale-90 text-pink-500"
                      title="Unlike"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPlaylist = () => {
    if (!playlist) return <div>No playlist selected.</div>;
    const playlistSongs = allSongs.filter(s => playlist.songIds.includes(s.id));
    return (
      <div className="animate-fadeIn">
        <div className="flex items-end gap-10 mb-12">
          <div className="relative group">
            <img src={playlist.coverUrl} className="w-64 h-64 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl object-cover transform transition group-hover:scale-105" alt={playlist.name} />
            <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M7 6v12l10-6z" /></svg>
              </button>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-500 mb-3">Public Playlist</p>
            <h1 className="text-8xl font-black text-white mb-6 italic tracking-tighter leading-none">{playlist.name}</h1>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-black text-white uppercase italic">Raaga Studio</span>
              <span className="text-gray-500 font-black">•</span>
              <span className="text-gray-400 font-bold">{playlistSongs.length} {playlistSongs.length === 1 ? 'song' : 'songs'}</span>
            </div>
          </div>
        </div>

        {playlistSongs.length === 0 ? (
          <div className="py-20 text-center">
            <svg className="w-20 h-20 text-gray-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <p className="text-white font-black text-2xl mb-2">This playlist is empty</p>
            <p className="text-gray-500 font-bold">Add songs to this playlist to see them here</p>
          </div>
        ) : (
          <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-12 gap-4 px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500 border-b border-white/5">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Title / Artist</div>
              <div className="col-span-3">Album</div>
              <div className="col-span-2">Lang</div>
              <div className="col-span-1 text-right">Action</div>
            </div>
            <div className="py-4">
              {playlistSongs.map((song, idx) => (
                <div
                  key={song.id}
                  className={`grid grid-cols-12 gap-4 px-8 py-3 text-sm text-gray-400 hover:bg-white/10 rounded-xl group transition-all cursor-pointer items-center mx-2 ${activeSong?.id === song.id ? 'bg-white/10' : ''}`}
                  onClick={() => onPlay(song)}
                >
                  <div className="col-span-1 flex items-center font-black">
                    {activeSong?.id === song.id ? <span className="text-green-500 animate-pulse">▶</span> : idx + 1}
                  </div>
                  <div className="col-span-5 flex items-center gap-4">
                    <img src={song.coverUrl} className="w-12 h-12 rounded-lg shadow-lg object-cover" alt={song.name} />
                    <div className="overflow-hidden">
                      <p className={`font-black text-base truncate ${activeSong?.id === song.id ? 'text-green-500' : 'text-white'}`}>{song.name}</p>
                      <p className="text-xs font-bold opacity-60 group-hover:opacity-100 truncate">{song.singer} • {song.composer}</p>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center font-bold text-xs truncate group-hover:text-white transition-colors">{song.movieName}</div>
                  <div className="col-span-2 flex items-center">
                    <span className="px-2 py-0.5 bg-white/5 rounded-md text-[9px] font-black uppercase group-hover:bg-white/20 transition-colors">{song.language}</span>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <button
                      onClick={(e) => { e.stopPropagation(); onDownload(song); }}
                      className="p-2 hover:bg-green-500 hover:text-black rounded-full transition-all active:scale-90"
                      title="Download Song"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  switch (view) {
    case 'home': return renderHome();
    case 'search': return renderSearch();
    case 'liked': return renderLiked();
    case 'playlist-detail': return renderPlaylist();
    default: return renderHome();
  }
};

interface SongCardProps {
  song: Song;
  onPlay: (s: Song) => void;
  isActive: boolean;
  isLiked: boolean;
  onToggleLike: (s: Song) => void;
}

const SongCard: React.FC<SongCardProps> = ({ song, onPlay, isActive, isLiked, onToggleLike }) => (
  <div
    onClick={() => onPlay(song)}
    className={`p-5 bg-[#121212]/50 hover:bg-[#1e1e1e] rounded-2xl transition-all cursor-pointer group shadow-2xl border border-white/5 hover:border-white/10 ${isActive ? 'bg-[#1e1e1e] ring-1 ring-green-500/50' : ''}`}
  >
    <div className="relative aspect-square mb-5 shadow-2xl perspective-1000">
      <img src={song.coverUrl} className="w-full h-full object-cover rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-500" alt={song.name} />
      <div className={`absolute bottom-3 right-3 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(34,197,94,0.4)] transition-all duration-300 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 active:scale-95 z-10 ${isActive ? 'opacity-100 translate-y-0' : ''}`}>
        <svg className="w-7 h-7 text-black fill-current" viewBox="0 0 24 24"><path d="M7 6v12l10-6z" /></svg>
      </div>
      {/* Like button */}
      <button
        onClick={(e) => { e.stopPropagation(); onToggleLike(song); }}
        className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all active:scale-90 z-10 ${isLiked ? 'bg-pink-500/90 text-white opacity-100' : 'bg-black/50 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-pink-400'}`}
        title={isLiked ? 'Unlike' : 'Like'}
      >
        <svg className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
    </div>
    <div className="space-y-1">
      <h3 className="text-white font-black text-lg truncate tracking-tight">{song.name}</h3>
      <p className="text-xs font-bold text-gray-500 truncate group-hover:text-gray-300 transition-colors uppercase tracking-wider">{song.singer}</p>
    </div>
    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[9px] font-black text-green-500 uppercase tracking-[0.1em]">{song.genre}</span>
        <span className="text-[10px] font-bold text-gray-600 uppercase">{song.language}</span>
      </div>
      <span className="text-[10px] font-black text-gray-500 bg-white/5 px-2 py-0.5 rounded-md">{Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}</span>
    </div>
  </div>
);

export default MainView;
