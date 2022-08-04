import React from 'react'
// Import Gallery Img
import img1 from '../../assets/img/gallery/gallery-1.jpg'
import img2 from '../../assets/img/gallery/gallery-2.jpg'
import img3 from '../../assets/img/gallery/gallery-3.jpg'
import img4 from '../../assets/img/gallery/gallery-4.jpg'
import img5 from '../../assets/img/gallery/gallery-5.jpg'
import img6 from '../../assets/img/gallery/gallery-6.jpg'
// Import ReactFancyBox
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


const GalleryData = [
    {
        img: img1
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img4
    },
    {
        img: img5
    },
    {
        img: img6
    },
]

const GalleryImages = () => {
    return (
        <>
            <section id="gallery_area">
                <div className="container">
                    <div className="row">
                        {GalleryData.map((data, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                                <div className="single-gallery">
                                    <ReactFancyBox
                                        thumbnail={data.img}
                                        image={data.img}/>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default GalleryImages
