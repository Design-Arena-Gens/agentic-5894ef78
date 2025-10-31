'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import styles from './Header.module.css'

export default function Header() {
  const { totalItems } = useCart()

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            📚 StoryBooks
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/cart" className={styles.cartLink}>
              Cart
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
