import { useEffect, useState, useRef } from "react";

import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const headerRef = useRef(null);
    const location = useLocation();

    const toggleScrolled = () => {
        const hasStickyClass = [
            "scroll-up-sticky",
            "sticky-top",
            "fixed-top",
        ].some((cls) => headerRef.current.classList.contains(cls));

        if (!hasStickyClass) return;

        document.body.classList.toggle(
            "scrolled",
            window.scrollY > 100 && location.pathname == "/"
        );
        document.body.classList.toggle(
            "blog",
            location.pathname == "/Blog"
        );
    };
    useEffect(() => {

        window.addEventListener("scroll", toggleScrolled);
        window.addEventListener("load", toggleScrolled);
  
        return () => {
            removeEventListener("scroll", toggleScrolled);
            removeEventListener("load", toggleScrolled);
        }; 
    }, []);

    useEffect(() => {
        toggleScrolled()
    } , [location])

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMobileMenuStatus = () => {
        let newState = !isMenuOpen;
        setIsMenuOpen(newState);

        newState
            ? document.body.classList.add("mobile-nav-active")
            : document.body.classList.remove("mobile-nav-active");
    };

    useEffect(() => {
        return () => document.body.classList.remove("mobile-nav-active");
    }, []);

    return (
        <>
            <header
                ref={headerRef}
                id="header"
                className={`header d-flex align-items-center ${
                    location.pathname == "/" ? "fixed-top" : "sticky-top"
                }`}
            >
                <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
                    <Link
                        to="/"
                        className="logo d-flex align-items-center me-auto me-xl-0"
                    >
                        <h1 className="sitename">Append</h1>
                        <span>.</span>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li>
                                <a href="#hero">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#team">Team</a>
                            </li>
                            <li>
                                <Link to="/Blog">Blog</Link>
                            </li>
                            <li className="dropdown">
                                <a href="#">
                                    <span>Dropdown</span>{" "}
                                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Dropdown 1</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">
                                            <span>Deep Dropdown</span>{" "}
                                            <i className="bi bi-chevron-down toggle-dropdown"></i>
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Deep Dropdown 1</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Dropdown 2</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Dropdown 3</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Dropdown 4</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Dropdown 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown 4</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <i
                            onClick={handleMobileMenuStatus}
                            className={`mobile-nav-toggle d-xl-none bi ${
                                isMenuOpen ? "bi-x" : "bi-list"
                            }`}
                        ></i>
                    </nav>

                    <a className="btn-getstarted" href="#about">
                        Get Started
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
