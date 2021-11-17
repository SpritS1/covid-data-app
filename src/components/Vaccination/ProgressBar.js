import './ProgressBar.scss';

const ProgressBar = ({valueMain, maxValueMain, valueSecondary, maxValueSecondary, mainColor, secondaryColor}) => {
    
    const mainStyle = {
        width: `${(valueMain / maxValueMain) * 100}%`,
        backgroundColor: mainColor
    }

    const secondaryStyle = {
        width: `${(valueSecondary / maxValueSecondary) * 100}%`,
        backgroundColor: secondaryColor
    }

    return ( 
        <div className="progress-bar">
            <div className="progress-bar__main" style={mainStyle}></div>
            <div className="progress-bar__secondary" style={secondaryStyle}></div>
        </div> 
    );
}
 
export default ProgressBar;