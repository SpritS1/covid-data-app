import './Home.scss';
import BasicDataDisplay from './BasicDataDisplay';
import CountriesTable from './CountriesTable/CountriesTable';
import Header from './Header/Header';
import Map from './Map/Map';
import useFetch from '../hooks/useFetch';
import getDate from '../scripts/getDate';
import { useEffect, useState } from 'react';
import Chart from './Chart/Chart';
import Vaccination from './Vaccination/Vaccination';

const Home = () => {
    const [date, setDate] = useState(getDate(-1));
    const [selectedCountry, setSelectedCountry] = useState({countryName: 'Global', iso2: null});
    const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?&min_date=${date}&max_date=${date}`;
    const fetchOptions = {
        headers: { 'Content-Type': 'application/json' }
    }
    const {response: countriesData, error} = useFetch(url, fetchOptions);

    return ( 
        <div className="home">
            <Header 
                date={date} 
                setDate={setDate} 
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                countriesData={countriesData}/>
            {countriesData && <BasicDataDisplay countriesData={countriesData}/>}
            {countriesData && <CountriesTable countriesData={countriesData}/>}
            {countriesData && <Map countriesData={countriesData} />}
            {countriesData && <Chart date={date} selectedCountry={selectedCountry}/>}
            {countriesData && <Vaccination selectedCountry={selectedCountry}/>}
        </div>
     );
}
 
export default Home;