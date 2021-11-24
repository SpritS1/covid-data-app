import './DateChange.scss';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import getDate from '../../scripts/getDate';

const DateChange = ({ date, setDate, setIsActive }) => {
    const [year, setYear] = useState(moment(date).format('YYYY'));
    const [month, setMonth] = useState(moment(date).format('MM'));
    const [day, setDay] = useState(moment(date).format('DD'));

    const yearRef = useRef();

    useEffect(() => {
        yearRef.current.focus();
    }, [])

    const handleYearInput = (year) => {
        if (Number(year) <= Number(moment().format('YYYY')) || year === "") {
            setYear(year);
        }
    }

    const handleMonthInput = (month) => {
        if ((month >= 1 && month <= 12) || month === "") {
            setMonth(month);
        }
    }

    const handleDayInput = (day) => {
        if ((day >= 1 && day <= 31) || day === "") {
            setDay(day);
        }
    }

    const handleDateSave = () => {
        if (year && month && day) {
            const newDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');

            setDate(newDate.format('YYYY-MM-DD'));
            setIsActive(false);            
        }
    }

    const handleLatestDate = () => {
        const latestDate = getDate(-1);

        setYear(moment(latestDate).format('YYYY'));
        setMonth(moment(latestDate).format('MM'));
        setDay(moment(latestDate).format('DD'));
    }

    return ( 
        <div className="date-change">
            <div className="date-change__header">
                <h3 className="date-change__title">Insert date</h3>
                <i className="fas fa-times date-change__close" onClick={() => setIsActive(false)}/>
            </div>
            <div className="date-change__inputs-group">
                <input 
                    ref={yearRef}
                    type="number" 
                    placeholder='YYYY' 
                    className="date-change__input"
                    value={year}
                    onChange={(e) => handleYearInput(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder='MM' 
                    className="date-change__input"
                    value={month}
                    onChange={(e) => handleMonthInput(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder='DD'
                    className="date-change__input"
                    value={day}
                    onChange={(e) => handleDayInput(e.target.value)}
                />                
            </div>

            <div className="date-change__buttons-group">
                <button className="date-change__button" onClick={() => handleDateSave()}>Save</button>
                <button className="date-change__button" onClick={() => handleLatestDate()}>Latest date</button>
            </div>
        </div>
     );
}
 
export default DateChange;