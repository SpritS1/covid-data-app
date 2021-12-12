import './ProgressInfoItem.scss';

const ProgressInfoItem = ({ value, valueName, color }) => {
    return (
        <li className="progress-info-item">
            <div className="progress-info-item__left">
                <i
                    className="progress-info-color fas fa-circle"
                    style={{ color: color }}
                ></i>
            </div>
            <div className="progress-info-item__right">
                <span className="progress-info-item__text">{valueName}</span>
                <span className="progress-info-item__value">
                    {value && value.toLocaleString()}
                    {!value && 'Not available'}
                </span>
            </div>
        </li>
    );
};

export default ProgressInfoItem;
