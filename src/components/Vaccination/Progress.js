import './Progress.scss';
import ProgressBar from './ProgressBar';

const Progress = ({ title, fullyVac = 100, partiallyVac = 500, population = 1000}) => {
    const dosesPer100 = (fullyVac / population) * 1000;

    return ( 
        <div className="progress">
            <div className="progress__header">
                <h3 className="progress__text">{title} progress</h3>
            </div>

            <ProgressBar valueMain={fullyVac} maxValueMain={population} valueSecondary={partiallyVac} maxValueSecondary={population} mainColor='#1ebfe3' secondaryColor='#A5D7E2'/>
            <ul className="progress__info-list">
                <li className="progress__info-item">
                    <span className="progress__info-text">Fully vaccinated</span>
                    <span className="progress__info-value">{fullyVac.toLocaleString()}</span>
                </li>
                <li className="progress__info-item">
                    <span className="progress__info-text">Partially vaccinated</span>
                    <span className="progress__info-value">{partiallyVac.toLocaleString()}</span>
                </li>
                <li className="progress__info-item">
                    <span className="progress__info-text">Population</span>
                    <span className="progress__info-value">{population.toLocaleString()}</span>
                </li>
                <li className="progress__info-item">
                    <span className="progress__info-text">Vaccinations per 1000 people</span>
                    <span className="progress__info-value">{dosesPer100.toLocaleString()}</span>
                </li>
            </ul>
        </div>
     );
}
 
export default Progress;