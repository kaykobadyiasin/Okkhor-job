import React, { useEffect, useState } from 'react';
import jobNewsImage from '../../assets/Images/jobNews.png';
import book1 from '../../assets/Books/book1.png';
import Rating from 'react-rating';
import { Icon } from '@iconify/react';
import SectionTitle from '../../components/SectionTitle';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {

    const [jobNews, setJobNews] = useState();

    useEffect(() => {
        fetch('jobNews.json')
            .then(res => res.json())
            .then(data => setJobNews(data))
    }, [])


    return (
        <div className="container mx-auto my-10">
            {/* Section Title */}
            <SectionTitle title={'চাকরির খবর'} />

            <div className="flex xl:flex-nowrap lg:flex-wrap flex-wrap gap-10 items-start justify-between xl:mx-0 lg:mx-5 mx-5">
                {/* Job News Section */}
                <div className="w-full flex lg:flex-nowrap flex-wrap-reverse gap-10 shadow-md rounded-md p-5">
                    <div className="w-full text-para_texts">

                        {
                            jobNews?.newsCategories?.map((category, index) => (
                                <div key={index}>
                                    <h3 className="text-xl font-semibold">{category?.newsTitle}</h3>
                                    <p className='my-3'>{category?.newsDescription}</p>
                                    <button className='border-2 border-black hover:bg-secondary hover:border-secondary transition-all duration-300 hover:text-white text-black mt-5 rounded-md py-2 px-5'>বিস্তারিত</button>
                                </div>
                            ))
                        }

                    </div>
                    <div className='lg:w-6/12 w-full'>
                        <img src={jobNewsImage} className='w-full' alt="Job News" />
                    </div>
                </div>

                {/* Book Section */}
                <div className="xl:w-4/12 lg:w-full md:w-full w-full ">
                    <div className='flex xl:flex-wrap lg:flex-nowrap md:flex-nowrap flex-wrap mx-auto lg:overflow-visible overflow-x-scroll gap-5'>
                        <div className='relative product cursor-pointer shadow-md p-5 rounded-md  hover:text-white hover:bg-gradient-to-t from-[#1d1c3a] from-10% to-transparent to-80% transition-all duration-300 ease-in-out'>
                            <div className='p-5'>
                                <img src={book1} className="w-full h-auto object-contain max-w-full max-h-60" alt="Book 1" />
                            </div>
                            <h3 className="text-xl font-medium">৪৪তম বিসিএস প্রিলিমিনারি</h3>
                            <div className='flex items-center gap-3'>
                                <Rating
                                    placeholderRating={4.5}
                                    readonly
                                    className='text-2xl text-[#FFD111]'
                                    emptySymbol={<Icon icon="mdi:star-outline" />}
                                    placeholderSymbol={<Icon icon="ic:sharp-star" />}
                                    fullSymbol={<Icon icon="ic:baseline-star-half" />}
                                />
                                <span className='text-para_texts product_review'>(৪.৫ রিভিউ)</span>
                            </div>
                            <div className='flex justify-between items-center gap-5'>
                                <div className='flex gap-3 items-center'>
                                    <del className='text-para_texts product_oldPrice'>৫৪০৳</del>
                                    <span className='text-xl'>২৭০৳</span>
                                </div>
                                <button className='product_btn hover:bg-secondary font-semibold  border border-black hover:border-primary text-black mt-5 rounded-md py-2 px-5 transition-all duration-300 ease-in-out'>Add to Cart</button>
                            </div>
                            <div className='flex gap-5 flex-col absolute right-0 top-40'>
                                <Link to=''><Icon icon="basil:shopping-cart-solid" className=' text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl' /></Link>
                                <Link to=''><Icon icon="mdi:heart" className=' text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl' /></Link>
                            </div>
                        </div>
                        <div className='relative product cursor-pointer shadow-md p-5 rounded-md  hover:text-white hover:bg-gradient-to-t from-[#1d1c3a] from-10% to-transparent to-80% transition-all duration-300 ease-in-out'>
                            <div className='p-5'>
                                <img src={book1} className="w-full h-auto object-contain max-w-full max-h-60" alt="Book 1" />
                            </div>
                            <h3 className="text-xl font-medium">৪৪তম বিসিএস প্রিলিমিনারি</h3>
                            <div className='flex items-center gap-3'>
                                <Rating
                                    placeholderRating={4.5}
                                    readonly
                                    className='text-2xl text-[#FFD111]'
                                    emptySymbol={<Icon icon="mdi:star-outline" />}
                                    placeholderSymbol={<Icon icon="ic:sharp-star" />}
                                    fullSymbol={<Icon icon="ic:baseline-star-half" />}
                                />
                                <span className='text-para_texts product_review'>(৪.৫ রিভিউ)</span>
                            </div>
                            <div className='flex justify-between items-center gap-5'>
                                <div className='flex gap-3 items-center'>
                                    <del className='text-para_texts product_oldPrice'>৫৪০৳</del>
                                    <span className='text-xl'>২৭০৳</span>
                                </div>
                                <button className='product_btn hover:bg-secondary font-semibold  border border-black hover:border-primary text-black mt-5 rounded-md py-2 px-5 transition-all duration-300 ease-in-out'>Add to Cart</button>
                            </div>
                            <div className='flex gap-5 flex-col absolute right-0 top-40'>
                                <Link to=''><Icon icon="basil:shopping-cart-solid" className=' text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl' /></Link>
                                <Link to=''><Icon icon="mdi:heart" className=' text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl' /></Link>
                            </div>
                        </div>
                        <div className='relative product cursor-pointer shadow-md p-5 rounded-md  hover:text-white hover:bg-gradient-to-t from-[#1d1c3a] from-10% to-transparent to-80% transition-all duration-300 ease-in-out'>
                            <div className='p-5'>
                                <img src={book1} className="w-full h-auto object-contain max-w-full max-h-60" alt="Book 1" />
                            </div>
                            <h3 className="text-xl font-medium">৪৪তম বিসিএস প্রিলিমিনারি</h3>
                            <div className='flex items-center gap-3'>
                                <Rating
                                    placeholderRating={4.5}
                                    readonly
                                    className='text-2xl text-[#FFD111]'
                                    emptySymbol={<Icon icon="mdi:star-outline" />}
                                    placeholderSymbol={<Icon icon="ic:sharp-star" />}
                                    fullSymbol={<Icon icon="ic:baseline-star-half" />}
                                />
                                <span className='text-para_texts product_review'>(৪.৫ রিভিউ)</span>
                            </div>
                            <div className='flex justify-between items-center gap-5'>
                                <div className='flex gap-3 items-center'>
                                    <del className='text-para_texts product_oldPrice'>৫৪০৳</del>
                                    <span className='text-xl'>২৭০৳</span>
                                </div>
                                <button className='product_btn hover:bg-secondary font-semibold  border border-black hover:border-primary text-black mt-5 rounded-md py-2 px-5 transition-all duration-300 ease-in-out'>Add to Cart</button>
                            </div>
                            <div className='flex gap-5 flex-col absolute right-0 top-40'>
                                <Link to=''><Icon icon="basil:shopping-cart-solid" className=' text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl' /></Link>
                                <Link to=''><Icon icon="mdi:heart" className=' text-3xl hover:bg-secondary transition-all duration-300 border border-white border-r-0 hover:border-secondary text-white pl-2 pr-5 py-2 w-full h-full rounded-l-xl' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
