import { notFound } from 'next/navigation'
import { getBookById } from '@/lib/books'
import AddToCartButton from '@/components/AddToCartButton'
import styles from './book.module.css'

export default function BookPage({ params }: { params: { id: string } }) {
  const book = getBookById(params.id)

  if (!book) {
    notFound()
  }

  return (
    <div className={styles.bookPage}>
      <div className="container">
        <div className={styles.bookDetail}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img src={book.coverImage} alt={book.title} />
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.category}>{book.category}</div>
            <h1 className={styles.title}>{book.title}</h1>
            <p className={styles.author}>by {book.author}</p>

            <div className={styles.meta}>
              <div className={styles.rating}>
                <span className={styles.stars}>⭐</span>
                <span>{book.rating}</span>
              </div>
              <div className={styles.ageRange}>
                Ages: {book.ageRange}
              </div>
              <div className={styles.pages}>
                {book.pages} pages
              </div>
            </div>

            <div className={styles.price}>
              ${book.price.toFixed(2)}
            </div>

            <div className={styles.description}>
              <h2>About This Book</h2>
              <p>{book.description}</p>
            </div>

            <AddToCartButton book={book} />

            <div className={styles.features}>
              <h3>Why You'll Love This Book</h3>
              <ul>
                <li>✓ High-quality hardcover edition</li>
                <li>✓ Beautiful full-color illustrations</li>
                <li>✓ Perfect for bedtime reading</li>
                <li>✓ Educational and entertaining</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
