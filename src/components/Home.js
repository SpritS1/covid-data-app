// import { useState, useEffect } from 'react';
import './Home.scss';
import Global from './Global';
import CountriesTable from './CountriesTable/CountriesTable';
import Header from './Header/Header';
import Map from './Map/Map';
import useFetch from '../hooks/useFetch';
import getDate from '../scripts/getDate';
import { useState } from 'react';

const Home = () => {
    const [date, setDate] = useState(getDate(-1));
    const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?&min_date=${date}&max_date=${date}`;
    const {response: countriesData, error} = useFetch(url, {});

    return ( 
        <div className="home">
            <Header></Header>
            {countriesData && <Global countriesData={countriesData}/>}
            {countriesData && <Map countriesData={countriesData} />}
            {countriesData && <CountriesTable countriesData={countriesData}/>}
        </div>
     );
}
 
export default Home;