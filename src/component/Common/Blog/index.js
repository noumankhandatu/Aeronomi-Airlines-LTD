import React from 'react'
// Import BlogData Component
import {BlogData} from './BlogData'
// Import BlogCard Component
import BlogCard from './BlogCard'
// import Section Heading 
import SectionHeading from '../../Common/SectionHeading'

const BlogHome = () => {
    return (
        <>
            <section id="news_blog_area">
                <div className="container">
                    <SectionHeading heading="Recent News" para="Solving your supply chain needs from end to end, taking the
             complexity out of container shipping. We are at the forefront of developing innovation."/>
                    <div className="row">

                        {BlogData.slice(0, 3).map((data, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                                <BlogCard img={data.img} date={data.date} heading={data.heading} para={data.para}
                                          name={data.name} comment={data.comment} month={data.month} day={data.day}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogHome
