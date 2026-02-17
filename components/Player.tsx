
import React, { useState, useEffect, useRef } from 'react';
import { Song } from '../types';

interface PlayerProps {
  song: Song;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
}

const Player: React.FC<PlayerProps> = ({ song, isPlaying, setIsPlaying, onNext, onPrev }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, song]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-black border-t border-white/5 px-4 flex items-center justify-between z-50">
      <audio 
        ref={audioRef}
        src={song.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onNext}
      />
      
      {/* Song Info */}
      <div className="flex items-center gap-4 w-[30%]">
        <img src={song.coverUrl} className="w-14 h-14 rounded shadow-md" alt={song.name} />
        <div className="overflow-hidden">
          <h4 className="text-sm font-bold text-white truncate hover:underline cursor-pointer">{song.name}</h4>
          <p className="text-xs text-gray-400 truncate hover:underline cursor-pointer">{song.singer} • {song.movieName}</p>
        </div>
        <button className="text-gray-400 hover:text-white transition ml-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 w-[40%]">
        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-white transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.148 12L11 20H4L11 12L4 4H11L18.148 12ZM19 4H22V20H19V4Z"/></svg>
          </button>
          <button onClick={onPrev} className="text-gray-300 hover:text-white transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6H9V18H6V6ZM11 12L18 18V6L11 12Z"/></svg>
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition shadow-lg"
          >
            {isPlaying ? (
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z"/></svg>
            ) : (
              <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5V19L19 12L8 5Z"/></svg>
            )}
          </button>
          <button onClick={onNext} className="text-gray-300 hover:text-white transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18V6L13 12L6 18ZM15 6H18V18H15V6Z"/></svg>
          </button>
          <button className="text-gray-400 hover:text-white transition">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7H17V10L21 6L17 2V5H5V11H7V7ZM17 17H7V14L3 18L7 22V19H19V13H17V17Z"/></svg>
          </button>
        </div>
        <div className="w-full flex items-center gap-2 px-4">
          <span className="text-[10px] text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
          <input 
            type="range" 
            min="0" 
            max={song.duration} 
            value={currentTime} 
            onChange={handleSeek}
            className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-green-500 hover:accent-green-400 transition"
          />
          <span className="text-[10px] text-gray-400 w-10">{formatTime(song.duration)}</span>
        </div>
      </div>

      {/* Volume / Other */}
      <div className="flex items-center justify-end gap-3 w-[30%] text-gray-400">
        <button className="hover:text-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg></button>
        <button className="hover:text-white transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg></button>
        <div className="flex items-center gap-2 group w-24">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
           <input type="range" className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white" />
        </div>
      </div>
    </div>
  );
};

export default Player;
