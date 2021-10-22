import './Global.scss';

const Global = ({ globalData }) => {
    return ( 
        <div className="global">
            <h2 className="global__header">Global data</h2>

            <div className="global__data">
                <div className="global__data-left">
                    <span className="global__data-name">Today cases</span>
                    <p className="global__data-value">{globalData && globalData.NewConfirmed} <span className='global__data-new-value plus'>+2412</span></p>
                </div>
                <div className="global__data-icon-box">
                    <i className='global__data-icon fas fa-virus'></i>
                </div>
            </div>
            <div className="global__data">
                <div className="global__data-left">
                    <span className="global__data-name">Today Deaths</span>
                    <p className="global__data-value">{globalData && globalData.NewDeaths}  <span className='global__data-new-value minus'>-10</span></p>
                </div>
                <div className="global__data-icon-box">
                    <i className='global__data-icon fas fa-cross'></i>
                </div>
            </div>
            <div className="global__data">
                <div className="global__data-left">
                    <span className="global__data-name">Today Recovery</span>
                    <p className="global__data-value">{globalData && globalData.NewRecovered}  <span className='global__data-new-value plus'>+1231</span></p>
                </div>
                <div className="global__data-icon-box">
                    <i className='global__data-icon fas fa-star-of-life'></i>
                </div>
            </div>
        </div>
     );
}
 
export default Global;