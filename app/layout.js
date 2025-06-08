import "./styles/globals.css";
import Navbar from "@/components/Navbar";

// Метаданные для всего приложения
export const metadata = {
    title: "YOU | Сериал 'Ты' - Фан-сайт",
    description:
        "Окунитесь в мир Джо Голдберга. Информация о сезонах, персонажах и свежих новостях сериала 'YOU'.",
    icons: {
        icon: "/favicon.ico",
    },
    keywords: [
        "YOU",
        "сериал Ты",
        "Джо Голдберг",
        "Netflix",
        "сериалы",
        "триллер",
        "кровавый",
        "триллер",
    ],
    openGraph: {
        title: "YOU | Сериал 'Ты' - Фан-сайт",
        description:
            "Окунитесь в мир Джо Голдберга. Информация о сезонах, персонажах и свежих новостях сериала 'YOU'.",
        url: "https://your-website.com",
        siteName: "YOU Series Showcase",
        images: [
            {
                url: "https://your-website.com/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Сериал YOU",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        // УБРАН montserrat.variable из className
        <html lang="ru" className="scroll-smooth" data-theme="dracula">
            <body className="bg-base-100 text-base-content font-montserrat min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-grow">{children}</main>

                <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-box mt-auto shadow-inner-xl">
                    <nav className="grid grid-flow-col gap-4 text-sm md:text-base">
                        <a
                            className="link link-hover text-neutral-content hover:text-primary transition-colors duration-300"
                            href="#about"
                        >
                            О сериале
                        </a>
                        <a
                            className="link link-hover text-neutral-content hover:text-primary transition-colors duration-300"
                            href="#characters"
                        >
                            Персонажи
                        </a>
                        <a
                            className="link link-hover text-neutral-content hover:text-primary transition-colors duration-300"
                            href="#episodes"
                        >
                            Эпизоды
                        </a>
                        <a
                            className="link link-hover text-neutral-content hover:text-primary transition-colors duration-300"
                            href="#watch-now"
                        >
                            Смотреть
                        </a>
                    </nav>
                    <aside className="text-xs md:text-sm">
                        <p>
                            © {new Date().getFullYear()} Фан-сайт сериала "YOU".
                            Все права защищены. Создано с{" "}
                            <span className="text-error animate-pulse">❤️</span>{" "}
                            для фанатов.
                        </p>
                    </aside>
                </footer>
            </body>
        </html>
    );
}
