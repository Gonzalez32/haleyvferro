"use client";

import Link from "next/link";

export default function Book() {
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
    const squareBookingUrl = "https://book.squareup.com/appointments/nq7fhqbjswhene/location/L5JMDK54VKVPG/services";

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
                        Claim Your
                        <br/>
                        <span className="text-transparent border-t-zinc-100 bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200">Canvas</span>
                    </h1>
                    <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-medium uppercase tracking-[0.2em] leading-loose">
                        <span className="text-[10px] text-pink-500/50 italic font-bold uppercase tracking-widest">
                            Important: You must complete the 
                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfRUH7DbhAd3B8B1r0kFbM09TiadtfgPJmzHsA1v9H7I2HyEw/viewform" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-pink-500 underline mx-1 hover:text-pink-400 transition-colors"
                            >
                                Intake Request Form
                            </a> 
                            before booking.
                        </span>
                        <br/>
                        <span className="text-[10px] text-pink-500/30 italic font-bold">Deposits are required to secure your appointment.</span>
                    </p>
                </div>

                <div className="w-full max-w-5xl mb-6 flex justify-center">
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfRUH7DbhAd3B8B1r0kFbM09TiadtfgPJmzHsA1v9H7I2HyEw/viewform" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] font-black uppercase tracking-[0.3em] bg-pink-500/10 text-pink-500 border border-pink-500/20 px-8 py-3 hover:bg-pink-500 hover:text-white transition-all duration-500 rounded-full"
                    >
                        Step 1: Fill out Intake Form
                    </a>
                </div>

                {/* Iframe Container */}
                <div className="w-full max-w-5xl aspect-[4/5] md:aspect-video bg-[#080808] border border-white/5 rounded-lg overflow-hidden relative z-10 shadow-2xl">
                    <iframe 
                        src={squareBookingUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Square Appointments Booking"
                        style={{ backgroundColor: 'transparent' }}
                    />
                </div>

                <div className="mt-20 text-center max-w-2xl">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-500 mb-8">Before You Book</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-6 border border-white/5 bg-zinc-900/30">
                            <h3 className="text-pink-500 text-[10px] font-black uppercase tracking-widest mb-3">The Intake</h3>
                            <p className="text-zinc-400 text-xs leading-relaxed">
                                Ensure you have submitted the <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRUH7DbhAd3B8B1r0kFbM09TiadtfgPJmzHsA1v9H7I2HyEw/viewform" target="_blank" rel="noopener noreferrer" className="text-pink-500 underline hover:text-pink-400 transition-colors">Intake Request Form</a> first. I need to review and approve your design before we finalize the session.
                            </p>
                        </div>
                        <div className="p-6 border border-white/5 bg-zinc-900/30">
                            <h3 className="text-pink-500 text-[10px] font-black uppercase tracking-widest mb-3">The Deposit</h3>
                            <p className="text-zinc-400 text-xs leading-relaxed">
                                A non-refundable deposit is required for all bookings. This goes toward the final price of your tattoo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="py-32 px-4 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto">
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
                        HALEY V FERRO INK. © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
