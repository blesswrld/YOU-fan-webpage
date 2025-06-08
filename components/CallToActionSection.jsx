"use client";

import Link from "next/link";

const CallToActionSection = () => {
    return (
        <section
            id="watch-now"
            className="py-24 px-6 text-center bg-gradient-to-br from-primary to-base-100 text-white shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-secondary transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl z-0 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary transform translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-3xl z-0 animate-pulse-slow delay-500"></div>

            <div className="container mx-auto relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-secondary text-shadow-blood animate-fade-in-up transform hover:scale-105 transition-transform duration-300">
                    Готовы окунуться в его мир?
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 leading-relaxed text-neutral-content animate-fade-in-up delay-200 opacity-90 italic text-shadow-sm">
                    Каждая одержимость начинается с одного взгляда. Он ждет.
                    Узнайте, как далеко может зайти "любовь" в мире Джо
                    Голдберга.
                </p>
                <Link
                    href="https://www.netflix.com/title/80211991" // Ссылка на сериал (Netflix)
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg text-2xl font-bold px-12 py-4 rounded-full shadow-2xl hover:shadow-secondary/50 hover:scale-105 transition-all duration-300 inline-block animate-fade-in-up delay-400"
                >
                    Смотреть на Netflix
                </Link>
            </div>
        </section>
    );
};

export default CallToActionSection;
