import "./StatsSection.css";

import images from "../../../assets/index.js";
const StatsSection = () => {
    return (
        <>
            <section id="stats" className="stats section dark-background">
                <img src={images.state} alt="" data-aos="fade-in" />

                <div
                    className="container position-relative"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    data-purecounter-start="0"
                                    data-purecounter-end="232"
                                    data-purecounter-duration="1"
                                    className="purecounter"
                                ></span>
                                <p>Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    data-purecounter-start="0"
                                    data-purecounter-end="521"
                                    data-purecounter-duration="1"
                                    className="purecounter"
                                ></span>
                                <p>Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    data-purecounter-start="0"
                                    data-purecounter-end="1453"
                                    data-purecounter-duration="1"
                                    className="purecounter"
                                ></span>
                                <p>Hours Of Support</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    data-purecounter-start="0"
                                    data-purecounter-end="32"
                                    data-purecounter-duration="1"
                                    className="purecounter"
                                ></span>
                                <p>Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StatsSection;
