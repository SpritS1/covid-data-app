import './Home.scss';
import BasicDataDisplay from 'components/BasicDataDisplay/BasicDataDisplay';
import CountriesTable from 'components/CountriesTable/CountriesTable';
import Header from 'components/Header/Header';
import Map from 'components/Map/Map';
import Chart from 'components/Chart/Chart';
import Vaccination from 'components/Vaccination/Vaccination';
import Footer from 'components/Footer/Footer';
import LoadingScreen from 'components/Other/LoadingScreen';

import useFetch from 'hooks/useFetch';

import useLocalStorage from 'hooks/useLocalStorage';
import { useSelector } from 'react-redux';

const Home = () => {
    const date = useSelector((state) => state.date.date);

    // States
    const [selectedCountry, setSelectedCountry] = useLocalStorage(
        'selectedCountry',
        {
            countryName: 'Global',
            iso2: null,
        },
    );

    // Fetch
    const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?&min_date=${date}&max_date=${date}`;
    const fetchOptions = {
        headers: { 'Content-Type': 'application/json' },
    };
    const {
        response: countriesData,
        isLoading,
        error,
    } = useFetch(url, fetchOptions);

    return (
        <div className="home">
            {!countriesData && <LoadingScreen />}

            {countriesData && (
                <>
                    <Header
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        countriesData={countriesData}
                    />
                    <BasicDataDisplay
                        countriesData={countriesData}
                        selectedCountry={selectedCountry}
                        isLoading={isLoading}
                    />
                    <CountriesTable
                        countriesData={countriesData}
                        isLoading={isLoading}
                    />
                    <Map
                        countriesData={countriesData}
                        selectedCountry={selectedCountry}
                        isLoading={isLoading}
                    />
                    <Chart
                        selectedCountry={selectedCountry}
                        isLoading={isLoading}
                    />
                    <Vaccination
                        selectedCountry={selectedCountry}
                        isLoading={isLoading}
                    />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;
