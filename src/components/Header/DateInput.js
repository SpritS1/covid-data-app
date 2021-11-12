import moment from 'moment';
import { useState, useRef, useEffect } from 'react';
import './DateInput.scss';

const DateInput = ({ date, setDate }) => {
    const [isInputActive, setIsInputActive] = useState(false);
    const [year, setYear] = useState(moment(date).format('YYYY'));
    const [month, setMonth] = useState(moment(date).format('MM'));
    const [day, setDay] = useState(moment(date).format('DD'));

    const yearRef = useRef();

    useEffect(() => {
        setYear(moment(date).format('YYYY'));
        setMonth(moment(date).format('MM'));
        setDay(moment(date).format('DD'));
    }, [date])

    const handleOnMouseLeave = () => {
        if (year === "") {
            setYear(moment(date).format('YYYY'));
        }
        if (month === "") {
            setMonth(moment(date).format('MM'));
        }
        if (day === "") {
            setDay(moment(date).format('DD'));
        }

        setIsInputActive(false)

        const newDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');

        setDate(newDate.format('YYYY-MM-DD'));
    }

    const handleInputClick = () => {
        setIsInputActive(true);
        yearRef.current.focus();
    }

    const handleYearInput = (year) => {
        if (year <= moment().format('YYYY') || year === "") {
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

    return ( 
        <div className={`date-input ${isInputActive ? 'active' : ''}`} onClick={() => handleInputClick()} onMouseLeave={() => isInputActive && handleOnMouseLeave(year, month, day)}>
            <input 
                type="number"  
                ref={yearRef} 
                onChange={(e) => handleYearInput(e.target.value)}
                value={year} 
                readOnly={!isInputActive} 
                className={`date-input__year ${isInputActive ? 'active' : ''}`} 
            />
            -
            <input                
                type="number"  
                onChange={(e) => handleMonthInput(e.target.value)}
                onClick={(e) => isInputActive && e.stopPropagation()}
                value={month} 
                readOnly={!isInputActive}
                className={`date-input__month ${isInputActive ? 'active' : ''}`} 
            />
            -
            <input 
                type="number"  
                onChange={(e) => handleDayInput(e.target.value)}
                onClick={(e) => isInputActive && e.stopPropagation()}
                value={day} 
                readOnly={!isInputActive} 
                className={`date-input__days ${isInputActive ? 'active' : ''}`} 
            />
        </div>
     );
}
 
export default DateInput;