import './Home.scss';
import BasicDataDisplay from './BasicDataDisplay/BasicDataDisplay';
import CountriesTable from './CountriesTable/CountriesTable';
import Header from './Header/Header';
import Map from './Map/Map';
import Chart from './Chart/Chart';
import Vaccination from './Vaccination/Vaccination';
import Footer from './Footer/Footer';
import useFetch from '../hooks/useFetch';
import getDate from '../scripts/getDate';
import { useState } from 'react';
import LoadingScreen from './LoadingScreen';

const Home = () => {
    const [date, setDate] = useState(getDate(-1));
    const [selectedCountry, setSelectedCountry] = useState({countryName: 'Global', iso2: null});
    const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?&min_date=${date}&max_date=${date}`;
    const fetchOptions = {
        headers: { 'Content-Type': 'application/json' }
    }
    const {response: countriesData, isLoading ,error} = useFetch(url, fetchOptions);

    return ( 
        <div className="home">
            {!countriesData && <LoadingScreen />}
            
            {countriesData && (
                <>
                    <Header
                        date={date}
                        setDate={setDate}
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        countriesData={countriesData}
                    />
                    <BasicDataDisplay
                        countriesData={countriesData}
                        selectedCountry={selectedCountry}
                        isLoading={isLoading}
                    />
                    <CountriesTable countriesData={countriesData} isLoading={isLoading} />
                    <Map
                        countriesData={countriesData}
                        selectedCountry={selectedCountry}
                        isLoading={isLoading}
                    />
                    <Chart
                        date={date}
                        selectedCountry={selectedCountry}
                        isLoading={isLoading}
                    />
                    <Vaccination selectedCountry={selectedCountry} isLoading={isLoading} />
                    <Footer />
                </>
            )}

        </div>
     );
}
 
export default Home;