import React from 'react';

const NewsCard = ({ title, description, url, urlToImage }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card ">
                <img className="card-img-top" src={urlToImage} alt="Card image cap" />
                <div className="card-body">
                    <h3><a href={url}>{title}</a></h3>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    )
}

export default NewsCard