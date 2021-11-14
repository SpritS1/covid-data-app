import './ChartOptions.scss';
import ChartSelect from './ChartSelect';

const ChartOptions = ({ chartRange, setChartRange }) => {
    const chartRangeOptions = [{ value: 7, name: '7 days' },{ value: 14, name: '14 days' },{ value: 30, name: '30 days' }];

    return ( 
        <div className="chart-options">
            <ChartSelect options={chartRangeOptions} currentOption={`${chartRange} days`} setCurrentOption={setChartRange} />
        </div>
     );
}
 
export default ChartOptions;