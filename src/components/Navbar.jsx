import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(false);
    const [visibleTimeout, setVisibleTimeout] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            // if (currentScrollPos < 10) {
            //     setVisible(true);
            //     clearTimeout(visibleTimeout);
            // } else
            if (prevScrollPos > currentScrollPos) {
                setVisible(true);
                clearTimeout(visibleTimeout);
                const timeout = setTimeout(() => {
                    setVisible(false);
                }, 5000);
                setVisibleTimeout(timeout);
            } else {
                setVisible(false);
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(visibleTimeout);
        };
    }, [prevScrollPos]);

    const navbarStyle = {
        top: visible ? '0' : '-100px',
        transition: 'top 0.3s ease-in-out',
    };

    const isActive = (href) => window.location.hash === href;

    return (
        <div className=" font-cabinet  fixed inset-0 flex justify-center mx-auto max-w-xs lg:max-w-md mt-4 rounded-full bg-[#00000040]  shadow-equal shadow-[#150b46] items-center h-[44px] lg:h-[54px]  saturate-100 backdrop-blur-md z-40 " style={navbarStyle}>
            <div className="flex flex-row items-start gap-5 lg:gap-8 text-sm lg:text-base">
                <a className={`text-gray-400 transition-colors hover:text-gray-200 ${isActive('#about') ? 'text-white' : ''}`}
                    href="#about" onClick={() => { window.scrollTo(0, 750) }}>
                    About
                </a>
                <a className={`text-gray-400 transition-colors hover:text-gray-200 ${isActive('#projects') ? 'text-white' : ''}`}
                    href="#projects" onClick={() => { window.scrollTo(0, 1460) }}>
                    Projects
                </a>
                <a className={`text-gray-400 transition-colors hover:text-gray-200 `} href="#home" onClick={() => { window.scrollTo(0, 0) }}>
                    <img src={`./home.png`} className='w-6 h-5' alt="Home"></img>
                </a>
                <a className={`text-gray-400 transition-colors hover:text-gray-200 ${isActive('#blogs') ? 'text-white' : ''}`}
                    href="https://sandeep-blog-eight.vercel.app/">
                    Blogs
                </a>
                <a className={`text-gray-400 transition-colors hover:text-gray-200 ${isActive('#contact') ? 'text-white' : ''}`}
                    href="#contact" onClick={() => { window.scrollTo(0, 2700) }}>
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Navbar;
