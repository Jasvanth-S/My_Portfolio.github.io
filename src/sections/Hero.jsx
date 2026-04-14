import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import siteData from '../config/siteData';

const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % siteData.roles.length);
                setFade(true);
            }, 500);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentRole = siteData.roles[currentRoleIndex];

    return (
        <section id="hero" className="min-h-[100dvh] w-full flex items-center justify-center bg-transparent text-gray-900 dark:text-[#E0E0E0] px-4 md:px-6 pt-28 pb-12 relative overflow-x-hidden">
            <div className="w-full text-center max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>

                {/* Main Heading Sequence */}
                <div className="mb-4 md:mb-6 hover:scale-[1.01] transition-transform duration-500 flex flex-col items-center w-full">
                    <h3 className="font-mono text-lg md:text-xl text-gray-500 dark:text-sky-200/60 tracking-[0.3em] font-bold dark:font-semibold uppercase mb-2 w-full text-center">
                        Hello, I'm
                    </h3>
                    
                    {/* Locked Dimension Container for Typography Shifts */}
                    <div className="min-h-[100px] w-full flex items-center justify-center">
                        <h1 className="font-alien text-[14vw] leading-[1] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-blue-900 to-sky-600 dark:from-white dark:via-[#E2E8F0] dark:to-[#00B4D8] py-2 px-2 md:px-8 drop-shadow-sm dark:drop-shadow-md w-full text-center whitespace-nowrap">
                            {siteData.name}
                        </h1>
                    </div>
                </div>

                {/* Role / Description Container */}
                <div className="min-h-[220px] sm:min-h-[180px] md:min-h-[160px] mb-4 md:mb-8 flex flex-col items-center justify-start relative w-full">
                    <div className={`transition-all duration-700 ease-in-out absolute top-0 flex flex-col items-center w-full ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <div className="h-10 md:h-12 flex flex-col items-center justify-center mb-5 w-full">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 dark:from-sky-300 dark:to-blue-500 tracking-wide drop-shadow-sm w-full text-center">
                                <TypeAnimation
                                    key={currentRole.title}
                                    sequence={[currentRole.title]}
                                    speed={50}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={0}
                                />
                            </h2>
                        </div>
                        
                        {/* Elite Minimalist Description */}
                        <div className="w-full max-w-2xl px-4 sm:px-6 rounded-2xl relative flex flex-col items-center justify-center mx-auto">
                            <p className="font-body text-[0.9rem] sm:text-base md:text-lg text-gray-700 dark:text-[#A8B2D1] leading-[1.8] font-medium md:font-normal text-center w-full">
                                {currentRole.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ultra-Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-8 z-20 w-full px-4 sm:px-0 relative mb-4">
                    <Link
                        to="/creations"
                        className="w-[85%] max-w-[280px] sm:max-w-none sm:w-auto text-center px-6 py-3.5 sm:py-4 rounded-full bg-blue-900 text-white dark:bg-white dark:text-[#0A192F] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-blue-700 dark:hover:bg-sky-400 hover:text-white shadow-md hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transform hover:-translate-y-1 flex items-center justify-center"
                    >
                        Explore Project
                    </Link>
                    <Link
                        to="/connect"
                        className="w-[85%] max-w-[280px] sm:max-w-none sm:w-auto text-center px-6 py-3.5 sm:py-4 rounded-full border border-blue-900/20 text-blue-900 dark:border-sky-200/30 dark:text-white font-bold dark:font-medium text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:border-sky-400 dark:hover:text-sky-400 dark:hover:bg-sky-400/10 transform hover:-translate-y-1 flex items-center justify-center"
                    >
                        Initialize Contact
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
