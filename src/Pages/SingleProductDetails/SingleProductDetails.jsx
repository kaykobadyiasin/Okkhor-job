import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import image from '../../assets/Books/book1.png';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from "@iconify/react";


const SingleProductDetails = () => {
    const { _id } = useParams();
    const [products, setProducts] = useState(null); // Initialize products as null

    useEffect(() => {
        fetch('../../../public/products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);


    const findProduct = products ? products.find((product) => product._id === _id) : null;

    const images = [
        {
            original: `${image}`,
            thumbnail: `${image}`,
        },
        {
            original: `${image}`,
            thumbnail: `${image}`,
        },
        {
            original: `${image}`,
            thumbnail: `${image}`,
        },
        {
            original: `${image}`,
            thumbnail: `${image}`,
        },
    ];

    return (
        <div>
            {findProduct ? (
                <>
                    <div>
                        <div className="container mx-auto py-20 px-4 lg:px-0">
                            <div className="lg:flex justify-center relative">
                                <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-5 lg:items-start gap-8 lg:gap-10 ">
                                    <div className="w-full lg:w-4/12 md:w-10/12">
                                        <ImageGallery
                                            showPlayButton={false}
                                            slideOnThumbnailOver={true}
                                            showFullscreenButton={false}
                                            slideDuration={400}
                                            items={images}
                                        />
                                    </div>
                                    <div className="w-full lg:w-6/12 md:w-11/12 space-y-2">
                                        <h2 className="lg:text-3xl md:text-4xl text-3xl font-semibold">{findProduct.Title}</h2>
                                        <div className="flex flex-wrap lg:gap-5 md:gap-5 gap-3 items-center">
                                            <p className="text-xl font-semibold"><del className="text-[#757575]">{findProduct.oldPrice}৳</del></p>
                                            <p className="text-2xl font-semibold"><ins className="no-underline">{findProduct.currentPrice}৳</ins></p>
                                            <h4 className="bg-[#DE2121] px-3 py-1 text-sm text-white font-semibold text-center">50% Off</h4>
                                        </div>
                                        <hr />
                                        <div className="space-y-4">
                                            <p className="py-5">{findProduct.productDescription}</p>
                                            <div className="flex gap-5">
                                                <button className="lg:w-full border rounded-none border-black bg-white lg:px-8 px-2 md:px-8 py-3 flex items-center gap-3 text-xl"><Icon className="text-2xl  font-bold" icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" /> Wish List</button>
                                                <button className="border-black border lg:px-8 px-4 lg:py-0 md:py-0 py-3 lg:w-full md:w-auto w-full text-xl font-semibold">Add to Cart</button>
                                            </div>
                                            <div>
                                                <Link to=''>
                                                    <button className="border-black border w-full px-8 text-xl font-semibold py-3 bg-[#0C4E67] text-white">Purchase</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default SingleProductDetails;
