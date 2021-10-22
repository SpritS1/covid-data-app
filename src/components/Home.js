import './Home.scss';
import Global from './Global';
import CountriesTable from './CountriesTable/CountriesTable';

const Home = () => {
    return ( 
        <div className="home">
            <h1 className="home__header">COVID-19 Data</h1>
            <Global/>
            <CountriesTable />
        </div>
     );
}
 
export default Home;