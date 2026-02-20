
import React from 'react';
import { ViewType, Playlist } from '../types';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  playlists: Playlist[];
  onPlaylistSelect: (playlist: Playlist) => void;
  onCreatePlaylist: () => void;
  onUploadClick: () => void;
  likedCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, playlists, onPlaylistSelect, onCreatePlaylist, onUploadClick, likedCount }) => {
  return (
    <div className="w-72 bg-black flex flex-col gap-3 p-3 h-full border-right border-white/5">
      {/* Brand */}
      <div className="px-4 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center rotate-3 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <span className="text-black font-black text-xl italic leading-none">R</span>
        </div>
        <span className="text-2xl font-black text-white italic tracking-tighter">RAAGA</span>
      </div>

      {/* Primary Nav */}
      <div className="bg-[#121212] rounded-2xl p-4 space-y-2">
        <button
          onClick={() => setView('home')}
          className={`flex items-center gap-4 w-full p-2.5 rounded-xl transition-all ${currentView === 'home' ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33z" /></svg>
          <span className="font-black text-sm uppercase tracking-wider">Home</span>
        </button>
        <button
          onClick={() => setView('search')}
          className={`flex items-center gap-4 w-full p-2.5 rounded-xl transition-all ${currentView === 'search' ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="font-black text-sm uppercase tracking-wider">Search</span>
        </button>
        <button
          onClick={() => setView('liked')}
          className={`flex items-center gap-4 w-full p-2.5 rounded-xl transition-all ${currentView === 'liked' ? 'text-pink-400 bg-pink-500/10' : 'text-gray-400 hover:text-pink-400 hover:bg-pink-500/5'}`}
        >
          <svg className="w-6 h-6" fill={currentView === 'liked' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          <span className="font-black text-sm uppercase tracking-wider flex-1 text-left">Liked Songs</span>
          {likedCount > 0 && (
            <span className="bg-pink-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">{likedCount}</span>
          )}
        </button>
      </div>

      {/* Actions */}
      <div className="bg-[#121212] rounded-2xl p-4 space-y-2">
        <button
          onClick={onCreatePlaylist}
          className="flex items-center gap-4 w-full p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group"
        >
          <div className="w-6 h-6 bg-white/10 rounded group-hover:bg-white flex items-center justify-center transition-colors">
            <svg className="w-4 h-4 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
          </div>
          <span className="font-black text-sm uppercase tracking-wider">Create Playlist</span>
        </button>
        <button
          onClick={onUploadClick}
          className="flex items-center gap-4 w-full p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group"
        >
          <div className="w-6 h-6 bg-green-500/20 rounded group-hover:bg-green-500 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4 text-green-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </div>
          <span className="font-black text-sm uppercase tracking-wider">Upload Song</span>
        </button>
      </div>

      {/* Library Scroll */}
      <div className="flex-1 bg-[#121212] rounded-2xl flex flex-col overflow-hidden">
        <div className="p-5 flex items-center justify-between">
          <button
            onClick={() => setView('library')}
            className={`flex items-center gap-3 transition ${currentView === 'library' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            <span className="font-black text-sm uppercase tracking-widest">Library</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-6 space-y-1">
          {playlists.length === 0 ? (
            <div className="mx-2 p-6 bg-white/5 rounded-2xl text-center border border-white/5">
              <p className="text-sm font-black text-white mb-1">Your library is empty</p>
              <p className="text-[11px] text-gray-500 mb-5 leading-relaxed">Start creating your playlists and we will keep them here.</p>
              <button
                onClick={onCreatePlaylist}
                className="bg-white text-black text-[11px] font-black px-6 py-2 rounded-full transform transition hover:scale-105"
              >
                CREATE PLAYLIST
              </button>
            </div>
          ) : (
            playlists.map(p => (
              <button
                key={p.id}
                onClick={() => onPlaylistSelect(p)}
                className="flex items-center gap-3 w-full p-2.5 hover:bg-white/5 rounded-xl transition group"
              >
                <div className="relative group/cover">
                  <img src={p.coverUrl} className="w-14 h-14 rounded-lg shadow-xl object-cover" alt={p.name} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 6v12l10-6z" /></svg>
                  </div>
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-sm font-black text-white truncate mb-0.5">{p.name}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Playlist • RAAGA</p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
