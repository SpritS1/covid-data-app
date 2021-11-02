import { useMemo } from 'react/cjs/react.development';
import './Global.scss';

const Global = ({ countriesData }) => {
    const globalData = useMemo(() => {
        const globalData = {
            confirmed: 0,
            confirmed_daily: 0,
            deaths: 0,
            deaths_daily: 0
        };
        console.log(countriesData)
        for (const data of countriesData) {
            globalData.confirmed += data.confirmed;
            globalData.confirmed_daily += data.confirmed_daily;
            globalData.deaths += data.deaths;
            globalData.deaths_daily += data.deaths_daily;
        }

        return globalData;
    }, [countriesData])
    
    return ( 
        <div className="global">
            <h2 className="global__header">Global Statistics</h2>

            <div className="global__data">
                <div className="global__data-left">
                    <span className="global__data-name">Today cases</span>
                    <p className="global__data-value">{globalData && globalData.confirmed_daily.toLocaleString()} <span className='global__data-new-value plus'>+2412</span></p>
                </div>
                <div className="global__data-icon-box">
                    <i className='global__data-icon fas fa-virus'></i>
                </div>
            </div>
            <div className="global__data">
                <div className="global__data-left">
                    <span className="global__data-name">Today Deaths</span>
                    <p className="global__data-value">{globalData && globalData.deaths_daily.toLocaleString()}  <span className='global__data-new-value minus'>-10</span></p>
                </div>
                <div className="global__data-icon-box">
                    <i className='global__data-icon fas fa-cross'></i>
                </div>
            </div>
            {/* <div className="global__data">
                <div className="global__data-left">
                    <span className="global__data-name">Today Recovery</span>
                    <p className="global__data-value">{globalData && globalData.NewRecovered.toLocaleString()}  <span className='global__data-new-value plus'>+1231</span></p>
                </div>
                <div className="global__data-icon-box">
                    <i className='global__data-icon fas fa-star-of-life'></i>
                </div>
            </div> */}
        </div>
     );
}
 
export default Global;