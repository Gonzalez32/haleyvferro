"use client";

import Image from "next/image";
import Link from "next/link";

export default function Aftercare() {
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
                            <Link href="/aftercare" className="text-pink-400 transition-colors flex items-center">
                                Aftercare
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

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <div className="inline-flex items-center justify-center space-x-4 mb-6 text-pink-500/50">
                        <div className="h-[1px] w-12 bg-current"/>
                        <HeartIcon/>
                        <div className="h-[1px] w-12 bg-current"/>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-[0.85] text-white">
                        Sacred 
                        <br/>
                        <span className="text-transparent border-t-zinc-100 bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200">Healing</span>
                    </h1>
                    <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-medium uppercase tracking-[0.2em] leading-loose">
                        Your journey doesn't end when the needle stops. Proper aftercare is essential for a masterpiece that lasts a lifetime.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Dermal Bandages */}
                    <div className="mb-24 p-8 md:p-16 border border-white/5 bg-[#080808] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <MoonIcon/>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase italic tracking-tight text-pink-500">Recovery Dermal Bandages</h2>
                        <div className="space-y-6 text-zinc-300 leading-relaxed text-lg font-light">
                            <p>
                                After your artist applies your dermal bandage, leave on for a <span className="text-white font-bold">maximum of 5 days</span>.
                            </p>
                            <p>
                                If edges start to peel up prior to the 5 days, breaking the seal closer than an inch to the tattoo, remove the bandage.
                            </p>
                            <p>
                                If you experience redness, itching or swelling around the dermal bandage remove the bandage.
                            </p>
                            <div className="pt-4 border-t border-white/5">
                                <p className="italic text-pink-200/70">
                                    If possible, leaving the bandage on for the full 5 days will result in a better heal.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">The 4-Step Ritual</h2>
                            <p className="text-zinc-500 uppercase tracking-widest text-xs">Follow these steps after removing the bandage until fully healed</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Wash the tattoo",
                                    content: "Wash your hands thoroughly and vigorously (you will kill more bacteria using friction than anything else). Rinse your hands thoroughly. Re-lather your hands. Apply soap and water to the tattoo and spread gently on and around your tattoo."
                                },
                                {
                                    step: "02",
                                    title: "Pat dry with white paper towel",
                                    content: "Using paper towels ensures each one is fresh and clean, reducing the risk of exposure to bacteria. We recommend using plain white paper towels to avoid potential reactions to dyes and inks."
                                },
                                {
                                    step: "03",
                                    title: "Allow to air dry",
                                    content: "Allowing your tattoo to air dry helps prevent excessive moisture retention when applying lotion."
                                },
                                {
                                    step: "04",
                                    title: "Apply moisturizer",
                                    content: "We recommend using plain Lubriderm, Aveeno Baby Care, or Cetaphil moisturizers. Apply a small amount several times a day, ensuring thorough rubbing to eliminate any white residue on the skin."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 border border-white/5 bg-[#080808] hover:border-pink-500/30 transition-colors">
                                    <span className="text-5xl font-black text-pink-500/20 mb-4 block italic">{item.step}</span>
                                    <h3 className="text-xl font-black mb-4 uppercase italic tracking-wide">{item.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed font-light">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Showering */}
                    <div className="p-8 md:p-16 border border-pink-500/10 bg-gradient-to-br from-[#080808] to-pink-500/5 relative overflow-hidden">
                        <div className="flex items-start gap-6 relative z-10">
                            <div className="hidden md:block text-pink-500 pt-2">
                                <MoonIcon/>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase italic tracking-tight">Showering with your new tattoo</h2>
                                <div className="space-y-6 text-zinc-300 leading-relaxed text-lg font-light">
                                    <p>
                                        <span className="text-white font-bold">Be quick in the shower.</span> Ignore your tattoo (do not attempt to wash or soak your tattoo under the water).
                                    </p>
                                    <p>
                                        Have your hand soap, white paper towels, and moisturizer ready for when you're finished and follow the 4 steps listed above.
                                    </p>
                                </div>
                            </div>
                        </div>
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
                            <address onClick={
                                    () => window.open("https://www.google.com/maps/place/126+W+St+Charles+Rd,+Lombard,+IL+60148/@41.886807,-88.0209546,17z/data=!3m1!4b1!4m6!3m5!1s0x880e52a3460ec34f:0xb916ae2222e72073!8m2!3d41.886807!4d-88.0209546!16s%2Fg%2F11c4sg_d1l?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D", "_blank")
                                }
                                className="text-zinc-500 not-italic text-sm leading-loose tracking-wide cursor-pointer">
                                126 W St Charles Rd,<br/>
                                Lombard, IL 60148
                            </address>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-zinc-400">Transmissions</h4>
                            <div className="flex flex-col gap-4">
                                <a href="https://www.instagram.com/haleyvferro/" className="text-sm text-zinc-500 hover:text-pink-400 transition-colors flex items-center group">
                                    Instagram
                                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"><HeartIcon/></span>
                                </a>
                                <a href="mailto:haleyvferro@gmail.com" className="text-sm text-zinc-500 hover:text-pink-400 transition-colors">Email</a>
                                <a href="tel:630-336-5646" className="text-sm text-zinc-500 hover:text-pink-400 transition-colors">Phone</a>
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
                            Website By Juan C Gonzalez Jr. <HeartIcon/>
                        </div>
                        <p className="text-zinc-800 text-[10px] uppercase font-bold tracking-[0.5em]">
                        HALEY V FERRO INK. 
                        <br/>
                        ALL RIGHTS RESERVED. © {
                            new Date().getFullYear() 
                        }
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
