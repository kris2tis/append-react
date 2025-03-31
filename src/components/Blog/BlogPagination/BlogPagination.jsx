import "./BlogPagination.css";
const BlogPagination = () => {
    return (
        <>
            <section id="blog-pagination" className="blog-pagination section">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="bi bi-chevron-left"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#" className="active">
                                    2
                                </a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>...</li>
                            <li>
                                <a href="#">10</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bi bi-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPagination