import Link from 'next/link'
import { books } from '@/lib/books'
import BookCard from '@/components/BookCard'
import styles from './page.module.css'

export default function Home() {
  const featuredBooks = books.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Magical Stories for Young Minds
            </h1>
            <p className={styles.heroSubtitle}>
              Discover enchanting storybooks that spark imagination, inspire wonder, and create lifelong readers
            </p>
            <div className={styles.heroCta}>
              <Link href="/shop" className="btn btn-primary">
                Browse All Books
              </Link>
              <Link href="/shop?category=Bedtime" className="btn btn-outline">
                Bedtime Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className={styles.featured}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Storybooks</h2>
          <div className="grid grid-3">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/shop" className="btn btn-secondary">
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <div className={styles.categoryGrid}>
            {['Fantasy', 'Adventure', 'Bedtime', 'Educational', 'Friendship'].map(category => (
              <Link
                key={category}
                href={`/shop?category=${category}`}
                className={styles.categoryCard}
              >
                <h3>{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Parents Love Us</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Carefully Curated</h3>
              <p>Every book is hand-selected by educators and parents to ensure quality content</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3>Beautiful Illustrations</h3>
              <p>Stunning artwork that brings stories to life and captivates young imaginations</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⭐</div>
              <h3>Age-Appropriate</h3>
              <p>Books organized by age range to match your child's reading level and interests</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚚</div>
              <h3>Fast Shipping</h3>
              <p>Quick delivery so your little ones can start their reading adventure sooner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
