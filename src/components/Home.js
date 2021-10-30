// import { useState, useEffect } from 'react';
import './Home.scss';
import Global from './Global';
import CountriesTable from './CountriesTable/CountriesTable';
import Header from './Header/Header';
import Map from './Map/Map';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?hide_fields=_id, country_code, country_iso3, loc, state, uid, date, recovered, recovered_daily&min_date=2021-10-29&max_date=2021-10-29';
    const {response: countriesData, error} = useFetch(url, {});

    return ( 
        <div className="home">
            <Header></Header>
            {/* <Global globalData={covidData.Global}/> */}
            <Map></Map>
            <CountriesTable countriesData={countriesData}/>
        </div>
     );
}
 
export default Home;