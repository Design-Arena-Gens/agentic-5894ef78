import Link from 'next/link'
import styles from './success.module.css'

export default function OrderSuccessPage() {
  return (
    <div className={styles.successPage}>
      <div className="container">
        <div className={styles.successContent}>
          <div className={styles.successIcon}>✓</div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for your purchase. Your storybooks are on their way!</p>
          <p className={styles.subtext}>
            You will receive a confirmation email with your order details and tracking information.
          </p>
          <div className={styles.actions}>
            <Link href="/shop" className="btn btn-primary">
              Continue Shopping
            </Link>
            <Link href="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
