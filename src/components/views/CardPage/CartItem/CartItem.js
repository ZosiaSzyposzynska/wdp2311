import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../../../redux/cartRedux';

const CartItem = ({ id, name, price, img }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <div className={styles.item}>
      <div className={styles.buttons} onClick={removeFromCart}>
        <FontAwesomeIcon className={styles.deleteBtn} icon={faTimesCircle} />
      </div>
      <div className={styles.image}>
        <img src={img} alt='' />
      </div>
      <div className={styles.description}>
        <span>{name}</span>
      </div>
      <div className={styles.price}>${price}</div>
      <div className={styles.quantity}>
        <button className={styles.plusBtn} type='button' name='button'>
          <FontAwesomeIcon className={styles.icon} icon={faMinus} />
        </button>
        <input type='text' name='name' value='1' />
        <button className={styles.faMinus} type='button' name='button'>
          <FontAwesomeIcon className={styles.icon} icon={faPlus} />
        </button>
      </div>
      <div className={styles.totalPrice}>$549</div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
};
export default CartItem;