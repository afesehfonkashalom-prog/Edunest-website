'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, ArrowRight, Star } from 'lucide-react';

export default function EduNest() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 transition-all duration-200" style={{ width: `${scrollProgress}%` }} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl font-bold">E</div>
            <span className="text-3xl font-bold tracking-tighter">EduNest</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#schools" className="hover:text-blue-400 transition">For Schools</a>
            <a href="#eia" className="hover:text-blue-400 transition">EIA AI</a>
            <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/237680614889" target="_blank" className="flex items-center gap-2 px-5 py-2.5 rounded-2xl hover:bg-white/10 transition">
              <MessageCircle className="w-5 h-5" />
              <span className="hidden md:block">Advisor</span>
            </a>
            <button 
              onClick={() => alert("Download links will be active after deployment")}
              className="flex items-center gap-3 bg-white text-black px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition">
              <Download className="w-5 h-5" />
              Download App
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm">Now in 28 African Countries</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-none">
                The Future of<br />Education Starts <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">Here</span>
              </h1>

              <p className="mt-6 text-xl text-gray-300 max-w-lg">
                AI-powered platform connecting students across Africa to top schools, scholarships, and career opportunities.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button 
                  onClick={() => alert("App download coming soon!")}
                  className="px-8 py-4 bg-white text-black rounded-2xl font-semibold text-lg flex items-center gap-3 hover:scale-105 transition">
                  Download Free
                </button>
                <a href="https://wa.me/237680614889" target="_blank" className="px-8 py-4 border border-white/30 rounded-2xl font-medium text-lg hover:bg-white/5 transition flex items-center gap-3">
                  Talk to Advisor
                </a>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-4 gap-6">
                <div><div className="text-4xl font-bold text-blue-400">142k</div><div className="text-xs text-gray-400">Students</div></div>
                <div><div className="text-4xl font-bold text-blue-400">890</div><div className="text-xs text-gray-400">Institutions</div></div>
                <div><div className="text-4xl font-bold text-blue-400">12k</div><div className="text-xs text-gray-400">Scholarships</div></div>
                <div><div className="text-4xl font-bold text-blue-400">1M+</div><div className="text-xs text-gray-400">AI Sessions</div></div>
              </div>
            </motion.div>

            <div className="hidden lg:block relative">
              <div className="glass rounded-3xl p-8 border border-white/10">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center text-8xl border border-white/10">
                  🌍
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-zinc-950">
        <h2 className="text-5xl font-bold tracking-tight">Ready to build your future?</h2>
        <div className="mt-10">
          <button 
            onClick={() => window.open('https://wa.me/237680614889', '_blank')}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-xl font-semibold hover:scale-105 transition">
            Start Now - It's Free
          </button>
        </div>
      </section>
    </>
  );
}
