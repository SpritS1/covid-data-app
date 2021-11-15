import './Progress.scss';
import ProgressBar from './ProgressBar';

const Progress = ({ title, fullyVac, partiallyVac, population }) => {
    return ( 
        <div className="progress">
            <div className="progress__header">
                <h3 className="progress__text">{title} progress</h3>
                {/* <span className="progress__date">Data for: 2021-11-15</span>                 */}
            </div>

            <ProgressBar valueMain={44} maxValueMain={100} valueSecondary={50} maxValueSecondary={100} mainColor='#1ebfe3' secondaryColor='#A5D7E2'/>
            <ul className="progress__info-list">
                <li className="progress__info-item">
                    <span className="progress__info-text">Fully vaccinated</span>
                    <span className="progress__info-value">20 12312312</span>
                </li>
                <li className="progress__info-item">
                    <span className="progress__info-text">Partially vaccinated</span>
                    <span className="progress__info-value">20 12312312</span>
                </li>
                <li className="progress__info-item">
                    <span className="progress__info-text">Population</span>
                    <span className="progress__info-value">20 12312312</span>
                </li>
                <li className="progress__info-item">
                    <span className="progress__info-text">Doses per 100 people</span>
                    <span className="progress__info-value">20 12312312</span>
                </li>
            </ul>
        </div>
     );
}
 
export default Progress;