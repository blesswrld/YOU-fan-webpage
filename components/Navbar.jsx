"use client";

import Link from "next/link";
import Image from "next/image"; // Для логотипа
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar fixed top-0 left-0 w-full z-40 bg-base-300 bg-opacity-80 backdrop-blur-sm shadow-xl px-4 py-2">
                <div className="navbar-start">
                    <Link
                        href="/"
                        className="btn btn-ghost text-base-content text-2xl md:text-3xl font-bold tracking-widest uppercase flex items-center"
                    >
                        {/* Логотип */}
                        <Image
                            src="/images/logo/you-newLogo.png"
                            alt="YOU Logo"
                            width={96}
                            height={96}
                            className="rounded-full object-cover mr-2 transform hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                </div>

                {/* Десктопное меню */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-base-content">
                        <li>
                            <Link
                                href="#about"
                                className="text-lg font-semibold hover:text-primary transition-colors duration-300 px-4 py-2"
                            >
                                О сериале
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#characters"
                                className="text-lg font-semibold hover:text-primary transition-colors duration-300 px-4 py-2"
                            >
                                Персонажи
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#episodes"
                                className="text-lg font-semibold hover:text-primary transition-colors duration-300 px-4 py-2"
                            >
                                Эпизоды
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <Link
                        href="#watch-now"
                        className="btn btn-primary btn-outline hidden lg:flex text-primary-content hover:bg-primary hover:text-primary-content transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Смотреть сейчас
                    </Link>

                    {/* Иконка бургер-меню для мобильных */}
                    <div className="lg:hidden">
                        <button
                            className="btn btn-ghost text-base-content"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open navigation"
                        >
                            <FaBars className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300 z-[999] ${
                    isMobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
                aria-hidden={!isMobileMenuOpen}
            >
                <div
                    className={`absolute top-0 right-0 h-full bg-base-300 shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    style={{ width: "80%", maxWidth: "320px" }}
                >
                    <div className="flex justify-between items-center p-4 bg-base-200">
                        <h2 className="text-2xl font-bold text-base-content">
                            Меню
                        </h2>
                        <button
                            className="btn btn-ghost text-base-content"
                            onClick={closeMobileMenu}
                            aria-label="Close menu"
                        >
                            <FaTimes className="h-7 w-7 transition-transform duration-300 hover:rotate-90" />
                        </button>
                    </div>

                    <ul className="menu p-4 w-full text-xl space-y-2 flex-grow">
                        <li>
                            <Link
                                href="#about"
                                onClick={closeMobileMenu}
                                className="hover:text-primary transition-colors duration-300 py-3 block text-base-content"
                            >
                                О сериале
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#characters"
                                onClick={closeMobileMenu}
                                className="hover:text-primary transition-colors duration-300 py-3 block text-base-content"
                            >
                                Персонажи
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#episodes"
                                onClick={closeMobileMenu}
                                className="hover:text-primary transition-colors duration-300 py-3 block text-base-content"
                            >
                                Эпизоды
                            </Link>
                        </li>
                    </ul>

                    <div className="p-4 w-full">
                        <Link
                            href="#watch-now"
                            onClick={closeMobileMenu}
                            className="btn btn-primary btn-lg w-full shadow-xl text-primary-content hover:bg-primary-focus transition-all duration-300"
                        >
                            Смотреть сейчас
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
