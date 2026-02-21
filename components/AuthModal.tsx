
import React, { useState } from 'react';
import { User } from '../types';

interface AuthModalProps {
  type: 'login' | 'signup';
  onClose: () => void;
  onAuthSuccess: (user: User) => void;
  setType: (type: 'login' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ type, onClose, onAuthSuccess, setType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call and LocalStorage logic
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      username: username || email.split('@')[0],
      email: email,
      isPro: false,
      downloadCount: 0,
      playlists: [],
      favoriteSongs: []
    };
    onAuthSuccess(mockUser);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-[#121212] w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-white/5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
            <span className="text-black font-black text-xl italic">R</span>
          </div>
          <h2 className="text-3xl font-black text-white">
            {type === 'login' ? 'Log in to RAAGA' : 'Sign up for RAAGA'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'signup' && (
            <div>
              <label className="block text-sm font-bold text-white mb-2">Username</label>
              <input
                type="text"
                required
                className="w-full bg-white/5 border border-white/20 rounded-lg p-3 outline-none focus:border-blue-500 transition"
                placeholder="What's your name?"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-bold text-white mb-2">Email address</label>
            <input
              type="email"
              required
              className="w-full bg-white/5 border border-white/20 rounded-lg p-3 outline-none focus:border-blue-500 transition"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-white mb-2">Password</label>
            <input
              type="password"
              required
              className="w-full bg-white/5 border border-white/20 rounded-lg p-3 outline-none focus:border-blue-500 transition"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-400 text-black font-bold py-3 rounded-full mt-4 transition transform active:scale-95"
          >
            {type === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            {type === 'login' ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setType(type === 'login' ? 'signup' : 'login')}
              className="ml-2 text-white font-bold hover:underline"
            >
              {type === 'login' ? 'Sign up for free' : 'Log in here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
