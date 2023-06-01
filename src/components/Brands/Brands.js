import React from 'react';
import brandImg1 from '../../images/google.jpg';
import brandImg2 from '../../images/harvard.jpg';
import brandImg3 from '../../images/nasa.jpg';
import brandImg4 from '../../images/kipp.jpg';
import brandImg5 from '../../images/airbnb.jpg';
import brandImg6 from '../../images/berkeley.jpg';
import brandImg7 from '../../images/cambridge.jpg';
import brandImg8 from '../../images/ck.jpg';
import brandImg9 from '../../images/ea.jpg';
import brandImg10 from '../../images/disney.jpg';
import brandImg12 from '../../images/nat-geo.jpg';
import brandImg14 from '../../images/peace-corp.jpg';
import brandImg15 from '../../images/salvation-army.jpg';
import brandImg16 from '../../images/target.jpg';
import brandImg18 from '../../images/underarmour.jpg';
import brandImg19 from '../../images/yelp.jpg';



const Brands = () => {
    const brandImages = [
        brandImg1, brandImg2, brandImg3, brandImg4, brandImg5, brandImg6, brandImg7, brandImg8, brandImg9, brandImg10, brandImg12,brandImg14,brandImg15,brandImg16,brandImg18,brandImg19
    ];

    return (
        <div  className='pb-16 mb-10'>
            <h2  className='text-5xl  font-bold  text-center text-gray-900'>Trusted by Big Names</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center p-16'>
            {
                brandImages.map(brandImage => <img data-aos="zoom-in-up" className='m-2' width='200' height='200' key={brandImage} src={brandImage} alt="brand"></img>)
            }
            </div>
        </div>
    )
}

export default Brands;