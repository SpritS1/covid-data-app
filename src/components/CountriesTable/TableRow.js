import './TableRow.scss';

const TableRow = ({countryData}) => {
    const iso = countryData.country_iso2s[0];

    return ( 
        <tr className='table-row'>
            <td className='table-row__td'>
                <div className="table-row__td-wrapper">
                { iso && countryData.country !== 'United Kingdom' &&
                    <img
                        src={`https://flagcdn.com/24x18/${iso.toString().toLowerCase()}.png`}
                        alt={countryData.country + ' flag'}>
                    </img>
                }
                {/* UK ISO2s are broken :c */}
                { countryData.country === 'United Kingdom' && 
                    <img
                        src={`https://flagcdn.com/24x18/gb.png`}
                        alt={countryData.country + ' flag'}>
                    </img>
                }
                </div>
            </td>
            <td className='table-row__td'>
                <div className="table-row__td-wrapper--first">
                    <span className='table-row__td-name--first'>Country:</span>
                    <span className='table-row__td-value--first'>{ countryData.country }</span>
                </div>
            </td>
            <td className='table-row__td'>
                <div className="table-row__td-wrapper">
                    <span className='table-row__td-name'>New Cases:</span>
                    <span className='table-row__td-value'>{countryData.confirmed_daily.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-row__td'>
                <div className="table-row__td-wrapper">
                    <span className='table-row__td-name'>Total Cases:</span>
                    <span className='table-row__td-value'>{countryData.confirmed.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-row__td'>
                <div className="table-row__td-wrapper">
                    <span className='table-row__td-name'>New Deaths:</span>
                    <span className='table-row__td-value'>{countryData.deaths_daily.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-row__td'>
                <div className="table-row__td-wrapper">
                    <span className='table-row__td-name'>Total Deaths:</span>
                    <span className='table-row__td-value'>{countryData.deaths.toLocaleString() }</span>
                </div>
            </td>
        </tr>
     );
}
 
export default TableRow;