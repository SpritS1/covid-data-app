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
    isLoading,
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
                onMouseEnter={() => isLoading || setIsMainTooltipVisible(true)}
                onMouseLeave={() => isLoading || setIsMainTooltipVisible(false)}
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
                onMouseEnter={() =>
                    isLoading || setIsSecondaryTooltipVisible(true)
                }
                onMouseLeave={() =>
                    isLoading || setIsSecondaryTooltipVisible(false)
                }
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
