import React from 'react'
// Import All Blog Details Components 
import BlogSidebar from '../Common/BlogSidebar'
import AllComment from '../BlogDetails/AllComment'
import ReplayForm from '../BlogDetails/ReplayForm'
// Import Blog Details Img
import DetailsImg from '../../assets/img/blog/blog_singal1.jpg'

const BlogDetailsArea = () => {
    return (
        <>
            <section id="blog_area_sidebar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="single_blog_wrappers">
                                <div className="blog_single_item">
                                    <div className="blog_single_text_area">
                                        <div className="blog_single_top_img">
                                            <img src={DetailsImg} alt="Details_Img"/>
                                        </div>
                                        <div className="blog_single_viewer_area ">
                                            <ul>
                                                <li><a href="#!"><i className="far fa-user"></i> Hadayet Ali</a></li>
                                                <li><a href="#!"><i className="far fa-clock"></i> March 22, 2018</a>
                                                </li>
                                                <li><a href="#!"><i className="far fa-comment"></i> 4</a></li>
                                            </ul>
                                        </div>
                                        <div className="blog_single_heading">
                                            <h3>It is a long established fact that a reader will be.</h3>
                                        </div>
                                        <div className="blog_single_text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                                                vehicula mauris ac facilisis congue.
                                                Fusce sem enim, rhoncus volutpat condimentum ac, placerat semper ligula.
                                                Suspendisse in viverra justo,
                                                eu placerat urna. Vestibulum blandit diam suscipit nibh mattis
                                                ullamcorper. Nullam a condimentum nulla,
                                                ut facilisis enim. Aliquam sagittis ipsum ex, sed luctus augue venenatis
                                                ut. Fusce at rutrum tellus,
                                                ac elementum neque. In nec velit orci. Etiam purus felis, pellentesque
                                                sit amet tincidunt at, iaculis
                                                quis erat. Morbi imperdiet sodales sapien nec rhoncus.</p>
                                            <p>Donec placerat mi et libero iaculis, id maximus est vestibulum. Etiam
                                                augue augue, auctor at ornare
                                                eget, porta ac nisl. Aliquam et mattis dolor, et aliquet ligula. Sed
                                                ultricies posuere magna elementum
                                                laoreet. Suspendisse elementum sagittis nisl, id pellentesque purus
                                                auctor finibus. Donec elementum quam
                                                est, a condimentum diam tempor ac. Sed quis magna lobortis, pulvinar est
                                                at, commodo mauris. Nunc in mollis
                                                erat. Integer aliquet orci non auctor pretium. Pellentesque eu nisl
                                                augue. Curabitur vitae est ut sem
                                                luctus tristique. Suspendisse euismod sapien facilisis tellus aliquam
                                                pellentesque.</p>
                                            <blockquote>
                                                Mistaken idea of denouncing pleasure and praising pain was born and I
                                                will give you a complete
                                                account of the system, and expound the actual teachings of the great
                                                explorer of the truth,
                                                the master-builder of human happiness.
                                            </blockquote>
                                        </div>
                                        <div className="blog_single_tags_bottom">
                                            <ul>
                                                <li><i className="fas fa-tags"></i> Tags:</li>
                                                <li><a href="!#">Trucks</a></li>
                                                <li><a href="!#">Transport</a></li>
                                                <li><a href="!#">Warehouse</a></li>
                                                <li><a href="!#">Freight</a></li>
                                                <li><a href="!#">Cargo</a></li>
                                            </ul>
                                            <ul className="shared_post">
                                                <li><a href="#!"><i className="fas fa-share-alt"></i>Share The Post</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <AllComment/>
                                <ReplayForm/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <BlogSidebar/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetailsArea;

