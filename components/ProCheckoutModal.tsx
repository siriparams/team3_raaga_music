
import React, { useState } from 'react';

interface ProCheckoutModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

const ProCheckoutModal: React.FC<ProCheckoutModalProps> = ({ onClose, onConfirm }) => {
    const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly');
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('upi');
    const [upiId, setUpiId] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const plans = {
        monthly: { label: 'Monthly', price: '₹99', period: '/month', savings: null, total: '₹99' },
        annual: { label: 'Annual', price: '₹799', period: '/year', savings: 'Save ₹389', total: '₹799' },
    };

    const handleConfirm = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            onConfirm();
        }, 1800);
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn overflow-y-auto">
            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] w-full max-w-lg rounded-3xl shadow-2xl relative border border-white/10 my-4">

                {/* Header */}
                <div className="flex items-center justify-between px-8 pt-8 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            <span className="text-black font-black text-sm italic">R</span>
                        </div>
                        <div>
                            <h2 className="text-white font-black text-lg leading-tight">Complete Your Purchase</h2>
                            <p className="text-gray-500 text-xs">RAAGA PRO Subscription</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleConfirm} className="px-8 py-6 space-y-6">

                    {/* Plan Selection */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-widest">Choose Plan</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {(['monthly', 'annual'] as const).map((plan) => (
                                <button
                                    key={plan}
                                    type="button"
                                    onClick={() => setSelectedPlan(plan)}
                                    className={`rounded-2xl p-4 border text-left transition-all ${selectedPlan === plan
                                            ? 'border-blue-500 bg-blue-500/10'
                                            : 'border-white/10 bg-white/5 hover:bg-white/10'
                                        }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-white font-bold text-sm">{plans[plan].label}</p>
                                            <p className="text-2xl font-black text-white mt-1">{plans[plan].price}</p>
                                            <p className="text-gray-500 text-xs">{plans[plan].period}</p>
                                        </div>
                                        {plans[plan].savings && (
                                            <span className="bg-blue-500 text-black text-[10px] font-black px-2 py-0.5 rounded-full">
                                                {plans[plan].savings}
                                            </span>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* What's Included */}
                    <div className="bg-white/5 rounded-2xl p-4 space-y-2">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">What's Included</p>
                        {[
                            'Unlimited song downloads',
                            'High Fidelity (HiFi) audio quality',
                            'Offline mode access',
                            'Priority customer support',
                        ].map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Payment Method */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-widest">Payment Method</h3>
                        <div className="flex gap-2 mb-4">
                            {(['upi', 'card', 'netbanking'] as const).map((method) => (
                                <button
                                    key={method}
                                    type="button"
                                    onClick={() => setPaymentMethod(method)}
                                    className={`flex-1 py-2 rounded-xl border text-xs font-bold uppercase tracking-wide transition-all ${paymentMethod === method
                                            ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                                            : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
                                        }`}
                                >
                                    {method === 'netbanking' ? 'Net Banking' : method.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        {/* UPI */}
                        {paymentMethod === 'upi' && (
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">UPI ID</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="yourname@upi"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500 transition placeholder-gray-600"
                                    />
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    Secured by 256-bit SSL encryption
                                </div>
                            </div>
                        )}

                        {/* Card */}
                        {paymentMethod === 'card' && (
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Card Number</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="0000 0000 0000 0000"
                                        maxLength={19}
                                        value={cardNumber}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
                                            setCardNumber(val);
                                        }}
                                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500 transition placeholder-gray-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Name on Card</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Full name"
                                        value={cardName}
                                        onChange={(e) => setCardName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500 transition placeholder-gray-600"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Expiry</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="MM / YY"
                                            maxLength={7}
                                            value={cardExpiry}
                                            onChange={(e) => {
                                                let val = e.target.value.replace(/\D/g, '');
                                                if (val.length >= 2) val = val.slice(0, 2) + ' / ' + val.slice(2, 4);
                                                setCardExpiry(val);
                                            }}
                                            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500 transition placeholder-gray-600"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">CVV</label>
                                        <input
                                            type="password"
                                            required
                                            placeholder="•••"
                                            maxLength={4}
                                            value={cardCvv}
                                            onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                                            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500 transition placeholder-gray-600"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    Secured by 256-bit SSL encryption
                                </div>
                            </div>
                        )}

                        {/* Net Banking */}
                        {paymentMethod === 'netbanking' && (
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Select Bank</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Bank', 'Other Banks'].map((bank) => (
                                        <button
                                            key={bank}
                                            type="button"
                                            className="py-2.5 px-3 bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 rounded-xl text-white text-xs font-semibold transition-all text-left"
                                        >
                                            {bank}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    Secured by 256-bit SSL encryption
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="border-t border-white/10 pt-4 space-y-2">
                        <div className="flex justify-between text-sm text-gray-400">
                            <span>RAAGA PRO ({plans[selectedPlan].label})</span>
                            <span>{plans[selectedPlan].price}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                            <span>GST (18%)</span>
                            <span>{selectedPlan === 'monthly' ? '₹17.82' : '₹143.82'}</span>
                        </div>
                        <div className="flex justify-between text-white font-black text-lg pt-2 border-t border-white/10">
                            <span>Total Due Today</span>
                            <span className="text-blue-400">{selectedPlan === 'monthly' ? '₹116.82' : '₹942.82'}</span>
                        </div>
                    </div>

                    {/* Subscribe Button */}
                    <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-blue-500 hover:bg-blue-400 disabled:opacity-70 disabled:cursor-not-allowed text-black font-black text-base py-4 rounded-full transition-all transform active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
                    >
                        {isProcessing ? (
                            <>
                                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Processing...
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                Subscribe Now — {plans[selectedPlan].price}{plans[selectedPlan].period}
                            </>
                        )}
                    </button>

                    <p className="text-center text-gray-600 text-xs">
                        By subscribing, you agree to our{' '}
                        <span className="text-gray-400 underline cursor-pointer">Terms of Service</span>.
                        {' '}Cancel anytime from your account settings.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ProCheckoutModal;
