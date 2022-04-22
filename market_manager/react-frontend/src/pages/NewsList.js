import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    // setArticles = updates the values everytime we fetch data 

    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: { q: 'stocks', lang: 'en', sort_by: 'relevancy', page: '1' },
        headers: {
            'x-api-key': 'wXJi0l1TB50aRZOuaffZga7e4kMIK7GfhPNzsUy4Yxg'
        }
    };

    axios.request(options).then(function (response) {
        // console.log(response.data);
        setArticles(response.data.articles)
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div>
            {articles.map(article => {
                // console.log(article)
                return (
                    <NewsCard
                        title={article.title}
                        description={article.summary}
                        url={article.link}
                        urlToImage={article.media}
                    />
                )
            })}
        </div>
    )
}

export default NewsList