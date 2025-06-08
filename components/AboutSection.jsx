"use client";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-20 px-6 bg-base-200 text-base-content shadow-inner-xl relative"
        >
            <div className="container mx-auto text-center max-w-4xl relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8  text-primary animate-fade-in-up">
                    О сериале "YOU"
                </h2>

                {/* Визуальный разделитель - "линия крови" */}
                <div className="w-24 h-1 bg-secondary mx-auto mb-12 rounded-full shadow-lg animate-pulse"></div>

                <div className="text-lg md:text-xl leading-relaxed mx-auto text-neutral-content animate-fade-in-up delay-200">
                    <p className="mb-6 text-shadow-sm italic">
                        {" "}
                        "Ты" (YOU) — это мрачное погружение в сознание Джо
                        Голдберга, человека, чьи навязчивые идеи о "любви"
                        трансформируются в смертельную одержимость. Основанный
                        на романах Кэролайн Кепнес, сериал исследует самые
                        темные уголки человеческой психики.
                    </p>
                    <p className="text-shadow-sm italic">
                        {" "}
                        {/* Убрано opacity-90 */}
                        Джо, используя передовые технологии и свой изощренный
                        ум, проникает в жизнь своих жертв, устраняя любое
                        препятствие на пути к своей "идеальной" привязанности.
                        Каждый шаг, каждое его действие — это холодный расчет
                        одержимого разума. Сериал заставляет зрителя постоянно
                        балансировать на грани восхищения и ужаса, исследуя
                        тонкую грань между страстью и безумием.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
