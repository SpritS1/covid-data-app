import './ChartOptions.scss';
import ChartSelect from './ChartSelect';
import ChartButton from './ChartButton';

const ChartOptions = ({
    chartRange,
    setChartRange,
    chartMode,
    setChartMode,
}) => {
    const chartRangeOptions = [
        { value: 7, name: '7 days' },
        { value: 14, name: '14 days' },
        { value: 30, name: '30 days' },
    ];

    return (
        <div className="chart-options">
            <ChartSelect
                options={chartRangeOptions}
                currentOption={`${chartRange} days`}
                setCurrentOption={setChartRange}
            />
            <ChartButton
                type="cases"
                optionName="New Cases"
                chartMode={chartMode}
                setChartMode={setChartMode}
            />
            <ChartButton
                type="deaths"
                optionName="New Deaths"
                chartMode={chartMode}
                setChartMode={setChartMode}
            />
        </div>
    );
};

export default ChartOptions;
