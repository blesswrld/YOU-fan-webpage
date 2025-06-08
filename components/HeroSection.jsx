"use client";

import { useRef, useState, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute, FaEye, FaEyeSlash } from "react-icons/fa";

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [showOverlayContent, setShowOverlayContent] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const toggleMute = () => setIsMuted(!isMuted);
    const toggleContentVisibility = () =>
        setShowOverlayContent(!showOverlayContent);

    return (
        <section className="relative w-full h-screen overflow-hidden font-montserrat">
            {/* Video Background (Desktop) */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/you-trailer.mp4"
                loop
                autoPlay
                muted={isMuted}
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                preload="auto"
            ></video>

            {/* Fallback Image (Mobile) */}
            {/* <div
                className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
                style={{
                    backgroundImage:
                        "url(/images/you-mobile-hero-fallback.jpg)",
                }}
            ></div> */}

            <div className="absolute inset-0 bg-gradient-to-t from-base-100/90 via-base-100/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-base-100/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-base-100/30 to-transparent"></div>

            <div
                className={`relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-content px-4 sm:px-6 md:px-8 lg:px-12 transition-opacity duration-500 ${
                    showOverlayContent
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 animate-fade-in-up text-shadow-blood transform hover:scale-105 transition-transform duration-300">
                    <span className="text-bloodRed">Y</span>
                    <span className="text-bloodOrange mr-3">OU</span>
                    <span className="text-bloodRed">"Т</span>
                    <span className="text-bloodOrange">Ы"</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-2xl md:max-w-3xl lg:max-w-4xl mb-6 md:mb-8 leading-relaxed text-shadow-md animate-fade-in-up delay-200">
                    Он идеален. Он очарователен. Он преследует вас.
                </p>
                <button
                    className="btn btn-primary text-base sm:text-lg md:text-xl font-semibold h-12 sm:h-14 px-8 sm:px-10 rounded-lg 
                               shadow-2xl shadow-bloodRed/40 hover:shadow-bloodOrange/70
                               hover:scale-105 transition-all duration-300 
                               animate-fade-in-up delay-400 
                               relative overflow-hidden group border-none
                               flex items-center justify-center"
                    onClick={() =>
                        document
                            .getElementById("about")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    aria-label="Узнать больше о сериале"
                >
                    <span className="absolute inset-0 bg-bloodOrange transition-all duration-300 z-[1] opacity-0"></span>
                    <span className="relative z-[2] text-primary-content">
                        Узнать больше
                    </span>
                </button>
            </div>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex flex-col gap-3 sm:gap-4">
                <button
                    onClick={toggleMute}
                    className="btn btn-circle btn-ghost bg-base-100/50 hover:bg-base-100 text-neutral-content text-lg sm:text-xl md:text-2xl hover:text-bloodRed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bloodRed shadow-lg hover:scale-110"
                    aria-label={isMuted ? "Включить звук" : "Выключить звук"}
                >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <button
                    onClick={toggleContentVisibility}
                    className="btn btn-circle btn-ghost bg-base-100/50 hover:bg-base-100 text-neutral-content text-lg sm:text-xl md:text-2xl hover:text-bloodRed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bloodRed shadow-lg hover:scale-110"
                    aria-label={
                        showOverlayContent
                            ? "Скрыть контент"
                            : "Показать контент"
                    }
                >
                    {showOverlayContent ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
