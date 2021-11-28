import Chart from 'react-google-charts';
import './Map.scss';

const Map = ({countriesData, selectedCountry, isLoading}) => {
    const mapData = [['Country', 'Cases']];

    countriesData.forEach(({country_iso2s, confirmed_daily}) => {
        if (confirmed_daily) {
            if (country_iso2s.length > 0) {
                country_iso2s.forEach(iso => {
                    const data = [iso, confirmed_daily];
                    if (confirmed_daily < 0) data[1] = 0;
                    mapData.push(data);
                });
            } else {
                const data = [country_iso2s[0], confirmed_daily];
                mapData.push(data);
            }
        }
    });

    return ( 
    <div className={`map ${isLoading ? 'isLoading' : ''}`}>
        <Chart
            className={`map__geochart`}
            chartType="GeoChart"
            data={mapData}
            options={{
                region: selectedCountry.iso2,
                colorAxis: {colors: ['#ECFCFF' , '#1EBFE3', '#00A6DE'],},
            }}
            >
        </Chart>
    </div> );
}
 
export default Map;