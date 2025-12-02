import React from 'react';
import { TOKEN_NAME, ISSUER_ADDRESS, TRUSTLINE_URL } from '../config';

const Icons = {
    Wallet: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>,
    Shield: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>,
};

const BalanceSection = ({ balance, account }) => {
    if (!account) return null;

    return (
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-y border-white/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                        <Icons.Wallet size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Your Balance</div>
                        <div className="text-xl font-bold text-white flex items-center gap-2">
                            {balance} <span className="text-indigo-400">{TOKEN_NAME}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:block text-right">
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Issuer</div>
                        <div className="text-sm font-mono text-gray-300">{ISSUER_ADDRESS.slice(0, 8)}...{ISSUER_ADDRESS.slice(-8)}</div>
                    </div>
                    <a
                        href={TRUSTLINE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all flex items-center gap-2 border border-white/10"
                    >
                        <Icons.Shield size={16} /> Set Trustline
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BalanceSection;
