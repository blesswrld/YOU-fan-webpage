// components/CharactersSection.jsx
"use client"; // Добавлено, если будут анимации или интерактивности

import Image from "next/image";

const characters = [
    {
        name: "Джо Голдберг",
        actor: "Пенн Бэджли",
        description:
            "Главный герой, серийный преследователь и убийца, который оправдывает свои действия 'любовью' и стремлением к 'идеальным' отношениям. Он меняет свою личность и местоположение, чтобы избегать последствий.",
        image: "/images/сharacters/joe_goldberg.jpg",
    },
    {
        name: "Лав Куинн",
        actor: "Виктория Педретти",
        description:
            "На первый взгляд очаровательная и свободная духом шеф-повар, которая становится объектом одержимости Джо во втором сезоне. Она оказывается такой же смертоносной и одержимой, как и он сам.",
        image: "/images/сharacters/love_quinn.jpg",
    },
    {
        name: "Гвиневра Бек",
        actor: "Элизабет Лэил",
        description:
            "Молодая, начинающая писательница, которая становится первой жертвой одержимости Джо в Нью-Йорке. Она ищет признания и любви, не подозревая о темных намерениях Джо.",
        image: "/images/сharacters/guinevere_beck.jpg",
    },
    {
        name: "Марианна Билтемп",
        actor: "Тила Блэр",
        description:
            "Библиотекарь и мать-одиночка, которую Джо встречает в третьем сезоне. Она умна, проницательна и быстро становится новой целью его опасного внимания.",
        image: "/images/сharacters/marienne_b.jpg",
    },
    {
        name: "Надя Фэйрфакс",
        actor: "Эми Луиз Пембертон",
        description:
            "Одна из студенток Джо в Лондоне в четвертом сезоне. Она умна, амбициозна и подозревает Джо в темных делах, что приводит к опасной игре в кошки-мышки.",
        image: "/images/сharacters/nadia_f.jpg",
    },
    {
        name: "Бронте",
        actor: "Маделин Зима",
        description:
            "Официантка и начинающая писательница, которую Джо встречает в первом сезоне. Она является частью его книжного мира и иногда становится объектом его внимания, но ей удается избежать его полного контроля.",
        image: "/images/сharacters/bronte.jpg",
    },
];

const CharactersSection = () => {
    return (
        <section
            id="characters"
            className="py-20 px-6 bg-base-100 text-base-content relative overflow-hidden" /* relative overflow-hidden для эффектов */
        >
            {/* Декоративные элементы в углах */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary transform translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-xl z-0"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary transform -translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-xl z-0"></div>

            <div className="container mx-auto relative z-10">
                {/* Заголовок с улучшенными стилями */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 text-secondary animate-fade-in-up transform hover:scale-105 transition-transform duration-300">
                    Главные Персонажи
                </h2>

                {/* Визуальный разделитель - "линия крови" */}
                <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full shadow-lg animate-pulse"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {characters.map((char, index) => (
                        <div
                            key={index}
                            className="card w-full bg-base-200 shadow-xl group cursor-pointer overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-base-200 hover:border-primary/50" /* Добавлен hover-бордер */
                        >
                            <figure className="relative h-96 w-full">
                                {char.image && (
                                    <Image
                                        src={char.image}
                                        alt={char.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: "cover" }}
                                        className="rounded-t-lg group-hover:scale-110 group-hover:brightness-75 transition-all duration-500 ease-in-out" /* Яркость уменьшается при наведении */
                                    />
                                )}
                                {/* Затемняющий оверлей с эффектом "взгляда" */}
                                <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-80 group-hover:from-primary/50 group-hover:to-transparent transition-all duration-300"></div>
                                {/* Эффект "взгляда" - красные глаза или точки */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-8 group-hover:h-8 group-hover:bg-red-500 rounded-full group-hover:shadow-blood-glow transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                    <span className="text-white text-4xl group-hover:animate-pulse">
                                        👁️
                                    </span>{" "}
                                    {/* Глаз или другая иконка */}
                                </div>
                            </figure>
                            <div className="card-body justify-end text-white p-6">
                                <h3 className="card-title text-2xl font-bold text-secondary group-hover:text-accent transition-colors duration-300 text-shadow-sm mb-2">
                                    {char.name}
                                </h3>
                                <p className="text-md text-neutral-content mb-3 text-shadow-sm">
                                    Актер: {char.actor}
                                </p>
                                <p className="text-neutral-content/80 text-sm leading-relaxed text-shadow-sm italic">
                                    {char.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CharactersSection;
