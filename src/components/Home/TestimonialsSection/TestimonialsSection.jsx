import "./TestimonialsSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialsSection.css";

import testimonials from "../../../assets/TestimonialsData";

const TestimonialsSection = () => {
    return (
        <section
            id="testimonials"
            className="testimonials section light-background"
        >
            <div className="container">
                <div className="row align-items-center">
                    <div
                        className="col-lg-5 info"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3>Testimonials</h3>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore.
                        </p>
                    </div>

                    <div
                        className="col-lg-7"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={"auto"}
                            loop={true}
                            autoplay={{ delay: 5000 }}
                            pagination={{ clickable: true }}
                            className="swiper-container"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-item">
                                        <div className="d-flex">
                                            <img
                                                src={testimonial.img}
                                                className="testimonial-img flex-shrink-0"
                                                alt={testimonial.name}
                                            />
                                            <div>
                                                <h3>{testimonial.name}</h3>
                                                <h4>{testimonial.role}</h4>
                                                <div className="stars">
                                                    {[...Array(5)].map(
                                                        (_, i) => (
                                                            <i
                                                                key={i}
                                                                className="bi bi-star-fill"
                                                            ></i>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>{testimonial.quote}</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
