import React from 'react';
import siteData from '../config/siteData';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-100/60 dark:bg-transparent py-10 border-t border-gray-300 dark:border-gray-900 relative z-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                    <div className="text-center md:text-left">
                        <p className="font-bold text-gray-800 dark:text-white text-base">{siteData.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">Full-Stack AI Developer <b>·</b> Freelancer <b>·</b> Researcher</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <span>Last updated: <i>April 2026</i></span>
                        <span>·</span>
                        <a
                            href={`${process.env.PUBLIC_URL}/assets/cv/Jasvanth_CV_Super_Resume.pdf`}
                            download="Jasvanth_CV_Super_Resume.pdf"
                            className="text-primary hover:underline font-semibold relative z-50 pointer-events-auto"
                        >
                            View Resume ↓
                        </a>
                    </div>
                </div>
                <div className="flex justify-center mb-4">
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                        className="text-gray-500 dark:text-gray-500 hover:text-primary cursor-pointer transition-colors text-sm bg-transparent border-none outline-none relative z-50 pointer-events-auto"
                    >
                        ↑ Back to Top
                    </button>
                </div>
                <p className="text-gray-500 dark:text-gray-600 text-sm text-center">
                    © {year} {siteData.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

