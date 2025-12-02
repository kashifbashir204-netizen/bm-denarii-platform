import React, { useState } from 'react';
import { TOKEN_NAME, ISSUER_ADDRESS, TRUSTLINE_URL } from '../config';

const Icons = {
    Wallet: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>,
    Shield: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>,
    Copy: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>,
    Check: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12" /></svg>,
    TrendingUp: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
};

const BalanceSection = ({ balance, account }) => {
    const [copied, setCopied] = useState(false);

    if (!account) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(account);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative z-10 -mt-px">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-indigo-600/5 blur-3xl pointer-events-none"></div>

            <div className="bg-[#0a0a1c]/95 border-y border-white/10 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                        {/* Left: Wallet Info */}
                        <div className="flex items-center gap-5 w-full lg:w-auto justify-center lg:justify-start">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                                <Icons.Wallet size={28} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Connected Wallet</div>
                                <button
                                    onClick={handleCopy}
                                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/20"
                                >
                                    <span className="font-mono text-lg">{account.slice(0, 6)}...{account.slice(-6)}</span>
                                    {copied ? <Icons.Check size={14} className="text-green-400" /> : <Icons.Copy size={14} className="opacity-50 group-hover:opacity-100" />}
                                </button>
                            </div>
                        </div>

                        {/* Center: Balance Display */}
                        <div className="flex-1 w-full lg:w-auto flex justify-center">
                            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto min-w-0 sm:min-w-[300px] justify-between group hover:bg-white/10 transition-all duration-300">
                                <div className="text-center sm:text-left w-full sm:w-auto overflow-hidden">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Balance</div>
                                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 font-sans truncate">
                                        {balance}
                                    </div>
                                </div>
                                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-0 w-full sm:w-auto justify-center sm:justify-end border-t border-white/5 sm:border-0 pt-3 sm:pt-0 mt-1 sm:mt-0">
                                    <div className="text-xl font-bold text-indigo-400">{TOKEN_NAME}</div>
                                    <div className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full sm:mt-1">
                                        <Icons.TrendingUp size={10} />
                                        <span>Live</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Issuer & Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto justify-center lg:justify-end">
                            <div className="text-center sm:text-right">
                                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Token Issuer</div>
                                <div className="text-xs font-mono text-gray-400 bg-black/30 px-2 py-1 rounded border border-white/5">
                                    {ISSUER_ADDRESS.slice(0, 8)}...{ISSUER_ADDRESS.slice(-8)}
                                </div>
                            </div>
                            <a
                                href={TRUSTLINE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                            >
                                <Icons.Shield size={18} />
                                <span>Set Trustline</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceSection;
