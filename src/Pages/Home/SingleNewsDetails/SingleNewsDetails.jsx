import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import singleImage from '../../../assets/Images/jobNews.png'

const SingleNewsDetails = () => {
    const { _id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        // Fetch the news data from the JSON file
        fetch('/public/jobNews.json')
            .then((res) => res.json())
            .then((data) => setNews(data))
            .catch((error) => {
                console.error("Error fetching news:", error);
            });
    }, []);

    const findNews = news && news.newsCategories && news.newsCategories.length > 0
        ? news.newsCategories.find((newsItem) => newsItem._id === parseInt(_id, newsItem.length))
        : null;

    return (
        <div className="container mx-auto py-10">
            {findNews ? (
                <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap gap-10 mx-5">
                    <div className="lg:w-6/12 md:w-full">
                        <img src={singleImage} className="w-full" alt="" />
                    </div>
                    <div className="w-full">
                        <h2 className="text-3xl mb-3">{findNews.newsTitle}</h2>
                        <p>{findNews.newsDescription}</p>
                    </div>
                </div>
            ) : (
                <p>News not found</p>
            )}
        </div>
    );
};

export default SingleNewsDetails;
