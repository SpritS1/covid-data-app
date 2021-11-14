import './ChartButton.scss';

const ChartButton = ({ type, optionName, chartMode ,setChartMode}) => {
    return ( 
        <button 
            className={`chart-button${type ? '--' + type : ''} ${chartMode === type ? 'active' : ''}`}
            onClick={() => setChartMode(type)}    
        >
            {optionName}
        </button>
     );
}
 
export default ChartButton;