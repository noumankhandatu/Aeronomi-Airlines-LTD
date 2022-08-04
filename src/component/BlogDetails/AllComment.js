import React from 'react'
// import Blogger Img
import Blogger1 from '../../assets/img/blog/bloger_1.jpg'
import Blogger2 from '../../assets/img/blog/bloger_2.jpg'
import Blogger3 from '../../assets/img/blog/bloger_3.jpg'
import Blogger4 from '../../assets/img/blog/bloger_4.jpg'

const AllComment = () => {
    return (
        <>
            <div className="blog_single_item">
                <div className="blog_sidebar_heading">
                    <h3>All Comments</h3>
                </div>
                <div className="all_comment_wrappers">
                    <div className="comment_item">
                        <img src={Blogger1} alt="Blogger_Img"/>
                        <div className="comments_text">
                            <div className="comment_heading_flex">
                                <h5>Saiful Kazi</h5>
                                <a href="#!"><i className="fas fa-share"></i> Reply</a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Praesent vehicula mauris ac facilisis congue. Fusce sem enim,
                                rhoncus volutpat condimentum ac.</p>
                        </div>
                    </div>
                    <div className="comment_item replay_comment">
                        <img src={Blogger2} alt="Blogger_Img"/>
                        <div className="comments_text">
                            <div className="comment_heading_flex">
                                <h5>Suddipta Dor</h5>
                                <a href="#!"><i className="fas fa-share"></i> Reply</a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Praesent vehicula mauris ac facilisis congue. Fusce sem enim,
                                rhoncus volutpat condimentum ac.</p>
                        </div>
                    </div>
                    <div className="comment_item">
                        <img src={Blogger3} alt="Blogger_Img"/>
                        <div className="comments_text">
                            <div className="comment_heading_flex">
                                <h5>Natasha Lawes</h5>
                                <a href="#!"><i className="fas fa-share"></i> Reply</a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Praesent vehicula mauris ac facilisis congue. Fusce sem enim,
                                rhoncus volutpat condimentum ac.</p>
                        </div>
                    </div>
                    <div className="comment_item replay_comment">
                        <img src={Blogger4} alt="Blogger_Img"/>
                        <div className="comments_text">
                            <div className="comment_heading_flex">
                                <h5>Hadayet Ali</h5>
                                <a href="#!"><i className="fas fa-share"></i> Reply</a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Praesent vehicula mauris ac facilisis congue. Fusce sem enim,
                                rhoncus volutpat condimentum ac.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllComment
