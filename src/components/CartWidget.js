import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

function CartWidget() {
    return (
        <FontAwesomeIcon icon={faCartShopping} />
    )
}

export default CartWidget;