import './Progress.scss';
import ProgressBar from './ProgressBar';

const Progress = ({ title, fullyVac = 100, partiallyVac = 500, population = 1000}) => {

    return ( 
        <div className="progress">
            <div className="progress__header">
                <h3 className="progress__text">{title} progress</h3>
            </div>

            <ProgressBar
                valueMain={fullyVac}
                maxValueMain={population}
                valueSecondary={partiallyVac}
                maxValueSecondary={population}
                mainColor="#1ebfe3"
                secondaryColor="#A5D7E2"
            />
            
            <ul className="progress__info-list">
                <li className="progress__info-item">
                    <div className="progress__info-item-left">
                        <i className="progress__info-color fas fa-circle" style={{ color: '#1ebfe3'}}></i>
                    </div>
                    <div className="progress__info-item-right">
                        <span className="progress__info-text">Fully vaccinated</span>
                        <span className="progress__info-value">{fullyVac.toLocaleString()}</span>
                    </div>
                </li>
                <li className="progress__info-item">
                    <div className="progress__info-item-left">
                        <i className="progress__info-color fas fa-circle" style={{ color: '#A5D7E2'}}></i>
                    </div>
                    <div className="progress__info-item-right">
                        <span className="progress__info-text">Partially vaccinated</span>
                        <span className="progress__info-value">{partiallyVac.toLocaleString()}</span>
                    </div>
                </li>
                <li className="progress__info-item">
                    <div className="progress__info-item-left">
                        <i className="progress__info-color fas fa-circle" style={{ color: '#ededed'}}></i>
                    </div>
                    <div className="progress__info-item-right">
                        <span className="progress__info-text">Population</span>
                        <span className="progress__info-value">{population.toLocaleString()}</span>                       
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default Progress;