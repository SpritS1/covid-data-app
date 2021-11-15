import './Vaccination.scss';
import Progress from './Progress';

const Vaccination = () => {
    return ( 
        <div className="vaccination">
            <h2 className="vaccination__title">COVID-19 Vaccines</h2>
            <Progress title={'Country'} />
            <Progress title={'Global'}/>
            {/* <div className="vaccination__progress">
                <h3 className="vaccination__text">Global progress</h3>
                <span className="vaccination__date">2137</span>
                <ProgressBar valueMain={44} maxValueMain={100} valueSecondary={50} maxValueSecondary={100} mainColor='#1ebfe3' secondaryColor='#A5D7E2'/>
                <ul className="vaccination__info-list">
                    <li className="vaccination__info-item">
                        <span className="vaccination__info-text">Fully vaccinated</span>
                        <span className="vaccination__info-value">20 12312312</span>
                    </li>
                    <li className="vaccination__info-item">
                        <span className="vaccination__info-text">Partially vaccinated</span>
                        <span className="vaccination__info-value">20 12312312</span>
                    </li>
                    <li className="vaccination__info-item">
                        <span className="vaccination__info-text">Population</span>
                        <span className="vaccination__info-value">20 12312312</span>
                    </li>
                    <li className="vaccination__info-item">
                        <span className="vaccination__info-text">Doses per 100 people</span>
                        <span className="vaccination__info-value">20 12312312</span>
                    </li>
                </ul>
            </div>
            <div className="vaccination__progress">
                <h3 className="vaccination__text">Global progress</h3>
                <span className="vaccination__date">2137</span>
                <ProgressBar valueMain={30} maxValueMain={100} valueSecondary={45} maxValueSecondary={100} mainColor='#1ebfe3' secondaryColor='#A5D7E2'/>
                <ul className="vaccination__info-list">
                    <li className="vaccination__info-item">2. dose administred</li>
                    <li className="vaccination__info-item"></li>
                    <li className="vaccination__info-item"></li>
                    <li className="vaccination__info-item"></li>
                </ul>
            </div> */}
        </div>
     );
}
 
export default Vaccination;