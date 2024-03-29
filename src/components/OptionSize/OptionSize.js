import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, currentSize, setCurrentSize}) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
            {sizes.map(size => (
              <li>
                <button
                  type='button'
                  className={size.name === currentSize ? styles.active : ''}
                  onClick={() => setCurrentSize(size.name)}
                >
                  {size.name}
                </button>
              </li>
            ))}
        </ul>
    </div>
  );
}

OptionSize.prototypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize;