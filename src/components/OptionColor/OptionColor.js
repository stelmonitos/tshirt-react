import clsx from "clsx";
import styles from "./OptionColor.module.scss"
import PropTypes from 'prop-types';

const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
};

const OptionColor = ({ currentColor, setCurrentColor, colors }) => {
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {colors.map(color => (
                    <li>
                        <button
                            type='button'
                            className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
                            onClick={() => setCurrentColor(color)}
                        >
                        </button>
                    </li>))}
            </ul>
        </div>
    );
}

OptionColor.propTypes = {
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired
};

export default OptionColor;