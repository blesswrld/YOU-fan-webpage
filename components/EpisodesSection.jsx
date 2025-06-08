"use client";

const seasons = [
    {
        season: 1,
        title: "Начало одержимости",
        description:
            "Джо встречает Бек и погружается в свою первую одержимость в Нью-Йорке, раскрывая свою темную натуру и готовность устранять любые препятствия.",
        episodes: 10,
        theme: "Мрачный городской триллер",
    },
    {
        season: 2,
        title: "Новая жизнь, старые привычки",
        description:
            "Джо переезжает в Лос-Анджелес, пытаясь начать все сначала, но встречает Лав, которая оказывается неожиданным сюрпризом, разделяющим его темные склонности.",
        episodes: 10,
        theme: "Запутанный роман, шокирующие откровения",
    },
    {
        season: 3,
        title: "Пригородный кошмар",
        description:
            "Джо и Лав пытаются вести нормальную семейную жизнь в пригороде Мэдрона, но их темные секреты постоянно угрожают раскрытием, и новые соседи становятся частью их опасной игры.",
        episodes: 10,
        theme: "Пригородный ужас, домашний хаос",
    },
    {
        season: 4,
        title: "Лондонский охотник",
        description:
            "Джо теперь в Лондоне, пытаясь избежать прошлого под новой личностью, но сам становится объектом преследования загадочного 'Убийцы из высшего общества'.",
        episodes: 10,
        theme: "Детективная тайна, кризис идентичности",
    },
    {
        season: 5,
        title: "Финал",
        description:
            "Джо возвращается в Нью-Йорк, чтобы противостоять своему прошлому и завершить свой цикл одержимости. Последний сезон обещает быть самым напряженным и непредсказуемым.",
        episodes: 10,
        theme: "Финальное противостояние",
    },
];

const EpisodesSection = () => {
    return (
        <section
            id="episodes"
            className="py-20 px-6 bg-base-200 text-base-content shadow-inner-xl relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-xl z-0"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary transform translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-xl z-0"></div>

            <div className="container mx-auto relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 text-primary animate-fade-in-up transform hover:scale-105 transition-transform duration-300">
                    Сезоны и Эпизоды
                </h2>

                {/* Визуальный разделитель - "линия крови" */}
                <div className="w-24 h-1 bg-secondary mx-auto mb-12 rounded-full shadow-lg animate-pulse"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seasons.map((s, index) => (
                        <div
                            key={index}
                            className="card w-full bg-base-300 shadow-xl hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out
                                       border-2 border-transparent hover:border-primary/50"
                        >
                            <div className="card-body p-6">
                                {" "}
                                <h3 className="card-title text-2xl font-bold text-secondary mb-2 text-shadow-sm">
                                    {s.season}: {s.title}
                                </h3>{" "}
                                <p className="text-md text-neutral-content mb-4 italic text-shadow-sm">
                                    {s.description}
                                </p>{" "}
                                <div className="card-actions justify-end mt-auto">
                                    {" "}
                                    <div className="badge badge-outline text-xs p-3 text-neutral-content border-neutral-content/50 hover:bg-neutral-focus hover:text-white transition-colors duration-200">
                                        Эпизоды: {s.episodes}
                                    </div>
                                    <div className="badge badge-secondary text-xs p-3 text-secondary-content bg-secondary hover:bg-secondary-focus transition-colors duration-200">
                                        {s.theme}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EpisodesSection;
