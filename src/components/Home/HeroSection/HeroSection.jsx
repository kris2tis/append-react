import "./HeroSection.css"
import HeroBg from "../../../assets/img/hero-bg.jpg";

const HeroSection = () => {
    return (
        <>
            <section id="hero" className="hero section dark-background">
                <img src={HeroBg} alt="" data-aos="fade-in" />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <h2 data-aos="fade-up" data-aos-delay="100">
                                Welcome to Our Website
                            </h2>
                            <p data-aos="fade-up" data-aos-delay="200">
                                We are team of talented designers making
                                websites with Bootstrap
                            </p>
                        </div>
                        <div
                            className="col-lg-5"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <form
                                action="forms/newsletter.php"
                                method="post"
                                className="php-email-form"
                            >
                                <div className="sign-up-form">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection