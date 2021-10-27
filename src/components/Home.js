import { useState, useEffect } from 'react';
import './Home.scss';
import Global from './Global';
import CountriesTable from './CountriesTable/CountriesTable';
import Header from './Header/Header';
import Map from './Map/Map';

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
            <Header></Header>
            <Global globalData={covidData.Global}/>
            <Map></Map>
            <CountriesTable countriesData={covidData.Countries}/>
        </div>
     );
}
 
export default Home;