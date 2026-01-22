"use client";

import Image from "next/image";

import Link from "next/link";

export default function Home() {
    const portfolioImages = [
        {
            src: "/6769478185712371710.JPG",
            alt: "Fine Sheepy",
            href: "https://www.instagram.com/p/DTyLfqWkukt/?img_index=1"
        },
        {
            src: "/5296265205109508354.JPG",
            alt: "Letters Tattoo",
            href: "https://www.instagram.com/p/DTar9J1jiUo/?img_index=5"
        },
        {
            src: "/6073936942209373920.JPG",
            alt: "little Fishy",
            href: "https://www.instagram.com/p/DTar9J1jiUo/?img_index=4"
        },
        {
            src: "/315140188609788753.JPG",
            alt: "Cryptid",
            href: "https://www.instagram.com/p/DTIh6u-Dh5Y/?img_index=1"
        },
        {
            src: "/4586977360685911481.JPG",
            alt: "Business Gengar",
            href: "https://www.instagram.com/p/DS87uavjgOw/?img_index=1"
        },
        {
            src: "/6314287290915038907.JPG",
            alt: "Pokemon Hyper Potion",
            href: "https://www.instagram.com/p/DS6QGPhjmhC/?img_index=1"
        },
        {
            src: "/IMG_2083.PNG",
            alt: "Little Witch Cat",
            href: "https://www.instagram.com/p/DSTm6HzjkvK/?img_index=1"
        },
        {
            src: "/1278793859111044208.JPG",
            alt: "Scorpion Tattoo",
            href: "https://www.instagram.com/haleyvferro/"
        },
        {
            src: "/643377338726069948.JPG",
            alt: "Custom Work",
            href: "https://www.instagram.com/haleyvferro/"
        },
    ];

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
            {/* Hidden Heart Clip Path Definition */}
            <svg width="0" height="0" className="fixed pointer-events-none">
                <defs>
                    <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
                        <path d="M0.5,0.88 L0.12,0.5 C0.05,0.42 0,0.32 0,0.22 C0,0.1 0.1,0 0.22,0 C0.33,0 0.43,0.05 0.5,0.14 C0.57,0.05 0.67,0 0.78,0 C0.9,0 1,0.1 1,0.22 C1,0.32 0.95,0.42 0.88,0.5 L0.5,0.88 Z" />
                    </clipPath>
                </defs>
            </svg>

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
                            <a href="#portfolio" className="hover:text-pink-400 transition-colors">Portfolio</a>
                            <a href="#about" className="hover:text-pink-400 transition-colors">Origins</a>
                            <Link href="/aftercare" className="hover:text-pink-400 transition-colors">Aftercare</Link>
                            <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
                        </div>
                        <button onClick={
                                () => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfRUH7DbhAd3B8B1r0kFbM09TiadtfgPJmzHsA1v9H7I2HyEw/viewform", "_blank")
                            }
                            className="group relative px-6 py-2 overflow-hidden">
                            <div className="absolute inset-0 bg-white group-hover:bg-pink-500 transition-colors duration-500"/>
                            <span className="relative z-10 text-black text-xs font-black uppercase tracking-widest flex items-center">
                                Book
                                <HeartIcon/>
                                Now
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="https://images.unsplash.com/photo-1542453089-32e77a7b27c4?q=80&w=2000&auto=format&fit=crop" alt="Dark celestial tattoo art" fill className="object-cover opacity-30 grayscale contrast-125" priority/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"/> {/* Subtle Heart Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"/>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <div className="inline-flex items-center justify-center space-x-4 mb-6 text-pink-500/50">
                        <div className="h-[1px] w-12 bg-current"/>
                        <HeartIcon/>
                        <div className="h-[1px] w-12 bg-current"/>
                    </div>
                    <h1 className="text-6xl md:text-[10rem] font-black mb-8 tracking-tighter uppercase italic leading-[0.85] text-white">
                        Carry The 
                        <br/>
                        <span className="text-transparent border-t-zinc-100 bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200">Moonlight</span>
                    </h1>
                    <p className="text-sm md:text-base text-zinc-400 mb-12 max-w-xl mx-auto font-medium uppercase tracking-[0.2em] leading-loose">
                        <br/>
                        <br/>
                        Custom Neo-Traditional and American Traditional tattoos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="bg-white text-black px-10 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-pink-500 hover:text-white transition-all duration-500 flex items-center justify-center group">
                            Start Your Journey
                            <span className="ml-3 group-hover:scale-125 transition-transform"><HeartIcon/></span>
                        </button>
                        <button className="border border-white/10 px-10 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all backdrop-blur-sm">
                            The Archive
                        </button>
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute bottom-10 left-10 flex flex-col space-y-4 opacity-20">
                    <div className="w-[1px] h-20 bg-white"/>
                    <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] font-bold">EST. MMXXVI</span>
                </div>
            </section>

            {/* Portfolio Gallery */}
            <section id="portfolio" className="py-32 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-24 flex flex-col items-center text-center">
                        <span className="text-pink-500 mb-4 scale-150"><MoonIcon/></span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic">The Collection</h2>
                        <div className="flex items-center space-x-4 text-zinc-800">
                            <div className="h-[1px] w-20 bg-current"/>
                            <HeartIcon/>
                            <div className="h-[1px] w-20 bg-current"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                        portfolioImages.map((image, index) => (
                            <a key={index}
                                href={image.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 block">
                                <Image src={
                                        image.src
                                    }
                                    alt={
                                        image.alt
                                    }
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                                    <div className="flex items-center text-pink-500 mb-2">
                                        <HeartIcon/>
                                    </div>
                                    <p className="text-lg font-black uppercase italic tracking-widest text-white">
                                        {
                                        image.alt
                                    }</p>
                                </div>
                            </a>
                        ))
                    } </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-4 bg-[#080808] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none rotate-12">
                    <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
                    <div className="w-full md:w-1/2 aspect-square relative">
                        <div className="w-full h-full relative [clip-path:url(#heart-clip)]">
                            <Image src="/pic_bio.jpg" alt="The Lunar Artist" fill className="object-cover grayscale brightness-75 transition-all duration-700 hover:scale-110 hover:grayscale-0 hover:brightness-100"/>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Manifesting Magic</span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase italic leading-none">The Artisan of
                            <br/>
                            Shadow & Ink</h2>
                        <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                            Haley V Ferro is starting her tattoo journey this spring. Her inspiration comes from animation, comics, fantasy, and video games. She has a Visual Communications Degree from Northern Illinois University.
                            Haley has always been an artist and creates using several mediums. Currently, she enjoys making digital art into prints and stickers, acrylic illustrations on wood, and screen printing on shirts.  
                            Haley is interested in American and Neo-Trad tattoo styles with lots of color and learning how to provide great tattoos for all skin shades. 
                            <br/>
                            <br/>
                            Haley aspires toward the <a href="https://www.boneandblossom.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors underline">Bone and Blossom</a> core values of providing an intentional space for connection, respect, and collaboration that can only come from getting a tattoo.
                        </p>
                        <div className="grid grid-cols-2 gap-12 py-10 border-t border-white/5">
                            <div>
                                <p className="text-4xl font-black mb-2 text-pink-500 flex items-center">20<span className="text-xs ml-1">+</span>
                                </p>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Soul Marks</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black mb-2 text-pink-500">0</p>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Lunar Cycles</p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <button 
                                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfRUH7DbhAd3B8B1r0kFbM09TiadtfgPJmzHsA1v9H7I2HyEw/viewform", "_blank")}
                                className="bg-white text-black px-12 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-pink-500 hover:text-white transition-all duration-500 flex items-center group"
                            >
                                Book Here <span className="ml-3 group-hover:scale-125 transition-transform"><HeartIcon /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
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
                                className="text-zinc-500 not-italic text-sm leading-loose tracking-wide">
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
                        <div>
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
