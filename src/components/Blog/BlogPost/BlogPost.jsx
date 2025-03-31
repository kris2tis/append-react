const BlogPost = ({ postImg, category, title, authorImg, author, dateTime }) => {
    return (
        <>
            <div className="col-lg-4">
                <article>
                    <div className="post-img">
                        <img src={postImg} alt={title} className="img-fluid" />
                    </div>

                    <p className="post-category">{category}</p>

                    <h2 className="title">
                        <a href="blog-details.html">{title}</a>
                    </h2>

                    <div className="d-flex align-items-center">
                        <img
                            src={authorImg}
                            alt={author}
                            className="img-fluid post-author-img flex-shrink-0"
                        />
                        <div className="post-meta">
                            <p className="post-author">{author}</p>
                            <p className="post-date">
                                <time>{dateTime}</time>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default BlogPost