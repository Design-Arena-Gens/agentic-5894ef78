'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { Book } from '@/lib/books'
import styles from './AddToCartButton.module.css'

interface AddToCartButtonProps {
  book: Book
}

export default function AddToCartButton({ book }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(book)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`btn btn-primary ${styles.addToCartBtn} ${added ? styles.added : ''}`}
    >
      {added ? '✓ Added to Cart!' : 'Add to Cart'}
    </button>
  )
}
