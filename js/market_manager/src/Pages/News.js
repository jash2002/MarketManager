import React, { useState } from 'react'
import NewsCard from './NewsCard';
import NewsList from './NewsList';

const News = () => {
    const [selects, setSelects] = useState();
    return (

        <div>
            <h1 className="d-flex justify-content-center my-3">Latest News about the Stock Market</h1>
            
            {/* In future I want to try have a select menu that changes the API call. Need to work
                more on it - Simon */}
            {/* <select value={selects} onChange={e => setSelects(e.target.value)}> */}
            {/* <select onChange={e => setSelects(e.target.value)}>

                <option value="gb" >UK</option>
                <option value="us" >USA</option>
                <option value="de" >Germany</option>
                <option value="fr" >France</option>
                <button>Csdsdsd</button>
            </select> */}

            

            <NewsList/>

        </div>

    )
}

export default News