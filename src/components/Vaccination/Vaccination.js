import './Vaccination.scss';
import Progress from './Progress';
import useFetch from '../../hooks/useFetch';
import getDate from '../../scripts/getDate';

const Vaccination = ({ selectedCountry }) => {
    const { response: vaccinationGlobalData, errorGlobal } = useFetch(
        'https://covid-api.mmediagroup.fr/v1/vaccines?country=Global',
        {
            headers: { 'Content-Type': 'application/json' },
        },
    );

    const {
        response: vaccinationCountryData,
        isLoading,
        errorCountry,
    } = useFetch(
        `https://covid-api.mmediagroup.fr/v1/vaccines?country=${selectedCountry.countryName}`,
        {
            headers: { 'Content-Type': 'application/json' },
        },
    );

    return (
        <div className="vaccination">
            <h2 className="vaccination__title">COVID-19 Vaccines</h2>
            <div className="vaccination__date">Last updated: {getDate()}</div>
            {vaccinationCountryData &&
                selectedCountry.countryName !== 'Global' && (
                    <Progress
                        title={`${selectedCountry.countryName} progress`}
                        fullyVac={vaccinationCountryData.All.people_vaccinated}
                        partiallyVac={
                            vaccinationCountryData.All
                                .people_partially_vaccinated
                        }
                        population={vaccinationCountryData.All.population}
                        isActive={true}
                        isLoading={isLoading}
                    />
                )}

            {vaccinationCountryData &&
                selectedCountry.countryName === 'Global' && (
                    <Progress
                        title={'No country selected'}
                        fullyVac="-"
                        partiallyVac="-"
                        population="-"
                    />
                )}

            {vaccinationGlobalData && (
                <Progress
                    title="Global progress"
                    fullyVac={vaccinationGlobalData.All.people_vaccinated}
                    partiallyVac={
                        vaccinationGlobalData.All.people_partially_vaccinated
                    }
                    population={vaccinationGlobalData.All.population}
                    isActive={true}
                />
            )}
        </div>
    );
};

export default Vaccination;
