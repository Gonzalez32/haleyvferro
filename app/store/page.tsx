"use client";

import Link from "next/link";
import Image from "next/image";

export default function Store() {
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
                            <Link href="/store" className="text-pink-400 transition-colors flex items-center">
                                Store
                                <span className="ml-2 scale-75"><HeartIcon/></span>
                            </Link>
                            <Link href="/#contact" className="hover:text-pink-400 transition-colors">Contact</Link>
                        </div>
                        <Link 
                            href="/book"
                            className="group relative px-6 py-2 overflow-hidden">
                            <div className="absolute inset-0 bg-white group-hover:bg-pink-500 transition-colors duration-500"/>
                            <span className="relative z-10 text-black text-xs font-black uppercase tracking-widest flex items-center">
                                Book
                                <HeartIcon/>
                                Now
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Store Content */}
            <section className="relative pt-40 pb-20 px-4 flex flex-col items-center min-h-screen">
                <div className="max-w-4xl w-full text-center mb-24">
                    <div className="inline-flex items-center justify-center space-x-4 mb-6 text-pink-500/50">
                        <div className="h-[1px] w-12 bg-current"/>
                        <HeartIcon/>
                        <div className="h-[1px] w-12 bg-current"/>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-[0.85]">
                        The Cosmic
                        <br/>
                        <span className="text-transparent border-t-zinc-100 bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200">Archive</span>
                    </h1>
                    <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-medium uppercase tracking-[0.2em] leading-loose">
                        Tangible magic is manifesting. My collection of artifacts and curiosities will be arriving soon.
                    </p>
                </div>

                {/* Coming Soon Grid Preview */}
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    {[
                        { title: "Stickers", desc: "Vinyl totems for your belongings." },
                        { title: "Limited Prints", desc: "Ink on paper, captured moonlight." },
                        { title: "Apparel", desc: "Wearable spells and sigils." }
                    ].map((item, i) => (
                        <div key={i} className="group p-10 border border-white/5 bg-[#080808] hover:border-pink-500/30 transition-all duration-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <MoonIcon/>
                            </div>
                            <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.4em] mb-4 block">Manifesting</span>
                            <h3 className="text-2xl font-black uppercase italic mb-4">{item.title}</h3>
                            <p className="text-zinc-500 text-xs uppercase tracking-widest leading-loose">{item.desc}</p>
                            <div className="mt-10 h-[1px] w-0 bg-pink-500 group-hover:w-full transition-all duration-1000"/>
                        </div>
                    ))}
                </div>

                {/* Coming Soon Badge */}
                <div className="mt-32 relative">
                    <div className="absolute inset-0 bg-pink-500 blur-3xl opacity-20 animate-pulse"/>
                    <div className="relative border border-pink-500/30 px-12 py-6 backdrop-blur-xl">
                        <span className="text-xs md:text-sm font-black uppercase tracking-[1em] text-pink-200 italic">
                            COMING SOON 2026
                        </span>
                    </div>
                </div>
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
                                className="text-zinc-500 hover:text-pink-400 transition-colors text-sm leading-loose tracking-wide uppercase font-bold"
                            >
                                Bone and Blossom
                            </a>
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
