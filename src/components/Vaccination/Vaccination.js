import './Vaccination.scss';
import Progress from './Progress';
import useFetch from '../../hooks/useFetch';

const Vaccination = () => {
    const {response: vaccinationData, error} = useFetch(
        'https://covid-api.mmediagroup.fr/v1/vaccines?country=Global', 
        {
        headers: { 'Content-Type': 'application/json' }
        }
    );

    return ( 
        <div className="vaccination">
            <h2 className="vaccination__title">COVID-19 Vaccines</h2>
            <Progress 
                title={'Country'} 
            />
            {vaccinationData && (
                <Progress 
                    title={'Global'} 
                    fullyVac={vaccinationData.All.people_vaccinated} 
                    partiallyVac={vaccinationData.All.people_partially_vaccinated} 
                    population={vaccinationData.All.population}
                />
            )}
        </div>
     );
}
 
export default Vaccination;