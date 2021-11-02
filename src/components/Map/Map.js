import Chart from 'react-google-charts';
import './Map.scss';

const Map = (props) => {
    const mapData = [['Country', 'Cases']];
    // const appliedCountries = [];

    props.countriesData.forEach(({country_iso2s, confirmed_daily}) => {
        if (confirmed_daily) {
            if (country_iso2s.length > 0) {
                country_iso2s.forEach(iso => {
                    const data = [iso, confirmed_daily];
                    mapData.push(data);
                });
            } else {
                const data = [country_iso2s[0], confirmed_daily];
                mapData.push(data);
            }
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