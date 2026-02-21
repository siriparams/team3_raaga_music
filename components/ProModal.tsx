
import React, { useState } from 'react';
import ProCheckoutModal from './ProCheckoutModal';

interface ProModalProps {
  onClose: () => void;
  onSubscribe: () => void;
}

const ProModal: React.FC<ProModalProps> = ({ onClose, onSubscribe }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return (
      <ProCheckoutModal
        onClose={onClose}
        onConfirm={onSubscribe}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-gradient-to-b from-[#242424] to-black w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative border border-white/10">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="p-10 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
            <span className="text-black font-black text-2xl italic">R</span>
          </div>
          <h2 className="text-4xl font-black text-white mb-2 italic tracking-tight">RAAGA PRO</h2>
          <p className="text-gray-400 font-medium mb-8">Elevate your listening experience</p>

          <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              <span className="text-white font-semibold">Unlimited Downloads (Free limit: 10)</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              <span className="text-white font-semibold">High Fidelity Audio Quality</span>
            </div>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-black text-white">₹99</span>
            <span className="text-gray-400 font-bold ml-2">/ month</span>
            <p className="text-xs text-gray-500 mt-2 italic">Cancel anytime. Terms &amp; conditions apply.</p>
          </div>

          <button
            onClick={() => setShowCheckout(true)}
            className="w-full bg-green-500 hover:bg-green-400 text-black font-black text-lg py-4 rounded-full transition transform active:scale-95 shadow-xl"
          >
            GET PREMIUM
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProModal;
