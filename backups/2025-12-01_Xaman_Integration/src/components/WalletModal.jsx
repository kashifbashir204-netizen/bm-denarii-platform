import React from 'react';

// Icons object (copied from App.jsx or imported if we extract Icons too. 
// For now, let's just inline the specific icons we need or pass them as props? 
// Better to just copy the Icons definition or import it. 
// Actually, let's extract Icons to a separate file too, it's used everywhere.)

// Let's assume we'll extract Icons later. For now, I'll redefine the ones I need or import them.
// Wait, Icons is defined in App.jsx. I should extract Icons first or duplicate them temporarily.
// Duplicating is safer to avoid breaking other things in App.jsx right now.

const Icons = {
    X: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>,
    Cpu: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>,
    Shield: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>,
};

const WalletModal = ({ isOpen, onClose, qrUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-8 max-w-sm w-full shadow-2xl relative animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <Icons.X size={24} />
                </button>

                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Connect Xaman</h3>
                    <p className="text-gray-400 mb-6">Scan the QR code with your Xaman App to sign in.</p>

                    <div className="bg-white p-4 rounded-xl mb-6 inline-block">
                        {qrUrl ? (
                            <img src={qrUrl} alt="Scan with Xaman" className="w-48 h-48" />
                        ) : (
                            <div className="w-48 h-48 flex items-center justify-center">
                                <Icons.Cpu className="animate-spin text-indigo-600" size={32} />
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-indigo-400">
                        <Icons.Shield size={16} />
                        <span>Secure Connection</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletModal;
