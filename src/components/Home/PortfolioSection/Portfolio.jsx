import "./portfolio.css";
import images from "../../../assets/index.js";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import { useEffect, useRef } from "react";

const Portfolio = () => {
    const isotopeContainerRef = useRef(null);
    const isotopeInstanceRef = useRef(null);

    useEffect(() => {
        const isotopeElement = document.querySelector(".isotope-layout");
        const containerElement = isotopeContainerRef.current;

        if (isotopeElement && containerElement) {
            const layout =
                isotopeElement.getAttribute("data-layout") ?? "masonry";
            const filter =
                isotopeElement.getAttribute("data-default-filter") ?? "*";
            const sort =
                isotopeElement.getAttribute("data-sort") ?? "original-order";

            const initIsotope = () => {
                isotopeInstanceRef.current = new Isotope(containerElement, {
                    itemSelector: ".isotope-item",
                    layoutMode: layout,
                    filter: filter,
                    sortBy: sort,
                });
            };

            if (typeof imagesLoaded === "function") {
                imagesLoaded(containerElement, () => {
                    initIsotope();
                });
            } else {
                initIsotope();
            }

            const filters = isotopeElement.querySelectorAll(
                ".isotope-filters li"
            );
            filters.forEach((filterItem) => {
                filterItem.addEventListener("click", function () {
                    isotopeElement
                        .querySelector(".isotope-filters .filter-active")
                        ?.classList.remove("filter-active");
                    this.classList.add("filter-active");
                    isotopeInstanceRef.current?.arrange({
                        filter: this.getAttribute("data-filter"),
                    });
                });
            });
        }

        return () => {
            isotopeInstanceRef.current?.destroy();
        };
    }, []);

    return (
        <>
            <section id="portfolio" className="portfolio section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <p>
                        Necessitatibus eius consequatur ex aliquid fuga eum
                        quidem sint consectetur velit
                    </p>
                </div>

                <div className="container">
                    <div
                        className="isotope-layout"
                        data-default-filter="*"
                        data-layout="masonry"
                        data-sort="original-order"
                    >
                        <ul
                            className="portfolio-filters isotope-filters"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <li data-filter="*" className="filter-active">
                                All
                            </li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-product">Card</li>
                            <li data-filter=".filter-branding">Web</li>
                        </ul>

                        <div
                            ref={isotopeContainerRef}
                            className="row gy-4 isotope-container"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <img
                                    src={images.masnory_portfolio.masnory_p1}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a
                                        href={
                                            images.masnory_portfolio.masnory_p1
                                        }
                                        title="App 1"
                                        data-gallery="portfolio-gallery-app"
                                        className="glightbox preview-link"
                                    >
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a
                                        href="portfolio-details.html"
                                        title="More Details"
                                        className="details-link"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <img
                                    src={images.masnory_portfolio.masnory_p2}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <h4>Product 1</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a
                                        href={
                                            images.masnory_portfolio.masnory_p2
                                        }
                                        title="Product 1"
                                        data-gallery="portfolio-gallery-product"
                                        className="glightbox preview-link"
                                    >
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a
                                        href="portfolio-details.html"
                                        title="More Details"
                                        className="details-link"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <img
                                    src={images.masnory_portfolio.masnory_p3}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <h4>Branding 1</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a
                                        href={
                                            images.masnory_portfolio.masnory_p3
                                        }
                                        title="Branding 1"
                                        data-gallery="portfolio-gallery-branding"
                                        className="glightbox preview-link"
                                    >
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a
                                        href="portfolio-details.html"
                                        title="More Details"
                                        className="details-link"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <img
                                    src={images.masnory_portfolio.masnory_p4}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a
                                        href={
                                            images.masnory_portfolio.masnory_p4
                                        }
                                        title="App 2"
                                        data-gallery="portfolio-gallery-app"
                                        className="glightbox preview-link"
                                    >
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a
                                        href="portfolio-details.html"
                                        title="More Details"
                                        className="details-link"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <img
                                    src={images.masnory_portfolio.masnory_p5}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <h4>Product 2</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a
                                        href={
                                            images.masnory_portfolio.masnory_p5
                                        }
                                        title="Product 2"
                                        data-gallery="portfolio-gallery-product"
                                        className="glightbox preview-link"
                                    >
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a
                                        href="portfolio-details.html"
                                        title="More Details"
                                        className="details-link"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <img
                                    src={images.masnory_portfolio.masnory_p6}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <h4>Branding 2</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a
                                        href={
                                            images.masnory_portfolio.masnory_p6
                                        }
                                        title="Branding 2"
                                        data-gallery="portfolio-gallery-branding"
                                        className="glightbox preview-link"
                                    >
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a
                                        href="portfolio-details.html"
                                        title="More Details"
                                        className="details-link"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <img
                                    src={images.masnory_portfolio.masnory_p7}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a
                                        href={
                                            images.masnory_portfolio.masnory_p7
                                        }
                                        title="App 3"
                                        data-gallery="portfolio-gallery-app"
                                        className="glightbox preview-link"
                                    >
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a
                                        href="portfolio-details.html"
                                        title="More Details"
                                        className="details-link"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <img
                                    src={images.masnory_portfolio.masnory_p8}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <h4>Product 3</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a
                                        href={
                                            images.masnory_portfolio.masnory_p8
                                        }
                                        title="Product 3"
                                        data-gallery="portfolio-gallery-product"
                                        className="glightbox preview-link"
                                    >
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a
                                        href="portfolio-details.html"
                                        title="More Details"
                                        className="details-link"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <img
                                    src={images.masnory_portfolio.masnory_p9}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <h4>Branding 3</h4>
                                    <p>Lorem ipsum, dolor sit</p>
                                    <a
                                        href={
                                            images.masnory_portfolio.masnory_p9
                                        }
                                        title="Branding 2"
                                        data-gallery="portfolio-gallery-branding"
                                        className="glightbox preview-link"
                                    >
                                        <i className="bi bi-zoom-in"></i>
                                    </a>
                                    <a
                                        href="portfolio-details.html"
                                        title="More Details"
                                        className="details-link"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
