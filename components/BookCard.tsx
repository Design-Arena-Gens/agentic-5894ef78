import Link from 'next/link'
import { Book } from '@/lib/books'
import styles from './BookCard.module.css'

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/book/${book.id}`} className={styles.bookCard}>
      <div className={styles.imageWrapper}>
        <img src={book.coverImage} alt={book.title} />
        <div className={styles.overlay}>
          <span className={styles.viewDetails}>View Details</span>
        </div>
      </div>
      <div className={styles.bookInfo}>
        <div className={styles.category}>{book.category}</div>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>{book.author}</p>
        <div className={styles.footer}>
          <div className={styles.rating}>
            <span>⭐</span>
            <span>{book.rating}</span>
          </div>
          <div className={styles.price}>${book.price.toFixed(2)}</div>
        </div>
      </div>
    </Link>
  )
}
