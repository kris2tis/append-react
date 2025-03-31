import "./ClientsSection.css";
import images from "../../../assets/index.js";

const ClientsSection = () => {
    return (
        <>
            <section id="clients" className="clients section">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4">
                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img
                                src={images.client.client1}
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img
                                src={images.client.client2}
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img
                                src={images.client.client3}
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img
                                src={images.client.client4}
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img
                                src={images.client.client5}
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img
                                src={images.client.client6}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientsSection;
