import './ProgressBar.scss';
import Tooltip from 'components/Other/Tooltip';
import { useState, useEffect } from 'react';

const ProgressBar = ({
    valueMain,
    maxValueMain,
    valueSecondary,
    maxValueSecondary,
    mainColor,
    secondaryColor,
}) => {
    const mainStyle = {
        width: `${(valueMain / maxValueMain) * 100}%`,
        background: mainColor,
    };

    const secondaryStyle = {
        width: `${(valueSecondary / maxValueSecondary) * 100}%`,
        background: secondaryColor,
    };

    const [isMainTooltipVisible, setIsMainTooltipVisible] = useState(false);
    const [isSecondaryTooltipVisible, setIsSecondaryTooltipVisible] =
        useState(false);

    return (
        <div className="progress-bar">
            <div
                className="progress-bar__main"
                style={mainStyle}
                onMouseEnter={() => setIsMainTooltipVisible(true)}
                onMouseLeave={() => setIsMainTooltipVisible(false)}
            ></div>
            {isMainTooltipVisible && (
                <Tooltip
                    content={`${((valueMain / maxValueMain) * 100).toFixed(
                        2,
                    )} %`}
                />
            )}
            <div
                className="progress-bar__secondary"
                style={secondaryStyle}
                onMouseEnter={() => setIsSecondaryTooltipVisible(true)}
                onMouseLeave={() => setIsSecondaryTooltipVisible(false)}
            ></div>
            {isSecondaryTooltipVisible && (
                <Tooltip
                    content={`${(
                        (valueSecondary / maxValueSecondary) *
                        100
                    ).toFixed(2)} %`}
                />
            )}
        </div>
    );
};

export default ProgressBar;
