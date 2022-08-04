import React from 'react'
import CommonBanner from '../component/Common/Banner'
import BlogWithSidebarArea from '../component/BlogWithSidebar'
import OurPartner from '../component/Common/OurPartner'

const BlogWithSidebar = () => {
    return (
        <>
            <CommonBanner heading="Blog With Sidebar" page="Blog With Sidebar"/>
            <BlogWithSidebarArea/>
            <OurPartner/>
        </>
    )
}

export default BlogWithSidebar
