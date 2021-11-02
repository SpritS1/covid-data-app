import Chart from 'react-google-charts';
import './Map.scss';

const Map = (props) => {
    const mapData = [['Country', 'Cases']];
    const appliedCountries = [];

    props.countriesData.forEach(({country_iso2, confirmed_daily}) => {
        if (confirmed_daily && !appliedCountries.includes(country_iso2)) {
            const data = [country_iso2, confirmed_daily];
            appliedCountries.push(country_iso2);
            mapData.push(data);
        } else if (confirmed_daily && appliedCountries.includes(country_iso2)) {
            const countryIndex = mapData.findIndex((element) => element[0] === country_iso2);
            mapData[countryIndex][1] += confirmed_daily;
        }
    });

    return ( 
    <div className="map">
        <Chart
            className='map__geochart'
            chartType="GeoChart"
            data={mapData}
            options={{
                colors: 'red',
              }}
            >
        </Chart>
    </div> );
}
 
export default Map;