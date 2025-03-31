import "./FaqSection.css";
import Accordion from "react-bootstrap/Accordion";

const FaqSection = () => {
    return (
        <>
            <section id="faq" className="faq section">
                <div className="container">
                    <div className="row gy-4">
                        <div
                            className="col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="content px-xl-5">
                                <h3>
                                    <span>Frequently Asked </span>
                                    <strong>Questions</strong>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Duis aute irure dolor in reprehenderit
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100">
                            <Accordion>
                                <Accordion.Item
                                    style={{ marginBlock: "2rem" }}
                                    eventKey="0"
                                >
                                    <Accordion.Header>
                                        <h3>
                                            <span className="num">1.</span>{" "}
                                            <span>
                                                Non consectetur a erat nam at
                                                lectus urna duis?
                                            </span>
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Feugiat pretium nibh ipsum
                                            consequat. Tempus iaculis urna id
                                            volutpat lacus laoreet non curabitur
                                            gravida. Venenatis lectus magna
                                            fringilla urna porttitor rhoncus
                                            dolor purus non.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    style={{ marginBlock: "2rem" }}
                                    eventKey="1"
                                >
                                    <Accordion.Header>
                                        <h3>
                                            <span className="num">2.</span>{" "}
                                            <span>
                                                Feugiat scelerisque varius morbi
                                                enim nunc faucibus a
                                                pellentesque?
                                            </span>
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Dolor sit amet consectetur
                                            adipiscing elit pellentesque
                                            habitant morbi. Id interdum velit
                                            laoreet id donec ultrices. Fringilla
                                            phasellus faucibus scelerisque
                                            eleifend donec pretium. Est
                                            pellentesque elit ullamcorper
                                            dignissim. Mauris ultrices eros in
                                            cursus turpis massa tincidunt dui.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    style={{ marginBlock: "2rem" }}
                                    eventKey="2"
                                >
                                    <Accordion.Header>
                                        <h3>
                                            <span className="num">3.</span>{" "}
                                            <span>
                                                Dolor sit amet consectetur
                                                adipiscing elit pellentesque?
                                            </span>
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Eleifend mi in nulla posuere
                                            sollicitudin aliquam ultrices
                                            sagittis orci. Faucibus pulvinar
                                            elementum integer enim. Sem nulla
                                            pharetra diam sit amet nisl
                                            suscipit. Rutrum tellus pellentesque
                                            eu tincidunt. Lectus urna duis
                                            convallis convallis tellus. Urna
                                            molestie at elementum eu facilisis
                                            sed odio morbi quis
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    style={{ marginBlock: "2rem" }}
                                    eventKey="3"
                                >
                                    <Accordion.Header>
                                        <h3>
                                            <span className="num">4.</span>{" "}
                                            <span>
                                                Ac odio tempor orci dapibus.
                                                Aliquam eleifend mi in nulla?
                                            </span>
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Dolor sit amet consectetur
                                            adipiscing elit pellentesque
                                            habitant morbi. Id interdum velit
                                            laoreet id donec ultrices. Fringilla
                                            phasellus faucibus scelerisque
                                            eleifend donec pretium. Est
                                            pellentesque elit ullamcorper
                                            dignissim. Mauris ultrices eros in
                                            cursus turpis massa tincidunt dui.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    style={{ marginBlock: "2rem" }}
                                    eventKey="4"
                                >
                                    <Accordion.Header>
                                        <h3>
                                            <span className="num">5.</span>{" "}
                                            <span>
                                                Tempus quam pellentesque nec nam
                                                aliquam sem et tortor consequat?
                                            </span>
                                        </h3>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Molestie a iaculis at erat
                                            pellentesque adipiscing commodo.
                                            Dignissim suspendisse in est ante
                                            in. Nunc vel risus commodo viverra
                                            maecenas accumsan. Sit amet nisl
                                            suscipit adipiscing bibendum est.
                                            Purus gravida quis blandit turpis
                                            cursus in
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqSection;
