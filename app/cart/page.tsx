'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import styles from './cart.module.css'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className="container">
          <h1>Your Cart is Empty</h1>
          <p>Start adding some wonderful storybooks to your collection!</p>
          <Link href="/shop" className="btn btn-primary">
            Browse Books
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className={styles.cartLayout}>
          <div className={styles.cartItems}>
            {items.map(item => (
              <div key={item.book.id} className={styles.cartItem}>
                <img src={item.book.coverImage} alt={item.book.title} />
                <div className={styles.itemDetails}>
                  <h3>{item.book.title}</h3>
                  <p className={styles.author}>{item.book.author}</p>
                  <p className={styles.price}>${item.book.price.toFixed(2)}</p>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                      className={styles.quantityBtn}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                      className={styles.quantityBtn}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.book.id)}
                    className={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
                <div className={styles.itemTotal}>
                  ${(item.book.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link href="/checkout" className="btn btn-primary" style={{ width: '100%' }}>
              Proceed to Checkout
            </Link>
            <Link href="/shop" className={styles.continueShopping}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
