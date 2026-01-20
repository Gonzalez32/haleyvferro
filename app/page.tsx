"use client";

import Image from "next/image";

export default function Home() {
  const portfolioImages = [
    { src: "https://images.unsplash.com/photo-1590201780547-581746a17831?q=80&w=800&auto=format&fit=crop", alt: "Moonlit Realism" },
    { src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop", alt: "Celestial Traditional" },
    { src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop", alt: "Fine Line Lunar" },
    { src: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=800&auto=format&fit=crop", alt: "Geometric Hearts" },
    { src: "https://images.unsplash.com/photo-1542453089-32e77a7b27c4?q=80&w=800&auto=format&fit=crop", alt: "Starlight Sleeve" },
    { src: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800&auto=format&fit=crop", alt: "Floral Serenity" },
  ];

  const MoonIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block mr-2">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );

  const HeartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block mx-1">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-pink-900/30 font-sans selection:text-pink-200">
      {/* Decorative Star Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-10 left-10 text-white animate-pulse"><HeartIcon /></div>
        <div className="absolute top-1/4 right-20 text-white rotate-45 scale-75 opacity-50"><MoonIcon /></div>
        <div className="absolute bottom-1/3 left-1/4 text-white scale-50"><HeartIcon /></div>
        <div className="absolute top-1/2 right-1/3 text-white -rotate-12 scale-125 animate-pulse"><MoonIcon /></div>
        <div className="absolute bottom-10 right-10 text-white scale-110 opacity-40"><HeartIcon /></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group cursor-pointer">
              <span className="text-pink-500 transition-transform group-hover:scale-110 duration-500">
                <MoonIcon />
              </span>
              <span className="text-2xl font-black tracking-[0.2em] uppercase italic ml-1">
                HALEY V FERRO<span className="text-pink-500 tracking-tighter"> INK</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              <a href="#portfolio" className="hover:text-pink-400 transition-colors flex items-center">
                Portfolio <span className="ml-2 scale-75 opacity-0 group-hover:opacity-100"><HeartIcon /></span>
              </a>
              <a href="#about" className="hover:text-pink-400 transition-colors">Origins</a>
              <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
            </div>
            <button 
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfRUH7DbhAd3B8B1r0kFbM09TiadtfgPJmzHsA1v9H7I2HyEw/viewform", "_blank")} 
              className="group relative px-6 py-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white group-hover:bg-pink-500 transition-colors duration-500" />
              <span className="relative z-10 text-black text-xs font-black uppercase tracking-widest flex items-center">
                Book <HeartIcon /> Now
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542453089-32e77a7b27c4?q=80&w=2000&auto=format&fit=crop"
            alt="Dark celestial tattoo art"
            fill
            className="object-cover opacity-30 grayscale contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          
          {/* Subtle Heart Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-flex items-center justify-center space-x-4 mb-6 text-pink-500/50">
            <div className="h-[1px] w-12 bg-current" />
            <HeartIcon />
            <div className="h-[1px] w-12 bg-current" />
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black mb-8 tracking-tighter uppercase italic leading-[0.85] text-white">
            Carry the <br /> 
            <span className="text-transparent border-t-zinc-100 bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200">Moonlight</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 mb-12 max-w-xl mx-auto font-medium uppercase tracking-[0.2em] leading-loose">
            In the name of the moon, I will tattoo you. <br />
            Custom fine-line realism and celestial compositions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-10 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-pink-500 hover:text-white transition-all duration-500 flex items-center justify-center group">
              Start Your Journey <span className="ml-3 group-hover:scale-125 transition-transform"><HeartIcon /></span>
            </button>
            <button className="border border-white/10 px-10 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all backdrop-blur-sm">
              The Archive
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-10 left-10 flex flex-col space-y-4 opacity-20">
          <div className="w-[1px] h-20 bg-white" />
          <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] font-bold">EST. MMXXVI</span>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col items-center text-center">
            <span className="text-pink-500 mb-4 scale-150"><MoonIcon /></span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic">The Collection</h2>
            <div className="flex items-center space-x-4 text-zinc-800">
              <div className="h-[1px] w-20 bg-current" />
              <HeartIcon />
              <div className="h-[1px] w-20 bg-current" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="flex items-center text-pink-500 mb-2">
                    <HeartIcon />
                  </div>
                  <p className="text-lg font-black uppercase italic tracking-widest">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none rotate-12">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="w-full md:w-1/2 aspect-[4/5] relative">
            <Image
              src="https://images.unsplash.com/photo-1590201780547-581746a17831?q=80&w=1000&auto=format&fit=crop"
              alt="The Lunar Artist"
              fill
              className="object-cover grayscale brightness-75"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-pink-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Manifesting Magic</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase italic leading-none">The Artisan of <br /> Shadow & Light</h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
              Guided by the phases of the moon and the whispers of the stars, I craft permanent talismans that bridge the gap between fantasy and reality.
            </p>
            <p className="text-zinc-500 mb-12 leading-relaxed text-sm tracking-wide">
              Twelve years of mastery in black and grey realism, infused with the ethereal grace of celestial motifs. My studio is a sanctuary for those who seek to wear their souls on their skin.
            </p>
            <div className="grid grid-cols-2 gap-12 py-10 border-t border-white/5">
              <div>
                <p className="text-4xl font-black mb-2 text-pink-500 flex items-center">500<span className="text-xs ml-1">+</span></p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Soul Marks</p>
              </div>
              <div>
                <p className="text-4xl font-black mb-2 text-pink-500">XII</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Lunar Cycles</p>
              </div>
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
                    <span className="text-pink-500 mr-3 scale-110"><MoonIcon /></span>
                    <h3 className="text-2xl font-black tracking-widest uppercase italic">HALEY V FERRO<span className="text-pink-500"> INK</span></h3>
                </div>
                <p className="text-zinc-600 max-w-xs text-sm leading-loose">
                Luxury celestial tattooing. Where the magic of the moon meets the precision of the needle.
                </p>
            </div>
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-zinc-400">Sanctuary</h4>
                <address className="text-zinc-500 not-italic text-sm leading-loose tracking-wide">
                123 Ink Street, Studio 4<br />
                Creative District<br />
                Los Angeles, CA 90210
                </address>
            </div>
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-zinc-400">Transmissions</h4>
                <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/haleyvferro/" className="text-sm text-zinc-500 hover:text-pink-400 transition-colors flex items-center group">
                    Instagram <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"><HeartIcon /></span>
                </a>
                <a href="#" className="text-sm text-zinc-500 hover:text-pink-400 transition-colors">Facebook</a>
                <a href="#" className="text-sm text-zinc-500 hover:text-pink-400 transition-colors">Twitter</a>
                </div>
            </div>
            </div>
            
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center space-x-2 text-pink-500/20">
                    <HeartIcon /> <MoonIcon /> <HeartIcon />
                </div>
                <p className="text-zinc-800 text-[10px] uppercase font-bold tracking-[0.5em]">
                    © {new Date().getFullYear()} HALEY V FERRO INK STUDIO. ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
}
