import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    // setArticles = updates the values everytime we fetch data 

    useEffect(() => {

        const getArticles = async () => { // Use % as a space within the query
            let apiCall = "https://newsapi.org/v2/everything?q=stock%market&apiKey=7668c88c0333411da19da6e5676d2b25"
            const response = await axios.get(apiCall);
            // console.log(response);
            setArticles(response.data.articles);
        }
        getArticles();
    }, [])


    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsCard
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsList