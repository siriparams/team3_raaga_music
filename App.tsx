
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import MainView from './components/MainView';
import Player from './components/Player';
import AuthModal from './components/AuthModal';
import UploadModal from './components/UploadModal';
import ProModal from './components/ProModal';
import { Song, User, ViewType, Playlist } from './types';
import { MOCK_SONGS } from './constants';

const App: React.FC = () => {
  // State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [activeSong, setActiveSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [customSongs, setCustomSongs] = useState<Song[]>([]);
  const [likedSongIds, setLikedSongIds] = useState<string[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Combined Song List
  const allSongs = useMemo(() => [...MOCK_SONGS, ...customSongs], [customSongs]);

  // Persist User Session
  useEffect(() => {
    const storedUser = localStorage.getItem('raaga_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    const storedPlaylists = localStorage.getItem('raaga_playlists');
    if (storedPlaylists) {
      setPlaylists(JSON.parse(storedPlaylists));
    }
    const storedSongs = localStorage.getItem('raaga_custom_songs');
    if (storedSongs) {
      setCustomSongs(JSON.parse(storedSongs));
    }
    const storedLiked = localStorage.getItem('raaga_liked_songs');
    if (storedLiked) {
      setLikedSongIds(JSON.parse(storedLiked));
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('raaga_user', JSON.stringify(user));
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('raaga_user');
    setCurrentView('home');
  };

  const handleUploadSong = (song: Song) => {
    const updated = [...customSongs, song];
    setCustomSongs(updated);
    localStorage.setItem('raaga_custom_songs', JSON.stringify(updated));
    setIsUploadModalOpen(false);
    alert(`${song.name} uploaded successfully!`);
  };

  const handleToggleLike = (song: Song) => {
    const isLiked = likedSongIds.includes(song.id);
    const updated = isLiked
      ? likedSongIds.filter(id => id !== song.id)
      : [...likedSongIds, song.id];
    setLikedSongIds(updated);
    localStorage.setItem('raaga_liked_songs', JSON.stringify(updated));
  };

  const handleCreatePlaylist = () => {
    if (!currentUser) {
      setAuthType('login');
      setIsAuthModalOpen(true);
      return;
    }
    const newPlaylist: Playlist = {
      id: Math.random().toString(36).substr(2, 9),
      name: `My Playlist #${playlists.length + 1}`,
      ownerId: currentUser.id,
      songIds: [],
      coverUrl: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=500&auto=format&fit=crop&q=60'
    };
    const updated = [...playlists, newPlaylist];
    setPlaylists(updated);
    localStorage.setItem('raaga_playlists', JSON.stringify(updated));
  };

  const handleSubscribePro = () => {
    if (!currentUser) return;
    const updated = { ...currentUser, isPro: true };
    setCurrentUser(updated);
    localStorage.setItem('raaga_user', JSON.stringify(updated));
    setIsProModalOpen(false);
    alert("Welcome to RAAGA Pro! Enjoy unlimited downloads and HD audio.");
  };

  const handleRenamePlaylist = (playlistId: string, newName: string) => {
    const updated = playlists.map(p =>
      p.id === playlistId ? { ...p, name: newName.trim() || p.name } : p
    );
    setPlaylists(updated);
    localStorage.setItem('raaga_playlists', JSON.stringify(updated));
  };

  const handleDeletePlaylist = (playlistId: string) => {
    const updated = playlists.filter(p => p.id !== playlistId);
    setPlaylists(updated);
    localStorage.setItem('raaga_playlists', JSON.stringify(updated));
    // If we were viewing the deleted playlist, go back home
    if (selectedPlaylist?.id === playlistId) {
      setSelectedPlaylist(null);
      setCurrentView('home');
    }
  };

  const handleAddToPlaylist = (songId: string, playlistId: string) => {
    const updated = playlists.map(p =>
      p.id === playlistId && !p.songIds.includes(songId)
        ? { ...p, songIds: [...p.songIds, songId] }
        : p
    );
    setPlaylists(updated);
    localStorage.setItem('raaga_playlists', JSON.stringify(updated));
  };

  const handleDownload = (song: Song) => {
    if (!currentUser) {
      setAuthType('login');
      setIsAuthModalOpen(true);
      return;
    }

    if (!currentUser.isPro && currentUser.downloadCount >= 10) {
      setIsProModalOpen(true);
      return;
    }

    const updatedUser = {
      ...currentUser,
      downloadCount: currentUser.downloadCount + 1
    };
    setCurrentUser(updatedUser);
    localStorage.setItem('raaga_user', JSON.stringify(updatedUser));

    // Simulate download
    const link = document.createElement('a');
    link.href = song.audioUrl;
    link.download = `${song.name}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert(`Downloading ${song.name}... (${updatedUser.isPro ? 'Pro Unlimited' : (10 - updatedUser.downloadCount) + ' free downloads left'})`);
  };

  const filteredSongs = useMemo(() => {
    if (!searchQuery) return allSongs;
    const query = searchQuery.toLowerCase();
    return allSongs.filter(s =>
      s.name.toLowerCase().includes(query) ||
      s.singer.toLowerCase().includes(query) ||
      s.movieName.toLowerCase().includes(query) ||
      s.language.toLowerCase().includes(query)
    );
  }, [searchQuery, allSongs]);

  return (
    <div className="flex h-screen w-full bg-black overflow-hidden font-sans select-none">
      <Sidebar
        currentView={currentView}
        setView={setCurrentView}
        playlists={playlists}
        onPlaylistSelect={(p) => {
          setSelectedPlaylist(p);
          setCurrentView('playlist-detail');
        }}
        onCreatePlaylist={handleCreatePlaylist}
        onUploadClick={() => {
          if (!currentUser) { setIsAuthModalOpen(true); return; }
          setIsUploadModalOpen(true);
        }}
        likedCount={likedSongIds.length}
        onRenamePlaylist={handleRenamePlaylist}
        onDeletePlaylist={handleDeletePlaylist}
      />

      <div className="flex-1 flex flex-col relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-black">
        {/* Header / Navbar */}
        <header className="h-16 flex items-center justify-between px-8 bg-black/40 backdrop-blur-xl sticky top-0 z-10 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button onClick={() => window.history.back()} className="p-2 bg-black/60 rounded-full hover:bg-black/80 transition text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={() => window.history.forward()} className="p-2 bg-black/60 rounded-full hover:bg-black/80 transition text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            {currentView === 'search' && (
              <div className="relative ml-4">
                <input
                  type="text"
                  placeholder="Search songs, artists, languages..."
                  className="w-[400px] bg-white/10 hover:bg-white/15 border border-transparent focus:border-white/20 outline-none rounded-full py-2.5 px-12 text-sm focus:ring-1 focus:ring-blue-500 transition-all text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="w-5 h-5 absolute left-4 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6">
            {!currentUser ? (
              <>
                <button
                  onClick={() => { setAuthType('signup'); setIsAuthModalOpen(true); }}
                  className="text-gray-400 font-bold hover:text-white transition"
                >
                  Sign up
                </button>
                <button
                  onClick={() => { setAuthType('login'); setIsAuthModalOpen(true); }}
                  className="bg-white text-black font-bold py-2.5 px-10 rounded-full hover:scale-105 transition active:scale-95 shadow-lg"
                >
                  Log in
                </button>
              </>
            ) : (
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setIsProModalOpen(true)}
                  className={`px-5 py-2 rounded-full text-xs font-black tracking-widest border transition-all transform hover:scale-105 ${currentUser.isPro ? 'border-blue-500 text-blue-500 bg-blue-500/10' : 'border-white text-white hover:bg-white/10'}`}
                >
                  {currentUser.isPro ? 'RAAGA PRO' : 'UPGRADE'}
                </button>
                <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-1.5 pr-4 rounded-full cursor-pointer transition border border-white/5">
                  <div className="w-8 h-8 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full flex items-center justify-center font-black text-sm text-black shadow-inner">
                    {currentUser.username[0].toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold truncate max-w-[120px] leading-tight">{currentUser.username}</span>
                    <button onClick={handleLogout} className="text-[10px] text-gray-500 hover:text-red-400 transition text-left">Log out</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto px-10 pb-40 pt-8 scroll-smooth">
          <MainView
            view={currentView}
            searchSongs={filteredSongs}
            activeSong={activeSong}
            onPlay={(song) => { setActiveSong(song); setIsPlaying(true); }}
            onDownload={handleDownload}
            playlist={selectedPlaylist}
            allSongs={allSongs}
            likedSongIds={likedSongIds}
            onToggleLike={handleToggleLike}
            playlists={playlists}
            onAddToPlaylist={handleAddToPlaylist}
          />
        </main>
      </div>

      {/* Music Player */}
      {activeSong && (
        <Player
          song={activeSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isLiked={likedSongIds.includes(activeSong.id)}
          onToggleLike={handleToggleLike}
          onNext={() => {
            const idx = allSongs.findIndex(s => s.id === activeSong.id);
            if (idx < allSongs.length - 1) setActiveSong(allSongs[idx + 1]);
          }}
          onPrev={() => {
            const idx = allSongs.findIndex(s => s.id === activeSong.id);
            if (idx > 0) setActiveSong(allSongs[idx - 1]);
          }}
        />
      )}

      {/* Modals */}
      {isAuthModalOpen && (
        <AuthModal
          type={authType}
          onClose={() => setIsAuthModalOpen(false)}
          onAuthSuccess={handleLogin}
          setType={setAuthType}
        />
      )}
      {isUploadModalOpen && (
        <UploadModal
          onClose={() => setIsUploadModalOpen(false)}
          onUpload={handleUploadSong}
        />
      )}
      {isProModalOpen && (
        <ProModal
          onClose={() => setIsProModalOpen(false)}
          onSubscribe={handleSubscribePro}
        />
      )}
    </div>
  );
};

export default App;
