import { useState, useEffect } from 'react';
import './Home.scss';
import Global from './Global';
import CountriesTable from './CountriesTable/CountriesTable';

const Home = () => {
    const [covidData, setCovidData] = useState('');

    const dataURL = 'https://api.covid19api.com/summary';

    const fetchData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCovidData(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData(dataURL);
    }, [])

    return ( 
        <div className="home">
            <h1 className="home__header">COVID-19 Data</h1>
            <Global globalData={covidData.Global}/>
            <CountriesTable countriesData={covidData.Countries}/>
        </div>
     );
}
 
export default Home;