import './Progress.scss';
import ProgressBar from './ProgressBar';
import ProgressInfoItem from './ProgressInfoItem';

const Progress = ({
    title,
    fullyVac,
    partiallyVac,
    population,
    isActive = false,
    isLoading,
}) => {
    return (
        <div className={`progress ${isLoading ? 'isLoading' : ''}`}>
            <div className="progress__header">
                <h3 className="progress__text">{title}</h3>
            </div>

            {isActive && (
                <ProgressBar
                    valueMain={fullyVac}
                    maxValueMain={population}
                    valueSecondary={partiallyVac}
                    maxValueSecondary={population}
                    mainColor="#1ebfe3"
                    secondaryColor="#A5D7E2"
                    isLoading={isLoading}
                />
            )}

            {!isActive && <ProgressBar />}

            <ul className="progress__info-list">
                <ProgressInfoItem
                    value={fullyVac}
                    valueName={'Fully vaccinated'}
                    color={'#1ebfe3'}
                />
                <ProgressInfoItem
                    value={partiallyVac}
                    valueName={'Partially vaccinated'}
                    color={'#A5D7E2'}
                />
                <ProgressInfoItem
                    value={population}
                    valueName={'Population'}
                    color={'#ededed'}
                />
            </ul>
        </div>
    );
};

export default Progress;
