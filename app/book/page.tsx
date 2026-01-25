"use client";

import { useState } from "react";
import Link from "next/link";

export default function Book() {
    const [step, setStep] = useState(1);
    const MoonIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
    );

    const HeartIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block mx-1">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    );

    // TODO: Replace this with your actual Square Appointments Booking URL
    const squareBookingUrl = "https://square.site/book/L5JMDK54VKVPG/haley-v-ferro-lombard-il";

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-pink-900/30 font-sans selection:text-pink-200">
            {/* Decorative Star Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div className="absolute top-10 left-10 text-white animate-pulse"><HeartIcon/></div>
                <div className="absolute top-1/4 right-20 text-white rotate-45 scale-75 opacity-50"><MoonIcon/></div>
                <div className="absolute bottom-1/3 left-1/4 text-white scale-50"><HeartIcon/></div>
                <div className="absolute top-1/2 right-1/3 text-white -rotate-12 scale-125 animate-pulse"><MoonIcon/></div>
                <div className="absolute bottom-10 right-10 text-white scale-110 opacity-40"><HeartIcon/></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex items-center group cursor-pointer">
                            <span className="text-pink-500 transition-transform group-hover:scale-110 duration-500">
                                <MoonIcon/>
                            </span>
                            <span className="text-2xl font-black tracking-[0.2em] uppercase italic ml-1">
                                HALEY V FERRO<span className="text-pink-500 tracking-tighter">
                                    INK</span>
                            </span>
                        </Link>
                        <div className="hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                            <Link href="/#portfolio" className="hover:text-pink-400 transition-colors">Portfolio</Link>
                            <Link href="/#about" className="hover:text-pink-400 transition-colors">Origins</Link>
                            <Link href="/aftercare" className="hover:text-pink-400 transition-colors">Aftercare</Link>
                            <Link href="/store" className="hover:text-pink-400 transition-colors">Store</Link>
                            <Link href="/#contact" className="hover:text-pink-400 transition-colors">Contact</Link>
                        </div>
                        <div className="group relative px-6 py-2 overflow-hidden bg-white/5 border border-white/10 opacity-50 cursor-not-allowed">
                            <span className="relative z-10 text-white text-xs font-black uppercase tracking-widest flex items-center">
                                Booked
                                <HeartIcon/>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Booking Section */}
            <section className="relative pt-40 pb-20 px-4 flex flex-col items-center">
                <div className="max-w-4xl w-full text-center mb-12">
                    <div className="inline-flex items-center justify-center space-x-4 mb-6 text-pink-500/50">
                        <div className="h-[1px] w-12 bg-current"/>
                        <HeartIcon/>
                        <div className="h-[1px] w-12 bg-current"/>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic leading-none">
                        {step === 1 ? "Start Your" : "Secure Your"}
                        <br/>
                        <span className="text-transparent border-t-zinc-100 bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200">
                            {step === 1 ? "Journey" : "Canvas"}
                        </span>
                    </h1>
                    <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-medium uppercase tracking-[0.2em] leading-loose">
                        {step === 1 ? (
                            <span className="text-[10px] text-pink-500/50 italic font-bold uppercase tracking-widest">
                                Step 1: Complete the Intake Request Form
                            </span>
                        ) : (
                            <span className="text-[10px] text-pink-500/50 italic font-bold uppercase tracking-widest">
                                Step 2: Choose your appointment time
                            </span>
                        )}
                        <br/>
                        <span className="text-[10px] text-pink-500/30 italic font-bold">Deposits are required to secure your appointment.</span>
                    </p>
                </div>

                {step === 1 ? (
                    <div className="w-full max-w-2xl mx-auto p-8 md:p-16 border border-white/10 bg-zinc-900/20 backdrop-blur-sm text-center relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"/>
                        <div className="relative z-10">
                            <h2 className="text-xl font-black italic uppercase mb-6 tracking-widest">The Intake Form</h2>
                            <p className="text-zinc-400 text-xs md:text-sm mb-10 leading-relaxed uppercase tracking-widest font-light">
                                I need to review your design and details before we finalize the session. 
                                <br/>
                                Please fill out the form below first.
                            </p>
                            <div className="flex flex-col gap-6 items-center">
                                <a 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfRUH7DbhAd3B8B1r0kFbM09TiadtfgPJmzHsA1v9H7I2HyEw/viewform" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-10 py-4 bg-white text-black hover:bg-pink-500 hover:text-white transition-all duration-500 text-xs font-black uppercase tracking-[0.3em] inline-block"
                                >
                                    Open Intake Form
                                </a>
                                <button 
                                    onClick={() => setStep(2)}
                                    className="text-pink-500/50 text-[10px] font-black uppercase tracking-[0.4em] mt-4 hover:text-pink-400 transition-colors flex items-center"
                                >
                                    I have already submitted my form
                                    <span className="ml-2 scale-75"><HeartIcon/></span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-5xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <button 
                            onClick={() => setStep(1)}
                            className="mb-8 text-zinc-600 text-[10px] uppercase font-bold tracking-[0.3em] hover:text-pink-500 transition-colors flex items-center"
                        >
                            <span className="mr-2">←</span> Back to Step 1
                        </button>
                        
                        {/* Iframe Container */}
                        <div className="w-full aspect-[4/5] md:aspect-video bg-[#080808] border border-white/5 rounded-lg overflow-hidden relative z-10 shadow-2xl">
                            <iframe 
                                src={squareBookingUrl}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Square Appointments Booking"
                                style={{ backgroundColor: 'transparent' }}
                            />
                        </div>
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer id="contact" className="py-32 px-4 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
                        <div>
                            <div className="flex items-center mb-8">
                                <span className="text-pink-500 mr-3 scale-110"><MoonIcon/></span>
                                <h3 className="text-2xl font-black tracking-widest uppercase italic">HALEY V FERRO<span className="text-pink-500">
                                        INK</span>
                                </h3>
                            </div>
                            <p className="text-zinc-600 max-w-xs text-sm leading-loose">
                              Where the magic of the moon meets the precision of the needle.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-zinc-400">Sanctuary</h4>
                            <a 
                                href="https://www.boneandblossom.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-pink-400 transition-colors text-sm leading-loose tracking-wide uppercase font-bold block mb-2"
                            >
                                Bone and Blossom
                            </a>
                            <p className="text-zinc-600 text-xs leading-relaxed tracking-wide">
                                126 W St Charles Rd,<br/>
                                Lombard, IL
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-zinc-400">Transmissions</h4>
                            <div className="flex flex-col gap-4">
                                <a href="https://www.instagram.com/haleyvferro/" className="text-sm text-zinc-500 hover:text-pink-400 transition-colors flex items-center group">
                                    Instagram
                                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"><HeartIcon/></span>
                                </a>
                                <a href="mailto:haleyvferro@gmail.com" className="text-sm text-zinc-500 hover:text-pink-400 transition-colors">Email</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center space-x-2 text-pink-500/20">
                            <HeartIcon/>
                            <MoonIcon/>
                            <HeartIcon/>
                        </div>
                        <div className="text-sm text-zinc-500">
                            Website By <a href="https://juangonzalez.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Juan Gonzalez</a> <HeartIcon/>
                        </div>
                        <p className="text-zinc-800 text-[10px] uppercase font-bold tracking-[0.5em]">
                        HALEY V FERRO INK. © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
