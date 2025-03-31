import {
    Header,
    postDetails,
    Footer,
    BlogPagination,
    BlogPost,
    Layout,
} from "./index";

import "./Blog.css";
const Blog = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <div className="page-title" data-aos="fade">
                    <div className="heading">
                        <div className="container">
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-lg-8">
                                    <h1>Blog</h1>
                                    <p className="mb-0">
                                        Odio et unde deleniti. Deserunt numquam
                                        exercitationem. Officiis quo odio sint
                                        voluptas consequatur ut a odio
                                        voluptatem. Sit dolorum debitis
                                        veritatis natus dolores. Quasi ratione
                                        sint. Sit quaerat ipsum dolorem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="breadcrumbs">
                        <div className="container">
                            <ol>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="current">Blog</li>
                            </ol>
                        </div>
                    </nav>
                </div>

                <section id="blog-posts" className="blog-posts section">
                    <div className="container">
                        <div className="row gy-4">
                            {postDetails.map((item) => {
                                return <BlogPost key={item.id} {...item} />;
                            })}
                        </div>
                    </div>
                </section>
                <BlogPagination />
            </main>
            <Footer />
            <Layout />
        </>
    );
};

export default Blog;
