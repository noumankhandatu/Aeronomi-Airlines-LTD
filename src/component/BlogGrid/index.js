import React from 'react'
// Import BlogData Component
import {BlogData} from '../Common/Blog/BlogData'
// Import BlogCard Component
import BlogCard from '../Common/Blog/BlogCard'
// Import Pagination Component
import Pagination from '../Common/Pagination'

const BlogLayout = () => {
    return (
        <>
            <section id="blog_area_page">
                <div className="container">
 
                    <div className="row">

                        {BlogData.map((data, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                                <BlogCard img={data.img} date={data.date} heading={data.heading} para={data.para}
                                          name={data.name} comment={data.comment} month={data.month} day={data.day}/>
                            </div>
                        ))}

                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogLayout
