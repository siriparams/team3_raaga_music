
import React, { useState } from 'react';
import { Song, Language } from '../types';

interface UploadModalProps {
  onClose: () => void;
  onUpload: (song: Song) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose, onUpload }) => {
  const [formData, setFormData] = useState({
    name: '',
    movieName: '',
    composer: '',
    singer: '',
    language: 'English' as Language,
    genre: '',
    coverUrl: '',
    audioUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSong: Song = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      duration: 215, // Mock duration
      replays: 0,
      coverUrl: formData.coverUrl || 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=60',
      audioUrl: formData.audioUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    };
    onUpload(newSong);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-[#121212] w-full max-w-2xl rounded-3xl p-10 shadow-2xl relative border border-white/10 overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className="text-3xl font-black text-white mb-8 italic">Upload Your Music</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Song Name</label>
              <input 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-green-500 text-white transition"
                placeholder="Enter song name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Movie / Album</label>
              <input 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-green-500 text-white transition"
                placeholder="Enter movie name"
                value={formData.movieName}
                onChange={(e) => setFormData({...formData, movieName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Singer</label>
              <input 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-green-500 text-white transition"
                placeholder="Enter singer name"
                value={formData.singer}
                onChange={(e) => setFormData({...formData, singer: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Language</label>
              <select 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-green-500 text-white transition"
                value={formData.language}
                onChange={(e) => setFormData({...formData, language: e.target.value as Language})}
              >
                <option value="English">English</option>
                <option value="Kannada">Kannada</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Malayalam">Malayalam</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Composer</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-green-500 text-white transition"
                placeholder="Enter composer"
                value={formData.composer}
                onChange={(e) => setFormData({...formData, composer: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Genre</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-green-500 text-white transition"
                placeholder="Pop, Jazz, Rock..."
                value={formData.genre}
                onChange={(e) => setFormData({...formData, genre: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Cover Image URL</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-green-500 text-white transition"
                placeholder="https://..."
                value={formData.coverUrl}
                onChange={(e) => setFormData({...formData, coverUrl: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Audio URL (.mp3)</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-green-500 text-white transition"
                placeholder="https://..."
                value={formData.audioUrl}
                onChange={(e) => setFormData({...formData, audioUrl: e.target.value})}
              />
            </div>
          </div>

          <div className="md:col-span-2 pt-6">
            <button 
              type="submit"
              className="w-full bg-white text-black font-black text-lg py-4 rounded-full transition transform active:scale-95 shadow-xl hover:bg-gray-200"
            >
              FINISH UPLOAD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
