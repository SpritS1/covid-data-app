import Chart from 'react-google-charts';
import './Map.scss';

const Map = () => {
    
    return ( 
    <div className="map">
        <Chart
            className='map__geochart'
            chartType="GeoChart"
            data={[
                ['Country', 'Cases'],
                ['DE', 600],
                ['US', 1000],
                ['Brazil', 400],
                ['Canada', 500],
                ['FR', 600],
                ['RU', 700],
                ['PL', 500]
            ]}
            options={{
                // colorAxis: { colors: ['green', 'red'] },
                colors: '#21d4fd'
              }}
            >
        </Chart>
    </div> );
}
 
export default Map;