import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


const ProductForm = ({colors, sizes, currentColor, currentSize, setCurrentColor, setCurrentSize, title, getPrice }) => {
    const addToCard = e => {
        e.preventDefault();
        console.log('Summary');
        console.log('=======================');
        console.log('Name:', title);
        console.log('Price:', getPrice());
        console.log('Size:', currentSize);
        console.log('Colours:', currentColor);
    }

    return (
    <form>
        <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
        <OptionColor color={colors} colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
        <form onClick={addToCard}>
            <Button className={styles.button}>
                <span  className="fa fa-shopping-cart" />
            </Button>
        </form>
    </form>
    )
}

ProductForm.proptypes = {
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    getPrice: PropTypes.func.isRequired,
}

export default ProductForm;