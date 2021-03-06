import { useMemo } from 'react';
import './BasicDataDisplay.scss';

const BasicDataDisplay = ({ countriesData, selectedCountry, isLoading }) => {
    const globalData = useMemo(() => {
        const globalData = {
            confirmed: 0,
            confirmed_daily: 0,
            deaths: 0,
            deaths_daily: 0,
        };

        for (const data of countriesData) {
            globalData.confirmed += data.confirmed;
            globalData.confirmed_daily += data.confirmed_daily;
            globalData.deaths += data.deaths;
            globalData.deaths_daily += data.deaths_daily;
        }

        return globalData;
    }, [countriesData]);

    const getSelectedCountryFromCountriesData = () => {
        for (const country of countriesData) {
            if (country.country === selectedCountry.countryName) return country;
        }
        return null;
    };

    const selectedCountryData = getSelectedCountryFromCountriesData();

    return (
        <div className="basic-data-display">
            <h2
                className={`basic-data-display__header ${
                    isLoading ? 'isLoading' : ''
                }`}
            >
                {selectedCountry.countryName} Statistics
            </h2>

            <div
                className={`basic-data-display__data ${
                    isLoading ? 'isLoading' : ''
                }`}
            >
                <div className="basic-data-display__data-left">
                    <span className="basic-data-display__data-name">
                        New cases
                    </span>
                    <p className="basic-data-display__data-value">
                        {selectedCountryData &&
                            selectedCountryData.confirmed_daily.toLocaleString()}
                        {!selectedCountryData &&
                            globalData &&
                            globalData.confirmed_daily.toLocaleString()}
                        {/* <span className="basic-data-display__data-new-value plus">
                            +2412
                        </span> */}
                    </p>
                </div>
                <div className="basic-data-display__data-icon-box">
                    <i className="basic-data-display__data-icon fas fa-virus"></i>
                </div>
            </div>
            <div
                className={`basic-data-display__data ${
                    isLoading ? 'isLoading' : ''
                }`}
            >
                <div className="basic-data-display__data-left">
                    <span className="basic-data-display__data-name">
                        New Deaths
                    </span>
                    <p className="basic-data-display__data-value">
                        {selectedCountryData &&
                            selectedCountryData.deaths_daily.toLocaleString()}
                        {!selectedCountryData &&
                            globalData &&
                            globalData.deaths_daily.toLocaleString()}
                        {/* <span className="basic-data-display__data-new-value minus">
                            -10
                        </span> */}
                    </p>
                </div>
                <div className="basic-data-display__data-icon-box">
                    <i className="basic-data-display__data-icon fas fa-cross"></i>
                </div>
            </div>
        </div>
    );
};

export default BasicDataDisplay;
